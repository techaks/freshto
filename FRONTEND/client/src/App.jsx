
import { Route, Routes } from 'react-router-dom'
import Footer from './component/Footer'
import Navbar from './component/Navbar'
import Home from './Pages/Home'
import Error from './Pages/Error'
import { UseAppContext } from './context/AppContext'
import Login from './component/Login'
import AllProduct from './Pages/AllProduct'
import ScrollProgressBar from './component/Scroll'
import ProductCategory from './Pages/ProductCategory'
import ProductDetail from './component/ProductDetail'

const App = () => {
  const {showUserlogin} = UseAppContext();
  return (
    <div>

      <Navbar/>
       <ScrollProgressBar/>

      {
        showUserlogin && (<Login/>)
      }

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error/>} />
        <Route path='/products' element={<AllProduct/>}  />
        <Route path='/product/:category' element={<ProductCategory/>}/>
        <Route path='/product/:category/:id' element={<ProductDetail/>}/>



      </Routes>
     

     <Footer/>
    </div>
  )
}

export default App
