import mongoose from "mongoose";

const variantSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    sku: {
        type: String,
    },
    additionalCost: {
        type: Number,
    },
    stockCount: {
        type: Number,
    }
}, { timestamps: true })

const Variant = mongoose.model("Variant", variantSchema);

export default Variant
