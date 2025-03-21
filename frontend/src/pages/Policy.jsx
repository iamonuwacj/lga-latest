import { useState } from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import ProjectCard from "../components/ProjectCard"


const modal = [
    {title: "All Projects"},
    {title: "Ongoing Projects"},
    {title: "Pending Projects"},
    {title: "Completed Projects"},
]


const Policy = () => {

    // const [completed, setCompleted] = useState(true)
    // const [ongoing, setOngoing] = useState(false)
    // const [pending, setPending] = useState(false)
    // const [allProjects, setAllProjects] = useState(false)

    const [hoverState, setHoverState] = useState({
        completed: false,
        ongoing: false,
        pending: false,
        allProjects: true
    })


  return (
    <div>
        <Header />
        <div className="bg-green-300 h-96 w-full p-[10%] lg:p-[5%] flex items-center
            bg-[url(../../src/assets/images/bg-breadcrumbs.jpg)] text-white">
            <h1 className="text-5xl font-semibold">Projects</h1>
        </div>

        {/* <div className="p-[10%] lg:p-[5%] space-y-10">
            <div className="space-y-5">
                <header className="font-bold text-2xl"><h2>General Information</h2></header>
                <p>
                    Welcome to our Privacy Policy page! When you use our web site services,
                    you trust us with your information. This Privacy Policy is meant to help 
                    you understand what data we collect, why we collect it, and what we do with it. 
                    When you share information with us, we can make our services even better for you. 
                    For instance, we can show you more relevant search results and ads, help you connect 
                    with people or to make sharing with others quicker and easier. As you use 
                    our services, we want you to be clear how we’re using information and the ways 
                    in which you can protect your privacy. This is important; we hope you 
                    will take time to read it carefully. Remember, you can find controls to 
                    manage your information and protect your privacy and security. We’ve tried to 
                    keep it as simple as possible.
                </p>
            </div>
            <div className="space-y-5">
                <header className="font-bold text-2xl">
                    <h2>
                        Right to Access, Correct and Delete Data and to Object to Data Processing
                    </h2>
                </header>
                <p>
                    Our customers have the right to access, correct and delete personal 
                    data relating to them, and to object to the processing of such data, 
                    by addressing a written request, at any time. The Company makes every effort 
                    to put in place suitable precautions to safeguard the security and privacy of 
                    personal data, and to prevent it from being altered, corrupted, destroyed or accessed
                     by unauthorized third parties. However, the Company does not control each and every 
                     risk related to the use of the Internet, and therefore warns the Site users of 
                     the potential risks involved in the functioning and use of the Internet. 
                     The Site may include links to other web sites or other internet sources. As the 
                     Company cannot control these web sites and external sources, the Company cannot be 
                     held responsible for the provision or display of these web sites and external 
                     sources, and may not be held liable for the content, advertising, products, 
                     services or any other material available on or from these web sites or external sources.
                </p>
            </div>
            <div className="space-y-5">
                <header className="font-bold text-2xl">
                    <h2>
                        Management of Personal Data
                    </h2>
                </header>
                <p>
                   You can view or edit your personal data online for many of our 
                   services. You can also make choices about our collection and use of your data.
                    How you can access or control your personal data will depend on which services
                    you use. You can choose whether you wish to receive promotional communications
                    from our web site by email, SMS, physical mail, and telephone. If you receive 
                    promotional email or SMS messages from us and would like to opt out, you can 
                    do so by following the directions in that message. You can also make choices 
                    about the receipt of promotional email, telephone calls, and postal mail by 
                    visiting and signing into Company Promotional Communications Manager, 
                    which allows you to update contact information, manage contact preferences, 
                    opt out of email subscriptions, and choose whether to share your contact 
                    information with our partners. These choices do not apply to mandatory 
                    service communications that are part of certain web site services.
                </p>
            </div>
            <div className="space-y-5">
                <header className="font-bold text-2xl">
                    <h2>
                    Information We Collect
                    </h2>
                </header>
                <p>
                    Our store collects data to operate effectively and provide you the 
                    best experiences with our services. You provide some of this data directly, 
                    such as when you create a personal account. We get some of it by recording how 
                    you interact with our services by, for example, using technologies like cookies, 
                    and receiving error reports or usage data from software running on your device. 
                    We also obtain data from third parties (including other companies). For example, 
                    we supplement the data we collect by purchasing demographic data from other c
                    ompanies. We also use services from other companies to help us determine a 
                    location based on your IP address in order to customize certain services to
                    your location. The data we collect depends on the services and features you use.
                </p>
            </div>
            <div className="space-y-5">
                <header className="font-bold text-2xl">
                    <h2>
                        How We Use Your Information
                    </h2>
                </header>
                <p>
                    Our web site uses the data we collect for three basic purposes: to
                    operate our business and provide (including improving and personalizing)
                    the services we offer, to send communications, including promotional 
                    communications, and to display advertising. In carrying out these purposes,
                    we combine data we collect through the various web site services you use 
                    to give you a more seamless, consistent and personalized experience. However, 
                    to enhance privacy, we have built in technological and procedural safeguards 
                    designed to prevent certain data combinations. For example, we store data 
                    we collect from you when you are unauthenticated (not signed in) separately 
                    from any account information that directly identifies you, such as your 
                    name, email address or phone number.
                </p>
            </div>


        </div> */}

        <div className="w-full lg:px-[5%] px-[10%] py-3 flex flex-col space-y-10">
            <ul className="flex items-center gap-9 w-full lg:w-[80%] mx-auto lg:justify-between cursor-pointer">
                <li className={`hover:text-green-300 hover:underline ${hoverState.allProjects && "text-green-400 "} text-sm md:text-lg`} onClick={() => setHoverState({allProjects:true, pending:false, completed:false, ongoing: false})}>All Projects</li>
                <li className={`hover:text-green-300 hover:underline ${hoverState.ongoing && "text-green-400 "} text-sm md:text-lg`} onClick={() => setHoverState({allProjects:false, pending:false, completed:false, ongoing: true})}>Ongoing Projects</li>
                <li className={`hover:text-green-300 hover:underline ${hoverState.completed && "text-green-400 "} text-sm md:text-lg`} onClick={() => setHoverState({allProjects:false, pending:false, completed:true, ongoing: false})}>Completed Projects</li>
                <li className={`hover:text-green-300 hover:underline ${hoverState.pending && "text-green-400 "} text-sm md:text-lg`} onClick={() => setHoverState({allProjects:false, pending:true, completed:false, ongoing: false})}>Pending Projects</li>
                {/* {
                    modal.map((item, index) => <li key={index} className="text-sm md:text-lg hover:text-green-400 hover:underline">
                        {item.title}
                    </li>
                    )
                } */}
            </ul>

            {/* All projects */}
            {
                hoverState.allProjects && (
                <div className="w-full lg:p-8 flex flex-wrap justify-between transition-all overflow-hidden">
                    <ProjectCard
                        status={"completed"}
                        dateCompleted={"2020"}
                        satrted={"2019"}
                        title={"Dual fly over"}
                        desc={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni maiores, minus vitae nisi, ex, sint nihil reiciendis officia consequatur cupiditate in sequi laborum qui? Dolor repudiandae nostrum nemo voluptas veritatis."}
                    />
                    <ProjectCard
                        status={"pending"}
                        dateCompleted={"2020"}
                        satrted={"2019"}
                        title={"Dual fly over"}
                        desc={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni maiores, minus vitae nisi, ex, sint nihil reiciendis officia consequatur cupiditate in sequi laborum qui? Dolor repudiandae nostrum nemo voluptas veritatis."}
                    />
                    <ProjectCard
                        status={"completed"}
                        dateCompleted={"2020"}
                        satrted={"2019"}
                        title={"Dual fly over"}
                        desc={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni maiores, minus vitae nisi, ex, sint nihil reiciendis officia consequatur cupiditate in sequi laborum qui? Dolor repudiandae nostrum nemo voluptas veritatis."}
                    />
                    <ProjectCard
                        status={"ongoing"}
                        dateCompleted={"2020"}
                        satrted={"2019"}
                        title={"Dual fly over"}
                        desc={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni maiores, minus vitae nisi, ex, sint nihil reiciendis officia consequatur cupiditate in sequi laborum qui? Dolor repudiandae nostrum nemo voluptas veritatis."}
                    />
                    <ProjectCard
                        status={"ongoing"}
                        dateCompleted={"2020"}
                        satrted={"2019"}
                        title={"Dual fly over"}
                        desc={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni maiores, minus vitae nisi, ex, sint nihil reiciendis officia consequatur cupiditate in sequi laborum qui? Dolor repudiandae nostrum nemo voluptas veritatis."}
                    />
                    <ProjectCard
                        status={"ongoing"}
                        dateCompleted={"2020"}
                        satrted={"2019"}
                        title={"Dual fly over"}
                        desc={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni maiores, minus vitae nisi, ex, sint nihil reiciendis officia consequatur cupiditate in sequi laborum qui? Dolor repudiandae nostrum nemo voluptas veritatis."}
                    />
                </div>
                )
            }

            {/* completed projects */}
            {
                hoverState.completed && <div className="w-full lg:p-8 flex flex-wrap justify-between">
                    <ProjectCard 
                        dateCompleted={2020}
                        satrted={2018}
                        desc={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni maiores, minus vitae nisi, ex, sint nihil reiciendis officia consequatur cupiditate in sequi laborum qui? Dolor repudiandae nostrum nemo voluptas veritatis."}
                        title={"Dual fly over"}
                    />
                    <ProjectCard 
                        dateCompleted={2020}
                        satrted={2018}
                        desc={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni maiores, minus vitae nisi, ex, sint nihil reiciendis officia consequatur cupiditate in sequi laborum qui? Dolor repudiandae nostrum nemo voluptas veritatis."}
                        title={"Dual fly over"}
                    />
                </div>
            }

            {/* pending projects */}
            {
                hoverState.pending && <div  className="w-full lg:p-8 flex flex-wrap justify-between">
                    <ProjectCard 
                        dateCompleted={2020}
                        satrted={2018}
                        desc={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni maiores, minus vitae nisi, ex, sint nihil reiciendis officia consequatur cupiditate in sequi laborum qui? Dolor repudiandae nostrum nemo voluptas veritatis."}
                        title={"Dual fly over"}
                    />
                    <ProjectCard 
                        dateCompleted={2020}
                        satrted={2018}
                        desc={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni maiores, minus vitae nisi, ex, sint nihil reiciendis officia consequatur cupiditate in sequi laborum qui? Dolor repudiandae nostrum nemo voluptas veritatis."}
                        title={"Dual fly over"}
                    />
                </div>
            }

            {/* Ongoing Projects */}
            {
                hoverState.ongoing && <div className="w-full lg:p-8 flex flex-wrap justify-between">
                    <ProjectCard
                        dateCompleted={2020}
                        satrted={2018}
                        desc={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni maiores, minus vitae nisi, ex, sint nihil reiciendis officia consequatur cupiditate in sequi laborum qui? Dolor repudiandae nostrum nemo voluptas veritatis."}
                        title={"Dual fly over"}
                    />
                    <ProjectCard
                        dateCompleted={2020}
                        satrted={2018}
                        desc={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni maiores, minus vitae nisi, ex, sint nihil reiciendis officia consequatur cupiditate in sequi laborum qui? Dolor repudiandae nostrum nemo voluptas veritatis."}
                        title={"Dual fly over"}
                    />
                </div>
            }

        </div>
        <Footer />
    </div>
  )
}

export default Policy