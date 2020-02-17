import { Inputs } from '../Inputs';

describe('正常系テスト', () => {
  it('set language type typescript pattern1', () => {
    const type: Inputs = Inputs.of({type: 'typescript'});
    const tsList = ['.editorconfig', '.eslintrc', '.prettierrc', 'tsconfig.json'];
    const typeList = type.typeList();
    expect(typeList).toEqual(tsList);
  });
  it('set language type typescript pattern2', () => {
    const type: Inputs = Inputs.of({type: 'ts'});
    const tsList = ['.editorconfig', '.eslintrc', '.prettierrc', 'tsconfig.json'];
    const typeList = type.typeList();
    expect(typeList).toEqual(tsList);
  });
  it('set language type typescript pattern3', () => {
    const type: Inputs = Inputs.of({type: 'types'});
    const tsList = ['.editorconfig', '.eslintrc', '.prettierrc', 'tsconfig.json'];
    const typeList = type.typeList();
    expect(typeList).toEqual(tsList);
  });
  it('set language type Node.js pattern1', () => {
    const type: Inputs = Inputs.of({type: 'nodejs'});
    const tsList = ['.editorconfig', '.eslintrc', '.prettierrc'];
    const typeList = type.typeList();
    expect(typeList).toEqual(tsList);
  });
  it('set language type Node.js pattern2', () => {
    const type: Inputs = Inputs.of({type: 'Node.js'});
    const tsList = ['.editorconfig', '.eslintrc', '.prettierrc'];
    const typeList = type.typeList();
    expect(typeList).toEqual(tsList);
  });
  it('set language type Node.js pattern3', () => {
    const type: Inputs = Inputs.of({type: 'javascript'});
    const tsList = ['.editorconfig', '.eslintrc', '.prettierrc'];
    const typeList = type.typeList();
    expect(typeList).toEqual(tsList);
  });
  it('set language type Node.js pattern4', () => {
    const type: Inputs = Inputs.of({type: 'javascripts'});
    const tsList = ['.editorconfig', '.eslintrc', '.prettierrc'];
    const typeList = type.typeList();
    expect(typeList).toEqual(tsList);
  });
  it('set language type plane pattern1', () => {
    const type: Inputs = Inputs.of({type: ''});
    const tsList = ['.editorconfig'];
    const typeList = type.typeList();
    expect(typeList).toEqual(tsList);
  });
  it('set language type plane pattern2', () => {
    const type: Inputs = Inputs.of({type: 'plane'});
    const tsList = ['.editorconfig'];
    const typeList = type.typeList();
    expect(typeList).toEqual(tsList);
  });
  it('set language type plane pattern3', () => {
    // @ts-ignore
    const type: Inputs = Inputs.of();
    const tsList = ['.editorconfig'];
    const typeList = type.typeList();
    expect(typeList).toEqual(tsList);
  });
});
