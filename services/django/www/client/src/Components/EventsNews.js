import React, { Component } from 'react';

import News from './News';
import Events from './Events';

// import '../styles/Events.scss';

class EventsNews extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="section recent-news">

                <h2 className="title">Evènements & Actualités</h2>

                <div className="recent-news-wrapper">
                    
                    <Events />

                    <News />
                </div>
            </div>
        );
    }
}

export default EventsNews;