// driverService.js
const driverRepository = require("../repository/driverRepository");

const getDriverById = async (driverId) => {
  return await driverRepository.getDriverById(driverId);
};

const updateDriver = async (driverId, driverData) => {
  return await driverRepository.updateDriver(driverId, driverData);
};

module.exports = { getDriverById, updateDriver };
