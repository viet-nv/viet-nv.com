import React from 'react'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { getAllPosts } from 'lib/api'
import Container from 'components/Container'
import PostList from 'components/PostList'
import Head from 'next/head'

const BlogPage = ({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  return (
    <>
      <Head>
        <title>viet-nv | Blog</title>
      </Head>
      <Container>
        <PostList posts={posts} />
      </Container>
    </>
  )
}

export default BlogPage

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(['title', 'date', 'slug', 'author', 'excerpt'])

  return {
    props: { posts },
  }
}
