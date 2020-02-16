import fs from 'fs';
import { FileName } from '#/valueObject/FileName';
import { OutContent } from '#/valueObject/OutContent';
import { CurrentWorkDirectory } from '#/valueObject/CurrentWorkDirectory';

export class WriteFile {
  public static of(cwd: CurrentWorkDirectory,filename: FileName, contents: OutContent): void {
    const name: string = filename.toString();
    const content: string = contents.toString();
    const path: string = cwd.toString();
    const filePath: string = `${path}/${name}`;
    fs.writeFile(filePath, content, (err: NodeJS.ErrnoException) => {
      if(err) console.error(err);
    })
  }
}
