import express from "express";
import TicketController from "../controller/tickets.js"


const TicketRouter = express.Router();

const ticketController = new TicketController()
TicketRouter.get("/", ticketController.getAllTicket)

TicketRouter.get("/:id", ticketController.getTicketDetails)

TicketRouter.post("/", ticketController.createTicket)

TicketRouter.put("/:id", ticketController.updateTicket)

TicketRouter.delete("/:id", ticketController.deleteTicket)

export default TicketRouter;