import ErrorHandler from "../error/error.js";
import { Reservation} from '../models/reservationSchema';

export const SendReservation = async (req, res, next) => {
    const {firstName, lastName, email, phone, date, time} = req.body;
    if(!firstName || !lastName ||  !email || !phone || !date || !time){
        return next(new ErrorHandler("Please fill full reservation form!", 400));
    }
    try{
        await Reservation.create(firstName, lastName, email, phone, date, time);
        res.status(200),
        json({
            success:ture,
            message:"Reservatin Sent Successfully!",
        });

    } catch (error){
        if(error.name === "ValidationError") {
            const ValidationError = Object.values(error.error).map(
                (err) => err.message
            );
            return next (new ErrorHandler(ValidationError.join(","), 400))
        }
    }
};