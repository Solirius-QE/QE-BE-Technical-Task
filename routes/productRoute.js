import express from "express";
const route = express.Router();
import {
  getAllProductController,
  createProductController,
  deleteProductByIdController,
  updateProductById,
  searchItems,
} from "../controllers/productControllers.js";

route.get("/allProducts", getAllProductController);
route.post("/createProduct", createProductController);
route.delete("/product/:productId", deleteProductByIdController);
route.patch("/updateProduct/:productId", updateProductById);
route.get("/product/search", searchItems);

export default route;
