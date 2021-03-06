const DataSetModel = require('../models/dataSet.model');
const MetadataModel = require('../models/metadata.model');

const ObjectID = require('mongoose').Types.ObjectId;


module.exports.getAllDataSet = async (req, res) => {
    try {
        const dataSet = await DataSetModel.find();
        const metadata = await MetadataModel.findById({_id: dataSet.metadata});
        res.status(200).json({dataset: dataSet, metadata: metadata});
    } catch (err) {
        return res.status(500).json({ message: err });
    }
}

module.exports.getDataSet = async (req, res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send('ID unknown');
    try {
        await DataSetModel.findById(
            {_id: req.params.id},
            (err, docs) => {
                if (!err) {
                    res.send(docs);
                } else
                    console.log('ID unknown : \n' + err);
            }
        )
    } catch (err) {
        return res.status(500).json({ message: err });
    }
}

module.exports.addDataSet = async (req, res) => {
    try {
        const metadata = new MetadataModel({
            created_by: req.body.creater,
            last_update_by: req.body.creater
        });
        const newMetadata = await metadata.save();
        const dataSet = new DataSetModel({
            metadata: newMetadata._id,
            description: req.body.description,
            study: {
                name: req.body.study.name
            },
            source: {
                name: req.body.source.name
            }
        });
        const newDataSet = await dataSet.save();
        res.send(newDataSet);
    } catch (err) {
        res.status(500).send(err);
    }
}

module.exports.updateDataSet = async (req, res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send('ID unknown');
    try {
        await DataSetModel.findByIdAndUpdate(
            {_id: req.params.id},
            {
                $set: {
                    description: req.body.description,
                    study: {
                        details: req.body.study.details
                    },
                    source: {
                        details: req.body.source.details
                    }
                }
            },
            { new: true, upset: true, setDefaultsOnInsert: true },
            (err, docs) => {
                if (!err) return res.send(docs);
                else return res.status(500).send({ message: err});
            }
        )
    } catch (err) {
        return res.status(500).json({ message: err });
    }
}

module.exports.deleteDataSet = async (req, res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send('ID unknown');
    try {
        await DataSetModel
            .remove({_id: req.params.id})
            .exec();
        res.status(200).json({message: "Successfully deleted"});
    } catch (err) {
        return res.status(500).send('Unknown request');
    }
}