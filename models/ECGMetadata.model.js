const mongoose = require('mongoose');

const metadataSchema = new mongoose.Schema(
    {
        ECG: {
           type: String,
           unique: true,
           require: true
        },
        metadata: {
           type: String,
            unique: true,
            // require: true
        },
        recording: {
            stared_at: {
                type: Date,
            },
            end_at: {
                type: Date,
            },
            sampling_rate: {
                type: Number
            },
            filter: {
                visit: {
                    type: String,
                    trim: true
                },
                duration: {
                    type: String,
                    trim: true
                }
            },
        },
        measurements: [{
            name: {
                type: String,
                trim: true
            },
            values: {
                type: String,
                trim: true
            },
            description: {
                type: String,
                trim: true
            },
            lead: {
                type: String,
                trim: true
            }
        }],
        patient: {
            age: {
                type: Number,
            },
            height: {
                type: String,
                trim: true
            },
            weight: {
                type: String,
                trim: true
            },
            sex: {
                type: String,
                trim: true
            },
            race: {
                type: String,
                trim: true
            },
            observation: {
                type: String,
                trim: true
            }
        },
        annotations: [{
            name: {
                type: String,
                trim: true
            },
            lead: {
                type: String,
                trim: true
            },
            data: {
                type: String,
                trim: true
            },
            description: {
                type: String,
                trim: true
            }
        }],
        treatment: {
            type: String,
            trim: true
        },
        additional_information: {
            type: String,
            trim: true
        }
    }
)

const ECGMetadataModel = mongoose.model("ECGMetadata", metadataSchema);
module.exports = ECGMetadataModel;