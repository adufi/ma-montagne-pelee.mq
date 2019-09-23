import React, { Component } from 'react';

// import '../styles/History.scss';

class History extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="section history">

                <h2 className="title">History</h2>

                <div className="content">

                    <p className="paragraph">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vestibulum ut tellus sed gravida. Cras pharetra hendrerit congue. Pellentesque fermentum orci ut lacus volutpat, sit amet posuere quam condimentum. Proin ut neque vel ipsum pellentesque ullamcorper ut ut neque. Nullam interdum faucibus orci, eget tempus massa placerat vel. Etiam vitae tortor ac nisi congue fermentum sit amet vel massa.
                    </p>

                    <p className="paragraph">
                        Proin lacinia urna nulla. Curabitur ut quam egestas, ornare libero sit amet, porttitor diam. Quisque sit amet convallis nunc, ac scelerisque massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam consequat dictum tellus eu suscipit. In tristique eleifend tincidunt.
                    </p>

                </div>
            </div>
        );
    }
}

export default History;