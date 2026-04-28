//
const morgan = require("morgan");
const express = require("express");
const authRoutes = require("./routes/auth.routes");
const movieRoutes = require("./routes/movie.routes");
const bookingRoutes = require("./routes/booking.routes");
const showRoutes=require("./routes/show.routes");
const errorMiddleware = require("./middleware/error.middleware");

const app = express();


app.use(express.json());
app.use("/api/auth",authRoutes);
app.use("/api/movies",movieRoutes);
app.use("/api/bookings",bookingRoutes);
app.use("/api/show",showRoutes);
app.use(errorMiddleware);
app.use(morgan("dev"));

//Base URL
app.get("/",(req,res)=>{
    res.status(200).json({
        success:true,
        message: "Movie booking API is running...",
    });
});


module.exports = app;