import Product from "../models/product.js";
import Variant from "../models/productVariant.js";

let existingProduct;

const getAllProductController = async (req, res) => {
  const allProducts = await Product.find({});

  if (!allProducts) {
    return res
      .status(401)
      .json({ success: false, message: "Products have not been created yet!" });
  }

  return res.status(200).json({
    success: true,
    message: "All products have been fetched!",
    allProducts,
  });
};

const createProductController = async (req, res) => {
  try {
    const { name, description, price, variants } = req.body;

    if (!variants || !Array.isArray(variants) || variants.length === 0) {
      return res.status(400).json({
        success: false,
        error: "Variants array is required and should not be empty",
      });
    }

    const updatedVariants = await Promise.all(
      variants.map(async (variant) => {
        if (variant._id) {
          return await Variant.findByIdAndUpdate(variant._id, variant, {
            new: true,
          });
        } else {
          const newVariant = new Variant(variant);
          return await newVariant.save();
        }
      })
    );

    const existingProduct = await Product.findOne({ name });

    if (existingProduct) {
      existingProduct.variants = updatedVariants.map((variant) => variant._id);
      const updatedProduct = await existingProduct.save();
      res.status(200).json({
        success: true,
        message: "Product's variant updated and saved successfully",
        updatedProduct,
      });
    } else {
      const newProduct = new Product({
        name,
        description,
        price,
        variants: updatedVariants.map((variant) => variant._id),
      });
      const savedProduct = await newProduct.save();
      res.status(200).json({
        success: true,
        message: "New Product saved successfully!!",
        savedProduct,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error!",
      error: error.message,
    });
  }
};

const deleteProductByIdController = async (req, res) => {
  try {
    const pId = req.params.productId;

    existingProduct = await Product.findById(pId);

    if (!existingProduct) {
      return res.status(404).json({
        success: false,
        message: "Product was not found.",
      });
    }

    const deletedProduct = await Product.findByIdAndDelete(pId);

    res.status(200).json({
      success: true,
      message: `Product with id ${pId} is deleted`,
      deletedProduct,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error!!",
    });
  }
};

const updateProductById = async (req, res) => {
  try {
    const pId = req.params.productId;
    const changes = req.body;
    const beforeUpdateProduct = await Product.findByIdAndUpdate(pId, changes);

    existingProduct = await Product.findById(pId);

    if (!existingProduct) {
      return res.status(404).json({
        success: false,
        message: "Product was not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Product is updated and below is it's older form",
      beforeUpdateProduct,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error!!",
    });
  }
};

const searchItems = async (req, res) => {
  try {
    const searchItem = req.query.q;
    var regex = new RegExp(searchItem, "i");
    const findItems = await Product.find({
      $or: [
        { name: regex },
        { description: regex },
        { "variants.name": regex },
      ],
    }).populate("variants");
    res.status(200).json({
      success: true,
      message: "Item(s) found!",
      noOfItem: findItems.length,
      findItems,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error!",
      error: error.message,
    });
  }
};

export {
  getAllProductController,
  createProductController,
  updateProductById,
  deleteProductByIdController,
  searchItems,
};
