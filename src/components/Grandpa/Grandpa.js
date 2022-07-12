import React, { createContext, useState } from 'react';
import Anti from '../Anti/Anti';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css'
export const RingContext = createContext('diamond');

const Grandpa = () => {
    const [house, setHouse] = useState(1);


    const ornament = 'Diamond Ring';
    const handleByHouse = () => {
        const newHouseCount = house + 1;
        setHouse(newHouseCount);
    }
    return (



        <RingContext.Provider value={ornament}>

            <div className='grandpa'>
                <h4>Grandpa : House-Quantity : {house}</h4>

                <button onClick={handleByHouse}>Click Me</button>
                <section style={{ display: 'flex' }}>

                    <Father house={house} ></Father>
                    <Uncle house={house}></Uncle>
                    <Anti house={house}></Anti>
                </section>
            </div >

        </RingContext.Provider>



    );
};

export default Grandpa;