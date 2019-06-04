import React from "react";

import { Modal, Button } from "react-bootstrap";

const confirmModal = props => {
  let { removeElement, activeIndex } = props;

  let removeMessage = (
    <h3>
      Do you realy want to remove{" "}
      {removeElement.name ? removeElement.name : removeElement.title}?
    </h3>
  );

  let removeButton = (
    <Button
      onClick={props.removeHandler}
      className="ang-button ang-remove-button"
    >
      Remove
    </Button>
  );

  if (removeElement.id === 1 && !removeElement.title) {
    removeMessage = <h3>You can't delete {removeElement.name}.</h3>;
    removeButton = null;
  }

  if (activeIndex === null) {
    removeMessage = <h3>First you need to select notice to remove.</h3>;
    removeButton = null;
  }

  if (removeElement.children !== undefined) {
    if (removeElement.children.length !== 0 && removeElement.id !== 1) {
      removeMessage = <h3>First you need to remove all nested folders.</h3>;
      removeButton = null;
    }
  }

  return (
    <Modal
      className="ang-notification-modal"
      show={props.showModal}
      size="md"
      centered
    >
      <Modal.Header className="ang-modal-header">
        <Modal.Title className="ang-title">Confirmation Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body className="ang-modal-body">{removeMessage}</Modal.Body>
      <Modal.Footer className="ang-modal-footer">
        <Button
          onClick={props.closeModal}
          className="ang-button ang-cancel-button"
        >
          Cancel
        </Button>
        {removeButton}
      </Modal.Footer>
    </Modal>
  );
};

export default confirmModal;
