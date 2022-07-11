import React from 'react';
// import { Link } from 'react-router-dom';

import CustomLink from '../CustiomLink/CustomLink';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h2>Welcome to tshirt Mania!!!</h2>
            <nav>

                <CustomLink to='/home'>Home</CustomLink>
                <CustomLink to='/orderreview'>OrderReview</CustomLink>

            </nav>
        </div>
    );
};

export default Header;