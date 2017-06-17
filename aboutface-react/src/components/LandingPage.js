import React, { Component } from 'react';
<<<<<<< HEAD
import { Bootstrap, Carousel } from 'react-bootstrap';
=======
import Resume from './Resume'
>>>>>>> 4308718db31e2a38b7a35bad7aafcff1479198d1

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
<<<<<<< HEAD
            <Carousel activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleSelect}>
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
            </Carousel>
=======
            <div className="landing-wrapper">
                <h1>Landing Page</h1>
                <Resume />
            </div>
>>>>>>> 4308718db31e2a38b7a35bad7aafcff1479198d1
        );
    }
}
export default LandingPage;