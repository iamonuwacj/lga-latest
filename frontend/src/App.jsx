import { Routes, Route} from 'react-router-dom'
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Blog from './pages/Blog'
import Carrers from './pages/Carrers'




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
      </Routes>
    </>
  )
}

export default App
