import { User, Users, CalendarDays } from "lucide-react"

const LgaStats = () => {
  return (
    <section className="w-full bg-gray-300 lg:p-[5%] p-[10%] z-10 relative" data-aos={"zoom-in"} data-aos-delay={0}>
        <div className="flex w-full justify-between items-center flex-wrap">
            <div className="flex justify-between flex-wrap mt-10 space-y-4">
                <div className="w-full md:w-1/4 flex items-center justify-center flex-col space-y-1">
                    <CalendarDays className="text-green-500" size={50}/>
                    <p className="font-bold pt-2">1298</p>
                    <p className="pb-3">Year of foundation</p>
                    <div className="h-1 w-1/5 bg-green-600"/>
                    <p className="text-center text-gray-600 pt-3">
                        Since the city foundation, our government and community have been
                        developing the place where we all live.
                    </p>

                </div>
                <div className="md:w-1/4 w-full flex items-center justify-center flex-col space-y-1">
                    <Users className="text-green-500" size={50}/>
                    <p className="font-bold pt-2">12368K</p>
                    <p className="pb-3">Total Population</p>
                    <div className="h-1 w-1/5 bg-green-600"/>
                    <p className="text-center text-gray-600 pt-3">
                        Thanks to the smart demographic management, our government achieved
                        better conditions for the population.
                    </p>

                </div>
                <div className="md:w-1/4 w-full flex items-center justify-center flex-col space-y-1">
                    <User className="text-green-500" size={50}/>
                    <p className="font-bold pt-2">1298</p>
                    <p className="pb-3">Daily Visitors</p>
                    <div className="h-1 w-1/5 bg-green-600"/>
                    <p className="text-center text-gray-600 pt-3">
                        Our website is browsed daily by more than a thousand
                        visitors including the numerous city guests.
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default LgaStats