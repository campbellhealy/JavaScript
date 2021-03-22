var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BeerSchema = new Schema(
  {
    name: {type: String, required: true, maxlength: 100},
    tagline: {type: String, required: true, maxlength: 100},
    description: {type: String, required: true, maxlength: 200},
    first_brewed: {type: Date},
    image_url: {type: String, required: true, maxlength: 100},
  }
);

// Virtual for author's full name
BeerSchema
.virtual('name')
.get(function () {
  return this.tagline + ', ' + this.name;
});

// Virtual for author's lifespan
BeerSchema
.virtual('lifespan')
.get(function () {
  return (this.first_brewed.getYear()).toString();
});

// Virtual for author's URL
BeerSchema
.virtual('url')
.get(function () {
  return '/catalog/beer/' + this._id;
});

//Export model
module.exports = mongoose.model('Beer', BeerSchema);
