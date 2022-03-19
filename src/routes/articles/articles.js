/**
 * @type {import("fastify").RouteHandlerMethod}
 */

import { articleslist } from './articleslist.js'

export async function getArticles(req, reply) {
  reply.send(articleslist)
}

export const articleSchema = {
  params: {
    type: 'object',
    properties: {
      id: { type: 'number' },
      title: { type: 'string' },
    },
    required: ['id'],
    additionalProperties: false,
  },
}

export async function id(req, reply) {
  const id = req.params.id
  const article = articleslist.find((x) => x.id === id)
  if (!article) {
    return reply.code(404).send({ error: `Article ${req.params.id} not found` })
  }
  reply.send(article)
}

export const schemaPost = {
  body: {
    type: 'object',
    properties: {
      title: { type: 'string' },
    },
    required: ['title'],
    additionalProperties: false,
  },
}

export async function postArticle(req, reply) {
  reply.code(201).send({ message: 'Article created' })
}

export async function delArticle(req, reply) {
  const id = req.params.id
  const article = articleslist.find((x) => x.id === id)
  if (!article) {
    return reply.code(404).send({ error: `Article ${req.params.id} not found` })
  }
  reply.code(200).send({ message: 'Article deleted' })
}
