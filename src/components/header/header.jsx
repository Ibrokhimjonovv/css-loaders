import React from 'react';
import "./header.scss";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div id='header'>
            <div className="h-text">
                <Link to="/">
                    <div className="css-text">
                        <span>C</span>
                        <span>S</span>
                        <span>S</span>
                    </div>
                    <div className="loader-text">
                        <span>Loaders</span>
                        <span>600+ single element loaders</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header