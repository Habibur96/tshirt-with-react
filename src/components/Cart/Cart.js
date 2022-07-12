import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
// import TShirt from '../TShirt/TShirt';

import './Cart.css'

const Cart = ({ cart, handleRemoveFromCart }) => {

    // Conditional rendering options.
    // 1. Element variable.
    // 2. ternary operator:-  condition ? true : false
    // 3. && Operatior (shorthand)
    // 4. || Operatior

    let command;
    if (cart.length === 0) {
        command =
            <div>
                <h5>Please, Add some items!!</h5>
            </div>
    }

    else if (cart.length === 1) {
        command =
            <div>
                <p>Plz, add more...</p>
            </div>
    }
    else {
        command =
            <div>
                <p><small>Thanks for adding item.</small></p>
            </div>
    }

    return (
        <div>
            <h2>Iteams Selacted: {cart.length}</h2>
            {
                cart.map(tShirt =>

                    <p>Name: {tShirt.name} < button onClick={() => handleRemoveFromCart(tShirt)}><FontAwesomeIcon icon={faTrashCan}> </FontAwesomeIcon></button>
                    </p>

                )

            }

            {/* 4. || Operatior */}
            {cart.length === 0 || <p className='orange'>YAY!! You are buying.</p>}

            {/* 3. && Operatior */}
            {cart.length === 3 && <div className='orange'>
                <h1>Trigonal</h1>
                <p>OOPS!! You bought 3 iteam.</p>
            </div>
            }

            {/* 1. Element variable. */}
            {command}


            {/* 2. ternary operator:-  condition ? true : false */}
            {cart.length !== 4 ? <p>Keep adding</p> : <button>Remove All</button>}

            {/* 3. && Operatior */}
            {cart.length === 4 && <button className='red'>Review Order</button>}

        </div >
    );
};

export default Cart;