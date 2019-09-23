import React, {Component} from 'react';

import Nav from './Nav.js';

// import '../styles/Header.scss';

class Header extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <header className="header">

                <Nav />

                <div className="header-overlay">

                    Ce site s'incrit dans la découverte du patrimoine et de l'UNESCO
                    <h1>La Montagne Pelée</h1>
                    This is a Template
                    
                    <br/>
                    Rejoignez notre communauté <a className="button is-danger is-rounded">Nous Rejoindres!</a>
                </div>
            </header>
        );
    }
}

export default Header;