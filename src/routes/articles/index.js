import {
  delArticle,
  getArticles,
  id,
  postArticle,
  articleSchema,
  schemaPost,
} from './articles.js'

export async function articlesroutes(app) {
  app.get('/articles', getArticles)
  app.get('/articles/:id', { schema: articleSchema }, id)
  app.post('/articles', { schema: schemaPost }, postArticle)
  app.delete('/articles/:id', { schema: articleSchema }, delArticle)
}
