import Registro from "../../models/Bill.js";

let deleteOne = async (req, res, next) => {
    try {
        let destroy = await Registro.findByIdAndDelete(req.params.id);
        if (destroy) {
            return res.status(200).json({
                response: destroy
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

export {deleteOne}