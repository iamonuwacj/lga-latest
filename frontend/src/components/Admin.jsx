

const Admin = () => {
  return (
    <section className="lg:p-[5%] p-[10%] space-y-8 bg-gray-300">
        <header className="text-center text-4xl font-semibold">
            <h1>Our Projects</h1>
        </header>
        <div className="flex flex-wrap justify-between md:justify-start lg:justify-between
            gap-5">
            <div className="space-y-2 shadow-sm pb-3 w-full sm:w-[45%] md:w-[47%] lg:w-[23%] mb-10">
                <div className="bg-black sm:h-[300px] sm:w-[300px] md:w-[100%] h-[300px] w-full
                    lg:w-full">
                    <img src="" alt="" />
                </div>
                <h3>Samuel Chapman</h3>
                <p className="font-thin italic">Completed</p>
                <p className="font-thin">
                    Samuel Chapman brings a lot of extensive experience strategic...
                </p>
                {/* <div>
                    icons
                </div> */}
            </div>
            <div className="space-y-2 shadow-sm pb-3 w-full sm:w-[45%] md:w-[47%] lg:w-[23%] mb-10">
                <div className="bg-black sm:h-[300px] sm:w-[300px] md:w-[100%] h-[300px] w-full
                    lg:w-full">
                    <img src="" alt="" />
                </div>
                <h3>Stephen Rose</h3>
                <p className="font-thin italic">Ongoing</p>
                <p className="font-thin">
                    Stephen is one of our leading consultants who works with...
                </p>
                
            </div>
            <div className="space-y-2 shadow-sm pb-3 w-full sm:w-[45%] md:w-[47%] lg:w-[23%] mb-10">
                <div className="bg-black sm:h-[300px] sm:w-[300px] md:w-[100%] h-[300px] w-full
                    lg:w-full">
                    <img src="" alt="" />
                </div>
                <h3>Catherine White</h3>
                <p className="font-thin italic">completed</p>
                <p className="font-thin">
                    Catherine White is responsible for one of our most ambitious...
                </p>
                {/* <div>
                    icons
                </div> */}
            </div>
            <div className="space-y-2 shadow-sm pb-3 w-full sm:w-[45%] md:w-[47%] lg:w-[23%] mb-10">
                <div className="bg-black sm:h-[300px] sm:w-[300px] md:w-[100%] h-[300px] w-full
                    lg:w-full">
                    <img src="" alt="" />
                </div>
                <h3>Danielle Gray</h3>
                <p className="font-thin italic">Ongoing</p>
                <p className="font-thin">
                    Danielle Gray supervises our energy programs that introduce a new ...
                </p>
                {/* <div>
                    icons
                </div> */}
            </div>

        </div>

        <div className="flex w-full text-white justify-center">
            <a href="/projects" className="block w-52 bg-green-700 text-center rounded-full py-3">
                View All Projects
            </a>
        </div>
    </section>
  )
}

export default Admin