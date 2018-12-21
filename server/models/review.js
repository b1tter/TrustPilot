const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const reviewSchema = new Schema({
  websiteId: String,
  OwnerEmail: String,
  reviewComment: String
});
module.exports = mongoose.model('review', reviewSchema, 'reviews');
