import { nextui } from '@nextui-org/react'
import type { Config } from 'tailwindcss'
import NextUITheme from './theme.nextui'
import TailwindTheme from './theme.tailwind'
import typography from '@tailwindcss/typography'

// We want each package to be responsible for its own content.
const config: Omit<Config, 'content'> = {
  theme: {
    ...TailwindTheme
  },
  darkMode: 'class',
  plugins: [nextui(NextUITheme)]
}
export default config
