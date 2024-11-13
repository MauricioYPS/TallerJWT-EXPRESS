import Usuario from "../models/User.js";

export default async (req, res, next) => {
    try {
        let account = await Usuario.findOne({Correo: req.body.Correo});
        if (account) {
            return res.status(400).json({
                success: false,
                message: "The account already exists",
            });
        } else {
            return next();
        }
    } catch (error) {
     next(error)   
    }
}