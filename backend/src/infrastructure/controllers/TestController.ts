import { FastifyReply, FastifyRequest} from "fastify";

class TestController {

  public async get(request: FastifyRequest, reply: FastifyReply) {
    return reply.status(200).send({ hello: "Hello World" })
  }

}

export default TestController;
