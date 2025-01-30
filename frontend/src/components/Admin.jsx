

const Admin = () => {
  return (
    <section className="lg:p-[5%] p-[10%] space-y-8">
        <header className="text-center text-3xl font-semibold">
            <h1>Our Administration</h1>
        </header>
        <div className="flex flex-wrap justify-between md:justify-start lg:justify-between
            gap-5">
            <div className="space-y-2 shadow-sm pb-3 w-full sm:w-[45%] md:w-[47%] lg:w-[23%] mb-10">
                <div className="bg-black sm:h-[300px] sm:w-[300px] md:w-[100%] h-[300px] w-full
                    lg:w-full">
                    <img src="" alt="" />
                </div>
                <h3>Samuel Chapman</h3>
                <p className="font-thin italic">Chief Executive</p>
                <p className="font-thin">
                    Samuel Chapman brings a lot of extensive experience strategic
                    policy development and necessary skills to the role of The Chief Executive.
                </p>
                <div>
                    icons
                </div>
            </div>
            <div className="space-y-2 shadow-sm pb-3 w-full sm:w-[45%] md:w-[47%] lg:w-[23%] mb-10">
                <div className="bg-black sm:h-[300px] sm:w-[300px] md:w-[100%] h-[300px] w-full
                    lg:w-full">
                    <img src="" alt="" />
                </div>
                <h3>Stephen Rose</h3>
                <p className="font-thin italic">Principal Consultant</p>
                <p className="font-thin">
                    Stephen is one of our leading consultants who works with
                    the community of our city to provide the required help and assistance.
                </p>
                <div>
                    icons
                </div>
            </div>
            <div className="space-y-2 shadow-sm pb-3 w-full sm:w-[45%] md:w-[47%] lg:w-[23%] mb-10">
                <div className="bg-black sm:h-[300px] sm:w-[300px] md:w-[100%] h-[300px] w-full
                    lg:w-full">
                    <img src="" alt="" />
                </div>
                <h3>Catherine White</h3>
                <p className="font-thin italic">Program Director - Housing</p>
                <p className="font-thin">
                    Catherine White is responsible for one of our most ambitious
                    housing programs covering citizens of all social groups and ages.
                </p>
                <div>
                    icons
                </div>
            </div>
            <div className="space-y-2 shadow-sm pb-3 w-full sm:w-[45%] md:w-[47%] lg:w-[23%] mb-10">
                <div className="bg-black sm:h-[300px] sm:w-[300px] md:w-[100%] h-[300px] w-full
                    lg:w-full">
                    <img src="" alt="" />
                </div>
                <h3>Danielle Gray</h3>
                <p className="font-thin italic">Strategic Director - Energy</p>
                <p className="font-thin">
                    Danielle Gray supervises our energy programs that introduce a new 
                    approach to electricity and heating distribution and management.
                </p>
                <div>
                    icons
                </div>
            </div>

        </div>

        <div className="flex w-full text-white justify-center">
            <a href="" className="block w-52 bg-green-700 text-center rounded-full py-3">
                View All Team
            </a>
        </div>
    </section>
  )
}

export default Admin