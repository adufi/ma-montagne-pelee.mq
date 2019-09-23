import React, { Component } from 'react';

class News extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="news">

                <h3 className="subtitle">Dernieres news</h3>

                <div className="content">

                    <div className="tiles">

                        <ul className="tiles-list">

                            <li className="tiles-item">

                                <div className="article">

                                    <div className="article-bg">
                                        <img src="http://localhost:3000/res/tiles/1.jpg" />
                                    </div>

                                    <div className="article-overlay">

                                        <div className="article-content">

                                            <div className="article-content-title">
                                                <a href="#">
                                                    Stop the deforestation
                                                </a>
                                            </div>

                                            <span className="article-content-meta">
                                                by 
                                                <a href="#">Arnaud</a> 
                                                on 
                                                <time dateTime="23 SEPTEMBER 2019">23 SEPT. 2019</time>
                                            </span>

                                            <div className="article-content-keywords">
                                                <a href="#">Information</a>
                                                <a href="#">Evènement</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className="tiles-item">

                                <div className="article">

                                    <div className="article-bg">
                                        <img src="http://localhost:3000/res/tiles/1.jpg" />
                                    </div>

                                    <div className="article-overlay">

                                        <div className="article-content">

                                            <div className="article-content-title">
                                                <a href="#">
                                                    Stop the deforestation
                                                </a>
                                            </div>

                                            <span className="article-content-meta">
                                                by
                                                <a href="#">Arnaud</a>
                                                on
                                                <time dateTime="23 SEPTEMBER 2019">23 SEPT. 2019</time>
                                            </span>

                                            <div className="article-content-keywords">
                                                <a href="#">Information</a>
                                                <a href="#">Evènement</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className="tiles-item">

                                <div className="article">

                                    <div className="article-bg">
                                        <img src="http://localhost:3000/res/tiles/1.jpg" />
                                    </div>

                                    <div className="article-overlay">

                                        <div className="article-content">

                                            <div className="article-content-title">
                                                <a href="#">
                                                    Stop the deforestation
                                                </a>
                                            </div>

                                            <span className="article-content-meta">
                                                by
                                                <a href="#">Arnaud</a>
                                                on
                                                <time dateTime="23 SEPTEMBER 2019">23 SEPT. 2019</time>
                                            </span>

                                            <div className="article-content-keywords">
                                                <a href="#">Information</a>
                                                <a href="#">Evènement</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className="tiles-item">

                                <div className="article">

                                    <div className="article-bg">
                                        <img src="http://localhost:3000/res/tiles/1.jpg" />
                                    </div>

                                    <div className="article-overlay">

                                        <div className="article-content">

                                            <div className="article-content-title">
                                                <a href="#">
                                                    Stop the deforestation
                                                </a>
                                            </div>

                                            <span className="article-content-meta">
                                                by
                                                <a href="#">Arnaud</a>
                                                on
                                                <time dateTime="23 SEPTEMBER 2019">23 SEPT. 2019</time>
                                            </span>

                                            <div className="article-content-keywords">
                                                <a href="#">Information</a>
                                                <a href="#">Evènement</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default News;