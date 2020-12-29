import Container from 'components/Container'
import Intro from 'components/Intro'
import { getAllPosts } from 'lib/api'
import Head from 'next/head'
import Post from 'types/post'
import { GetStaticProps } from 'next'
import SectionTitle from 'components/SectionTitle'
import PostList from 'components/PostList'

type Props = {
  allPosts: Post[]
}

const Homepage: React.FC<Props> = ({ allPosts }: Props) => {
  return (
    <>
      <Head>
        <title>viet-nv | Bug is like a wind, alway by my side.</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/comic-mono@0.0.1/index.css"
        />
      </Head>
      <Container>
        <Intro />
        <div className="mb-6">
          <SectionTitle title="Chill with Soleil" />
          <div className="p-8 text-center">{'Comming Soon...'}</div>
        </div>
        <SectionTitle title="Soleil writes down" />
        <PostList posts={allPosts} />
      </Container>
    </>
  )
}

export default Homepage

export const getStaticProps: GetStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'tags',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
