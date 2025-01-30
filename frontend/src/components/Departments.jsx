

const Departments = () => {
  return (
    <div className="w-full p-[10%] lg:p-[5%] bg-white flex flex-col">
        <h1 className="text-center pt-5 font-semibold lg:text-5xl sm:text-4xl text-3xl">Departments</h1>

        <div className="flex flex-wrap items-center justify-between mt-10
            space-y-5 lg:space-y-0">
            <div className="w-full md:w-[47%] lg:w-[23.5%] opacity-50 py-2">
                <div className="w-full bg-black h-[300px]">
                    <img src="" alt="" className="w-full"/>
                </div>
                <h3 className="hover:text-green-600"><a href="">Economic Development</a></h3>
            </div>
            <div className="w-full md:w-[47%] lg:w-[23.5%] opacity-50 py-2">
                <div className="w-full bg-black h-[300px]">
                    <img src="" alt="" className="w-full"/>
                </div>
                <h3 className="hover:text-green-600"><a href="">Finance Administration</a></h3>
            </div>
            <div className="w-full md:w-[47%] lg:w-[23.5%] opacity-50 py-2">
                <div className="w-full bg-black h-[300px]">
                    <img src="" alt="" className="w-full"/>
                </div>
                <h3 className="hover:text-green-600"><a href="">Fire Department</a></h3>
            </div>
            <div className="w-full md:w-[47%] lg:w-[23.5%] opacity-50 py-2">
                <div className="w-full bg-black h-[300px]">
                    <img src="" alt="" className="w-full"/>
                </div>
                <h3 className="hover:text-green-600"><a href="">Parks & Recreation</a></h3>
            </div>
        </div>
    </div>
  )
}

export default Departments