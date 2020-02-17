import { FileName } from '../FileName';

describe('正常系テスト', () => {
  it('set string', () => {
    const filename: FileName = FileName.of('testfileName');
    expect(filename.toString()).toEqual('testfileName');
  });
});

describe('異常系テスト', () => {
  it('set number', () => {
    // @ts-ignore
    const filename: FileName = FileName.of(1);
    expect(filename).toBeUndefined();
  });
});
