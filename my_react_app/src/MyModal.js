import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class MyModal extends Component {
    state = {
        modal: false
    };

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <div style={{
                margin: 50,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Button color="info" onClick={this.toggle}>Wholesome Content</Button>
                <Modal funk={true} isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>My Family</ModalHeader>
                    <ModalBody>
                        <img
                            alt="Family"
                            src="https://raw.githubusercontent.com/tylerkwallace/Images/master/family.jpg"
                            class="modalImage"
                        />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggle}>Close</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}