const { Schema, model } = require("mongoose");

const userSchema = new Schema(
    {
        firstName: {
            type: String,
            required: true,
            maxlength: 45,
        },
        middleName: {
            type: String,
            maxlength: 45,
        },
        lastName: {
            type: String,
            required: true,
            maxlength: 45,
        },
        secondSurname: {
            type: String,
            maxlength: 45,
        },
        email: {
            type: String,
            trim: true,
            require: true,
            unique: true,
            lowercase: true,
        },
        rol: {
            type: Number,
            default: 0,
        },
        state: {
            type: Boolean,
            default: true,
        },

        passwordHash: {
            type: String,
            require: true,
        },
    },
    { timestamps: true }
);

const User = model("users", userSchema);

module.exports = User;
