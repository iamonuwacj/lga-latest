import Header from "../components/Header"

const Administration = () => {
  return (
    <div>
        <Header />
        <div className="bg-green-300 h-96 w-full p-[10%] lg:p-[5%] flex items-center
            bg-[url(../../src/assets/images/bg-breadcrumbs.jpg)] text-white">
            <h1 className="text-5xl font-semibold">Administration</h1>
        </div>

        <div className="flex flex-wrap w-full pt-[10%] px-[5%] h-fit
            space-y-10 lg:space-y-0 justify-between pb-[5%]">
            <div className="w-full text-center space-y-3 lg:w-[47%]">
                <div className=" w-full h-96 md:w-5/6 lg:w-full mx-auto">
                    <img src="" alt="" className="bg-gray-200 w-full h-full"/>
                </div>
                <h1 className="text-3xl">Chairman</h1>
            </div>
            <div className="w-full text-center space-y-3 lg:w-[47%]">
                <div className="w-full h-96 md:w-5/6 mx-auto lg:w-full">
                    <img src="" alt="" className="bg-gray-200 w-full h-full "/>
                </div>
                <h1 className="text-3xl">Vice Chairman</h1>
            </div>
        </div>

        <div className="flex flex-wrap justify-between items-center px-[5%]">
            <div className="lg:w-[30%] w-full  md:w-[47%] shadow-lg h-full mb-10">
                <img src="" alt=""
                    className="bg-gray-200 w-full h-96"
                />
                <h2 className="text-2xl">Name:</h2>
                <span>Job Position</span>
            </div>
            <div className="lg:w-[30%] w-full  md:w-[47%] shadow-lg h-full mb-10">
                <img src="" alt=""
                    className="bg-gray-200 w-full h-96"
                />
                <h2 className="text-2xl">Name:</h2>
                <span>Job Position</span>
            </div>
            <div className="lg:w-[30%] w-full  md:w-[47%] shadow-lg h-full mb-10">
                <img src="" alt=""
                    className="bg-gray-200 w-full h-96"
                />
                <h2 className="text-2xl">Name:</h2>
                <span>Job Position</span>
            </div>
            <div className="lg:w-[30%] w-full  md:w-[47%] shadow-lg h-full mb-10">
                <img src="" alt=""
                    className="bg-gray-200 w-full h-96"
                />
                <h2 className="text-2xl">Name:</h2>
                <span>Job Position</span>
            </div>
            <div className="lg:w-[30%] w-full  md:w-[47%] shadow-lg h-full mb-10">
                <img src="" alt=""
                    className="bg-gray-200 w-full h-96"
                />
                <h2 className="text-2xl">Name:</h2>
                <span>Job Position</span>
            </div>
            <div className="lg:w-[30%] w-full  md:w-[47%] shadow-lg h-full mb-10">
                <img src="" alt=""
                    className="bg-gray-200 w-full h-96"
                />
                <h2 className="text-2xl">Name:</h2>
                <span>Job Position</span>
            </div>

        </div>

        <div className="mt-10 pt-10">
            <header className="text-center">
                <h1 className="text-3xl">Legislative section</h1>
            </header>
            
            <div className="flex flex-wrap justify-between items-center px-[5%] pt-10">
                <div className="lg:w-[30%] w-full  md:w-[47%] shadow-lg h-full mb-10">
                    <img src="" alt=""
                        className="bg-gray-200 w-full h-96"
                    />
                    <h2 className="text-2xl">Name:</h2>
                    <span>Job Position</span>
                </div>
                <div className="lg:w-[30%] w-full  md:w-[47%] shadow-lg h-full mb-10">
                    <img src="" alt=""
                        className="bg-gray-200 w-full h-96"
                    />
                    <h2 className="text-2xl">Name:</h2>
                    <span>Job Position</span>
                </div>
                <div className="lg:w-[30%] w-full  md:w-[47%] shadow-lg h-full mb-10">
                    <img src="" alt=""
                        className="bg-gray-200 w-full h-96"
                    />
                    <h2 className="text-2xl">Name:</h2>
                    <span>Job Position</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Administration