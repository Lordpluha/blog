import type { FC, HTMLAttributes } from 'react'
import clsx from 'clsx'
import TagModel from '../models/Tag.model'
import { Link, LinkProps } from '@nextui-org/link'

type TTagsListProps = {
  tags: TagModel[]
  linkProps?: Omit<LinkProps, 'href'>
} & HTMLAttributes<HTMLUListElement>

const TagsList: FC<TTagsListProps> = ({
  tags,
  linkProps,
  className,
  ...props
}) => {
  return (
    <ul
      className={clsx('flex flex-wrap gap-[5px] h-min', className)}
      {...props}
    >
      {tags.map((tag, idx) => (
				<>
					<Link
						href={tag.url}
						size="sm"
						underline="none"
						className='inline text-content4'
						{...linkProps}
					>
						{tag.title}
					</Link>
					{idx !== tags.length-1 && <div className='inline text-content4'>{'|'}</div>}
				</>
      ))}
    </ul>
  )
}

export default TagsList
