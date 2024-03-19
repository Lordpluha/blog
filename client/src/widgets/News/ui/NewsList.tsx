import { type INew } from '@model/interfaces'

import { NewCard } from '@entities/NewCard'

interface INewsListProps {
	news: INew[]
}
/**
 * Renders a list of news items.
 *
 * @param {Array<object>} news - An array of news objects.
 * @return {JSX.Element} The rendered news list.
 */
export default function NewsList({ news }: INewsListProps) {
	return (
		<section className='flex flex-col gap-10'>
			{news.map(news => (
				<NewCard {...news} key={news.id} />
			))}
		</section>
	)
}