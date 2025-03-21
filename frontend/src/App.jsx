import { Routes, Route} from 'react-router-dom'
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from 'react';
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Blog from './pages/Blog'
import Carrers from './pages/Carrers'
import Administration from './pages/Administration'
import Governor from './pages/Governor'
import Policy from './pages/Policy'
import AboutUs from './pages/Aboutus'




function App() {

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/contact'
          element={<Contact />}
        />
        <Route
          path='/news'
          element={<Blog />}
        />
        {/* <Route
          path='/carrers'
          element={<Carrers />}
        /> */}
        <Route
          path='/administration'
          element={<Administration />}
        />
        <Route
          path='/about-governor'
          element={<Governor />}
        />
        <Route
          path='/projects'
          element={<Policy />}
        />
        <Route
          path='/about-us'
          element={<AboutUs />}
        />
        <Route
          path='/departments'
          element={<h1>Departments</h1>}
        />
        <Route
          path='/cms'
          element={<h1>CMS</h1>}
        />
      </Routes>
    </>
  )
}

export default App
