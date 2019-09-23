const mongoose = require('mongoose');
const Loc = mongoose.model('Location');

const locationsCreate = (req, res) => {
    res
        .status(200)
        .json({ "status": "success" });
};

const locationsListByDistance = (req, res) => { };
const locationsReadOne = (req, res) => {
    res
        .status(200)
        .json({ "status": "success reading "});
};
const locationsUpdateOne = (req, res) => { };
const locationsDeleteOne = (req, res) => { };


module.exports = {
    locationsListByDistance,
    locationsCreate,
    locationsReadOne,
    locationsUpdateOne,
    locationsDeleteOne
};