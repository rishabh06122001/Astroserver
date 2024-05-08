const mongoose = require('mongoose');

const bookPoojaSchema = new mongoose.Schema({
    First_name: {
        type: String,
        required: true
    },
    Last_name: {
        type: String,
        required: true
    },
    Gotra: {
        type: String,
        required: true,
    },
    Nakshtra: {
        type: String,
        required: true,
    },
    Rashi: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    date: {
        type: String
    },

    user: {
        type: mongoose.Types.ObjectId,
        ref: 'astrocaptain_user',
        required: [true, 'User id required']
    }
});

module.exports = mongoose.model("astro_book_pooja_user", bookPoojaSchema);
