import React, { Component } from 'react';
import { Bootstrap, Navbar, Grid, Row, Col, Thumbnail, Button, Modal, Table } from 'react-bootstrap';

class About extends Component {

    render() {
        return (
            <div className="about-wrapper">
                <h1 className="team">Management Team</h1>
                <Grid>
                    <Row>
                        <Col xs={6} md={4}>
                            <Thumbnail src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAxfAAAAJDQ2YmIwMWQ0LWE5ODQtNGVjMi1iNjE5LWYxMDYzMzk4ZmEyMg.jpg" alt="photo">
                                <h3>Vicky Chen</h3>
                                <p>Software Engineer</p>
                                <p>
                                    <Button bsStyle="primary">linkedin</Button>&nbsp;
          <Button bsStyle="default">resume</Button>
                                </p>
                            </Thumbnail>
                        </Col>
                        <Col xs={6} md={4}>
                            <Thumbnail src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAK8AAAAJDcyMGM4N2EyLWZjZDgtNGM2Yy1iYjBmLTY1MWY5MjVjZWJhZg.jpg" alt="photo">
                                <h3>Keziyah Lewis</h3>
                                <p>Software Engineer</p>
                                <p>
                                    <Button bsStyle="primary">linkedin</Button>&nbsp;
          <Button bsStyle="default">resume</Button>
                                </p>
                            </Thumbnail>
                        </Col>
                        <Col xs={6} md={4}>
                            <Thumbnail src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAmxAAAAJDk0ODA4ZGZjLWRhYzYtNDYxOS05OTJiLTE4MDcxOWQ4YjUzNg.jpg" alt="photo">
                                <h3>Naomi Meyer</h3>
                                <p>Web Developer</p>
                                <p>
                                    <Button bsStyle="primary">linkedin</Button>&nbsp;
          <Button bsStyle="default">resume</Button>
                                </p>
                            </Thumbnail>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}
export default About;