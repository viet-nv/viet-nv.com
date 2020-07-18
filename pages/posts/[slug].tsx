import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from 'components/container'
import PostBody from 'components/post-body'
import Header from 'components/header'
import PostHeader from 'components/post-header'
import { getPostBySlug, getAllPosts } from 'lib/api'
import PostTitle from 'components/post-title'
import Head from 'next/head'
import { CMS_NAME } from 'lib/constants'
import markdownToHtml from 'lib/markdownToHtml'
import PostType from 'types/post'
import { GetStaticProps, InferGetStaticPropsType, GetStaticPaths } from 'next'

const Post = ({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Container>
      <Header />
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <>
          <article className="mb-32">
            <Head>
              <title>
                {post.title} | Next.js Blog Example with {CMS_NAME}
              </title>
              <meta property="og:image" content={post.ogImage.url} />
            </Head>
            <PostHeader
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
            />
            <PostBody content={post.content} />
          </article>
        </>
      )}
    </Container>
  )
}

export default Post

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug
  const post = getPostBySlug(slug?.toString() || '', [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      } as PostType,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((posts) => {
      return {
        params: {
          slug: posts.slug,
        },
      }
    }),
    fallback: false,
  }
}
