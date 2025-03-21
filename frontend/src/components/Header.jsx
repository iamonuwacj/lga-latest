import { ChevronDown, Menu, X } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'


const Header = () => {
	const [toggle, setToggle] = useState(false)
	// const [dropdown, setDropdown] = useState(false)
	// const [dropdown1, setDropdown1] = useState(false)

  return (
	<div className="px-[5%] py-6 bg-[#003758]  sm:w-full text-white flex  z-50
		justify-between sticky top-0">
		<header className="flex gap-2 w-[20%] items-center">
			<img src="" alt="logo" />
			<span>logo</span>
		</header>

		<div className="flex w-[80%] justify-end ">
			<ul className="hidden gap-14 sm:hidden md:hidden lg:flex">
				<li><NavLink to={"/"} className={({ isActive }) => isActive && "text-red-700"}>Home</NavLink></li>
				<li><NavLink to={"/about-us"} className={({ isActive }) => isActive && "text-red-700"}>About Us</NavLink></li>
				<li><NavLink to={"/administration"} className={({ isActive }) => isActive && "text-red-700"}>Administration</NavLink></li>
				<li><NavLink to={"/projects"} className={({ isActive }) => isActive && "text-red-700"}>Projects</NavLink></li>
				<li><NavLink to={"/contact"} className={({ isActive }) => isActive && "text-red-700"}>Contact</NavLink></li>
			</ul>
			{
				toggle && (
					<ul className="absolute top-[3.8rem] sm:top-[4rem] w-2/3 sm:w-1/2 bg-[#003758]
						left-0  py-10 h-screen text-left space-y-5 lg:hidden">
						<li><NavLink to={"/"} 
							className={({ isActive }) => isActive && "text-red-700 w-full p-3 bg-green-700 block"}>
							Home</NavLink>
						</li>
						<li><NavLink to={"/about-us"} 
							className={({ isActive }) => isActive && "text-red-700 w-full p-3 bg-green-700 block"}>
								About Us</NavLink>
						</li>
						<li><NavLink to={"/administration"} 
							className={({ isActive }) => isActive && "text-red-700 w-full p-3 bg-green-700 block"}>
							Administration</NavLink>
						</li>
						<li><NavLink to={"/projects"} 
							className={({ isActive }) => isActive && "text-red-700 w-full p-3 bg-green-700 block"}>
							Projects</NavLink>
						</li>
						<li><NavLink to={"/contact"} 
							className={({ isActive }) => isActive && "text-red-700 w-full bg-green-700 block"}>
							Contact</NavLink>
						</li>
						{/* <li className='bg-green-700 p-3'><NavLink to={"/"}>Home</NavLink></li>
						
						<li className="group relative hover:bg-green-700 p-3">
							
						</li>

						
						
						<li className="group relative hover:bg-green-700 p-3">
							
						</li>
						
					
						<li className='hover:bg-green-700 p-3'><NavLink to={"/carrers"}>Carrers</NavLink></li>
						<li className='hover:bg-green-700 p-3'><NavLink to={"/news"}>News</NavLink></li>

						<li className="relative block hover:bg-green-700 p-3"><NavLink to={"/contact"}>Contacts</NavLink></li> */}
					</ul>
				)
			}
			{
				toggle ? (<button className='lg:hidden flex' onClick={() => setToggle(false)}><X /></button>)
					:
					(<button className='lg:hidden flex' onClick={() => setToggle(true)}><Menu /></button>)
			}
		</div>
	</div>
  )
}

export default Header