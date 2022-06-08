const mongoose = require('mongoose');


const ECGSchema = new mongoose.Schema({
    dataSet: {
        type: String,
        // require: true,
    },
    patient_id: {
        type: String,
        /*require: true,*/default: "Bamba Bar"
    },
    metadata: {
        type: String,
        // require: true,
        unique: true
    },
    anonymized: {
        type: Boolean,
        // require: true
        default: false
    },
    average_beat: {
        type: String,
    },
    filename: {
        type: String,
        // require: true
    },
    filepath: {
        type: String,
        // require: true,
        // unique: true
    },
    leads: [{
        name: {
            type: String
        },
        data: {
            type: String
        }
    }]
});

const ECGModel =  mongoose.model('ECG',ECGSchema);
module.exports = ECGModel;
