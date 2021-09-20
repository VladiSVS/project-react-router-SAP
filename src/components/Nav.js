import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
    render() {
        return <header>
            <h1 style={{ fontSize: "3em" }}>My Life</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>;
    }
}

export default Nav;