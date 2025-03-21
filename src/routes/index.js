import moviesRouter from "./movies.js"
import roomsRouter from "./rooms.js"
import MovieScreeningRouter from "./movieScreenings.js"
import EmployeeRouter from "./employees.js"
import WorkScheduleRouter from "./workSchedule.js"
import TicketRouter from "./tickets.js"

export default function routes(app) {
    app.get("/", (req, res) => {
        res.send("Home");
    });

    app.use("/movies", moviesRouter)
    app.use("/rooms", roomsRouter)
    app.use("/movieScreenings", MovieScreeningRouter)
    app.use("/employees", EmployeeRouter)
    app.use("/workSchedule", WorkScheduleRouter)
    app.use("/tikets", TicketRouter)
}