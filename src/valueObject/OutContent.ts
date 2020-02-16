export class OutContent {
  private content: string;
  public static of(content: string): OutContent {
    return new OutContent(content);
  }
  private constructor(content: string){
    this.content = content;
  }
  public toString(): string {
    return this.content;
  }
}
