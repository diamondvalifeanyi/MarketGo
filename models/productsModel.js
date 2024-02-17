const mongoose = require ("mongoose");

const productSchema = mongoose.Schema ({
    stores: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "stores"
    }],

    productName: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        productID: {
            type: String,
            required: true
        },
        quantity: {
            type: Number,
            required: true
        },
        category: {
            type: String,
            required: true
        }

    },
   


   


    
   
 {timeStamps: true})

const adminModel = mongoose.model("product", productSchema);

module.exports = adminModel