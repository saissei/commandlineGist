import { CommandLineOptions } from 'command-line-args';

/* interface INPUTOPTION {
  type: string;
} */

const planeFiles = ['.editorconfig'];
const nodejsFiles = ['.editorconfig', '.eslintrc', '.prettierrc'];
const tsFiles = ['.editorconfig', '.eslintrc', '.prettierrc', 'tsconfig.json'];

export class Inputs {
  private type: string;
  private files: Array<string>;
  public static PLANE = new Inputs('plane', planeFiles)
  public static NODEJS = new Inputs('nodejs', nodejsFiles)
  public static TYPESCRIPT = new Inputs('nodejs', tsFiles)
  public static of(input: CommandLineOptions): Inputs {
    const lowerInput: string = input.type.toLowerCase();

    const nodeWords: Array<string> = ['nodejs', 'node.js', 'javascript', 'javascripts', 'node'];
    const tsWords: Array<string> = ['typescript', 'ts', 'types'];

    if (nodeWords.includes(lowerInput)){
      return Inputs.NODEJS;
    }

      if (tsWords.includes(lowerInput)){
      return Inputs.TYPESCRIPT;
    }

    return Inputs.PLANE;
  }
  private constructor(type: string, files: Array<string>){
    this.type = type;
    this.files = files;
  }
  public typeList(): Array<string> {
    return this.files;
  }
  public extractType(): string {
    return this.type;
  }
}
