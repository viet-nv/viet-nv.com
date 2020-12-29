import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from 'components/Container'
import { getPostBySlug, getAllPosts } from 'lib/api'
import Head from 'next/head'
import markdownToHtml from 'lib/markdownToHtml'
import PostType from 'types/post'
import { GetStaticProps, InferGetStaticPropsType, GetStaticPaths } from 'next'
import markdownStyles from 'components/markdown-styles.module.css'
import DateFormater from 'components/DateFormater'

const Post = ({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  const { title, ogImage, content, date, tags = [], excerpt } = post
  return (
    <Container>
      {router.isFallback ? (
        <div>Loading… </div>
      ) : (
        <>
          <article className="mb-32">
            <Head>
              <title>{title} | viet-nv</title>
              <meta property="og:title" content={`${title} | viet-nv`} />
              <meta property="og:image" content={ogImage} />
              <meta property="og:description" content={excerpt} />
            </Head>
            <h1 className="text-center text-4xl font-bold mt-4 sm:mt-6 md:mt-8 leading-tight">
              {title}
            </h1>
            <div className="text-center text-sm text-gray-700 mt-3">
              <DateFormater dateString={date} />
            </div>

            <div
              className={markdownStyles['markdown']}
              dangerouslySetInnerHTML={{ __html: content }}
            />
            <div className="flex justify-between">
              <div>
                {tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="text-blue-700 hover:text-blue-600 mr-4"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* <div>Chia sẻ:</div> */}
            </div>
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
