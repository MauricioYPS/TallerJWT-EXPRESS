import Propiedad from "../../models/Property.js";
import "../../models/User.js"

let allProperties = async (req, res, next) => {
    try {
        let {name} = req.query;
        let query = {};

        if (name) {
            query.Nombre = { $regex: '^' + name, $options: "i" };
        }
        let all = await Propiedad.find(query).populate('Usuario').exec()
        return res.status(200).json({
            response: all
        });
    } catch (error) {
        next(error)
    }
}

let propertiesById = async (req, res, next) => {
    try {
        let propertyQ = req.params.id;
        let all = await Propiedad.findById(propertyQ).populate('Usuario').exec()
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}

export { allProperties, propertiesById }