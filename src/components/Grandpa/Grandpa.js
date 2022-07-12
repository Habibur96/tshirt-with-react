import React from 'react';
import Anti from '../Anti/Anti';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css'

const Grandpa = () => {
    const house = 7;
    return (
        <div className='grandpa'>
            <h4>Grandpa</h4>
            <section style={{ display: 'flex' }}>

                <Father house={house}></Father>
                <Uncle house={house}></Uncle>
                <Anti house={house}></Anti>
            </section>
        </div >

    );
};

export default Grandpa;