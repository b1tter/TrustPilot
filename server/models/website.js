const mongoose = require('mongoose');

const Schema =  mongoose.Schema;
const websitesSchema = new Schema ({
  websiteName: String,
  websiteReviews: String
});

module.exports = mongoose.model('website', websitesSchema, 'websites');
