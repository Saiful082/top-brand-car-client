import React, { useEffect, useState } from 'react';

const OrdersRow = ({order, handleDelete, handleStatusUpdate}) => {

    const { _id, serviceName, price, customer, phone, ststus, service} = order;
    const [orderService, setOrderService] = useState([]);


    useEffect(() =>{
        fetch(`http://localhost:5000/services/${service}`)
        .then(res => res.json())
        .then(data => setOrderService(data));
    },[service]);

    

    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className='btn btn-ghost'>X</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-20 h-20">
                            {
                                orderService?.img && 
                                <img src={orderService.img} alt="Avatar Tailwind CSS Component" />
                                
                                }
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{serviceName}</div>
                        <div className="text-sm opacity-50">{customer}</div>
                    </div>
                </div>
            </td>
            <td>
              {serviceName}
                <br />
                <span className="badge badge-ghost badge-sm">{price}</span>
            </td>
            <td>{phone}</td>
            <th>
                <button onClick={() => handleStatusUpdate(_id)} className="btn btn-ghost btn-xs">{ststus ? ststus : 'pending'}</button>
            </th>
        </tr>
    );
};

export default OrdersRow;