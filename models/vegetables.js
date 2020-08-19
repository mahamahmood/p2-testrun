const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const vegetableSchema = new Schema({
    name: {type: String, required: true},
        isGreen: Boolean,
    }, {timestamps: true}
);

// moongoose will create vegetables collection in the db
const Vegetable = mongoose.model('Vegetable', vegetableSchema);

// Export Vegetable Model
module.exports = Vegetable;