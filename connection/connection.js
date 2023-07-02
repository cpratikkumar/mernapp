const mongoose = require("mongoose");
const url =
  "mongodb+srv://pratik123:pratik123@cluster0.rlnwhsm.mongodb.net/employee?retryWrites=true&w=majority";
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("successfully connect");
  })
  .catch((error) => {
    console.log(error);
  });
