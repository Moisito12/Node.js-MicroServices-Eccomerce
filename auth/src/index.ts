import express from "express";
import 'express-async-errors';
import { json } from "body-parser";
import { currentUserRoute } from "./routes/current-user";
import { signinRoute } from "./routes/signin";
import { signupRoute } from "./routes/signup";
import { signoutRoute } from "./routes/signout";
import { errorHandler } from "./middlewares/error-handler";
import { NotFoundError } from "./errors/not-found-error";

const app = express();
app.use(json());

app.use(currentUserRoute);
app.use(signinRoute);
app.use(signupRoute);
app.use(signoutRoute);

app.all("*", async (req, res, next) => {
  next(new NotFoundError());
});

app.use(errorHandler);

app.listen(3000, () => {
  console.log("Listening on port 3000!!!!!!!!");
});
