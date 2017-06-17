import React, { Component } from 'react';
import { Bootstrap, Modal, Button } from 'react-bootstrap';

class Extension extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        }
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
    }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  render() {
    return (
      <div>
        <p>Click to Download Chrome Extension!</p>

        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={this.open}
        >
          Launch Chrome Extension
        </Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title> Bias Blur Chrome Extension to check your bias! </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src="/images/logo.png" alt="logo-small" />
            <h4><a href="#">www.blur-bias.com</a></h4>

          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
};

export default Extension;