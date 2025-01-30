

const Banner = () => {
  return (
    <section data-aos={"fade-up"} data-aos-delay={0}>
        <div className="bg-blue-950 flex lg:justify-center text-center flex-wrap p-[10%] lg:p-[5%] 
          lg:items-center py-16 text-2xl gap-10 text-white">
            <h1 className="text-3xl">Apply To Become Our City Police Officer!</h1>
            <div className="w-full flex justify-center" data-aos={"zoom-out"} data-aos-delay={600}>
              <a href="mailto:iamonuwacj@gmail.com"
                  className="bg-green-700 px-5 py-2 rounded-full block w-52 text-center">
                  Send a cv
              </a>
            </div>
        </div>
    </section>
  )
}

export default Banner