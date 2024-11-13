import Usuario from "../../models/User.js";

let register = async (req, res, next) => {
    try {
        let user = req.body
        let all = await Usuario.create(user)
        return res.status(201).json({
            response: all
        })
}catch (error) {
    next(error)
}
}

let registerMany = async (req, res, next) => {
    try {
        let user = req.body
        let all = await Usuario.insertMany(user)
        return res.status(201).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}

export { register, registerMany }