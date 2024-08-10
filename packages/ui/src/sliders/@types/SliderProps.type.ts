import type { SwiperProps } from 'swiper/react'
import type { ReactNode } from 'react'
import type ESliderSizes from './SliderSizes.enum'

type TSliderProps = {
  slides: ReactNode[]
  size: keyof typeof ESliderSizes
} & SwiperProps

export type { TSliderProps }
