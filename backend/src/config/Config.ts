import * as dotenv from "dotenv";


class Config {
  private static instance: Config;
  public readonly PORT: number
  public readonly API_VERSION: string

  constructor() {
    this.load()
    this.PORT = Number(process.env.PORT)
    this.API_VERSION = process.env.API_VERSION as string
    this.checkEnv()
  }


  public load() {
    if(process.env.NODE_ENV === 'production') {
      dotenv.config({path: './src/config/local.env'})
    }

    if(process.env.NODE_ENV === 'development') {
      dotenv.config({path: './src/config/local.env'})
    }

    if (process.env.NODE_ENV === 'local') {
      dotenv.config({path: './src/config/local.env'})
    }
  }

  private checkEnv(): void {
    const propNames = Object.keys(this);
    for (const propName of propNames) {
      // Check for the presence of the corresponding environment variable
      if (!process.env[propName.toUpperCase()]) {
        throw new Error(`${propName} is required`);
      }
    }
  }


  static getInstance(): Config {
    if (!Config.instance) {
      Config.instance = new Config();
    }
    return Config.instance;
  }

}

export default Config;
