import React from 'react'
import Article from './Article'



const ArticleList = ({ posts }) => {

  const articles = posts.map((post) => {
    return <Article key={post.id} {...post} />
  })
  console.log(articles);

  return (
    <main>
      {articles}
    </main>
  )
}

export default ArticleList
