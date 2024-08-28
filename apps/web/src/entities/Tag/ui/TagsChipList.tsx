import { Chip, ChipProps } from '@nextui-org/react'
import TagModel from '../models/Tag.model'
import type { FC, HTMLAttributes } from 'react'
import Link, { LinkProps } from 'next/link'
import clsx from 'clsx'

type TTagsChipListProps = {
  tags: TagModel[]
  chipProps?: ChipProps
  linkProps?: Omit<LinkProps, 'href'>
} & HTMLAttributes<HTMLUListElement>

const TagsChipList: FC<TTagsChipListProps> = ({
  tags,
  chipProps,
  linkProps,
  className,
  ...props
}) => {
  return (
    <ul
      className={clsx('flex flex-wrap gap-3 text-[16px]', className)}
      {...props}
    >
      {tags.map((tag, idx) => (
        <Chip
          key={idx}
          {...chipProps}
        >
          <Link
            href={tag.url}
            {...linkProps}
          >
            {tag.title}
          </Link>
        </Chip>
      ))}
    </ul>
  )
}

export default TagsChipList
