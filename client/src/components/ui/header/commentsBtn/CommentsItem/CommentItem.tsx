import { Link } from 'react-router-dom'
import styles from '../commentsBtn.module.scss'
import { INewComment } from '../../../interfaces/NewComments.interface'

/**
 * Component for rendering one comment block
 * @param link - link to the news for which the comment was created
 * @param title - news title
 * @param user - link to user avatar
 * @param login - user login
 * @param text - comment text
 */
const CommentItem = ({ link, title, avatar, login, text }: INewComment) => {
	return (
		<Link to={link}>
			<div className={styles.commentItem}>
				<h6 className={styles.commentTitle}>
					{title}
				</h6>
				<div className='flex items-center text-[14px]'>
					<img
						alt={login}
						className='rounded-full'
						src={avatar}
					/>
					<p className={styles.commentUserLogin}>
						{login}
					</p>
				</div>
				<div className={styles.commentText}>
					<p>{text}</p>
				</div>
			</div>
		</Link>
	)
}

export default CommentItem