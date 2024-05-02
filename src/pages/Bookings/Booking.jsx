

const Booking = ({booking}) => {

    const {img, service, price, date, name} = booking;

    return (
        <tr>
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
                <button className="btn btn-primary btn-sm">Pending</button>
            </th>
        </tr>
    );
};

export default Booking;