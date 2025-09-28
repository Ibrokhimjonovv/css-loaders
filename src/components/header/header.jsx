import React, { useState, useEffect } from 'react';
import "./header.scss";
import { Link } from 'react-router-dom';

const API_BASE = "https://impulsee.pythonanywhere.com/api"; // Django API manzilingiz

const Header = () => {
    const [loaderCount, setLoaderCount] = useState(0);

    useEffect(() => {
        const fetchLoaderCount = async () => {
            try {
                const res = await fetch(`${API_BASE}/loaders/`);
                if (!res.ok) throw new Error("Failed to fetch loaders");

                const data = await res.json();
                setLoaderCount(data.length); // API'dan kelgan elementlar soni
            } catch (err) {
                console.error(err);
            }
        };

        fetchLoaderCount();
    }, []);

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
                        <span>{loaderCount}+ single element loaders</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header;
