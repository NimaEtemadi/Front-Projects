import { useState, useEffect } from 'react'  
import './App.css' 
import { Link, useRoutes } from "react-router-dom";
import ContextData from './Context/Context'
import routes from './routes';
import { AiOutlineShoppingCart } from 'react-icons/ai'
function App() {
  const [ UserCart,setUserCart]=useState([])
  const router = useRoutes(routes);


  return (
    <ContextData.Provider value={{
      UserCart,
      setUserCart
    }}>
    
   
    <div className='app'>

    <header>
    <Link className='logo' to={'/'}>Sabzlearn Shop</Link>
    <Link to='/cart'>
      <AiOutlineShoppingCart className='shop-icon' />
      <span>{UserCart.length}</span>
    </Link>

  </header>

   {router}

      <footer>
        <a target={'_blank'} href='https://sabzlearn.ir'>Sabzlearn.ir</a>  
      </footer>
    </div>
 </ContextData.Provider>

  )
}

export default App
