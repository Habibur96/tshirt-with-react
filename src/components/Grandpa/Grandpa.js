import React, { useState } from 'react';
import Anti from '../Anti/Anti';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css'

const Grandpa = () => {
    const [house, setHouse] = useState(1);

    const ornament = 'Diamond Ring';
    const handleByHouse = () => {
        const newHouseCount = house + 1;
        setHouse(newHouseCount);
    }
    return (
        <div className='grandpa'>
            <h4>Grandpa : House-Quantity : {house}</h4>

            <button onClick={handleByHouse}>Click Me</button>
            <section style={{ display: 'flex' }}>

                <Father house={house} ornament={ornament}></Father>
                <Uncle house={house}></Uncle>
                <Anti house={house}></Anti>
            </section>
        </div >

    );
};

export default Grandpa;