import {
  FastifyInstance
} from "fastify"
import Fastify from 'fastify'
import Config from "./config/Config"
import Router from "./infrastructure/routes/Router"



class Server {
  private app: FastifyInstance
  private port = Config.getInstance().PORT

  constructor() {
    this.app = Fastify()
    this.initRouter()
  }

  private initRouter() {
    const routerInstance = new Router(this.app)
    routerInstance.registerRoutes()
  }

  public async start(): Promise<void> {
    try {
      await this.app.listen({port: this.port,host: '0.0.0.0'})
      const address = this.app.server.address()
      console.log(`Server listening on port : ${this.port}, address: `, address)

    } catch (err) {
      this.app.log.error(err)
      process.exit(1)
    }
  }
}

export default Server
