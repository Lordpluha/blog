import React from 'react'
import { useNavigate } from 'react-router-dom'

import { type IArticle } from '@model/interfaces'

import { dateConverter } from '@shared/lib'

import CategoryList from './@CategoryList/CategoryList'
import styles from './ArticleCard.module.scss'
import { MessageCircleMore } from 'lucide-react'

/**
 * Item of ArticleCard component represent article element
 * @param {IArticle} article
 */
const ArticleCard = ({ article }: { article: IArticle }) => {
	const navigate = useNavigate()

	const clickHandler = (e: React.MouseEvent<HTMLElement>) => {
		e.stopPropagation()
		navigate(`/news/${article.id}`)
	}

	return (
		<article
			onClick={e => {
				clickHandler(e)
			}}
			className={styles.articleItemBlock}
		>
			<div className={styles.articleItemImageBlock}>
				<img
					className={styles.articleItemImage}
					src={article.image}
					alt={`${article.title} article cover`}
				/>
			</div>
			<div className={styles.articleItemDescription}>
				<h1
					onClick={e => {
						clickHandler(e)
					}}
					className={styles.articleItemTitle}
				>
					{article.title}
				</h1>

				<div className='pr-4'>
					<CategoryList
						categories={article.categories}
						className={styles.articleItemCategory}
					/>
					<div className='flex flex-row justify-between'>
						<p className='text-gray-500 text-[17px]'>
							{dateConverter(article.releaseDate)}
						</p>
						<div
							className={styles.articleItemComments}
							onClick={e => {
								clickHandler(e)
							}}
						>
							<MessageCircleMore />
							<p className='pl-1'>{article.commentsNum}</p>
						</div>
					</div>
				</div>
			</div>
		</article>
	)
}

export default ArticleCard