import { Routes, Route} from 'react-router-dom'
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Blog from './pages/Blog'
import Carrers from './pages/Carrers'
import Administration from './pages/Administration'
import Governor from './pages/Governor'
import Policy from './pages/Policy'
import AboutUs from './pages/Aboutus'




function App() {

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
        <Route
          path='/carrers'
          element={<Carrers />}
        />
        <Route
          path='/administration'
          element={<Administration />}
        />
        <Route
          path='/about-governor'
          element={<Governor />}
        />
        <Route
          path='/privacy-policy'
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
      </Routes>
    </>
  )
}

export default App
