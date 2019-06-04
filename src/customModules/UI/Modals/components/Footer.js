import React from "react";
import { Modal, Button } from "react-bootstrap";
const modalFooter = props => {
  return (
    <Modal.Footer className={props.className}>
      <Button
        className="ang-button ang-close-button"
        onClick={props.clickHandler}
      >
        Close
      </Button>
    </Modal.Footer>
  );
};

export default modalFooter;
