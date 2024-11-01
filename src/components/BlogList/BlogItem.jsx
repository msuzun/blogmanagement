import React from 'react'
import './BlogItem.css'
function BlogItem({title,author,content,date,image}) {
  return (
   <>
      <div className='blog-item'>
        <h3>{title}</h3>
        {image ? <img src={image} alt={title} width={150} />:null}
        <p className='author-date'>By {author} on {date}</p>
        <p>{content}</p>
      </div>
      
   </>
  )
}

export default BlogItem