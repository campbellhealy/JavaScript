var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var SpecificationSchema = new Schema(
  {
    beer: {type: Schema.Types.ObjectId, ref: 'Beer', required: true},
    abv: {type: String, required: true},
    ibu: {type: String, required: true},
    ebc: {type: String, required: true},
    srm: {type: String, required: true},
    ph: {type: String, required: true},
    attenuation_level: {type: String, required: true},
  }
);

// Virtual for book's URL
SpecificationSchema
.virtual('url')
.get(function () {
  return '/catalog/specification/' + this._id;
});

//Export model
module.exports = mongoose.model('Specification', SpecificationSchema);