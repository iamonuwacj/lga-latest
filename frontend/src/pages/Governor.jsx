import Footer from "../components/Footer"
import Header from "../components/Header"
import LatestNews from "../components/LatestNews"

const Governor = () => {
  return (
    <div>
        <Header />
        <div className="bg-green-300 h-96 w-full p-[10%] lg:p-[5%] flex items-center
            bg-[url(../../src/assets/images/bg-breadcrumbs.jpg)] text-white">
            <h1 className="text-5xl font-semibold">About the Chairman</h1>
        </div>

        <div className="flex w-full flex-wrap justify-between p-[10%] lg:p-[5%] space-y-10 md:space-y-0">
            <div className="md:w-[32%] w-full h-64 bg-black">
                <img src="" alt="" />
            </div>

            <div className="md:w-[32%] w-full space-y-10">
                <header className="space-y-5">
                    <h1>John Kumasi</h1>
                    <span className="block">Chairman</span>
                </header>
                <p>
                    Sunt valebates dignus superbus, mirabilis particulaes.
                    Abnobas ire in placidus palatium! Resistere sensim ducunt ad regius
                    zirbus. Pol, a bene silva, uria! Ubi est placidus magister? Adelphiss
                    sunt habenas de altus elevatus. Zirbus neuter devirginato est.
                    Itineris tramitem tolerares, tanquam teres.
                </p>
            </div>

            <div className="md:w-[32%] w-full space-y-10">
                <div className="text-right">social media icons</div>
                <div className="space-y-8">
                    <div className="w-full">
                        <p className="flex items-center justify-between"><span>Government</span><span>90%</span></p>
                        <div className="border-2 w-[90%] border-red-400"/>
                    </div>
                    <div>
                        <p className="flex items-center justify-between"><span>Government</span><span>65%</span></p>
                        <div className="border-2 w-[65%] border-red-400"/>
                    </div>
                    <div>
                        <p className="flex items-center justify-between"><span>Government</span><span>100%</span></p>
                        <div className="border-2 w-[100%] border-red-400"/>
                    </div>
                   
                </div>
            </div>
        </div>

        <div className="p-[10%] lg:p-[5%] bg-gray-300">
            <header className="text-center mb-20 text-3xl"><h1>John&apos;s Projects</h1></header>
            <div className="flex flex-wrap justify-between space-y-8 md:space-y-0">
                <div className="md:w-[32%] w-full bg-black opacity-50 h-64 rounded-lg">
                    <img src="" alt="" />
                </div>
                <div className="md:w-[32%] w-full bg-black opacity-50 h-64 rounded-lg">
                    <img src="" alt="" />
                </div>
                <div className="md:w-[32%] w-full bg-black opacity-50 h-64 rounded-lg">
                    <img src="" alt="" />
                </div>
            </div>
        </div>

        <LatestNews />
        <Footer />
    </div>
  )
}

export default Governor