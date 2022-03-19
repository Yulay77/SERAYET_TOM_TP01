/**
 * @type { import("fastify").RouteHandlerMethod }
 */

export function hello(request, reply) {
  const message = request.query.name
    ? `Hello ${request.query.name}`
    : 'Hello world'

  reply.send({ message })
}
