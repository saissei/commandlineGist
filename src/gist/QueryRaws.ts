import axios, { AxiosResponse } from 'axios';

export class QueryRaws {
  private static _instance: QueryRaws | null = null;
  public static get instance(): QueryRaws {
    if (this._instance === null ) {
      this._instance = new QueryRaws();
      return this._instance;
    }
    return this._instance;
  }
  public async select(uri: string): Promise<any> {
    try {
      const rawData: AxiosResponse = await axios.get(uri);
      return rawData.data;
    } catch (err) {
      console.error('error happened in select gist');
      console.error(err);
      return process.exit(1);
    }
  }
}
