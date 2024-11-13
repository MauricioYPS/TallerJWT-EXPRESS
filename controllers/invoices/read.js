import Registro from "../../models/Bill.js";
import "../../models/User.js";

let allInvoices = async (req, res, next) => {
    try {
        let { name } = req.query;
        let query = {};

        if (name) {
            query.Usuario = { $regex: '^' + name, $options: "i" };
        }
        let all = await Registro.find(query).populate('Usuario').exec()
        return res.status(200).json({
            response: all
        });
    } catch (error) {
        next(error)
    }
}

let InvoiceById = async (req, res, next) => {
    try {
        let invoiceQ = req.params.id;
        let all = await Registro.findById(invoiceQ).populate('Usuario').exec()
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}

export { allInvoices, InvoiceById }