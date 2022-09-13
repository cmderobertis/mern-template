import React, { useEffect, useState } from "react"
import axios from "axios"
import { useParams, NavLink, useNavigate } from "react-router-dom"

const ShowProduct = () => {
  const { id } = useParams()
  const [product, setProduct] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products/" + id)
      .then((response) => setProduct(response.data))
      .catch((error) => console.error(error))
  }, [])

  const deleteProduct = (productId) => {
    axios
      .delete("http://localhost:8000/api/products/" + productId)
      .then((response) => {
        navigate("/products")
      })
      .catch((error) => console.error(error))
  }

  return (
    <div className="mt-3">
      <div className="col">
        {product && (
          <div className="card">
            <div className="card-body">
              <h4>{product.title}</h4>
              <p>Price: ${product.price}</p>
              <p>Description: {product.description}</p>
              <div className="row justify-content-between">
                <div className="col-auto">
                  <NavLink
                    className="btn btn-success"
                    to={"/products/" + product._id + "/edit"}
                  >
                    Edit
                  </NavLink>
                </div>
                <div className="col-auto">
                  <button
                    className="btn btn-danger"
                    onClick={(e) => {
                      deleteProduct(product._id)
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ShowProduct
