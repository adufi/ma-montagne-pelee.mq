import React, { Component } from 'react';

// import '../styles/Gallery.scss';

class Gallery extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="section gallery">

                <h2 className="title">Gallerie</h2>

                <div className="tiles">

                    <ul className="tiles-list">

                        <li className="tiles-item">

                            <a href="#" className="card">

                                <div className="card-recto">
                                    <div className="card-text">
                                        <p>Sample</p>
                                    </div>
                                </div>

                                <div className="card-verso">
                                    <img src="http://localhost:3000/res/tiles/1.jpg" />
                                </div>
                            </a>
                        </li>

                        <li className="tiles-item">

                            <a href="#" className="card">

                                <div className="card-recto">
                                    <div className="card-text">
                                        <p>Sample</p>
                                    </div>
                                </div>

                                <div className="card-verso">
                                    <img src="http://localhost:3000/res/tiles/2.jpg" />
                                </div>
                            </a>
                        </li>

                        <li className="tiles-item">

                            <a href="#" className="card">

                                <div className="card-recto">
                                    <div className="card-text">
                                        <p>Sample</p>
                                    </div>
                                </div>

                                <div className="card-verso">
                                    <img src="http://localhost:3000/res/tiles/3.jpg" />
                                </div>
                            </a>
                        </li>

                        <li className="tiles-item">

                            <a href="#" className="card">

                                <div className="card-recto">
                                    <div className="card-text">
                                        <p>Sample</p>
                                    </div>
                                </div>

                                <div className="card-verso">
                                    <img src="http://localhost:3000/res/tiles/4.jpg" />
                                </div>
                            </a>
                        </li>

                        <li className="tiles-item">

                            <a href="#" className="card">

                                <div className="card-recto">
                                    <div className="card-text">
                                        <p>Sample</p>
                                    </div>
                                </div>

                                <div className="card-verso">
                                    <img src="http://localhost:3000/res/tiles/5.jpg" />
                                </div>
                            </a>
                        </li>

                        <li className="tiles-item">

                            <a href="#" className="card">

                                <div className="card-recto">
                                    <div className="card-text">
                                        <p>Sample</p>
                                    </div>
                                </div>

                                <div className="card-verso">
                                    <img src="http://localhost:3000/res/tiles/6.jpg" />
                                </div>
                            </a>
                        </li>
                        
                    </ul>
                </div>
            </div>
        );
    }
}

export default Gallery;