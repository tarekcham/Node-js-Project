const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
// we use slug to make URL friendly namesfor our slugs, 
const slug = require('slugs');

//make our schema tell our db the type of our type 
const storeSchema = new mongoose.Schema({
	name: {
		type:String,
		trim: true,
		required: 'Please enter a store name!'
	},
	slug: String,
	description: {
		type: String,
		trim: true
	},
tags: [String]
});

storeSchema.pre('save', function(next) {
	this.slug = slug(this.name);
	next();
})
module.exports = mongoose.model('Store', storeSchema);
