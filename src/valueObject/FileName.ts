export class FileName {
  private filename: string;
  public static of(filename: string): FileName {
    if (typeof filename !== 'string'){
      return;
    }
    return new FileName(filename);
  }
  private constructor(filename: string){
    this.filename = filename;
  }
  public toString(): string {
    return this.filename;
  }
}
