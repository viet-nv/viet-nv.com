type PostType = {
  slug: string
  title: string
  date: string
  excerpt: string
  ogImage: {
    url: string
  }
  content: string
  tags: string[]
}

export default PostType
