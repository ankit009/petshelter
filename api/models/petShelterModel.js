'use strict';

var mongoose    =   require("mongoose");

// create instance of Schema
var petsSchema =   mongoose.Schema;

// create schema
petsSchema  = {
    "name" : { type: String, required: true, errorMessage: 'Name is required' },
    "type" : { type: String, required: true, errorMessage: 'Type is required' },
	"breed" : { type: String, required: true, errorMessage: 'Breed is required' },
	"location" : { type: String, required: true, errorMessage: 'Location is required' },
	"latitude": {
        type: Number,
        required: true,
        validate: {
            validator: function(v) {
                return /^(\+|-)?(?:90(?:(?:\.0{1,6})?)|(?:[0-9]|[1-8][0-9])(?:(?:\.[0-9]{1,6})?))$/.test(v);
            },
            message: '{VALUE} is not a valid latitude number!'
        },
		errorMessage: 'latitude is required'
    },
	"longitude": {
        type: Number,
        required: true,
        validate: {
            validator: function(v) {
                return /^(\+|-)?(?:180(?:(?:\.0{1,6})?)|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])(?:(?:\.[0-9]{1,6})?))$/.test(v);
            },
            message: '{VALUE} is not a valid longitude number!'
        },
		errorMessage: 'longitude is required'
    }
};

var petsShelter =  mongoose.model('petShelter',petsSchema);
module.exports = petsShelter;
