import path from 'path';
import config from 'config';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const Gists = require('gists');

interface CONFIG {
  username: string;
  password: string;
}

export class QueryGists {
  private gists: any;
  private conf: CONFIG;
  private static _instance: QueryGists | null = null;
  public static get instance(): QueryGists {
    if (this._instance === null) {
      this._instance = new QueryGists();
      return this._instance;
    }
    return this._instance;
  }
  private constructor(){
    process.env['NODE_CONFIG_DIR'] = path.resolve(__dirname, '../../config');
    this.conf = config.get('gists');
    this.gists = new Gists(this.conf);
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public async lists(): Promise<any> {
    console.log(this.gists.list);
    const result = await this.gists.list(this.conf.username);
    if ( result.statusCode !== 200 ) {
      return [];
    }
    return result.body;
  }
  /* public pull(documents: any): any {

  } */
}
