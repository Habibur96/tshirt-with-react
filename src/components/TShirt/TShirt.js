import React from 'react';
import './TShirt.css'

const TShirt = ({ tShirt, handleAddToCart }) => {
    const { name, picture, price } = tShirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h4>Name: {name}</h4>
            <h4>Price: ${price}</h4>
            <button onClick={() => handleAddToCart(tShirt)}>Add to cart</button>
        </div>
    );
};

export default TShirt;