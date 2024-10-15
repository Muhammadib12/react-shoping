import React from 'react'
import "../../css/CheckoutForm/CheckoutForm.css";
import Input from '../Inpot/Input.js';
function CheckoutForm(props) {
    return (
    <>
        {props.showForm &&  <div className='checkout-form'>
                    <span className='close-icon' onClick={() => props.setShowForm(false)}>&times;</span>
                    <form onSubmit={props.submitOrder}>
                    <Input 
                    label="Name"
                    type="text"
                    onChange = {props.handleChange}
                    name="name"
                    />
                    <Input 
                    label="Email"
                    type="email"
                    onChange = {props.handleChange}
                    name="email"
                    />
                        <div>
                            <label>Submit</label>
                                <button type='submit'> Checkout   </button>                                
                            
                        </div>
                    </form>
                </div>}
    </>
)
}

export default CheckoutForm;
