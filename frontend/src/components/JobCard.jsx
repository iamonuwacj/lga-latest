/* eslint-disable react/prop-types */


const JobCard = ({job, state}) => {
  return (
    <div className="relative flex items-center mb-8 justify-center shadow-md w-full md:w-[32%]
        bg-white  rounded-md h-32 p-5">
        <span className="absolute left-5 bg-blue-950 text-white px-3 top-3">{state}</span>
        <p className="text-green-500 text-left w-full text-2xl">{job}</p>
    </div>
  )
}

export default JobCard