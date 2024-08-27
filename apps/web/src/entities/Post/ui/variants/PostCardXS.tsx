'use client'

import { type FC } from 'react'
import type { TPostCardProps } from '@entities/Post/models'
import { Card, CardHeader, CardFooter, Image, Link } from '@nextui-org/react'
import { MessageCircleMore } from 'lucide-react'
import { dateConverter } from '@/shared/utils'

const PostCardXS: FC<Omit<TPostCardProps, 'size'>> = ({
  post: {
    id,
    title,
    createdAt,
    slug,
    preview,
    _count: { comments }
  },
	...linkProps
}) => (
  <Link href={`/posts/${id}/${slug}`} {...linkProps}>
    <Card
      isPressable={true}
      isHoverable={true}
      className='grid grow grid-cols-[max-content_1fr] grid-rows-[min-content_1fr] gap-x-3 gap-y-2 rounded-none bg-transparent p-4 shadow-none'
    >
      <Image
        src={preview}
        isZoomed
        classNames={{
          wrapper: 'row-span-full col-span-1',
          img: 'object-cover block h-[100px] w-[126px]'
        }}
      />
      <CardFooter className='flex flex-row justify-between p-0 items-center'>
        {dateConverter(createdAt)}
        <p className='flex flex-row items-center'>
          <MessageCircleMore /> {comments}
        </p>
      </CardFooter>
      <CardHeader className='flex h-full flex-col items-start justify-end p-0'>
        {title}
      </CardHeader>
    </Card>
  </Link>
)

export default PostCardXS
