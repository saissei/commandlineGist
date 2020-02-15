import { Inputs } from './Inputs';

interface DETAILS {
  filename: string;
  type: string;
  language: string;
  raw_url: string;
  size: number;
}

interface DOTFILES {
  description: string;
  files: Array<DETAILS>;
}

export class ListResult {
  private dotFiles: Array<DOTFILES>;
  public static of(resultBody: any): ListResult | undefined {
    if (resultBody === undefined || resultBody.length === 0){
      return;
    }
    const dotFiles = resultBody.map((item: any) => {
      const keys: Array<string> = Object.keys(item.files);
      const fileData = [];

      for (let i = 0; i <= keys.length-1; i++){
        const index: string = keys[i];
        fileData.push(item.files[index]);
      }
      const data = {
        description: item.description,
        id: item.id,
        files: fileData
      };
      return data;
    });
    return new ListResult(dotFiles);
  }
  private constructor(dotFiles: Array<DOTFILES>) {
    this.dotFiles = dotFiles;
  }
  public toArray(): Array<DOTFILES> {
    return this.dotFiles;
  }
  public extractFiles(inputs: Inputs): Array<DOTFILES> {
    const fileNames: Array<string> = inputs.typeList();
    const fileList: Array<DOTFILES> = [];
    for (let i = 0; i <= this.dotFiles.length-1; i++) {
      const items = this.dotFiles[i].files;

      const filtered = items.filter(item => {
        return fileNames.includes(item.filename);
      });
      if (filtered.length !== 0){
        fileList.push(this.dotFiles[i]);
      }
    }
    return fileList;
  }
}
