import Registro from "../../models/Bill.js"

let updateAndFindOne = async (req, res, next) => {	
    try {
        let upd = await Registro.findOneAndUpdate(
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
                response: 'Invoice not found'
            })
        }
    } catch (error) {
        next(error)
    }
}   

export  {updateAndFindOne}