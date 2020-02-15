import { QueryGists } from '../QueryGist';
import sinon, { SinonStub } from 'sinon';
// eslint-disable-next-line @typescript-eslint/no-var-requires
// const Gists = require('gist');

describe('正常系テスト', () => {
  it('singleton test', () => {
    const gist: QueryGists = QueryGists.instance;
    expect(gist).toEqual(QueryGists.instance);
  });
  it('describe all list', async () => {
    const stub: SinonStub = sinon.stub();
    const gist: QueryGists = QueryGists.instance;
    gist.lists = stub;
    stub.resolves();
    await gist.lists();
    const called: boolean = stub.called;
    expect(called).toEqual(true);
  });
});
