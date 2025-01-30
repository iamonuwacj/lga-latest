

const Bills = () => {
  return (
    <section id="bills" className="lg:px-[5%]  px-[10%] lg:py-[6%] py-[20%] bg-blue-950 flex flex-wrap w-full
        justify-between  text-white">
        <div className="lg:w-[23.5%] md:w-[47%] w-full md:space-y-3">
            <div className="flex items-center gap-5">
                <img src="" alt="icon" className="text-black"/>
                <h3 className="text-2xl">Pay Bills Online</h3>
            </div>
            <p className="text-gray-400">
                We have introduced a digital platform that allows citizens to pay their bills
                in a few clicks.
            </p>
        </div>
        <div className="lg:w-[23.5%] md:w-[47%] w-full space-y-3 mt-10 lg:mt-0 md:mt-0">
            <div className="flex items-center gap-5">
                <img src="" alt="icon" className="text-black"/>
                <h3 className="text-2xl">Report a Concern</h3>
            </div>
            <p className="text-gray-400">
                If you have a concern about our city, you can use our online
                tool to easily report it to us.
            </p>
        </div>
        <div className="lg:w-[23.5%] md:w-[47%] w-full space-y-3 mt-10 lg:mt-0">
            <div className="flex items-center gap-5">
                <img src="" alt="icon" className="text-black"/>
                <h3 className="text-2xl">Apply For Jobs</h3>
            </div>
            <p className="text-gray-400">
                The residents of the city can also use our website to apply
                for jobs or browse our vacancy catalog.
            </p>
        </div>
        <div className="lg:w-[23.5%] md:w-[47%] w-full space-y-3 mt-10 lg:mt-0">
            <div className="flex items-center gap-5">
                <img src="" alt="icon" className="text-black"/>
                <h3 className="text-2xl">Open Meetings Portal</h3>
            </div>
            <p className="text-gray-400">
                This portal shows all meetings of the City Council, including Committee meetings.
            </p>
        </div>
    </section>
  )
}

export default Bills