import Usuario from "../../models/User.js";


const updateAndFindOne = async (req, res, next) => {
    try {
        let upd = await Usuario.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true }
        )
        if (upd) {
            return res.status(200).json({
                response: upd
            })
        } else {
            return res.status(404).json({
                response: 'User not found'
            })
        }
    } catch (error) {
        next(error)
    }
}

export { updateAndFindOne }
