import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkDown from 'react-markdown';
import Image from 'next/image';

const singleBlog = async (props) => {
    const { singleDocument } = await getSingleBlog(props)
    return (
      <>
        <div>
          <Image src={singleDocument.data.image} alt='hero' height={500} width={1000} quality={90} property={true} />
        </div>
        <div>
            <h1>Single Blog</h1>
            <h2>{singleDocument.data.title}</h2>
            <p>{singleDocument.data.date}</p>
            <ReactMarkDown>{singleDocument.content}</ReactMarkDown>
        </div>
      </>
    )
}

export default singleBlog

export async function generateStaticParams() {
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
        return {
          blogs: blogs
        }
      }
    const { blogs } = await getAllBlogs();
    const paths = blogs.map(blog => `/${blog.slug}`)
    return paths
}

export async function getSingleBlog(context) {
    const { slug } = context.params;
    const data = await import(`../../../data/${slug}.md`)
    const singleDocument = matter(data.default)

    return {
        singleDocument: singleDocument
    }
}