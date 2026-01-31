import express from "express";
import VehicleRateLimiter from "../middlewares/rateLimiter.middleware.js";
import{
    addvehicle,
    assignDriver,
    getVehicle
} from "../controllers/vehicle.controller.js";

const router = express.Router()

router.post("/add", VehicleRateLimiter, addvehicle)
router.patch("/assign-driver/:vehicleId", assignDriver)
router.get("/:vehicleId", getVehicle)

export default router;
