import React, { useState } from 'react'
import {Provider} from 'react-redux'
import Carousal from './components/Carousal'
import ListGroup from './components/ListGroup'
import Navbar from './components/Navbar'
import store from './store/store'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import CartPage from './pages/CartPage'
import Electronics from './components/Electronics'
import Jwellary from './components/Jwellary'

function App() {

  const [cart , setCart] = useState([])

function addTocart(item){
  setCart([...cart , item])
}


  return (
    <>
    <Router>
    <Provider store={store}>
      <Navbar />
      <Routes>
        <Route path={"/"} element ={
         <>
           <Carousal/>
           <ListGroup />
         </>
        }/>
        <Route path={"/cart"} element={<CartPage/>}/>
        <Route path={"/Electronics"} element={<Electronics/>}/>
        <Route path={"/jwellary"} element={<Jwellary/>
}/>
        

   
    </Routes>
    </Provider>
    </Router>
    </>
  )
}

export default App