import React from 'react'
import PostType from 'types/post'
import DateFormater from 'components/DateFormater'
import Link from 'next/link'
import { Routes } from 'types/routes'

const PostCard: React.FC<PostType & { className: string }> = ({
  slug,
  title,
  date,
  excerpt,
  tags = [],
  className = '',
}: PostType & { className?: string }) => {
  return (
    <div className={`py-8 ${className}`}>
      <DateFormater dateString={date} className="text-sm text-gray-700" />
      <Link href={`${Routes.Blog}/[slug]`} as={`${Routes.Blog}/${slug}`}>
        <a>
          <div className="text-2xl font-bold mt-2 hover:underline">{title}</div>
        </a>
      </Link>
      <div className="mt-2">
        {tags.map((tag) => (
          <span className="text-blue-700 hover:text-blue-600  mr-4" key={tag}>
            {tag}
          </span>
        ))}
      </div>
      <div
        className="mt-3 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: excerpt }}
      />
      <Link href={`${Routes.Blog}/[slug]`} as={`${Routes.Blog}/${slug}`}>
        <a>
          <div className="mt-3 text-blue-700 hover:text-blue-600">
            Read more →
          </div>
        </a>
      </Link>
    </div>
  )
}

export default PostCard
