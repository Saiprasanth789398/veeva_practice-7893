import Product from "../Models/ProductModel.js";

// ================= CREATE PRODUCT =================

const createProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      image,
      stock,
      rating,
    } = req.body;

    const product = await Product.create({
      name,
      description,
      price,
      category,
      image,
      stock,
      rating,
    });

    return res.status(201).json({
      message: "Product created successfully",
      product,
    });
  } catch (error) {
    console.error("Create product error:", error);

    return res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};


// ================= GET ALL PRODUCTS =================

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();

    return res.status(200).json({
      products,
    });
  } catch (error) {
    console.error("Get products error:", error);

    return res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};


// ================= GET SINGLE PRODUCT =================

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    return res.status(200).json({
      product,
    });
  } catch (error) {
    console.error("Get product error:", error);

    return res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};


// ================= UPDATE PRODUCT =================

const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    return res.status(200).json({
      message: "Product updated successfully",
      product,
    });
  } catch (error) {
    console.error("Update product error:", error);

    return res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};


// ================= DELETE PRODUCT =================

const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(
      req.params.id
    );

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    return res.status(200).json({
      message: "Product deleted successfully",
    });
  } catch (error) {
    console.error("Delete product error:", error);

    return res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};


// ================= EXPORT =================

export {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
