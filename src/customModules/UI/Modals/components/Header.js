import React from "react";
import { Modal } from "react-bootstrap";

const modalHeader = props => {
  return (
    <Modal.Header className={props.className}>
      <Modal.Title className={`ang-title ${props.headerOptions.typeClass}`}>
        <h3 className="ang-title">{props.title}</h3>
      </Modal.Title>
    </Modal.Header>
  );
};

export default modalHeader;
