import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Services = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('https://car-doctor-server-liard-nu.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className="my-5">
            <div className="text-center space-y-2 w-1/2 mx-auto">
                <h3 className="text-2xl text-primary font-bold">Service</h3>
                <h2 className="text-4xl font-bold">Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 my-5">
                {
                    services.map(service => <div key={service._id}>
                        <div className="p-2 rounded-md shadow-md text-black">
                            <img src={service?.img} alt="" className="object-cover object-center w-full rounded-md h-72 bg-gray-500" />
                            <div className="mt-6 mb-4">
                                <h2 className="text-xl font-semibold tracking-wide">{service?.title}</h2>
                            </div>
                            <div className="flex justify-between items-center">
                                <p className="font-medium text-[#FF3811]">Price: ${service?.price}</p>
                                <Link to={`/checkout/${service._id}`}>
                                <button className="font-medium text-[#FF3811]"><FaArrowRight /></button>
                                </Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Services;