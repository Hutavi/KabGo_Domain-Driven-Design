// driverController.js
const express = require("express");
const router = express.Router();
const driverService = require("../service/driverService");

// GET /api/driver/:driverId
router.get("/:driverId", async (req, res) => {
  const driverId = req.params.driverId;
  try {
    const driver = await driverService.getDriverById(driverId);
    if (!driver) {
      return res.status(404).json({ error: "Driver not found" });
    }
    return res.json(driver);
  } catch (error) {
    console.error("Error fetching driver:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

// Update driver
router.patch("/:driverId", async (req, res) => {
  const driverId = req.params.driverId;
  const driverData = req.body;
  try {
    const driver = await driverService.updateDriver(driverId, driverData);
    if (!driver) {
      return res.status(404).json({ error: "Driver not found" });
    }
    return res.json(driver);
  } catch (error) {
    console.error("Error updating driver:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
