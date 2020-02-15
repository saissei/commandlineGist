export class CurrentWorkDirectory {
  private cwd: string;
  public static of(cwd: string): CurrentWorkDirectory {
    return new CurrentWorkDirectory(cwd);
  }
  private constructor(cwd: string){
    this.cwd = cwd;
  }
  public toString(): string {
    return this.cwd;
  }
}
