import React, { Component } from 'react';
import { Bootstrap, Jumbotron, Carousel, Button } from 'react-bootstrap';
import Resume from './Resume'

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
                <Jumbotron>
                    <h1>Bias Blur</h1>
                    <p>
                        Research proves all people have implicit gender and racial bias, particularly during the STEM hiring process.
                        Bias Blur aims to help solve this problem, by enabling users to upload resumes and return an unbiased version with the candidate names converted to initials.
                        Through our chrome extension, recruiters, hiring managers, and ordinary people who want to check and challenge their implicit bias can remove names and profile pictures on linkedin profiles.
                        

                         </p>

                         <Resume />
                    <p><Button bsStyle="primary">Learn more</Button></p>
                </Jumbotron>

                {/*<Carousel activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleSelect}>
                    <Carousel.Item>
                        <img width={900} height={500} alt="900x500" src="/assets/carousel.png" />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={900} height={500} alt="900x500" src="/assets/carousel.png" />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={900} height={500} alt="900x500" src="/assets/carousel.png" />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>*/}

            </div>
        );
    }
}
export default LandingPage;