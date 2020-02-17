import { QueryRaws } from '../QueryRaws';
import sinon, { SinonStub } from 'sinon';
import axios from 'axios';

describe('正常系テスト', () => {
  it('singleton test', () => {
    const gist: QueryRaws = QueryRaws.instance;
    expect(gist).toEqual(QueryRaws.instance);
  });
  it('select raw data', async () => {
    const stub: SinonStub = sinon.stub();
    const gist: QueryRaws = QueryRaws.instance;
    axios.get = stub;
    stub.resolves({data: 'sample'});
    await gist.select('http://testuri');
    const called: boolean = stub.called;
    expect(called).toEqual(true);
  });
});

describe('異常系テスト', () => {
  it('select raw with no data', async () => {
    const stub: SinonStub = sinon.stub();
    const gist: QueryRaws = QueryRaws.instance;
    axios.get = stub;
    stub.resolves();
    const mockExit = jest.spyOn(process, 'exit').mockImplementation();
    await gist.select('http://testuri');
    //const called: boolean = stub.called;
    expect(mockExit).toHaveBeenCalledWith(1);
  });
  it('select raw with no data', async () => {
    const stub: SinonStub = sinon.stub();
    const gist: QueryRaws = QueryRaws.instance;
    axios.get = stub;
    stub.resolves(Promise.reject);
    const mockExit = jest.spyOn(process, 'exit').mockImplementation();
    await gist.select('http://testuri');
    //const called: boolean = stub.called;
    expect(mockExit).toHaveBeenCalledWith(1);
  });
});
