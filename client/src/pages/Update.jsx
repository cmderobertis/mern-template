import React, { useEffect, useState } from "react"
import axios from "axios"
import { useParams, useNavigate } from "react-router-dom"
import ProductForm from "../components/ProductForm"
import DeleteButton from "../components/DeleteButton"

const Update = () => {
  const [product, setProduct] = useState(null)
  const navigate = useNavigate()
  const { id } = useParams()
  const [errors, setErrors] = useState([])

  useEffect(() => {
    axios.get("http://localhost:8000/api/products/" + id).then((response) => {
      setProduct(response.data)
    })
  }, [])

  const updateProduct = (product) => {
    axios
      .put("http://localhost:8000/api/products/" + id, product)
      .then((response) => {
        console.log(response)
        navigate("/products")
      })
      .catch((err) => {
        const errorResponse = err.response.data.errors
        const errorArr = []
        for (const key in errorResponse) {
          errorArr.push(errorResponse[key].message)
        }
        setErrors(errorArr)
      })
  }

  return (
    <div className="mt-3">
      {product && (
        <>
          <ProductForm
            onSubmitProp={updateProduct}
            initialTitle={product.title}
            initialPrice={product.price}
            initialDescription={product.description}
            heading="Update Product"
            errors={errors}
          />
          <p></p>
          <DeleteButton
            productId={product._id}
            successCallback={() => navigate("/")}
          />
        </>
      )}
    </div>
  )
}

export default Update
