import { ChevronDown, Menu, X } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'


const Header = () => {
	const [toggle, setToggle] = useState(false)
	const [dropdown, setDropdown] = useState(false)
	const [dropdown1, setDropdown1] = useState(false)

  return (
	<div className="px-[5%] py-6 bg-[#003758]  sm:w-full text-white flex  z-50
		justify-between sticky top-0">
		<header className="flex gap-2 w-[20%] items-center">
			<img src="" alt="logo" />
			<span>logo</span>
		</header>

		<div className="flex w-[80%] justify-end ">
			<ul className="hidden gap-14 sm:hidden md:hidden lg:flex">
				<li><NavLink to={"/"}>Home</NavLink></li>

				<li className="group relative ">
					<p className='flex items-center gap-2'>About <ChevronDown size={20}
						className='group-hover:rotate-180 transition-all duration-500 ease-in-out'/></p>

					<div className="group-hover:block absolute hidden h-auto opacity-1 py-6 z-50">

						<ul className="w-52 p-3 shadow bg-yellow-700 text-white top-0 rounded">
							<li className="py-1 hover:ml-3 hover:text-gray-500 flex gap-2 items-center group">
								<NavLink to={"/administration"}>Administration</NavLink></li>
							<li className="py-1 hover:ml-3 hover:text-gray-500">
								<NavLink to={"/about-governor"}>Governor</NavLink></li>
							<li className="py-1 hover:ml-3 hover:text-gray-500">
								<NavLink to={"/privacy-policy"}>Privacy Policy</NavLink></li>
						</ul>
					</div>
				</li>
				
				<li className="group relative ">
					<p className='flex items-center gap-2'>Departments <ChevronDown size={20}
						className='group-hover:rotate-180 transition-all duration-500 ease-in-out'/>
					</p>

					<div className="group-hover:block absolute hidden h-auto opacity-1 py-6 z-50">

						<ul className="w-52 p-3 shadow bg-yellow-700 text-white top-0 rounded">
							<li className="py-1 hover:ml-3 hover:text-gray-500">
								<NavLink>Economic Development</NavLink>
							</li>
						</ul>
					</div>
				</li>
				<li><NavLink to={"/carrers"}>Carrers</NavLink></li>
				
				<li><NavLink to={"/news"}>News</NavLink></li>
				<li className="relative block"><NavLink to={"/contact"}>Contacts</NavLink></li>
				
			</ul>
			{
				toggle && (
					<ul className="absolute top-[3.8rem] sm:top-[4rem] w-2/3 sm:w-1/2 bg-[#003758]
						left-0  py-10 h-screen text-left space-y-5 lg:hidden">
						<li className='bg-green-700 p-3'><NavLink to={"/"}>Home</NavLink></li>
						
						<li className="group relative hover:bg-green-700 p-3" onClick={() => setDropdown(!dropdown)}
							>
							<p className='flex items-center gap-2 justify-between'>About <ChevronDown
								className={`transition-all duration-500 ease-in-out ${dropdown && "rotate-180"}`}/>
							</p>
						</li>

						{ dropdown && (
							<li className='relative px-3'>
								<ul className='space-y-6'>
									<li className='hover:ml-16'><NavLink to={"/administration"}>Administration</NavLink></li>
									<li className='hover:ml-16'><NavLink to={"/about-governor"}>About Chairman</NavLink></li>
									<li className='hover:ml-16'><NavLink to={"/privacy-policy"}>Privacy Policy</NavLink></li>
								</ul>
						</li>
						)}
						
						<li className="group relative hover:bg-green-700 p-3" onClick={() => setDropdown1(!dropdown1)}>
							<p className='flex items-center justify-between gap-2'>Departments <ChevronDown
								className={`transition-all duration-500 ease-in-out ${dropdown1 && "rotate-180"}`}/>
							</p>
						</li>
						{ dropdown1 && (
							<li className='relative px-3'>
								<ul className='space-y-6'>
									<li className="py-1 hover:ml-10 hover:text-gray-500">
										<NavLink>Economic Development</NavLink>
									</li>
									<li className="py-1 hover:ml-10 hover:text-gray-500">
										<NavLink>Economic Development</NavLink>
									</li>
									<li className="py-1 hover:ml-10 hover:text-gray-500">
										<NavLink>Economic Development</NavLink>
									</li>
								</ul>
							</li>
						)}
					
						<li className='hover:bg-green-700 p-3'><NavLink to={"/carrers"}>Carrers</NavLink></li>
						<li className='hover:bg-green-700 p-3'><NavLink to={"/news"}>News</NavLink></li>

						<li className="relative block hover:bg-green-700 p-3"><NavLink to={"/contact"}>Contacts</NavLink></li>
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