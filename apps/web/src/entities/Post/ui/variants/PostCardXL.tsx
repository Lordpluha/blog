'use client'

import { useState, useEffect, type FC } from 'react'
import {
  Card,
  CardHeader,
  CardFooter,
  Image,
  CardBody,
  Link,
  Skeleton
} from '@nextui-org/react'
import type { TPostCardProps } from '@entities/Post/models'
import { AddToBookmarkBtn } from '@features/AddToBookmark'
import { dateConverter } from '@/shared/utils'
import { MessageCircleMore, Info } from 'lucide-react'

const PostCardXL: FC<Omit<TPostCardProps, 'size'>> = ({
  post: {
    category,
    author,
    title,
    id,
    slug,
    _count: { comments },
    preview
  },
  ...linkProps
}) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <Link
      href={`/post/${id}/${slug}`}
      {...linkProps}
    >
      <Card className='rounded-small bg-transparent shadow-none'>
        <Image
          src={preview}
          className='z-0'
          isZoomed
        />
        <div className='absolute left-0 top-0 z-10 flex h-full w-full flex-col justify-between p-4'>
          <Skeleton isLoaded={isLoaded}>
            <CardHeader>
              <p>
                {category?.icon} {category?.title}
              </p>
            </CardHeader>
          </Skeleton>
          <CardFooter className='flex flex-col items-stretch'>
            <Skeleton isLoaded={isLoaded}>
              <h1>{title}</h1>
            </Skeleton>
            <Skeleton isLoaded={isLoaded}>
              <div className='flex flex-row justify-between'>
                <p>{author.name}</p>
                <p className='flex flex-row'>
                  <MessageCircleMore />
                  <span className='pl-1'>{comments}</span>
                </p>
              </div>
            </Skeleton>
          </CardFooter>
        </div>
      </Card>
    </Link>
  )
}

export default PostCardXL
