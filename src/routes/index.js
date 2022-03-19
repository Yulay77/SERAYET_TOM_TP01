import { home } from './home.js'
import { hello } from './hello.js'

export async function routes(app) {
  app.get('/', home)
  app.get('/hello', hello)

  const messageSchema = {
    body: {
      type: 'object',
      properties: {
        random: { type: 'string' },
        message: { type: 'string' },
      },
      required: ['message'],
      additionalProperties: false,
    },
  }

  app.post('/message', { schema: messageSchema }, (request, reply) => {
    reply.send({
      data: request.body,
      message: 'Message received',
    })
  })
}
