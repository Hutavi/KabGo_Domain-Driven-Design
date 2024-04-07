// driverRepository.js
const Driver = require("../model/driverModel");

const getDriverById = async (driverId) => {
  try {
    // Tìm tài xế bằng id
    const driverData = await Driver.findOne({ id: driverId });

    // Nếu không tìm thấy tài xế, trả về null
    if (!driverData) {
      return null;
    }

    // Trả về tài xế đã tìm thấy
    return driverData;
  } catch (error) {
    // Xử lý lỗi
    console.error("Error fetching driver:", error);
    throw new Error("Failed to fetch driver");
  }
};

const updateDriver = async (driverId, driverData) => {
  try {
    // Tìm tài xế bằng id và cập nhật thông tin mới
    const updatedDriver = await Driver.findOneAndUpdate(
      { id: driverId },
      driverData,
      { new: true }
    );

    // Nếu không tìm thấy tài xế, trả về null
    if (!updatedDriver) {
      return null;
    }

    // Trả về tài xế đã cập nhật
    return updatedDriver;
  } catch (error) {
    // Xử lý lỗi
    console.error("Error updating driver:", error);
    throw new Error("Failed to update driver");
  }
};

module.exports = { getDriverById, updateDriver };
