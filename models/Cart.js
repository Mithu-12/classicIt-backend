import mongoose from 'mongoose';
const { Schema } = mongoose;

const cartSchema = new Schema({
  productData: Object,
  userId: { type: Schema.Types.ObjectId, ref: 'User' }, // Assuming you have a User model
});

const Cart = mongoose.model('Cart', cartSchema);

export default Cart;

