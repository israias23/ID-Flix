import { articles } from '../../articles.json'

export async function loader({ params }) {
  const articleIndex = articles.findIndex(
    ({ slugName }) => slugName === params.articleId,
  )
  const finalArticle = articles[articleIndex]
  return finalArticle
}
