import Product from "../models/productModel.js";
import asyncHandler from "../middleware/asyncHandler.js";

// @desc        Fetch all products
// @route       GET /api/products
// @access      Public
const getProduct = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// @desc        Fetch all product
// @route       GET /api/products/:id
// @access      Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Resource not found");
  }
});

export { getProduct, getProductById };
