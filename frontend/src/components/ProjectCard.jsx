

// eslint-disable-next-line react/prop-types
const ProjectCard = ({status, title, location, satrted, dateCompleted, desc}) => {
  return (
    <>
        <div className="bg-green-500 w-full lg:w-[48%] relative shadow-xl mb-10">
            <div className="w-full h-64">
                <img src="" alt="image" />
            </div>
            <p className="absolute top-2 right-3 bg-orange-400 py-1 px-5 rounded-full">{status}</p>
            <div className="flex flex-col p-3 space-y-3">
                <div className="flex justify-between items-center">
                    <h3 className="font-extrabold text-lg tracking-wider">{title}</h3>
                    <p>{satrted}</p>
                </div>
                <div className="space-y-3">
                    <p>{location}</p>
                    <p>{desc}</p>
                    <p>{dateCompleted}</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default ProjectCard