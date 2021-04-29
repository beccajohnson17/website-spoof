import * as React from "react"
import { Modal, Button } from 'react-bootstrap';
import { useState } from 'react';

function ModalOpen() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Click me to learn something neat!
        </Button>

            <Modal  size="sm" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Fun Fact</Modal.Title>
                </Modal.Header>
                <Modal.Body>These are all actual skills that you can endorse someone for on LinkedIn!
                <br></br> 
                <br></br>Credit to Corey Wainwright for his hilarious article,
                which you can find <a href="https://blog.hubspot.com/marketing/linkedin-skills-endorsements" target="_blank">here.</a>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ModalOpen;