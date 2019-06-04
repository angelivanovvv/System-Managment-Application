import React from "react";
import { Modal } from "react-bootstrap";

import ModalHeader from "./components/Header";
import ModalBody from "./components/Body";
import ModalFooter from "./components/Footer";

const modal = props => {
  return (
    <Modal {...props} className="ang-sideNav-modal" size="md" centered>
      <ModalHeader
        className="ang-sideNav-header"
        headerOptions={props.options}
        title={props.options.title}
      />
      <ModalBody
        className="ang-sideNav-body"
        bodyOptions={props.options.options}
        description={props.options.description}
      />
      <ModalFooter className="ang-sideNav-footer" clickHandler={props.onHide} />
    </Modal>
  );
};

export default modal;
