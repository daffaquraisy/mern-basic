import React from 'react';
import { Link } from 'react-router-dom';

export class Navbar extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand navbar-dark bg-dark">
                    <div className="container">

                        <Link to="/" className="navbar-brand" > Exercise Tracker </Link>
                        <div className="collapase navbar-collapse">

                            <ul className="navbar-nav mr-auto">

                                <li className="navbar-item">
                                    <Link to="/" className="nav-link" >Exercises</Link>
                                </li>

                                <li className="navbar-item">
                                    <Link to="/create" className="nav-link" >Create Exercise log</Link>
                                </li>

                                <li className="navbar-item">
                                    <Link to="/user" className="nav-link" >Create User</Link>
                                </li>

                            </ul>

                        </div>

                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;
