import matter from 'gray-matter';

export default (code: string) => {
  const { content, data } = matter(code)


  console.log(content, data)
}