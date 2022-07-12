import React from 'react';
import Special from '../Special/Special';

const MySelf = ({ house, ornament }) => {
    return (
        <div>
            <h4>Me</h4>
            <h4>House:{house}</h4>
            <Special house={house} ornament={ornament}></Special>
        </div >
    );
};

export default MySelf;