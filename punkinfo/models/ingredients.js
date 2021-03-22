var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var IngredientsSchema = new Schema(
  {
    beer: {type: Schema.Types.ObjectId, ref: 'Beer', required: true},
    malt: {type: String, required: true},
    yeast: {type: String, required: true},
    food_pairing: {type: String, required: true},
    brewers_tips: {type: String, required: true},
  }
);

// Virtual for book's URL
SpecificationSchema
.virtual('url')
.get(function () {
  return '/catalog/ingredients/' + this._id;
});

//Export model
module.exports = mongoose.model('Ingredients', IngredientsSchema);