import React, { createContext, useState } from 'react';
import Anti from '../Anti/Anti';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css'


// context api:-
// 1. call createContext with a default value.
// 2. set a variable of the context with uppercase.
// 3. Make sure you export the context to use it in other places.
// 4. Wrap you child context using RingContext. Provider.
// 5. Provide a value.
// 6. to consume the context from child comport
// 7. useContext hook and you will you need to pass the contextName.
// 8. Make sure you take notes.... 



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