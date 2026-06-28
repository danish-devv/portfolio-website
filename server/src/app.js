import express from "express"
import contactRoute from "./routes/contactRoute.js"
import { errorMiddleware } from "./middlewares/errorMiddleware.js"
const app=express()

app.use(express.json())

app.use("/contact",contactRoute)
app.use(errorMiddleware)
export default app