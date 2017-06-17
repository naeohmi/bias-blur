import React, { Component } from 'react';
import axios from 'axios'
import Resume from './Resume'
import { Bootstrap, Jumbotron, Carousel, Button } from 'react-bootstrap';

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            direction: null
        }
    }

    handleSelect(selectedIndex, e) {
        alert('selected=' + selectedIndex + ', direction=' + e.direction);
        this.setState({
            index: selectedIndex,
            direction: e.direction
        });
    }

    render() {
        return (
            <div className="landing-wrapper">

                <h1>Landing Page</h1>

                <Carousel>
                    <Carousel.Item>
                        <img width={900} height={500} alt="ladies-working-together" src="/images/startup-photos.jpg" />
                        <Carousel.Caption>
                            <h3>We blur the hiring bias for women and minorities</h3>
                            {/*<p></p>*/}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={900} height={500} alt="ladies-working-together" src="/images/ladiesworking.jpeg" />
                        <Carousel.Caption>
                            <h3>Upload resumes on our portal</h3>
                            
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={900} height={500} alt="ladies-working-together" src="/images/women-tech.jpeg" />
                        <Carousel.Caption>
                            <h3>Add our chrome extension to check your own bias!</h3>
                            
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <Jumbotron>
                    <h1 className="title">Bias Blur</h1>
                    <p>
                        Research proves all people have implicit gender and racial bias, particularly during the STEM hiring process.
                        Bias Blur aims to help solve this problem, by enabling users to upload resumes and return an unbiased version with the candidate names converted to initials.
                        Through our chrome extension, recruiters, hiring managers, and ordinary people who want to check and challenge their implicit bias can remove names and profile pictures on linkedin profiles.
                    </p>
                         
                    <p><Button bsStyle="primary">Learn more</Button></p>
                </Jumbotron>
            </div>
        );
    }
}
export default LandingPage;