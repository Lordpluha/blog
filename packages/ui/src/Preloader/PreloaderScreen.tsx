import { FC, HTMLAttributes } from 'react'
import Preloader from './Preloader'

type TPreloaderScreenProps = {
  wrapperProps?: HTMLAttributes<HTMLDivElement>
	preloaderProps?: typeof Preloader
}

const PreloaderScreen: FC<TPreloaderScreenProps> = ({
  wrapperProps,
  preloaderProps
}) => (
  <div
    className={'fixed h-screen w-screen'}
    {...wrapperProps}
  >
    <Preloader
      label='Loading...'
      {...preloaderProps}
    />
  </div>
)

export default PreloaderScreen
