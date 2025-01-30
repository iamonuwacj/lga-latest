import Footer from "../components/Footer"
import Header from "../components/Header"


const Contact = () => {
  return (
    <div>
        <Header />
        <div className="bg-green-300 h-96 w-full p-[10%] lg:p-[5%] flex items-center
            bg-[url(../../src/assets/images/bg-breadcrumbs.jpg)] text-white">
            <h1 className="text-5xl font-semibold">Contacts</h1>
        </div>

        
        <form className="p-[10%] lg:p-[5%] space-y-5 flex flex-col items-center w-full">
            <header className="text-center  font-semibold text-3xl mb-10">
                Contact Us
            </header>
            <div className="flex items-center md:w-full justify-between flex-wrap">
                <div className="flex flex-col space-y-1 md:w-[47%] w-full relative ">
                    <label htmlFor="">First Name</label>
                    <input type="text" className="border-2 p-2 rounded-md outline-none"/>
                    <span className="absolute text-sm top-0 right-0 text-red-500">This text field is required</span>
                </div>
                <div className="flex flex-col space-y-1 md:w-[47%] w-full relative">
                    <label htmlFor="">Last Name</label>
                    <input type="text" className="border-2 p-2 rounded-md outline-none"/>
                    <span className="absolute text-sm top-0 right-0 text-red-500">This text field is required</span>
                </div>
                
            </div>
            <div className="flex items-center md:w-full justify-between flex-wrap">
                <div className="flex flex-col space-y-1 md:w-[47%] w-full relative">
                    <label htmlFor="">E-mail</label>
                    <input type="email" className="border-2 p-2 rounded-md outline-none"/>
                    <span className="absolute text-sm top-0 right-0 text-red-500">This text field is required</span>
                </div>
                <div className="flex flex-col space-y-1 md:w-[47%] w-full relative">
                    <label htmlFor="">Phone</label>
                    <input type="tel" className="border-2 p-2 rounded-md outline-none w-full"/>
                    <span className="absolute text-sm top-0 right-0 text-red-500">This text field is required</span>
                </div>
            </div>

            <div className="flex flex-col space-y-2 relative w-full  md:w-full">
                <label htmlFor="">Your Message</label>
                <textarea name="" id="" className=" border-2 min-h-52 p-5" />
                <span className="absolute right-0 text-sm text-red-500">The text field is required</span>
            </div>

            <div className="flex justify-between lg:w-1/3 items-center mx-auto text-white pt-5">
                <button className="bg-green-700 px-3 rounded-md py-2">Send Message</button>
                <span className="text-black">or use</span>
                <a href="" className="px-3 py-2 rounded-md bg-red-900">Messenger</a>
            </div>
        </form>
        

        <Footer />
    </div>
  )
}

export default Contact