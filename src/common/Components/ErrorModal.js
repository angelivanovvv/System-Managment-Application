import React from "react";

import { Container, Row, Col, Modal } from "react-bootstrap";

const errorModal = props => {
  let errorMessage = null;

  errorMessage = (
    <h3 className="ang-error-message">
      <span className="ang-error-description">
        Opsss. Something went wrong.
      </span>
      <span className="ang-title">{props.status} </span>
      <span>{props.statusMessage}</span>
    </h3>
  );

  return (
    <Modal
      onHide={props.closeModal}
      className="ang-notification-modal"
      show={props.showModal}
      size="md"
      centered
    >
      <Modal.Body className="ang-modal-body">
        <Container>
          <Row>
            <Col sm="12">{errorMessage}</Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
};

export default errorModal;
