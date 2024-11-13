import Usuario from "../../models/User.js";
import "../../models/Property.js";

let allUsers = async (req, res, next) => {
    try {
        let {name} = req.query;
        let query = {};

    if (name) {
        query.Nombre = { $regex: '^' + name, $options: "i" };
    }
    let all = await Usuario.find(query)
    return res.status(200).json({
        response:all
    });
    } catch (error) {
        next(error)
    }
}

let usersbyId = async (req, res, next) => {
    try {
        let userQ = req.params.id;
        let all = await Usuario.findById(userQ)
        return res.status(200).json({
            response:all
        })
    } catch (error) {
        next(error)
    }
}
export	{allUsers,usersbyId}