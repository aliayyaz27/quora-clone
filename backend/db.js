const mongoose = require("mongoose");

// const url =
//   "mongodb+srv://aliayyaz27:Ayyazali27@cluster0.yainypf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// const url = process.env.DB_URI;

module.exports.connect = () => {
  mongoose
    .connect("mongodb://localhost:27017")
    .then(() => {
      console.log("MongoDB Connected Successfully");
    })
    .catch((error) => {
      console.log("Error", error);
    });
};
