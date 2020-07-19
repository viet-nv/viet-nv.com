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
      </Head>
      <Container>
        <Intro />
        <div className="mb-6">
          <SectionTitle title="Thư giãn cùng Soleil" />
          <div className="p-8 text-center">{'Comming Soon...'}</div>
        </div>
        <SectionTitle title="Chém gió cùng Soleil" />
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
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
