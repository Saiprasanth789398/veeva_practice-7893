import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  product: {
    type: String,
    required: true
  },
  image:{
    type: String,
    required: true
  },
  company:{
    type: String,
    required: true
  },
  model:{
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  }
});

export default mongoose.model('Product', productSchema);