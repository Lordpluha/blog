'use client'

import { type FC } from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Link
} from '@nextui-org/react'
import { TPostCardProps } from '@entities/Post/models'
import { MessageCircleMore } from 'lucide-react'
import { dateConverter } from '@/shared/utils'

const PostCardM: FC<Omit<TPostCardProps, 'size'>> = ({
  post: {
    id,
    slug,
    _count: { comments },
    createdAt,
    title,
    author,
    category,
    preview
  },
	...linkProps
}) => {
  return (
    <Link href={`posts/${id}/${slug}`} {...linkProps}>
      <Card className='flex w-1/3 flex-col gap-y-4 p-4 shadow-none'>
        <div className='relative'>
          <p className='absolute'>
            {category?.icon} {category?.title}
          </p>
          <Image
            src={preview}
            isZoomed
          />
        </div>
        <p>{dateConverter(createdAt)}</p>
        <CardHeader className='grow rounded-none p-0'>{title}</CardHeader>
        <CardFooter className='flex flex-row justify-between rounded-none p-0'>
          <p>{author.name}</p>

          <p className='flex flex-row'>
            <MessageCircleMore />
            <span className='pl-1'>{comments}</span>
          </p>
        </CardFooter>
      </Card>
    </Link>
  )
}

export default PostCardM
