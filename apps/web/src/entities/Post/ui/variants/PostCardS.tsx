'use client'

import type { FC } from 'react'
import { MessageCircleMore } from 'lucide-react'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Link
} from '@nextui-org/react'
import {TagsList} from '@entities/Tag'
import type { TPostCardProps } from '@entities/Post'
import { dateConverter } from '@/shared/utils'

const PostCardS: FC<Omit<TPostCardProps, 'size'>> = ({
  post: {
    _count: { comments },
    title,
    tags,
    preview,
    createdAt,
    id,
    slug
  }
}) => {
  return (
    <Card
      className={
        'grid grid-cols-[clamp(110px,_30%,_196px)_1fr] grid-rows-[min-content_1fr_min-content] gap-x-4 gap-y-[4px] shadow-none'
      }
    >
      <Link
        href={`post/${id}/${slug}`}
        className='col-span-1 row-span-full'
      >
        <Image
          src={preview}
          isZoomed
          classNames={{
            wrapper: '',
            img: 'object-cover block h-full'
          }}
        />
      </Link>
      <CardHeader className='p-0 pt-1'>
        <Link href={`post/${id}/${slug}`} className='text-foreground'>{title}</Link>
      </CardHeader>
      <TagsList
				tags={tags}
				className='self-end'
			/>
      <div className='flex flex-row justify-between pb-1 pr-1 items-center'>
        <p className='text-[17px] text-gray-500'>{dateConverter(createdAt)}</p>

        <p className='flex flex-row items-center'>
          <MessageCircleMore />
          <span className='pl-1'>{comments}</span>
        </p>
      </div>
    </Card>
  )
}

export default PostCardS
