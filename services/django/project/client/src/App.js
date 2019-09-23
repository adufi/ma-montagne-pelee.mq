import React, {Component} from 'react';
import logo from './logo.svg';

import Footer from './Components/Footer';
import Header from './Components/Header.js';
import Contact from './Components/Contact';
import Gallery from './Components/Gallery';
import History from './Components/History';
import EventsNews from './Components/EventsNews';
import Newsletter from './Components/Newsletter';
import Testimonials from './Components/Testimonials';

import './styles/App.scss';

import './vendor/fa/css/solid.min.css';
import './vendor/fa/css/brands.min.css';
import './vendor/fa/css/fontawesome.min.css';

class App extends Component {
    constructor() {
        super();
    }

    render() {

        return (
            <div className="App">
                
                <Header />

                <EventsNews />

                <History />
                
                <Gallery />

                <Testimonials />

                <Newsletter />

                <Contact />

                <Footer />

            </div>
        );
    }
}

export default App;
