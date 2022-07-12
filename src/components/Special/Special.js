import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa'

const Special = ({ house }) => {
    const ring = useContext(RingContext);
    return (
        <div>
            <h4>Special</h4>
            <h4>House: {house}</h4>
            <h4>Gift: {ring}</h4>
        </div>
    );
};

export default Special;