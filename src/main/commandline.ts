import commandLineOptions, { CommandLineOptions } from 'command-line-args';
import async from 'async';

import Options, { OPTIONS } from '../valueObject/Options';
import { CurrentWorkDirectory } from '../valueObject/CurrentWorkDirectory';
import { Inputs } from '../valueObject/Inputs';
import { QueryGists } from '../gist/QueryGist';
import { QueryRaws } from '../gist/QueryRaws';
import { ListResult } from '../valueObject/ListResult';
import { FileName } from '../valueObject/FileName';
import { OutContent } from '../valueObject/OutContent';
import { WriteFile } from '../writer/OutFile';

(async (): Promise<void> => {
  const queryGists: QueryGists = QueryGists.instance;
  const queryRaws: QueryRaws = QueryRaws.instance;

  const allFiles = await queryGists.lists();
  const files = ListResult.of(allFiles);
  if ( files === undefined) {
    console.error('gistにファイルが登録されていません。');
    process.exit(1);
  }
  const argsOption: Array<OPTIONS> = Options.toArray();
  const cwd: CurrentWorkDirectory = CurrentWorkDirectory.of(process.cwd());

  const commandLineOption: CommandLineOptions = commandLineOptions(argsOption);
  const input: Inputs = Inputs.of(commandLineOption);
  const fileList = files.extractFiles(input);
  for (let i = 0; i <= fileList.length-1; i++){
    async.each(fileList[i].files, async (detail, callback) => {
      const url = detail.raw_url;
      const rawData = await queryRaws.select(url);
      const fileName: FileName = FileName.of(detail.filename);
      const content: OutContent = OutContent.of(rawData);
      WriteFile.of(cwd, fileName, content);
      callback;
    }, (err: Error | null | undefined) => {
      if (err) throw err;
    });
  }
})();
