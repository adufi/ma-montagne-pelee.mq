import React, { Component } from 'react';

class Nav extends Component {
    constructor() {
        super();

        this.state = {
            active: false,
        }
    }

    close = () => {
        this.setState({ active: false });
    }
    
    trigger = () => {
        this.setState({ active: true });
    }

    render() {
        const menus_class = (this.state.active) ? 'menus active': 'menus';

        return (
            <div className={ menus_class }>

                <div className="menus-trigger">
                    <i className="fas fa-bars" onClick={ this.trigger }></i>
                    <i className="fas fa-times" onClick={ this.close }></i>
                </div>

                <nav className="menus-normal">

                    <ul className="menu menu-row socials">
    
                        <li className="menu-item">
                            <a href="#">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                        </li>
    
                        <li className="menu-item">
                            <a href="#">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </li>
    
                        <li className="menu-item">
                            <a href="#">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </li>
                    </ul>
    
                    <ul className="menu menu-row links">
                        <li className="menu-item">Accueil</li>
                        <li className="menu-item">Histoire</li>
                        <li className="menu-item">Evènements</li>
                        <li className="menu-item">Contact</li>
                        <li className="menu-item"><a className="button is-danger is-rounded">Faire un don</a></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Nav;