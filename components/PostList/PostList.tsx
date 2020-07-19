import React from 'react'
import cx from 'classnames'
import PostCard from 'components/PostCard'
import PostType from 'types/post'

type Props = {
  posts: PostType[]
}

const PostList: React.FC<Props> = ({ posts }: Props) => {
  return (
    <>
      {posts.map((post, index) => (
        <PostCard
          key={post.slug}
          {...post}
          className={cx({ 'border-b': index !== posts.length - 1 })}
        />
      ))}
    </>
  )
}

export default PostList
