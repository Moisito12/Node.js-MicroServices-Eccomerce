import express from "express";
import { json } from "body-parser";
import { currentUserRoute } from "./routes/current-user";
import { signinRoute } from "./routes/signin";
import { signupRoute } from "./routes/signup";
import { signoutRoute } from "./routes/signout";

const app = express();
app.use(json());

app.use(currentUserRoute);
app.use(signinRoute);
app.use(signupRoute);
app.use(signoutRoute);

app.listen(3000, () => {
  console.log("Listening on port 3000!!!!!!!!");
});
