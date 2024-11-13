import Registro from "../../models/Bill.js";

let creat = async (req, res, next) => {
    try {
        let property = req.body
        let all = await Registro.create(property)
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
        let all = await Registro.insertMany(property)
        return res.status(200).json({
            response: all
        })
        
    } catch (error) {
        next(error)
    }
}

export { creat, creatMany }