import express from "express";
import cors from "cors";
import contactRoute from "./routes/contactRoute.js";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";

const app = express();

app.use(
  cors({
    origin: [
      "https://portfolio-website-tan-two-17.vercel.app",
      "http://localhost:5173",
    ],
  }),
);

app.use(express.json());

app.use("/contact", contactRoute);

app.use(errorMiddleware);

export default app;
