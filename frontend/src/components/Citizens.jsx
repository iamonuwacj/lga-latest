

const Citizens = () => {
  return (
    <section className="px-[10%] py-[20%] lg:p-[5%]" data-aos={"fade-up"} data-aos-delay={600}>
        <div className="space-y-16">
            <header className="text-center font-semibold text-3xl">
                <h1>What Our Citizens Say</h1>
            </header>

            <div className="flex w-full flex-wrap justify-between space-y-8 md:space-y-0">
                <div className="md:w-[32%] space-y-6 w-full">
                    <div className="flex gap-10 items-center">
                        <div className="w-16 h-16 rounded-full bg-black">
                            <img src="" alt="avatar" />
                        </div>
                        <div>
                            <h3 className="text-xl">Harold Barnett</h3>
                            <span className="font-thin italic">Entrepreneur</span>
                        </div>
                    </div>
                    <p className="text-sm">
                        My company opened a branch office here 2 years ago and since then
                        we’ve been experiencing an amazing atmosphere of this city for doing
                        business. The local government has helped us a lot.
                    </p>
                </div>
                <div className="md:w-[32%] space-y-6 w-full">
                    <div className="flex gap-10 items-center">
                        <div className="w-16 h-16 rounded-full bg-black">
                            <img src="" alt="avatar" />
                        </div>
                        <div>
                            <h3 className="text-xl">Bill Warner</h3>
                            <span className="font-thin italic">Security Officer</span>
                        </div>
                    </div>
                    <p className="text-sm">
                        Our city government has always taken care of citizens’ well-being,
                        which is very important to us. The city also pays attention to creating
                        proper conditions for non-qualified employees.
                    </p>
                </div>
                <div className="md:w-[32%] space-y-6 w-full">
                    <div className="flex gap-10 items-center">
                        <div className="w-16 h-16 rounded-full bg-black">
                            <img src="" alt="avatar" />
                        </div>
                        <div>
                            <h3 className="text-xl">Kelly McMillan</h3>
                            <span className="font-thin italic">Housewife</span>
                        </div>
                    </div>
                    <p className="text-sm">
                        As a mother of 3 children and a lifelong citizen of this city,
                        I truly appreciate what our FederalGov has been doing for families
                        with children, including a newly introduced newborn support program.
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Citizens