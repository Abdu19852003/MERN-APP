const express = require("express");
const colors = require("colors");
const app = express();
const dotenv = require("dotenv");
const { errorHandler } = require("./middelware/errorMiddleware");
const connectDB = require("./config/db");
dotenv.config();

const port = process.env.PORT || 5000;
connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(errorHandler);

app.use("/api/goals", require("./routes/goalRoutes"));
app.use(errorHandler);
app.listen(port, () => {
  console.log("server started on port", `${port}`);
});
