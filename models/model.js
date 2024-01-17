const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    id: {
        type: Number,
        required: [true, 'ID is required!'],
        trim: true,
        unique: true,
        validate: {
            validator: async function (value) {
                const user = await this.constructor.findOne({ id: value });
                return !user;
            },
            message: 'Custom message: User ID must be unique.',
        },
    },
    title: {
        type: String,
        required: [true, 'Title is required!'],
        validate: {
            validator: (value) => {
                return value.length >= 1 && value.length <= 100;
            },
            message: 'Title must be less then 100',
        },
    },
    des: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        enum: ['Food', 'Education', 'Businessmen', 'Position']
    },
    slug: {
        type: String,
    },
    createdDate: {
        type: Date,
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('articlesDetails', Schema)