import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Image from 'next/image';

async function getAllBlogs () {
  const files = fs.readdirSync(path.join('data'));
  const blogs = files.map(filename => {
    const slug = filename.replace('.md', '');
    const fileData = fs.readFileSync (
      path.join(process.cwd(), 'data', filename),
      'utf-8'
    );
    const { data } = matter(fileData);
    return {
      frontmatter: data,
      slug: slug
    }
  })
  const sortedBlogs = blogs.sort((a,b) => {
    return b.frontmatter.id - a.frontmatter.id
  })
  return {
    blogs: sortedBlogs
  }
}

const Blog = async() => {
  const { blogs } = await getAllBlogs();
  console.log(blogs);
  return (
    <div className='wrapper'>
      <div className='container'>
      <h1>Blog</h1>

        {blogs.map((blog,index) => 
          <div key={index} className='blogCard'>
            <div className='cardContainer'>
              <h2>{blog.frontmatter.title}</h2>
              <p>{blog.frontmatter.excerpt}</p>
              <p>{blog.frontmatter.date}</p>
              <Link href={`/blog/${blog.slug}`}>Read More</Link>
            </div>
            <div className='blogImg'>
              <Image src={blog.frontmatter.image} alt="hero" height={300} width={1000} quality={90} priority={true}/>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Blog;
