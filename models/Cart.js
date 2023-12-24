import mongoose from 'mongoose';
const { Schema } = mongoose;

const cartSchema = new Schema({
  email: String, 
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  productData: Object,
});

const Cart = mongoose.model('Cart', cartSchema);

export default Cart;

