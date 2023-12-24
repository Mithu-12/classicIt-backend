import Cart from "../models/Cart.js";

export const createCart = async (req, res, next) => {
  const cart = new Cart(req.body);

  try {
    const result = await cart.save();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
export const getAllCart = async (req, res, next) => {
  const email = req.query.email;

  if (!email) {
    return res.status(200).json([]);
  }

  try {
    const query = { email: email };
    const result = await Cart.find(query).populate('userId'); 
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};