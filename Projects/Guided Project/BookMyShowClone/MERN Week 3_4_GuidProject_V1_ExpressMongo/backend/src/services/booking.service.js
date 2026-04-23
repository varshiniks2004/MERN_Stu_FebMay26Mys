//created booking and cancel booking functions and exported it
const { status } = require("init");
const Booking = require("../models/Booking");
const Show = require("../models/Show");

// Create Booking
exports.createBooking = async (userId,{showId,seats}) => {
    // 1. Get Show 
    const show = await Show.findById(showId);

    if (!show) {
        throw new Error("Show not found.");
        
    }

    // 2. Validate Seats { Give input as G1,A1,A2..}
    const selectedSeats = show.seats.filter((seat)=> seats.includes(seat.seatNumber)); // filter is based on the seat number entereds
    
    if(selectedSeats.length!=seats.length){
        throw new Error("Seats do not exist.");
    }

    // 3. Check if already booked 
    for (let seat of selectedSeats){
        if (seat.isBooked) {
            throw new Error(`Opps! Seat ${seat.seatNumber} is already booked!`);
            
        }
    }

    // 4. Mark seats as booked
    show.seats = show.seats.map((seat)=>{
        if (seats.includes(seat.seatNumber)) {
            seat.isBooked = true;
        }
        return seat;
    });

    // 5.Update available Seats 
    show.availableSeats -= seats.length;

    await show.save();

    // 6.Create Booking
    const booking = await Booking.create({
        userId, showId, seats, totalSeats: seats.length,
    });
    return booking;
};

// Get user bookings 
exports.getUserBookings = async (userId) => {
    const bookings = await Booking.find({
        userId,
        staus:"booked",
    })
    .populate({
        path:"showId",
        select:"date time availableSeats movieId",
        populate:{
            path:"movieId",
            select:"title genre",
        },
    })
    .sort("-createdAt");

    // Transform response 
    return bookings.map((booking)=>({
        bookingId:booking._id,
        seats:booking.seats,
        totalSeats:booking.seats,
        totalSeats:booking.totalSeats,
        status:booking.status,
        bookingTime:booking.bookingTime,

        show:{
            id:booking.showId._id,
            date:booking.showId.date,
            time:booking.showId.time,
            availableSeats:booking.showId.availableSeats,
        },
        movie:{
            id:booking.showId.movieId._id,
            title:booking.showId.movieId.title,
            genre:booking.showId.movieId.genre,
        },
    }));
};

//Cancel Booking
exports.cancelBooking = async (bookingId,userId) => {
    const booking = await Booking.findById(bookingId);
    if(!booking) throw new Error("Booking not found!");

    if (booking.userId.toString()!==userId.toString) {
        throw new Error("Unauthorized");
    }

    if (booking.status === "cancelled") {
        throw new Error("Already Cancelled");
    }

    // 1: Get show
    const show = await Show.findById(booking.showId);
    
    // 2: Release seats
    show.seats = show.seats.map((seat)=>{
        if (booking.seats.includes(seat.seatNumber)) {
            seat.isBooked = false;
        }
        return seat;
    });

    // 3: Update available Seats
    show.availableSeats += booking.seats.length;
    await show.save();

    // 4.Update booking
    booking.status = "cancelled";
    await booking.save();
    
}