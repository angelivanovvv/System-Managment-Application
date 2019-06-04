import React from "react";

import { Modal, Container, Row, Col } from "react-bootstrap";
import ModalButton from "./Button";

const modalBody = props => {
  return (
    <Modal.Body className={props.className}>
      <Container>
        <Row>
          <Col>
            <h2 className="ang-title">{props.description}</h2>
          </Col>
        </Row>
        <Row>
          {props.bodyOptions.map(option => {
            return (
              <Col md="6" sm="12" key={option.title}>
                <ModalButton
                  className="ang-modal-button"
                  title={option.title}
                  icon={option.icon}
                  size={option.size}
                  style={option.style}
                  link={option.link}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </Modal.Body>
  );
};

export default modalBody;
