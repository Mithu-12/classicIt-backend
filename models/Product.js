import mongoose from "mongoose";


const productSchema = new mongoose.Schema({
  productId: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  reg_price: {
    type: String,
    required: true,
  },
  sale_price: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  images: [
    {
      id: {
        type: String,
        required: true,
      },
      color: {
        type: String,
        required: true,
      },
      src: {
        type: String,
        required: true,
      },
    },
  ],
  categories: [
    {
      label: {
        type: String,
        required: true,
      },
      value: {
        type: String,
        required: true,
      },
    },
  ],
  product_des: {
    type: String,
    required: true,
  },
  offerDate: {
    type: Date,
    required: true,
  },
  attributes: [
    {
      name: {
        type: String,
        required: true,
      },
      value: {
        type: String,
        required: true,
      },
    },
  ],
});

export default mongoose.model('Product', productSchema);


