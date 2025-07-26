
import { Route, Routes } from 'react-router-dom'
import Footer from './component/Footer'
import Navbar from './component/Navbar'
import Home from './Pages/Home'
import Error from './Pages/Error'

const App = () => {
  return (
    <div>

      <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error/>} />



      </Routes>
     

     <Footer/>
    </div>
  )
}

export default App
