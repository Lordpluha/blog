import { LinkProps, Listbox, ListboxItem } from '@nextui-org/react'

import { MessageSquareText, PencilLine, Play, Radio, Settings } from 'lucide-react'

const MainPageAside = () => {
	return (
		<aside className='grow mt-12 pb-8 pr-8 max-w-xs overflow-auto hidden lg:block min-w-80'>
			<Listbox variant="faded" onAction={(key) => alert(key)}>
				<ListboxItem
					key="blogs"
					startContent={<MessageSquareText />}
				>
					Интересные блоги
				</ListboxItem>
				<ListboxItem
					key="articles"
					startContent={<PencilLine />}
				>
					Свежие статьи
				</ListboxItem>
				<ListboxItem
					key="infact"
					startContent={<Play />}
				>
					Инфакт
				</ListboxItem>
				<ListboxItem
					key="streams"
					showDivider
					startContent={<Radio />}
				>
					Записи стримов
				</ListboxItem>
				<ListboxItem
					key="settings"
					showDivider
					startContent={<Settings />}
				>
					Настройки
				</ListboxItem>
			</Listbox>
		</aside>
	)
}

export default MainPageAside