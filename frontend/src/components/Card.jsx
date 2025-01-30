/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"


const Card = ({title, author , date}) => {
  return (
    <div className="w-full md:w-[48%] md:mb-10 ">
        <div className="bg-black w-full h-[400px] rounded-lg">
            <img src="" alt="" />
        </div>
        <div className="pt-4 space-y-5">
            <h3 className="hover:text-blue-700 text-2xl"><Link>{title}</Link></h3>
            <div className="flex gap-5 items-center">
                <p className="border-r-2 pr-3">{author}</p>
                <p className="border-r-2 pr-3">{date}</p>
                <p className="hover:text-blue-700"><Link>News</Link></p>
            </div>

            <p>
                Ann Smith, one of the most prominent journalists of our city,
                has recently spoken to our governor, John Porter. In this article,
                we publish the text version of the interview. To watch the video....
            </p>
        </div>
    </div>
  )
}

export default Card