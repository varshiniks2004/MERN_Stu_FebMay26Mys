// handling async error with callbacks
const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

app.get("/file", function (req, res, next) {
    const filepath = path.join(__dirname, "newFile.txt");

    fs.readFile(filepath, "utf8", function (error, data) {
        if (error) {
            // forward async error
            return next(error);
        }
        res.send(data);
    });
});

// Centralized error handling middleware
app.use(function (error, req, res, next) {
    return res.status(404).json({
        success: false,
        message: "File/folder does not exist.",
        //originalMessage: error.message
    });
});

app.listen(4000, function () {
    console.log("Express server running at http://localhost:4000");
});