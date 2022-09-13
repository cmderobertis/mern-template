import React, { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import ProductForm from "../components/ProductForm"

const Create = () => {
  const navigate = useNavigate()
  const [errors, setErrors] = useState([])

  const createProduct = (product) => {
    axios
      .post("http://localhost:8000/api/products", product)
      .then((response) => {
        console.log(response.data)
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
      <ProductForm
        onSubmitProp={createProduct}
        errors={errors}
        initialTitle=""
        initialDescription=""
        initialPrice=""
        heading="Create Product"
      ></ProductForm>
    </div>
  )
}

export default Create
