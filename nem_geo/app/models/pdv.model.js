const mongoose = require('mongoose');

const PdvSchema = mongoose.Schema({
    tradingName: String,
    ownerName: String,
    document: {type: String, unique:true},
    coverageArea: Object,
    address: Object
});

module.exports = mongoose.model('PDV', PdvSchema);