import { verifyRequestTime } from "./middlewares/time.middleware.js";
import express from "express";
const app = express();
//configuring express to use pug as templating engine
app.set("view engine", "pug");
app.set("views", "./views");
//set up middleware to serve static files
app.use(express.static("./public"));
app.use(verifyRequestTime);
//Route to render the pug template
app.get("/", (req, res) => {
  res.render("home");
});
//Route to render the pug template
app.get("/contact", (req, res) => {
  res.render("contact");
});
app.get("/services", (req, res) => {
  res.render("services");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
