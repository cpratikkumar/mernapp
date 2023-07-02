const express = require("express");
const app = express();
const dotenv = require("dotenv");
const port = process.env.PORT || 8000;
require("./connection/connection");
const Model = require("./models/schema");
const cors = require("cors");

app.use(cors());
app.use(express.json());

dotenv.config();
app.get("/api", async (req, res) => {
  const api_data = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await api_data.json();

  data.forEach((element) => {
    const value = new Model({
      id: element.id,
      name: element.name,
      email: element.email,
      phone: element.phone,
      website: element.website,
      username: element.username,
    });
    value.save();
  });
});

app.get("/", async (req, res) => {
  const data = await Model.find({});

  res.status(200).json({ data });
});

app.put("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedata = await Model.updateOne({ id }, { $set: req.body });
    console.log(updatedata);
    if (updatedata) {
      res.status(200).json({ message: "Successfully Updated" });
    }
  } catch (error) {
    res.status(404).json({ Error: error });
  }
});

app.get("/update/:id", async (req, res) => {
  const id = req.params.id;
  const searchdata = await Model.findOne({ id });
  res.status(200).json({ searchdata });
});
app.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  const deletedata = await Model.deleteOne({ id });
  res.status(200).json({ deletedata });
});

app.listen(port, () => {
  console.log(`your server is running ${port}`);
});
