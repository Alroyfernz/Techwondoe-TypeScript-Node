"use strict";
const { model, Schema } = require("mongoose");
const { ObjectId } = Schema.Types;
const movieScehma = new Schema({
    Title: {
        type: String,
        required: true,
    },
    StreamingApp: {
        type: String,
        required: true,
    },
    Rating: {
        type: Number,
        max: 5,
        require: true,
    },
    Review: {
        type: String,
        required: true,
    },
    UserId: {
        type: ObjectId
    }
}, { timestamps: true });
module.exports = model("Movie", movieScehma);
