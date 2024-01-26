import { INews } from '../../../../interfaces/News.interface'
import News from '../../../entities/ui/News/News'

type INewsListProps = {
	news: INews[]
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
				<News {...news} key={news.id} />
			))}
		</section>
	)
}
