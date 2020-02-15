export interface OPTIONS {
  name: string;
  alias: string;
  type: StringConstructor;
  defaultValue?: string;
}

class CommandOptions {
  private options: Array<OPTIONS>;
  public static ofArgs(): CommandOptions {
    const options: Array<OPTIONS> = [{
      name: 'type',
      alias: 't',
      type: String,
      defaultValue: 'plane'
    }];
    return new CommandOptions(options);
  }
  private constructor(options: Array<OPTIONS>) {
    this.options = options;
  }
  public toArray(): Array<OPTIONS> {
    return this.options;
  }
}

export default CommandOptions.ofArgs();
