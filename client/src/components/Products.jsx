import React, { useState, useEffect } from "react"
import { Outlet } from "react-router-dom"
import axios from "axios"

const Products = () => {
  const [products, setProducts] = useState(null)

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products")
      .then((response) => {
        setProducts(response.data)
      })
      .catch((error) => console.error(error))
  }, [])

  const removeFromDom = (productId) => {
    // setProducts(products.filter((p) => p._id != productId))
    console.log("not removed")
  }

  return (
    <div>
      <Outlet context={[products, setProducts, removeFromDom]} />
    </div>
  )
}

export default Products
