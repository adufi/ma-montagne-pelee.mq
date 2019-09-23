import React, { Component } from 'react';

import '../styles/Testimonials.scss';

class Testimonials extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="section testimonials">

                <h2 className="title">Testimonials</h2>

                <ul className="list list-row">

                    <li className="list-item">

                        <div className="box">

                            <article>
                                {/* <span className="quote">”</span> */}
                                {/* <span className="quote">“</span> */}
                                <i className="fas fa-quote-left"></i>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis, diam et auctor ultrices, turpis orci dapibus elit, nec venenatis magna sem nec enim. Nam eu tellus eget sapien pulvinar scelerisque. Morbi quis elit tellus. Nam ullamcorper enim malesuada nisl aliquet pellentesque. Praesent eget dui eget tellus elementum euismod.
                                    <i className="fas fa-quote-right"></i>
                                <span className="author">- John Doe</span>
                            </article>
                        </div>
                    </li>

                    <li className="list-item">

                        <div className="box">

                            <article>
                                {/* <span className="quote">”</span> */}
                                {/* <span className="quote">“</span> */}
                                <i className="fas fa-quote-left"></i>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis, diam et auctor ultrices, turpis orci dapibus elit, nec venenatis magna sem nec enim. Nam eu tellus eget sapien pulvinar scelerisque. Morbi quis elit tellus. Nam ullamcorper enim malesuada nisl aliquet pellentesque. Praesent eget dui eget tellus elementum euismod.
                                    <i className="fas fa-quote-right"></i>
                                <span className="author">- John Doe</span>
                            </article>
                        </div>
                    </li>

                    <li className="list-item">

                        <div className="box">

                            <article>
                                {/* <span className="quote">”</span> */}
                                {/* <span className="quote">“</span> */}
                                <i className="fas fa-quote-left"></i>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis, diam et auctor ultrices, turpis orci dapibus elit, nec venenatis magna sem nec enim. Nam eu tellus eget sapien pulvinar scelerisque. Morbi quis elit tellus. Nam ullamcorper enim malesuada nisl aliquet pellentesque. Praesent eget dui eget tellus elementum euismod.
                                    <i className="fas fa-quote-right"></i>
                                <span className="author">- John Doe</span>
                            </article>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Testimonials;