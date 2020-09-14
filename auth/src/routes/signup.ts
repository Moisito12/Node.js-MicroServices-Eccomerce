import express from "express";

const router = express.Router();

router.post("/api/users/signup", (req, res) => {
  res.send("Hi signup route");
});

export { router as signupRoute };
