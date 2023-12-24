import Product from "../models/Product.js";


export const getAllProduct = async (req, res, next) => {
    try {
      const allPackages = await Product.find();
      res.status(200).json(allPackages);
    } catch (error) {
      next(error);
    }
  };