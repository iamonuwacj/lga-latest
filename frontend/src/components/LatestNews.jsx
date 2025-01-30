import Card from "./Card"


const LatestNews = () => {
  return (
    <section className="lg:p-[5%] p-[10%] space-y-16">
        
        <header className="text-center text-4xl">
            <h2>Latest News</h2>
        </header>

        <div className="flex flex-wrap w-full justify-between space-y-10 md:space-y-0">
            <Card
                title={"Interview With the Governor"}
                author={"by Theresa Barnes"}
                date={"Apr 21, 2019 at 12:05 pm"}
            />
            <Card 
                title={"Freedom of Speech: Essential Principles"}
                author={"by Theresa Barnes"}
                date={"Apr 21, 2019 at 12:05 pm"}
            />
        </div>

        <div className="flex w-full justify-center items-center">
            <a href="/news" className="bg-white border-green-700 w-fit px-5 rounded-md text-center border-2 py-2
            hover:bg-green-800 hover:text-white hover:scale-110 duration-200">View All Blog Post</a>
        </div>
    </section>
  )
}

export default LatestNews