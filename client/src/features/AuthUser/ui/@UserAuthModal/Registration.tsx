import { Dispatch, FC, SetStateAction } from 'react'
import { Link } from 'react-router-dom'

import { X } from 'lucide-react'

import { BackArrow } from '@shared/ui'

import styles from './UserAuthModal.module.scss'
import captchaImg from '/google.png'

type TRegistrationProps = {
	modal: boolean
	setModal: Dispatch<SetStateAction<boolean>>
}

const Registration: FC<TRegistrationProps> = ({ modal, setModal }) => {
	return (
		<div className={styles.headerOverlay}>
			<div className={styles.headerSlider}>
				<div className={styles.slider}>
					<div className={styles.fill}>
						<button
							onClick={() => setModal(false)}
							className={styles.back}
						>
							<BackArrow />
							<span>Назад</span>
						</button>
						<button
							className={styles.userAuthHeaderBtnClose}
							onClick={() => {
								setModal(false)
							}}
						>
							<X className={styles.icon} />
						</button>
						<div className='header__window'>
							<div className={styles.header__complete}>
								<h1>Регистрация</h1>
								<form>
									<div className={styles.field}>
										<input
											type='text'
											name='login'
											placeholder='Логин'
										/>
										<p className='header__no-error'>
											Нет ошибок
										</p>
										<input
											type='text'
											name='email'
											placeholder='Email'
										/>
										<p className='header__no-error'>
											Нет ошибок
										</p>
										<div className={styles.captcha}>
											<div className={styles.spinner}>
												<label>
													<input type='checkbox' />
													<span
														className={
															styles.checkmark
														}
													></span>
												</label>
											</div>
											<h1 className={styles.headerText}>
												I&apos;m not a robot
											</h1>
											<div className={styles.logoCaptcha}>
												<img src={captchaImg} />
												<span className='font-bold text-[10px] mt-1.5 mb-1'>
													reCAPTCHA
												</span>
												<span>Privacy - Terms</span>
											</div>
										</div>
										<button className={styles.done}>
											Зарегистрироваться
										</button>
									</div>
								</form>
							</div>
						</div>
						<div className={styles.rules}>
							<p>
								Авторизуясь, ты соглашаешься с
								<Link to=''>правилами сайта</Link> и
								<Link to=''>пользовательским соглашением</Link>.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Registration