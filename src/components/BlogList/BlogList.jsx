import React from 'react'
import BlogItem from './BlogItem'


function BlogList({blogData}) {
  return (
    <>
        {blogData.map(blog => (
            <BlogItem key={blog.id} title={blog.title} author={blog.author} content={blog.content} date={blog.date} image={blog.image} />
        ))}
    </>
  )
}

export default BlogList