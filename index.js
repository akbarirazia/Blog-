// import express, { Router } from "express";
// import bodyParser from "body-parser";
// import mongoose from "mongoose";
// import router from "./backend/routes/user-routes";
// import blogRouter from "./backend/routes/blog-routes";

// const app = express();

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.json());
// app.use("/api/user", router);
// app.use("/api/blog", blogRouter);
// app.use(express.static("public"));
// app.get("/api", (req, res) => {
//   res.render("/api/user");
// });
// mongoose
//   .connect(
//     "mongodb+srv://admin:SfVwzeIC7V2cvp3s@cluster0.o62tkju.mongodb.net/Blog?retryWrites=true&w=majority&appName=Cluster0"
//   )
//   .then(() => app.listen(3000))
//   .then(() =>
//     console.log("Connected To Database and Listing To Localhost 3000")
//   )
//   .catch((err) => console.log(err));
