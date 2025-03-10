const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("../configs/db-config");
const app = express();
const port = process.env.PORT || 8000;
connectDB();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  return res.send("Hello Task Mangement");
});
//importing routes
const userRoutes = require("./user/user.routes");
const taskRoutes = require("./task/task.routes");

//using these routes

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/tasks", taskRoutes);

app.listen(port, () => console.log(`Server running on port ${port}`));
