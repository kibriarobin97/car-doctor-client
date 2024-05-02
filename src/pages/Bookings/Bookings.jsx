import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import Booking from "./Booking";
import axios from "axios";

const Bookings = () => {

    const { users } = useContext(AuthContext)
    const [bookings, setBookings] = useState([])

    const url = `http://localhost:5000/bookings?email=${users?.email}`

    useEffect(() => {

        axios.get(url, {withCredentials: true})
        .then(res => {
            setBookings(res.data)
        })

        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data)
        //         setBookings(data)
        //     })
    }, [url])

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

    const handleBookingConfirm = id => {
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({status: 'confirm'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0){
                //update state
                const remaining = bookings.filter(book => book._id !== id)
                const updated = bookings.find(book => book._id === id)
                updated.status = 'confirm'
                const newBookings = [updated, ...remaining]
                setBookings(newBookings)
            }
        })
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
                            handleBookingConfirm={handleBookingConfirm}
                        ></Booking>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Bookings;