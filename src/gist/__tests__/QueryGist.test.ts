import { QueryGists } from '../QueryGist';
import sinon, { SinonStub } from 'sinon';

describe('正常系テスト', () => {
  it('singleton test', () => {
    const gist: QueryGists = QueryGists.instance;
    expect(gist).toEqual(QueryGists.instance);
  });
  it('describe all list', async () => {
    const stub: SinonStub = sinon.stub();
    const gist: QueryGists = QueryGists.instance;
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    gist.gists.list = stub;
    stub.resolves({statusCode: 200});
    await gist.lists();
    const called: boolean = stub.called;
    expect(called).toEqual(true);
  });
});

describe('異常系テスト', () => {
  it('describe all list', async () => {
    const stub: SinonStub = sinon.stub();
    const gist: QueryGists = QueryGists.instance;
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    gist.gists.list = stub;
    stub.resolves({statusCode: 400});
    await gist.lists();
    const result = await gist.lists();
    console.log(result);
    const called: boolean = stub.called;
    expect(called).toEqual(true);
  });
});
