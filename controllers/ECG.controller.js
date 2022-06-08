const ECGModel = require('../models/ECG.model');
const MetadataModel = require('../models/metadata.model');

const ObjectID = require('mongoose').Types.ObjectId;


module.exports.getAllECG = async (req, res) => {
    try {
        const dataSet = await ECGModel.find();
        res.status(200).json({dataset: dataSet});
    } catch (err) {
        return res.status(500).json({ message: err });
    }
}

module.exports.getECG = async (req, res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send('ID unknown');
    try {
        const dataSet = await ECGModel.findById({_id: req.params.id})
        const metadata = await MetadataModel.findById({_id: dataSet.metadata});
        res.status(200).json({dataset: dataSet, metadata: metadata});
    } catch (err) {
        return res.status(500).json({ message: err });
    }
}

module.exports.addECG = async (req, res) => {
    try {
        const metadata = new ECGModel({
            created_by: req.body.created_by,
            last_update_by: req.body.created_by
        });
        const newMetadata = await metadata.save();
        const ECG = new ECGModel({
            metadata: newMetadata._id,
            dataSet: req.body.dataset,
            patient_id:  req.body.patient_id,
            anonymized:  req.body.anonymized,
            average_beat:  req.body.average_beat,
            filename:  req.body.filename,
            filepath:  req.body.filepath,
            leads: req.body.leads
        });
        const newECG = await ECG.save();
        res.status(200).json({ECG: newECG});
    } catch (err) {
        res.status(500).send(err);
    }
}

module.exports.updateECG = async (req, res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send('ID unknown');
    try {
        const updatedDataSet = await ECGModel.findByIdAndUpdate(
            {_id: req.params.id},
            {
                $set: {
                    patient_id:  req.body.patient_id,
                    anonymized:  req.body.anonymized,
                    average_beat:  req.body.average_beat,
                    filename:  req.body.filename,
                    filepath:  req.body.filepath,
                    leads: req.body.leads
                }
            },
            { new: true, upset: true, setDefaultsOnInsert: true }
        )
        const updatedMetadata = await ECGModel.findByIdAndUpdate(
            {_id: updatedDataSet.metadata},
            {
                $set: {
                    last_update_by: req.body.last_update_by,
                }
            },
            { new: true, upset: true, setDefaultsOnInsert: true }
        )
        res.status(200).json({dataset: updatedDataSet, metadata: updatedMetadata});
    } catch (err) {
        return res.status(500).json({ message: err });
    }
}

module.exports.deleteECG = async (req, res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send('ID unknown');
    try {
        await ECGModel
            .remove({_id: req.params.id})
            .exec();
        res.status(200).json({message: "Successfully deleted"});
    } catch (err) {
        return res.status(500).send('Unknown request');
    }
}