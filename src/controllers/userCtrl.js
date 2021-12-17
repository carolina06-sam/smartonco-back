// user controller
const User = require("../models/user.model");
const router = require("express").Router();

const userCtrl = {
    register: async (req, res) => {
        try {
            const { firstName, email, password } = req.body;

            if (!firstName || !email || !password)
                return res
                    .status(400)
                    .json({ msg: "please llena todos los campos" });

            if (!validateEmail(email))
                return res.status(400).json({ msg: "email invalido" });

            console.log(req.body);
            res.json({ msg: "register test" });
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
};

function validateEmail(email) {
    const re =
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
module.exports = userCtrl;
