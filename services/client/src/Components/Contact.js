import React, { Component } from 'react';

// import '../styles/Contact.scss';

class Contact extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="section contact">

                <h2 className="title">Contact</h2>

                <h4 className="subtitle">Une question ? N'hésitez pas</h4>
                <h4 className="subtitle">A Question ? Don't hesitate</h4>

                <div className="content">

                    <form method="post" action="#">

                        <div className="field">
                            <label className="label">Name</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="Text input" />
                            </div>
                        </div>

                        <div className="field">

                            <label className="label">Email</label>

                            <div className="control has-icons-left has-icons-right">

                                <input className="input is-danger" type="email" placeholder="Email input" value="hello@" />

                                <span className="icon is-small is-left">
                                    <i className="fas fa-envelope"></i>
                                </span>

                                <span className="icon is-small is-right">
                                    <i className="fas fa-exclamation-triangle"></i>
                                </span>
                            </div>

                            <p className="help is-success">This username is available</p>
                            <p className="help is-danger">This email is invalid</p>
                        </div>

                    </form>


                </div>

            </div>

        );
    }
}

export default Contact;