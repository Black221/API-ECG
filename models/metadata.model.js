const mongoose = require('mongoose');

const metadataSchema = new mongoose.Schema(
    {
        created_by: {
            type: String,
            required: true,
            minLength: 3,
            maxLength: 55,
            trim: true
        },
        last_update_by: {
            type: String,
            required: true,
            minLength: 3,
            maxLength: 55,
            trim: true
        },
    },
    {
        timestamps: true,
    }
)

const metadataModel = mongoose.model("metadata", metadataSchema);
module.exports = metadataModel;