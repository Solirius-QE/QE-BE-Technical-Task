import express from "express";
const route = express.Router();
import {
  getAllProductController,
  createProductController,
  deleteProductByIdController,
  updateProductById,
  searchItems,
} from "../controllers/productControllers.js";

//1. Retrieve all Products
route.get("/allProducts", getAllProductController);

//2. When creating a product, this API handle creating/updating/deleting variants also.
route.post("/createProduct", createProductController);

// 3. Delete the Product by its id routes
route.delete("/product/:productId", deleteProductByIdController);

//5. handling Update Product route with the help of productId
route.patch("/updateProduct/:productId", updateProductById);

// 6. Search API endpoint
route.get("/product/search", searchItems);

export default route;
