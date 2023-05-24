import controllers from "../controllers/Controllers"


const routes = [
  {
    method: 'GET',
    url: '/test',
    handler: controllers.test.get,
    // preHandler: (request: FastifyRequest, reply: FastifyReply, done: Function) => {
    //   console.log('prehandler')
    //   done()
    // }
  },

]


export default routes
