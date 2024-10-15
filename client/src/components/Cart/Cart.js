import React, { useEffect, useState } from 'react'
import "../../css/Cart/Cart.css";
import CheckoutForm from '../CheckoutForm/CheckoutForm';

function Cart(props) {
    const [showForm,setShowForm] = useState(false);

    const [value,setValue] = useState("");

    const handleChange = (e)=>{
        setValue( (prevState) => ({...prevState,[e.target.name]: e.target.value}) )
    }

    const submitOrder = (e) =>{
        e.preventDefault();

        const order = {
            name : value.name,
            email : value.email
        }
        console.log(order)
    }

    return (
        <div className='cart-wrapper'>
            <div className='cart-title'>
                {props.cartItem.length === 0 ? "Empty Cart" : <p>
                    There is {props.cartItem.length} items in Cart
                </p> }    
            </div>

            <div className='cart-items'>
                {props.cartItem.map(item => (
                    <div className='cart-item' key={item.id}>
                        <img src={item.imageUrl} alt={item.title} />
                        <div className='cart-info'>
                            <div>
                                <p>title: {item.title}</p>
                                <p>Quantity: {item.qty}</p>
                                <p>Price: ${item.price}</p>
                            </div>
                            <button onClick={() => props.removeFromCart(item)}>Remove</button>
            
                            
                        </div>
                    </div>
                ))}
            </div>
                {
                    props.cartItem.length !== 0 &&
                    <div className='cart-footer'>
                    <div className='total'>
                    Total: ${props.cartItem.reduce((acc, p) => acc + (p.price * p.qty), 0)}
                    </div>
                    <button onClick={() => setShowForm(true)}>Select Product </button>
                    </div>
                }

                {/* CheckOut Form */}
                <CheckoutForm handleChange={handleChange} submitOrder={submitOrder} showForm={showForm} setShowForm={setShowForm} value={value}/>
        </div>
    );
}

export default Cart; 