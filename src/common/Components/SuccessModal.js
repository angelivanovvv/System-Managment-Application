import React from "react";

import { Container, Row, Col, Modal } from "react-bootstrap";
import Spinner from "./Spinner";

const successModal = props => {
  let successMessage = null;
  let message = null;

  switch (props.type) {
    case "create":
      message = "was successfully created.";
      break;
    case "edit":
      message = "was successfully updated.";
      break;
    case "delete":
      message = "was successfully removed.";
      break;
    default:
      message = "";
      break;
  }

  if (props.loading) {
    successMessage = <Spinner />;
  }

  successMessage = (
    <h3 className="ang-success-message">
      <span className="ang-title">"{props.updateElement}" </span>
      <span>{message}</span>
    </h3>
  );

  return (
    <Modal
      className="ang-notification-modal"
      show={props.showModal}
      size="md"
      centered
    >
      <Modal.Body className="ang-modal-body">
        <Container>
          <Row>
            <Col sm="12">{successMessage}</Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
};

export default successModal;
