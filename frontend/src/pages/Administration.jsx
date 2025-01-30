import Header from "../components/Header"

const Administration = () => {
  return (
    <div>
        <Header />
        <div className="bg-green-300 h-96 w-full p-[10%] lg:p-[5%] flex items-center
            bg-[url(../../src/assets/images/bg-breadcrumbs.jpg)] text-white">
            <h1 className="text-5xl font-semibold">Administration</h1>
        </div>
    </div>
  )
}

export default Administration