import { MutableRefObject } from 'react'
import { Link } from 'react-router-dom'

import { X } from 'lucide-react'

import BackArrow from '@shared/ui/icons/socials/BackArrow'
import Google from '@shared/ui/illustrations/google.png'

import styles from './UserAuthModal.module.scss'

interface RegistrationProps {
	setModalOpened: React.Dispatch<React.SetStateAction<boolean>>
	setModal: React.Dispatch<React.SetStateAction<boolean>>
	closeButtonRef: MutableRefObject<HTMLButtonElement>
	refBack: MutableRefObject<HTMLButtonElement>
}

const Registration = ({
	setModalOpened,
	setModal,
	refBack,
	closeButtonRef
}: RegistrationProps) => {
	return (
		<div className={styles.headerOverlay}>
			<div className={styles.headerSlider}>
				<div className={styles.slider}>
					<div className={styles.fill}>
						<button
							ref={refBack}
							// onClick={() => setModalOpened(false)}
							className={styles.back}
						>
							<BackArrow />
							<span>Назад</span>
						</button>
						<button
							ref={closeButtonRef}
							className={styles.userAuthHeaderBtnClose}
							// onClick={() => {
							// 	setModal(false)
							// }}
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
											<div className={styles.headerText}>
												I'm not a robot
											</div>
											<div className={styles.logoCaptcha}>
												<img src={Google} />
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
								<Link to='#'>правилами сайта</Link> и
								<Link to='#'>пользовательским соглашением</Link>
								.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Registration
