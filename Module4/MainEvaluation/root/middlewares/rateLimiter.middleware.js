import rateLimit from "express-rate-limit";

const VehicleRateLimiter = rateLimit({
    windowMS: 60* 1000,
    max: 3,
    message: "Maximum 3 vehicle creation per minute allowed"
})

export default VehicleRateLimiter;