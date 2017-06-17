import React, { Component } from 'react';
import axios from 'axios'
import Resume from './Resume'

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    handleClick() {
        axios.get('http://localhost:3001/hello')
        .then(res => console.log("res", res))
        .catch(console.error)
    }

    render() {
        return (
            <div className="landing-wrapper">
                <h1>Landing Page</h1>
                <Resume />
                <button onClick={this.handleClick}>Click me!</button>
            </div>
        );
    }
}
export default LandingPage;