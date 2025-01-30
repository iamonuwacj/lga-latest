import { Link } from "react-router-dom"
import Header from "../components/Header"
import img from '../../src/assets/images/bg-image-1.jpg'
import Footer from "../components/Footer"
import JobCard from "../components/JobCard"


const Carrers = () => {
  return (
    <div>
        <Header />
        <div className="h-96 w-full p-[10%] lg:p-[5%] flex items-center
            bg-[url(../../src/assets/images/bg-breadcrumbs.jpg)] text-white
            ">
            <h1 className="text-5xl font-semibold">Carrers</h1>
        </div>

        <div className="">
            <div className="p-[10%] lg:p-[5%] space-y-10 relative z-20">
                <header className="text-center text-4xl font-semibold">Join Our Team</header>
                <p className="text-center md:w-2/3 mx-auto">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum omnis deserunt,
                    tempore itaque, rem enim inventore soluta aut quam animi ea sapiente nulla ad nam.
                    Sequi cum praesentium placeat repellat?
                </p>

                <div className="flex items-center justify-center text-white">
                    <Link to={"/contact"} className="bg-green-600 px-10 rounded-full py-3">Contact Us</Link>
                </div>
            </div>
            
            <div className="h-fit">
                <img src={img} alt="" className="h-full object-cover w-full"/>
            </div>
        </div>

        <div className="h-full text-black w-full bg-gray-300 p-[10%] lg:p-[5%]">
                <div className=" text-center w-full px-[10%] lg:px-[5%] space-y-10">
                    <header className="text-3xl">Carrers Here</header>

                    <div className="flex justify-center gap-10">
                        <h3 className="hover:border-b-2 hover:text-green-700">All Departments</h3>
                        <h3 className="hover:border-b-2 hover:text-green-700"> Law Enforcement</h3>
                        <h3 className="hover:border-b-2 hover:text-green-700">Public Service</h3>
                        <h3 className="hover:border-b-2 hover:text-green-700">Healthcare</h3>
                    </div>

                    {/* all jobs */}
                    {/* law jobs */}
                    {/* public jobs */}
                    {/* health care jobs */}

                    <div className="w-full flex flex-wrap justify-between">
                        <JobCard job={"Fire Fighter"} state={"hot"}/>
                        <JobCard job={"Police Officer"}/>
                        <JobCard job={"Health Policy Analyst"}/>
                        <JobCard job={"Executive Director"}/>
                        <JobCard job={"Executive Director"}/>
                        <JobCard job={"Executive Director"}/>
                    </div>
                </div>
        </div>

        <Footer />
    </div>
  )
}

export default Carrers