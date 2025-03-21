import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Image1 from "../assets/hero/women.png";
import Image2 from "../assets/hero/shopping.png";
import Image3 from "../assets/hero/sale.png";
import slide1 from '../assets/images/slide1.jpg'
import slide2 from '../assets/images/slide2.jpg'
import slide3 from '../assets/images/slide3.jpg'


const ImageList = [
    {
      id: 1,
      img: Image1,
      title: <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Official City Government <span className="font-bold text-4xl sm:text-6xl md:text-7xl lg:text-7xl">Information</span></h1>,
      bg: slide1,
      description: "Welcome to GoverFree, your online guide to government information and services. Here you can see all the announcements, publications, statistics, and consultations provided by the local government.",
    },
    {
      id: 2,
      img: Image2,
      title: <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">The City Council Meets at <span className="font-bold text-4xl sm:text-5xl md:text-7xl
      lg:text-7xl">City Hall</span></h1>,

      bg: slide2,
      description:
        "As a modern government of a quickly developing city, we provide the latest updates on jobs, healthcare, national security, business, defence, and citizenship as well as instant feedback from the Government Members.",
    },
    {
      id: 3,
      img: Image3,
      title: <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Parks & Recreation <span className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">Advisory Board Meeting</span></h1>,
      bg: slide3,
      description:
        "Our goal is to make available every bit of government news, updates, information, facts, and services. The Government Members closely communicate with citizens using GoverFree website and our social platforms.",
    },
  ];

const Hero = () => {

    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
    };


  return (
    <div className="w-full relative z-10" id="hero">
        <Slider {...settings}>
            {ImageList.map((data) =>
                <div key={data.id} className={`w-full`}
                    >
                    <div className="flex items-center flex-wrap-reverse w-full lg:p-[5%] p-[10%] sm:pb-0 
                        pb-10 h-[90vh]"
                        style={{backgroundImage: `url(${data.bg})`}}>
                        <div className="w-full md:w-1/2 space-y-4">
                            <h1 className="space-y-2">
                                {data.title}
                            </h1>

                            <p className="space-y-2">
                                {data.description}
                            </p>
                            <div className="mt-10">
                                <a href="/about-us" className="bg-red-800
                                    rounded-full py-2 px-4 hover:scale-105 hover:bg-blue-800">
                                    Learn More
                                </a>
                            </div>
                        </div>

                        {/* <div className="w-full md:w-1/2">
                            <img src={data.img} alt="" className="object-contain mx-auto h-[300px]
                            sm:h-[70vh] w-[300px] sm:w-[450px] sm:scale-105 lg:scale-125"/>
                        </div> */}
                    </div>
                </div>
            )}
        </Slider>
    </div>
  )
}

export default Hero