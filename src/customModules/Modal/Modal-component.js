import React from "react";

import {
  ModalTypes,
  AddModal,
  EditModal,
  RemoveModal
} from "../../common/Configs/modal-config";

import Modal from "../UI/Modals/Modal";

class PopupModal extends React.Component {
  render() {
    let modal = null;
    let { options } = this.props;
    if (!options.sideNav.modalType) {
      modal = false;
    } else {
      switch (options.sideNav.modalType) {
        case ModalTypes.type.create:
          modal = <Modal {...this.props} options={AddModal} />;
          break;
        case ModalTypes.type.edit:
          modal = <Modal {...this.props} options={EditModal} />;
          break;
        case ModalTypes.type.remove:
          modal = <Modal {...this.props} options={RemoveModal} />;
          break;
        default:
          modal = false;
      }
    }
    return modal;
  }
}

export default PopupModal;
