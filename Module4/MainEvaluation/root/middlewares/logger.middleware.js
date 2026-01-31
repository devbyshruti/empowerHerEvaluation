import fs from "fs";

const logger = (req, res, next) => {
    const log = `${req.method} ${req.originalURL} ${new Date().toISOString()}/n`
    fs.appendFileSync("logs.txt", log)
    next()
}

export default logger;