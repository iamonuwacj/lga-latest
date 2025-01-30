import Footer from "../components/Footer"
import Header from "../components/Header"

const AboutUs = () => {
  return (
    <div>
        <Header />
        <div className="bg-green-300 h-96 w-full p-[10%] lg:p-[5%] flex items-center
            bg-[url(../../src/assets/images/bg-breadcrumbs.jpg)] text-white">
            <h1 className="text-5xl font-semibold">About Us</h1>
        </div>

        <div className="p-[10%] lg:p-[5%] space-y-10" data-aos={"fade-up"} data-aos-delay={600}>
            <header className="font-bold text-3xl">
                <h1>Overview</h1>
            </header>

            <div className="flex flex-wrap w-full justify-between space-y-10 lg:space-y-0">
                <div className="lg:w-[48%] w-full space-y-8">
                    <p>
                        Lorem ipsum dolor sit amet, scripta legimus quaerendum ex vis, 
                        audire nonumes his an. Decore tamquam insolens usu.
                    </p>
                    <p className="font-thin">
                        Nullam felis est, tempus at lectus vel, aliquam gravida elit. 
                        Suspendisse ut diam nisi. Curabitur non orci vitae nisl iaculis pretium. 
                        Aliquam vehicula egestas lectus nec egestas. Vivamus elementum, 
                        nisl vel pretium sodales, odio nibh aliquam erat, et rutrum turpis enim 
                        non lacus. Suspendisse porta molestie est vitae maximus.
                    </p>

                    <div className="w-1/2 text-white flex text-center">
                        <a href="/departments" className="bg-green-800 py-3 w-3/4 rounded-full">Departments</a>
                    </div>
                </div>

                <div className="lg:w-[48%] w-full space-y-8">
                    <div className="space-y-2 font-thin text-sm">
                        <p className="flex justify-between"><span>Economic Development</span> <span>75%</span></p>
                        <div className="w-full  bg-gray-300 h-1">
                            <div className="w-[75%] h-1 bg-green-600"/>
                        </div>
                    </div>
                    <div className="space-y-2 font-thin text-sm">
                        <p className="flex justify-between"><span>Finance Administration</span> <span>50%</span></p>
                        <div className="w-full  bg-gray-300 h-1">
                            <div className="w-[75%] h-1 bg-green-600"/>
                        </div>
                    </div>
                    <div className="space-y-2 font-thin text-sm">
                        <p className="flex justify-between"><span>Social Support</span> <span>75%</span></p>
                        <div className="w-full  bg-gray-300 h-1">
                            <div className="w-[75%] h-1 bg-green-600"/>
                        </div>
                    </div>
                    <div className="space-y-2 font-thin text-sm">
                        <p className="flex justify-between"><span>Energy Management</span> <span>75%</span></p>
                        <div className="w-full  bg-gray-300 h-1">
                            <div className="w-[75%] h-1 bg-green-600"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            Local Government History
        </div>
        <Footer />
    </div>
  )
}

export default AboutUs