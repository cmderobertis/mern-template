const Product = require("../models/product.model")

module.exports = {
  index: (req, res) => {
    res.json({
      message: "Hello World!",
    })
  },
  createProduct: (req, res) => {
    Product.create(req.body)
      .then((product) => res.json(product))
      .catch((err) => {
        res.status(400).json(err)
        err.message
      })
  },
  getAllProducts: (req, res) => {
    Product.find({}, null, { sort: "title" })
      .then((products) => res.json(products))
      .catch((err) => res.status(400).json(err))
  },
  getProduct: (req, res) => {
    Product.findOne({ _id: req.params.id })
      .then((product) => res.json(product))
      .catch((err) => res.status(400).json(err))
  },
  updateProduct: (req, res) => {
    Product.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    })
      .then((updatedProduct) => res.json(updatedProduct))
      .catch((err) => res.status(400).json(err))
  },
  deleteProduct: (req, res) => {
    Product.deleteOne({ _id: req.params.id })
      .then((deleteConfirmation) => res.json(deleteConfirmation))
      .catch((err) => res.status(400).json(err))
  },
}
