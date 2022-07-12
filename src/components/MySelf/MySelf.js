import React from 'react';
import Special from '../Special/Special';

const MySelf = ({ house }) => {
    return (
        <div>
            <h4>Me</h4>
            <h4>House:{house}</h4>
            <Special house={house}></Special>
        </div >
    );
};

export default MySelf;