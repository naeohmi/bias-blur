import React, { Component } from 'react';
import axios from 'axios'
import Resume from './Resume'

class LandingPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="landing-wrapper">
                <h1>Landing Page</h1>
            </div>
        );
    }
}
export default LandingPage;