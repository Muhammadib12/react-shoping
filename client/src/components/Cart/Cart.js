import React from 'react'
import "../../css/Cart/Cart.css";

function Cart(props) {
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
        </div>
    );
}

export default Cart;