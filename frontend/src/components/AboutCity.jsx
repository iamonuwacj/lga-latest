import { buildStyles, CircularProgressbar } from "react-circular-progressbar"
import 'react-circular-progressbar/dist/styles.css'

const AboutCity = () => {

    const value = {
        first: 25,
        second: 50,
        third: 75
    }

  return (
    <section id="city" className="lg:p-[5%] p-[10%] bg-gray-300 flex flex-wrap w-full
        justify-between space-y-10">
        <div className="lg:w-[50%] w-full space-y-3 ">
            <h1 className="text-4xl mb-10">About Our City</h1>
            <div className="space-y-7">
                <p className="text-xl font-normal">
                    Our city is a thriving place where traditions and innovations merged
                    to create a better life for everyone!
                </p>

                <p className="font-thin">
                    Our city—ranked &quot;America&apos;s Most Livable City&quot;
                    several times—is a hub of top-notch cultural, educational, and
                    medical institutions. The second largest city in the state has shed
                    its image through a major cultural renaissance, emerging as a decidedly
                    modern city with nearly 90 exciting and diverse neighborhoods.
                </p>
            </div>

            <div className="flex gap-5  lg:px-5 justify-between
                md:w-2/3 md:mx-auto md:gap-16 lg:w-[90%] lg:mx-0">
                <div className="w-1/4 lg:w-full text-center text-sm">
                    <CircularProgressbar
                        className="mt-5 mb-2" value={value.first} text={`${value.first}%`}
                        circleRatio={1}
                        strokeWidth={1}
                        styles={buildStyles({
                            // rotation: 1 / 4 + 1 / 8,
                            strokeLinecap: "butt",
                            trailColor: "#eee"
                        })}
                    />
                    Economic Development
                </div>
                <div className="w-1/4 lg:w-full text-center text-sm">
                    <CircularProgressbar
                        className="mt-5 mb-2" value={value.second} text={`${value.second}%`}
                        circleRatio={1}
                        strokeWidth={1}
                        styles={buildStyles({
                            // rotation: 1 / 4 + 1 / 8,
                            strokeLinecap: "butt",
                            trailColor: "#eee"
                        })}
                    />
                    Finance Administration
                </div>
                <div className="w-1/4 lg:w-full text-center text-sm">
                    <CircularProgressbar
                        className="mt-5 mb-2" value={value.third} text={`${value.third}%`}
                        circleRatio={1}
                        strokeWidth={1}
                        styles={buildStyles({
                            // rotation: 1 / 4 + 1 / 8,
                            strokeLinecap: "butt",
                            trailColor: "#eee"
                        })}
                    />
                    Stability
                </div>
            </div>

            <div className="flex justify-center lg:justify-start text-white text-center">
                <a href="/about-us" className="hover:bg-green-600 mt-5 block bg-green-600 w-40 px-5 
                py-2 rounded-full">Learn More</a>
            </div>
        </div>

        <div className="lg:w-[45%] h-[60vh] md:px-20 lg:px-0">
            <video controls autoPlay className="w-full h-full">
                <source
                    type="video/mp4" src=""
                />
                <source
                    type="video/mp4" src=""
                />
                Your browser does not support the vido tag
            </video>
        </div>
    </section>
  )
}

export default AboutCity