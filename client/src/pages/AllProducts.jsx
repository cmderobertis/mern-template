import React, { useState, useEffect } from "react"
import { Outlet, useOutletContext } from "react-router-dom"
import ProductList from "../components/ProductList"

const AllProducts = () => {
  const [products, removeFromDom] = useOutletContext()
  return (
    <div>
      {products && (
        <ProductList
          removeFromDom={removeFromDom}
          products={products}
        ></ProductList>
      )}
    </div>
  )
}

export default AllProducts
