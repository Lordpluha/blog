import { FC } from 'react'
import { Spinner, SpinnerProps } from '@nextui-org/react'

const Preloader: FC<Partial<SpinnerProps>> = (props) => <Spinner size="md" color='default' {...props} classNames={{
	circle1: '',
	circle2: '',
	base: 'h-4',
	wrapper: ''
}} />

export default Preloader
