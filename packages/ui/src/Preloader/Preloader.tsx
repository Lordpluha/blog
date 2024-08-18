import { FC } from 'react'
import { Spinner, SpinnerProps } from '@nextui-org/react'

const Preloader: FC<Partial<SpinnerProps>> = (props) => <Spinner size="md" color='primary' {...props} />

export default Preloader
