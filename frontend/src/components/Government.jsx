

const Government = () => {
    return (
      <section className="p-[10%] space-y-8 bg-gray-300">
            <header className="text-center space-y-5">
                <h1 className="text-3xl font-semibold">Our Government</h1>
                <p className="lg:w-2/3 mx-auto w-full">
                    Our government consists of different boards and departments that
                    work daily to make sure of the best conditions for our citizens and guests of the city.
                </p>
            </header>
            <div className="flex flex-wrap justify-between md:justify-start lg:justify-between
              gap-5">
              <div className="space-y-2 shadow-sm pb-3 w-full sm:w-[45%] md:w-[47%] lg:w-[23%] mb-10">
                  <div className="bg-black sm:h-[300px] sm:w-[300px] md:w-[100%] h-[300px] w-full
                      lg:w-full">
                      <img src="" alt="" />
                  </div>
                  <h3>City Council</h3>
                </div>
                <div className="space-y-2 shadow-sm pb-3 w-full sm:w-[45%] md:w-[47%] lg:w-[23%] mb-10">
                  <div className="bg-black sm:h-[300px] sm:w-[300px] md:w-[100%] h-[300px] w-full
                      lg:w-full">
                      <img src="" alt="" />
                  </div>
                  <h3>Agendas & Minutes</h3>

                </div>
                <div className="space-y-2 shadow-sm pb-3 w-full sm:w-[45%] md:w-[47%] lg:w-[23%] mb-10">
                  <div className="bg-black sm:h-[300px] sm:w-[300px] md:w-[100%] h-[300px] w-full
                      lg:w-full">
                      <img src="" alt="" />
                  </div>
                  <h3>Boards & Commissions</h3>
                </div>
                <div className="space-y-2 shadow-sm pb-3 w-full sm:w-[45%] md:w-[47%] lg:w-[23%] mb-10">
                  <div className="bg-black sm:h-[300px] sm:w-[300px] md:w-[100%] h-[300px] w-full
                      lg:w-full">
                      <img src="" alt="" />
                  </div>
                  <h3>Elections and Voting</h3>
                </div>

          </div>

          <div className="flex w-full text-white justify-center">
              <a href="" className="block w-52 bg-green-700 text-center rounded-full py-3">
                  View All Services
              </a>
          </div>
      </section>
    )
  }

  export default Government