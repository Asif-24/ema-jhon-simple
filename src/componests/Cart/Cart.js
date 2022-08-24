import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const totalPrice = cart.reduce((total,prd) => total + prd.price,0);

    let shipping = 0;
    if (totalPrice >15) {
        shipping = 4.99;
    }
    else if(totalPrice > 35){
        shipping = 12.99;
    }
    else if(totalPrice > 0){
        shipping = 12.99;
    }

    const tax =(totalPrice / 10).toFixed(0); 
    const finaltotal = (totalPrice + shipping + Number(tax)).toFixed(2);

    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items: {cart.length}</p>
            <p>Shipping & Handling:{shipping}</p>
            <p>Tax + Vat:{tax} </p>
            <p>Order Total: {finaltotal}</p>
        </div>
    );
};

export default Cart;