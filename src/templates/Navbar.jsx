import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import Header from './Header';

class Navbar extends React.Component {
    render() {
        return (
            <div>
            <Header />
            <nav className="navbar">
                <ul className="navbar-list">
                    <li className="navbar-item"><Link to="/Home" className="navbar-link">Homepage</Link></li>
                    <li className="navbar-item"><Link to="/search" className="navbar-link">Search</Link></li>
                    <li className="navbar-item"><Link to="/profile" className="navbar-link">Profile</Link></li>
                </ul>
            </nav>
            </div>
        );
    }
}

export default Navbar;