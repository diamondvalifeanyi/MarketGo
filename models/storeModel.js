const mongoose = require ("mongoose");

const storeSchema = mongoose.Schema ({
    storeName: {
        type: String,
        required: true
    },
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "products"
    }]
}, {timeStamps: true})

const storeModel = mongoose.model("stores", storeSchema);

module.exports = storeModel

