
import Header from '../components/Header'
import Hero from '../components/Hero'
import LgaStats from '../components/LgaStats'
import Departments from '../components/Departments'
import Bills from '../components/Bills'
import AboutCity from '../components/AboutCity'
import Banner from '../components/Banner'
import Admin from '../components/Admin'
// import Government from '../components/Government'
import Citizens from '../components/Citizens'
import Support from '../components/Support'
import LatestNews from '../components/LatestNews'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'
import AboutChairman from '../components/AboutChairman'


const Home = () => {

    
  return (
    <div>
        <Header />
        <Hero />
        <LgaStats />
        <AboutChairman />
        <Bills />
        <Departments />
        <Banner />
        <Admin />
        {/* <Government /> */}
        <Citizens />
        <Support />
        <AboutCity />
        <LatestNews />
        {/* <NewsLetter /> */}
        <Footer />
    </div>
  )
}

export default Home