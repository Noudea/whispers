import {FastifyInstance, FastifyReply, FastifyRequest, HTTPMethods} from "fastify"
import Config from "../../config/Config"
import routes from './routes'

class Router {
  private fastify: FastifyInstance
  private routes: any[]

  constructor(fastify: FastifyInstance) {
    this.fastify = fastify
    this.routes = routes
  }

  public registerRoutes(): void {
    this.routes.forEach((route) => {
      this.fastify.register((app, _, done) => {
        app.route(route)
        done()
      }, { prefix: Config.getInstance().API_VERSION }) // global route prefix
    })
  }

}

export default Router
