import React, { Component } from 'react';

class Events extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="events">

                <h3 className="subtitle">Derniers evènements</h3>

                <div className="content">

                    <ul className="list list-column">

                        <li className="list-item">

                            <a className="list-link" href="#">

                                <div className="notification">

                                    <div className="notification-header">
                                        
                                        <div className="notification-title">
                                            Réunion
                                        </div>

                                        <div className="notification-date">
                                            23 sept &#183; 18h
                                        </div>
                                    </div>

                                    <div className="notification-body">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet felis id felis facilisis varius.
                                    </div>
                                </div>
                            </a>
                        </li>

                        <li className="list-item">

                            <a className="list-link" href="#">

                                <div className="notification">

                                    <div className="notification-header">

                                        <div className="notification-title">
                                            Réunion
                                        </div>

                                        <div className="notification-date">
                                            23 sept &#183; 18h
                                        </div>
                                    </div>

                                    <div className="notification-body">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet felis id felis facilisis varius.
                                    </div>
                                </div>
                            </a>
                        </li>

                        <li className="list-item">

                            <a className="list-link" href="#">

                                <div className="notification">

                                    <div className="notification-header">

                                        <div className="notification-title">
                                            Randonnée
                                        </div>

                                        <div className="notification-date">
                                            23 sept &#183; 18h
                                        </div>
                                    </div>

                                    <div className="notification-body">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet felis id felis facilisis varius.
                                    </div>
                                </div>
                            </a>
                        </li>

                        <li className="list-item">

                            <a className="list-link" href="#">

                                <div className="notification">

                                    <div className="notification-header">

                                        <div className="notification-title">
                                            Rassemblement
                                        </div>

                                        <div className="notification-date">
                                            23 sept &#183; 18h
                                        </div>
                                    </div>

                                    <div className="notification-body">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet felis id felis facilisis varius.
                                    </div>
                                </div>
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
        );
    }
}

export default Events;