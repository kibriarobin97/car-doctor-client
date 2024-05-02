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

    const handleDelete = id => {
        const proceed = confirm('Are you sure want to delete?')
        if (proceed) {
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deleteCount > 0) {
                        alert('Successfully deleted')
                    }
                    const remaining = bookings.filter(booked => booked._id !== id)
                    setBookings(remaining)
                })
        }
    }

    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Service</th>
                        <th>Price</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookings?.map(booking => <Booking
                            key={booking._id}
                            booking={booking}
                            handleDelete={handleDelete}
                        ></Booking>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Bookings;