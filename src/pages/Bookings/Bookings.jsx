import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import Booking from "./Booking";

const Bookings = () => {

    const { users } = useContext(AuthContext)
    const [bookings, setBookings] = useState([])

    const url = `http://localhost:5000/bookings?email=${users?.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setBookings(data)
            })
    }, [])

    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Service</th>
                        <th>Price</th>
                        <th>Date</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookings?.map(booking => <Booking 
                        key={booking._id}
                        booking={booking}
                        ></Booking>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Bookings;