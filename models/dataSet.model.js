const mongoose = require('mongoose');

const dataSetSchema = new mongoose.Schema(
    {
        metadata: {
            type: String,
            // required: true,
            unique: true
        },
        description: {
            type: String,
            // required: true,
            minLength: 3,
            trim: true
        },
        acquisition_date: {
            type: Date,
            default: Date.now
        },
        leads: {
            type: Number,

        },
        study: {
            name: {
                type: String,
                // required: true,
                minLength: 3,
                trim: true
            },
            details: {
                type: String,
                // required: true,
                minLength: 3,
                trim: true
            }
        },
        source: {
            name: {
                type: String,
                // required: true,
                minLength: 3,
                trim: true
            },
            details: {
                type: String,
                // required: true,
                minLength: 3,
                trim: true
            }
        }
    }
)

const dataSetModel = mongoose.model("dataSet", dataSetSchema);
module.exports = dataSetModel;