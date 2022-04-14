import React,{createContext, useReducer} from 'react'
import Card from './components/Card'
import Cart from './components/Cart'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {reducer} from './components/reducer'

export const mainContext = createContext();

const initialState = {
  cartItem:0
}
function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const add = () =>{
    return dispatch({
      type:"ADD_TO_CART",
    })
  }
  return (
    <>
    <mainContext.Provider value={{...state,add}}>
      <Navbar/>
      <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Card/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
    </mainContext.Provider>
    </>
  )
}

export default App