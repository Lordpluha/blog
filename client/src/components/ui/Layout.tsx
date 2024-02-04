import { Outlet } from 'react-router-dom'

import Header from './Header/Header'
import { Footer } from './footer/Footer'

const Layout = () => {
	return (
		<div className='layoutComponent'>
			<Header />
			<div className='container mt-[90px]'>
				<Outlet />
			</div>
			<Footer />
		</div>
	)
}

export default Layout
