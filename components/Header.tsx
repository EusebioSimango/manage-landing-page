import React from 'react'
import Image from 'next/image'
import Logo from '../public/images/logo.svg'
import Hamburger from '../public/images/icon-hamburger.svg'
import BgTabletPattern from '../public/images/bg-tablet-pattern.svg'

export const Header: React.FC = () => {

	return (
		<header className=" py-12 flex justify-between">
			<Image alt={`Manage's Logo`} className="fixed w-[200px]" src={Logo}/>
			<nav className="none">
				
			</nav>
			<Image
        className="fixed -top-[90px] -right-[90px] back"
				alt=''
        src={BgTabletPattern}
      />
      <button className="fixed right-10">
				<Image className=" w-10 " alt='Mobile Menu' src={Hamburger}/>
			</button>
		</header>
	)
}