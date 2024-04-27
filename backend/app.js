//Second Try ____________________________________________
import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes.js";
import blogRouter from "./routes/blog-routes.js";
import cors from "cors";
//import userController from "./controller/user-controller.js";
const app = express();
app.use(cors());
app.use(express.json());
// app.use("/api/", (req, res, next) => {
//   res.send("Hoda");
// });
app.use("/api/user", router);
app.use("/api/blog", blogRouter);

mongoose
  .connect(
    "mongodb+srv://HodaMadadi:11BNG32oRo34wWwI@cluster0.mmgrbqa.mongodb.net/Blog?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => app.listen(3000))
  .then(() =>
    console.log("Connected To Database and Listing To Localhost 3000")
  )
  .catch((err) => console.log(err));

//Password :11BNG32oRo34wWwI
