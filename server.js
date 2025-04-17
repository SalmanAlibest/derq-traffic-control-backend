const express = require("express");
const cors = require("cors");
const trafficRoutes = require("./routes/traffic");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/v1", trafficRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Traffic Backend running on port ${PORT}`));

module.exports = app;
