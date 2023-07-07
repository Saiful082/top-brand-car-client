import React, { useContext, useEffect, useState, } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import OrdersRow from './OrdersRow';


const Orders = () => {

    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([])

    useEffect(() => {

        fetch(`http://localhost:5000/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user?.email])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to cancel this order?')
        if(proceed){
            fetch(`http://localhost:5000/orders/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data. deletedCount > 0){
                    alert('deleted done');
                    const remaining = orders.filter(order => order._id !== id);
                    setOrders(remaining);
                }
            })
        }
    }

    return (
        <div>
            <h2 className="text-5xl">You have {orders.length} Orders</h2>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Work</th>
                            <th>Phone</th>
                            <th>Message</th>
                        </tr>
                    </thead>
                    <tbody>

                       { orders.map(order => <OrdersRow
                       key={order._id}
                       order={order}
                       handleDelete={handleDelete}
                        ></OrdersRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Orders;