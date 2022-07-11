import React from 'react';
import useTShirts from '../../Hooks/useTShirts';
import Cart from '../Cart/Cart';
import './Home.css';

const Home = () => {
    const [tShirts, setTShirts] = useTShirts();
    return (

        <div className='home-container'>
            <div className="tshirt-container">
                <h3>Tshitr: {tShirts.length}</h3>
            </div>
            <div className="cart-container">
                <Cart

                ></Cart>
            </div>
        </div>

    );
};

export default Home;