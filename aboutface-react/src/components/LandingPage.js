import React, { Component } from 'react';
import Resume from './Resume'

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="landing-wrapper">
                <h1>Landing Page</h1>
                <Resume />
            </div>
        );
    }
}
export default LandingPage;