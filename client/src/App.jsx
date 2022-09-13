import React from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import "./App.css"
import Nav from "./components/Nav"
import Products from "./components/Products"
import AllProducts from "./pages/AllProducts"
import ShowProduct from "./pages/ShowProduct"
import Create from "./pages/Create"
import Update from "./pages/Update"

function App() {
  return (
    <div className="row justify-content-center">
      <Nav />
      <div className="col-lg-6 col-md-8 col-sm-10">
        <Routes>
          <Route path="/" element={<Navigate to="/products" />} />
          <Route path="/products" element={<Products />}>
            <Route index element={<AllProducts />} />
            <Route path="new" element={<Create />} />
            <Route path=":id" element={<ShowProduct />} />
            <Route path=":id/edit" element={<Update />} />
          </Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
