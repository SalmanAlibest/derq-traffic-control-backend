const express = require("express");
const router = express.Router();
const pool = require("../db");

router.get("/traffic/country", async (req, res) => {
  try {
    const [rows] = await pool.query(
      `SELECT c.name AS country, t.traffic 
   FROM country_traffic t
   JOIN country c ON t.country_id = c.id`
    );
    res.json(rows);
  } catch (err) {
    console.log("EE", err);
    res.status(500).json({ error: "Something went wrong" });
  }
});

router.get("/traffic/vehicle", async (req, res) => {
  try {
    const [rows] = await pool.query(
      `SELECT type,count AS vehicle_count
   FROM vehicle_distribution;`
    );
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

module.exports = router;
