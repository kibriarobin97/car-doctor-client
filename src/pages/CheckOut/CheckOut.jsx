import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

const CheckOut = () => {

    const service = useLoaderData()
    const { title, _id, price, img } = service;

    const { users } = useContext(AuthContext)

    const handleBookingService = e => {
        e.preventDefault()

        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const note = form.note.value;
        const bookedService = {
            name,
            date,
            email,
            phone,
            note,
            img: img,
            price: price,
            service: title,
            service_id: _id
        }
        console.log(bookedService)

        fetch('http://localhost:5000/bookings', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookedService)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.insertedId){
                    alert('booking successfully')
                }
            })
    }

    return (
        <section className="p-6">
            <h3 className="text-3xl font-semibold my-5">Booking Service: {title}</h3>
            <form onSubmit={handleBookingService} className=" flex flex-col mx-auto space-y-12">
                <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm">
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="username" className="text-sm">Name</label>
                            <input id="username" type="text" name="name" defaultValue={users?.displayName} placeholder="Name" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="website" className="text-sm">Date</label>
                            <input id="website" type="date" name="date" placeholder="Date" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="website" className="text-sm">Email</label>
                            <input id="website" type="email" name="email" defaultValue={users?.email} placeholder="Your Email" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="username" className="text-sm">Phone</label>
                            <input id="username" type="number" name="phone" placeholder="Your Phone" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="username" className="text-sm">Price</label>
                            <input id="username" type="text" name="price" defaultValue={'$' + price} className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
                        </div>
                        <div className="col-span-full">
                            <label htmlFor="bio" className="text-sm">Note</label>
                            <textarea id="bio" name="note" placeholder="Message" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"></textarea>
                        </div>
                        <div className="col-span-full">
                            <input className="btn btn-block btn-primary font-bold" type="submit" value="Order Confirm" />
                        </div>
                    </div>
                </fieldset>
            </form>
        </section>
    );
};

export default CheckOut;