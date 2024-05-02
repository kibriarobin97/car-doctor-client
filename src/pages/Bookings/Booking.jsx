

const Booking = ({ booking, handleDelete, handleBookingConfirm }) => {

    const {_id, img, service, price, date, name, status } = booking;

    return (
        <tr>
            <td>
                <button onClick={() => handleDelete(_id)} className="btn btn-circle hover:bg-primary hover:text-white btn-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </td>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="rounded-md w-20 h-20">
                            {
                                img && <img src={img} alt={service} />
                            }
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{service}</div>
                        <div className="text-sm opacity-50">{name}</div>
                    </div>
                </div>
            </td>
            <td>
                ${price}
            </td>
            <td>{date}</td>
            <th>
                {
                    status === 'confirm' ? <button className="btn btn-secondary btn-sm">Confirmed</button> : <button onClick={() => handleBookingConfirm(_id)} className="btn btn-primary btn-sm">Pending</button>
                }
            </th>
        </tr>
    );
};

export default Booking;