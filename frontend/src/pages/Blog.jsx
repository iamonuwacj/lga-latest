
import Card from '../components/Card'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

const Blog = () => {
  return (
    <>
        <Header />
        <div className="bg-green-300 h-80 w-full text-black p-[10%] lg:p-[5%] flex items-center">
            <h1 className="text-5xl font-semibold">News</h1>
        </div>

        <div className='lg:p-[5%] p-[10%] space-y-16'>
            <section className='md:flex space-y-16 md:space-y-0 md:flex-wrap md:justify-between'>
                <Card
                    title={"Preliminary Budget Workshop"}
                    author={"by Theresa Barnes"}
                    date={"Apr 21, 2019 at 12:05 pm"}
                />
                <Card
                    title={"Preliminary Budget Workshop"}
                    author={"by Theresa Barnes"}
                    date={"Apr 21, 2019 at 12:05 pm"}
                />
                <Card
                    title={"Transparency & Accountability"}
                    author={"by Theresa Barnes"}
                    date={"Apr 21, 2019 at 12:05 pm"}
                />
                <Card
                    title={"Supervision of the City's Fiscal Activities"}
                    author={"by Theresa Barnes"}
                    date={"Apr 21, 2019 at 12:05 pm"}
                />
            </section>

            {/* <div className="flex w-full justify-center items-center">
                <Link to={"/news"} reloadDocument className="bg-white border-green-700 w-fit px-5 rounded-md text-center border-2 py-2
                hover:bg-green-800 hover:text-white hover:scale-110 duration-200">View All Blog Post</Link>
            </div> */}
        </div>

        <Footer />
    </>
  )
}

export default Blog