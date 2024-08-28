import { PostCard } from '@entities/Post'
import { Slider } from '@gameblog/ui'
import { LinkProps } from '@nextui-org/react'
import React from 'react'

const XLPost = (props: LinkProps) => (
  <PostCard
    size='xl'
    post={{
      id: 1,
      title: 'Some title',
      createdAt: Date(),
      slug: 'some_slug',
      preview: '/preview.jpg',
      _count: { comments: 5 },
      author: {
        name: 'Имя Фамилия'
      },
      category: {
        title: 'Блог'
      }
    }}
    {...props}
  />
)

const MainPageSlider = () => {
	return (
		<Slider
			size={'xl'}
			slides={[
				<div className='grid grid-cols-6 grid-rows-[auto_auto] gap-6'>
					<XLPost className='col-span-3' />
					<XLPost className='col-span-3' />
					<XLPost className='col-span-2' />
					<XLPost className='col-span-2' />
					<XLPost className='col-span-2' />
				</div>,
				<div className='grid grid-cols-6 grid-rows-[auto_auto] gap-6'>
					<XLPost className='col-span-3' />
					<XLPost className='col-span-3' />
					<XLPost className='col-span-2' />
					<XLPost className='col-span-2' />
					<XLPost className='col-span-2' />
				</div>,
				<div className='grid grid-cols-6 grid-rows-[auto_auto] gap-6'>
					<XLPost className='col-span-3' />
					<XLPost className='col-span-3' />
					<XLPost className='col-span-2' />
					<XLPost className='col-span-2' />
					<XLPost className='col-span-2' />
				</div>
			]}
		/>
	)
}

export default MainPageSlider
