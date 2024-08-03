const mongoose = require("mongoose");

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
