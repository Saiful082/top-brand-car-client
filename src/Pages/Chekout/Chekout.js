import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

import checkout from '../../assets/images/checkout/checkout.png'

const Chekout = () => {
    const { _id, title, price } = useLoaderData();
    const {user} = useContext(AuthContext);
    
    const handlePlaceOrder = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'undegistered';
        const phone = form.phone.value;
        const message = form.message.value;

        const order = {
            service: _id,
            serviceName: title,
            price,
            customer: name, 
            email,
            phone,
            message
        }

        if(phone.length > 11){
            alert('Phone Number should be 11 Characters or Longer')
        }
        else{
            
        }

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            console.group(data)
            if(data.acknowledged){
                alert('Order Placed Successfully')
                form.reset();
            }
        })
        .catch(error => console.error(error));

    }

    return (
        <div>
            <form onSubmit={handlePlaceOrder}>
                <h2 className='text-4xl'> You are About to order: {title}</h2>
                <h2 className='text-3xl'> Price: {price}</h2>
                <img src={checkout} className='h-full w-full mt-5'/>
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-4  mt-5'>
                 <input name='firstName' type="text" placeholder="First Name " className="input input-bordered w-full " required />
                 <input name='lastName' type="text" placeholder="Last Name" className="input input-bordered w-full " required />
                 <input name='phone' type="text" placeholder="Your Phone " className="input input-bordered w-full " required />
                 <input name='email' type="text" placeholder="Your Email" defaultValue={user?.email} className="input input-bordered w-full  " required />
               </div>
               <textarea name='message' className="textarea textarea-bordered mt-5 h-24 w-full" placeholder="Your Message" required></textarea>

               <input className='btn btn-primary mb-5 mt-5' type="submit" value="Place Your Order" />
            </form>
        </div>
    );
};

export default Chekout;