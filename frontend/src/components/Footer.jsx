

const Footer = () => {
  return (
    <section id="footer" className="w-full pb-2  bg-blue-950 text-gray-400 relative">
        <div className="flex w-full flex-wrap justify-between space-y-10 lg:space-y-0 px-[10%] md:px-[5%]
            pt-10">
            <div className="lg:w-[30%] w-full space-y-10">
                <header>
                    About Us
                </header>
                <p>
                    FederalGov is the state website where you can find the latest
                    information about the work of the local government as well as
                    important news for our citizens and city guests. You can also
                    gain access to the community services and learn more about the department
                    s of our government or leave a suggestion for us.
                </p>
            </div>
            <div className="lg:w-[30%] w-full">
                <header className="mb-10">
                    Recent Blog Posts
                </header>
                <div className="mb-5 space-y-1">
                    <p>
                        Dashboard Reflections: Population Size, Form of Government & Gender
                    </p>
                    <div className="text-sm flex justify-between w-2/3 italic">
                        <span>by Theresa Barnes</span>
                        <span>2 days ago</span>
                    </div>
                </div>
                <div className="mb-5 space-y-1">
                    <p>
                        Dashboard Reflections: Population Size, Form of Government & Gender
                    </p>
                    <div className="text-sm flex justify-between w-2/3 italic">
                        <span>by Theresa Barnes</span>
                        <span>2 days ago</span>
                    </div>
                </div>
                

            </div>
            <div className="lg:w-[30%] w-full space-y-10">
                <header>
                    Our Projects
                </header>
                <div className="space-y-2">
                    <div className="flex gap-2 w-full">
                        <img src="" alt="" className="bg-black w-[24%] h-[80px]"/>
                        <img src="" alt="" className="bg-black w-[24%] h-[80px]"/>
                        <img src="" alt="" className="bg-black w-[24%] h-[80px]"/>
                        <img src="" alt="" className="bg-black w-[24%] h-[80px]"/>
                    </div>
                    <div className="flex gap-2 w-full">
                        <img src="" alt="" className="bg-black w-[24%] h-[80px]"/>
                        <img src="" alt="" className="bg-black w-[24%] h-[80px]"/>
                        <img src="" alt="" className="bg-black w-[24%] h-[80px]"/>
                        <img src="" alt="" className="bg-black w-[24%] h-[80px]"/>
                    </div>
                </div>
            </div>
        </div>

        <ul className="flex gap-10 mt-10 px-[10%] md:px-[5%] w-full flex-wrap justify-center
            items-center">
            <li><a href="/"></a>Home</li>
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/">Departments</a></li>
            <li><a href="/carrers">Carrers</a></li>
            <li><a href="/news">Blog</a></li>
            <li><a href="/contact">Contacts</a></li>
        </ul>

        <hr className="mt-10"/>
        <p className="mt-10 text-center">© 2025 All Rights Reserved. Privacy Policy</p>
        <a href="#" className="fixed bg-blue-950 hover:bg-red-500 rounded-full h-12 w-12
            bottom-5 right-3 z-0"></a>
    </section>
  )
}

export default Footer