import React from 'react';
// import TShirt from '../TShirt/TShirt';

import './Cart.css'

const Cart = ({ cart, handleRemoveFromCart }) => {

    return (
        <div>
            <h2>Iteams Selacted: {cart.length}</h2>
            {
                cart.map(tShirt =>

                    <p>Name: {tShirt.name}
                        < button onClick={() => handleRemoveFromCart(tShirt)}> x</button>
                    </p>

                )

            }

        </div >
    );
};

export default Cart;