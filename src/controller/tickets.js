import Ticket from '../models/TicketModel.js';

class TicketController {
    async getAllTicket(req, res) {
        try {
            const tickets = await Ticket.find();
            res.status(200).json({
                message: "GET ALL ticket DONE",
                data: tickets
            })
        } catch (error) {
            res.status(400).json({
                message: error.message
            })
        }
    }
    async getTicketDetails(req, res) {
        try {
            const ticket = await Ticket.findById(req.params.id)
            
            if(!ticket) {
                return res.status(404).json({
                    message: 'ticket not found'
                })
            }
            res.status(200).json({
                message: "GET ALL ticket DONE",
                data: ticket
            })
        } catch (error) {
            res.status(400).json({
                message: error.message
            })
        }
    }

    async createTicket(req, res) {    
        const newTicket = new Ticket(req.body);
        const saveTicket = await newTicket.save()
        res.status(201).json({
            message: 'create ticket successfull',
            data: saveTicket
        })
    }

    async updateTicket(req, res) {
        try {
            const ticket = await Ticket.findByIdAndUpdate(req.params.id, req.body);
            if(!ticket) {
                return res.status(404).json({
                    message: 'ticket not found'
                })
            }
            const updateTicket = await Ticket.findById(req.params.id);
            res.status(200).json({
                message: "UPDATE ticket SUCCESFULL",
                data: updateTicket
            })
        } catch (error) {
            res.status(400).json({
                message: error.message
            })
        }
    }

    async deleteTicket(req, res) {
        try {
            const ticket = await Ticket.findByIdAndDelete(req.params.id);
            if(!ticket) {
                return res.status(404).json({
                    message: 'ticket not found'
                })
            }
            res.status(200).json({
                message: "DELETE ticket DONE",
                data: ticket
            })
        } catch (error) {
            res.status(400).json({
                message: error.message
            })
        }
    }

}

export default TicketController