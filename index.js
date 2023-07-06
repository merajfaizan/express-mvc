const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
const dbConnect = require("./utils/dbConnect");
const toolsRoutes = require("./routes/v1/tools.route");
const errorHandler = require("./middlewares/errorHandler");

app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.set("view engine", "ejs");

// app.use(viewCount);
// Apply the rate limiting middleware to all requests
// app.use(limiter);

dbConnect();

app.use("/api/v1/tools", toolsRoutes);

app.get("/", (req, res) => {
  res.render("home.ejs", {
    id: 5,
    user: {
      name: "test",
    },
  });
});

app.all("*", (req, res) => {
  res.send("NO Route Found");
});

app.use(errorHandler);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

process.on("unhandledRejection", (error) => {
  console.log(error.name, error.message);
  app.close(() => {
    process.exit(1)
  })
});
