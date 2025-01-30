import { Mail } from 'lucide-react'

const NewsLetter = () => {
  return (
    <section className="bg-green-600 md:p-[5%] w-full text-center p-[10%]">
        <div className="flex justify-center items-center w-full md:w-3/4 mx-auto flex-wrap space-y-6 md:space-y-0">
            <h2 className="md:w-[50%] w-full text-white text-xl">Subscribe to <span className="text-3xl">News and Updates</span></h2>
            <div className="md:w-[50%] w-full bg-white rounded-full py-4 text-green-600 relative group">
                <input type="text" placeholder="Enter your email" className="w-full outline-none px-5
                border-none bg-transparent"/>
                <Mail className='absolute top-4 right-4 group-focus:hidden'/>
                <span className='absolute text-sm text-red-600 top-0 left-1/4 lg:left-1/3'>This field is required</span>
            </div>
        </div>
    </section>
  )
}

export default NewsLetter