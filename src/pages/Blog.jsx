import React from 'react'

import BlogHero from '../components/BlogHero'
import BlogCard from '../components/BlogCard'
import { Blogs } from '../data/Content'

const Blog = () => {
  return (
    <div>
      <BlogHero />
      <section className="m-auto p-20 flex flex-wrap">
      {Blogs.map((blog) => (
        <BlogCard key={blog.id} data={blog} />
      ))}
    </section>
    </div>
  )
}

export default Blog
