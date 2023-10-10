import React, { useEffect } from "react";

import { Header } from './components'
import { Home, Cart } from "./pages";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <Router>
      <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App

// (state) => {
//   return {
//     items: state.pizzas.items
//   }
// }