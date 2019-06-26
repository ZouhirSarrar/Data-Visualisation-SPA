const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for my data
let commodity = new Schema({
  latest_quarter: {
    type: String
  },
  country: {
    type: String
  },
  annual_percent_change: {
    type: Number
  },
  dateq: {
    type: String
  },
  equally_weighted: {
    type: Number
  },
  country_C: {
    type: String
  },
  real_credit_growth_in_annual_percent_change: {
    type: Number
  },
  latest_quarter_C: {
    type: String
  },
  country_AB: {
    type: String
  },
  country_code_IR: {
    type: String
  },
  price_to_income_ratio_index_2010_100: {
    type: Number
  },
  latest_quarter_IR: {
    type: String
  },
  country_RR: {
    type: String
  },
  country_code_RR: {
    type: String
  },
  price_to_rent_ratio_index_2010_100: {
    type: Number
  },
  latest_quarter_RR: {
    type: String
  },

},

{
    collection: 'data'
});


module.exports = mongoose.model('commodity', commodity);