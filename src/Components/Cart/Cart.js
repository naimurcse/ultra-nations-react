import React from 'react';
import './Cart.css';

const Cart = (props) => {
    // console.log(props.first50);
    const totalCountires = props.first50.length;
    const cart = props.cart;

    const totalPopulation = cart.reduce((sum, country) => sum + country.population , 0);

    console.log(cart);

    return (
        <div className="cart-style">
            <h2>Total Countries: {totalCountires}</h2>
            <h2>Added Countries: {cart.length}</h2>
            <ol style={{display:'flex',flexFlow:'wrap', padding:'0'}}>      
                {
                    cart.map((abc)=><li style={{margin:'0 25px 5px'}}>{abc.name}</li>)
                }
            </ol>
            <h2>Total Population: {totalPopulation}</h2>
        </div>
    );
};

export default Cart;