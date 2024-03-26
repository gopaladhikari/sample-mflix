import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { env } from "./conf/env";
import passport from "passport";
import session from "express-session";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());
app.use(
  cors({
    origin: env.corsOrigin,
    credentials: true,
  })
);

app.use(session({}));
d;
// routes imports

import { userRouter } from "./routes/user.route";

// routes declaration

app.get("/", (req, res) => {
  res.json({ message: "Hello from gopaladhikari!" });
});

app.use("/api/v1/users", userRouter);

export { app };
