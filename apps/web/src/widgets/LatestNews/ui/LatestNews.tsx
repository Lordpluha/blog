
import { PostCard } from '@entities/Post'

const LatestNews = () => {
	return (
		<>
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
						_count: { comments: 5 },
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
		</>
	)
}

export default LatestNews
