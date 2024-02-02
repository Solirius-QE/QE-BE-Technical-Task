import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
    },
    variants: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Variant"
        }
    ]
}, { timestamps: true })

const Product = mongoose.model("Product", productSchema)

export default Product