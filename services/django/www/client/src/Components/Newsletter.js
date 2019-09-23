import React, { Component } from 'react';

// import '../styles/Newsletter.scss';

class Newsletter extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="section newsletter">

                <h2 className="title">Newsletter</h2>

                <div className="content">

                    <div className="newsletter-input">
                        <input className="input" type="text" placeholder="Text input" />
                        <button type="sumbit">
                            <i className="fab fa-telegram-plane"></i>
                        </button>
                    </div>
                </div>

                <h4 className="subtitle">Restez en contact avec nous</h4>
                <h4 className="subtitle">Stay in touch with us</h4>
            </div>
        );
    }
}

export default Newsletter;