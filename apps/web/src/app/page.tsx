'use client'
import { PostCard } from '@entities/Post'
import { Slider, Wrapper, Preloader } from '@gameblog/ui'
import { LinkProps, Listbox, ListboxItem } from '@nextui-org/react'

import { MessageSquareText, PencilLine, Play, Radio, Settings } from 'lucide-react'

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

export default function Home() {
  return (
    <div className='container mx-auto'>
      <Wrapper level={1} className='mb-4'>
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
      </Wrapper>

      <Wrapper level={1} className='mb-4 px-9 py-5'>
        <h1 className='text-large'>
					Всё про видеоигры
				</h1>
        <div className='flex flex-row'>
          <aside className='sticky grow mt-12 pb-8 pr-8 max-w-xs overflow-auto hidden lg:block min-w-80'>
						<Listbox variant="faded" onAction={(key) => alert(key)}>
							<ListboxItem
								key="blogs"
								startContent={<MessageSquareText />}
							>
								Интересные блоги
							</ListboxItem>
							<ListboxItem
								key="articles"
								startContent={<PencilLine />}
							>
								Свежие статьи
							</ListboxItem>
							<ListboxItem
								key="infact"
								startContent={<Play />}
							>
								Инфакт
							</ListboxItem>
							<ListboxItem
								key="streams"
								showDivider
								startContent={<Radio />}
							>
								Записи стримов
							</ListboxItem>
							<ListboxItem
								key="settings"
								showDivider
								startContent={<Settings />}
							>
								Настройки
							</ListboxItem>
						</Listbox>
					</aside>

          <div className="grid grid-cols-2 grid-rows-auto gap-6">
            <div className='col-span-full row-span-1'>
            	<Wrapper
	              level={2}
	              className='p-4'
	            >
								<h1 className='text-large'>Последние новости</h1>
	              <div className="grid grid-cols-2 *:border-[#2f3437] [&>*:nth-child(2n-1)]:border-r *:border-b">
	              	<PostCard
		                size='xs'
		                post={{
		                  id: 1,
		                  title: 'Some title',
		                  createdAt: Date(),
		                  slug: 'some_slug',
		                  preview: '/preview.jpg',
		                  _count: { comments: 5 }
		                }}
		              />
		              <PostCard
		                size='xs'
		                post={{
		                  id: 1,
		                  title: 'Some title',
		                  createdAt: Date(),
		                  slug: 'some_slug',
		                  preview: '/preview.jpg',
		                  _count: { comments: 5 }
		                }}
		              />
		              <PostCard
		                size='xs'
		                post={{
		                  id: 1,
		                  title: 'Some title',
		                  createdAt: Date(),
		                  slug: 'some_slug',
		                  preview: '/preview.jpg',
		                  _count: { comments: 5 }
		                }}
		              />
		              <PostCard
		                size='xs'
		                post={{
		                  id: 1,
		                  title: 'Some title',
		                  createdAt: Date(),
		                  slug: 'some_slug',
		                  preview: '/preview.jpg',
		                  _count: { comments: 5 }
		                }}
		              />
		              <PostCard
		                size='xs'
		                post={{
		                  id: 1,
		                  title: 'Some title',
		                  createdAt: Date(),
		                  slug: 'some_slug',
		                  preview: '/preview.jpg',
		                  _count: { comments: 5 }
		                }}
		              />
		              <PostCard
		                size='xs'
		                post={{
		                  id: 1,
		                  title: 'Some title',
		                  createdAt: Date(),
		                  slug: 'some_slug',
		                  preview: '/preview.jpg',
		                  _count: { comments: 5 }
		                }}
		              />
	              </div>
	            </Wrapper>
            </div>

						<div className='grid grid-cols-subgrid grid-rows-auto col-span-full gap-6'>
							<PostCard
								size='md'
								post={{
									id: 1,
									title: 'Some title',
									createdAt: Date(),
									slug: 'some_slug',
									preview: '/preview.jpg',
									_count: { comments: 5 },
									author: {
										name: 'Имя Фамилия'
									}
								}}
								className='col-span-1 row-span-1'
							/>
							<PostCard
								size='md'
								post={{
									id: 1,
									title: 'Some title',
									createdAt: Date(),
									slug: 'some_slug',
									preview: '/preview.jpg',
									_count: { comments: 5 },
									author: {
										name: 'Имя Фамилия'
									}
								}}
								className='col-span-1 row-span-1'
							/>
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
								className='col-span-full row-span-1'
							/>
							<PostCard
								size='md'
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
								className='col-span-1 row-span-1'
							/>
							<PostCard
								size='md'
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
								className='col-span-1 row-span-1'
							/>
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
								className='col-span-full row-span-1'
							/>
							<PostCard
								size='md'
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
								className='col-span-1 row-span-1'
							/>
							<PostCard
								size='md'
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
								className='col-span-1 row-span-1'
							/>
						</div>
          </div>
        </div>
      </Wrapper>
    </div>
  )
}
