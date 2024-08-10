import type { Meta, StoryObj } from '@storybook/react'
import { PreloaderScreen as PreloaderScreenLocal } from '@gameblog/ui'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: '@gameblog/ui/PreloaderScreen',
  component: PreloaderScreenLocal,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered'
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof PreloaderScreenLocal>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const PreloaderScreen: Story = {}
