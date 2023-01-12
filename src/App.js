import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {StoreContext} from "./context.js";
import Nav from "./components/Nav";
import Products from "./components/Products";
import './App.css';

function App() {
    const  [state, dispatch] = React.useContext(StoreContext);
  
    const add = () => {
         dispatch({
             type:'add',
         })
    }
    
    const suppr = () => {
         dispatch({
             type:'suppr',
         })
    }
   
    return (
        
        <BrowserRouter>
            <Nav />
            <Routes>
                
                <Route path="product/:formation" element={<Products />} />
                
            </Routes>
        
        
        <div className="App">
        <p>{state.count}</p>
            <button onClick={add}>+</button>
            <button onClick={suppr}>-</button>
        </div>
        
        </BrowserRouter>
    );
}

export default App;
