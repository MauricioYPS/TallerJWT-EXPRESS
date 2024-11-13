import Propiedad from "../../models/Property.js";

let creat = async (req, res, next) => {
    try {
        let property = req.body
        let all = await Propiedad.create(property)
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}

let creatMany = async (req, res, next) => {
    try {
        let property = req.body
        let all = await Propiedad.insertMany(property)
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}

export {creat, creatMany}