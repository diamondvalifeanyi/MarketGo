const mongoose = require ("mongoose");

const adminSchema = mongoose.Schema ({
    userName: {
        type: String,
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    token: {
        type: String
    },
    isLogin: {
        type: Boolean,
        default: false
    }
    // stores: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "stores"
    // }],
    // products: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "products"
    // }]
}, {timeStamps: true})

const adminModel = mongoose.model("MarketGo", adminSchema);

module.exports = adminModel

