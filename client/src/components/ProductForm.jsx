import React, { useState } from "react"

const ProductForm = ({
  initialTitle,
  initialPrice,
  initialDescription,
  onSubmitProp,
  heading,
  errors,
}) => {
  const [title, setTitle] = useState(initialTitle)
  const [price, setPrice] = useState(initialPrice)
  const [description, setDescription] = useState(initialDescription)

  const onSubmitHandler = (e) => {
    e.preventDefault()
    onSubmitProp({ title, price, description })
  }

  return (
    <div className="card">
      <div className="card-body">
        <h4>{heading}</h4>
        <div className="card bg-light">
          <div className="card-body">
            <form onSubmit={onSubmitHandler}>
              {errors.map((err, idx) => (
                <p key={idx} className="text-danger">
                  {err}
                </p>
              ))}
              <p>
                <label htmlFor="title">Title</label>
                <br />
                <input
                  type="text"
                  name="title"
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                />
              </p>
              {title.length && title.length < 3 ? (
                <p className="text-danger">
                  Title must be at least 3 characters
                </p>
              ) : null}
              <p>
                <label htmlFor="price">Price</label>
                <br />
                <input
                  type="text"
                  name="price"
                  onChange={(e) => setPrice(e.target.value)}
                  value={price}
                />
              </p>
              {price && (!Number(price) || price < 0) ? (
                <p className="text-danger">Price must be a positive number</p>
              ) : null}
              <p>
                <label htmlFor="description">Description</label>
                <br />
                <input
                  type="text"
                  name="description"
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                />
              </p>
              {description.length && description.length < 3 ? (
                <p className="text-danger">
                  Description must be at least 3 characters
                </p>
              ) : null}
              <input className="btn btn-primary" type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductForm
