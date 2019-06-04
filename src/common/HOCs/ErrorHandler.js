import React from "react";

import Wrapper from "./Wrapper";
import ErrorModal from "../Components/ErrorModal";

const errorHandler = WrappedComponent => {
  return class extends React.Component {
    render() {
      let { error } = this.props;
      let dirsErrorModal = null;
      let noticesErrorModal = null;

      if (error.openModal.dirs) {
        dirsErrorModal = (
          <ErrorModal
            closeModal={this.props.toCloseErrorModal}
            showModal={error.openModal.dirs}
            status={error.status.dirs}
            statusMessage={error.message.dirs}
          />
        );
      } else if (error.openModal.notices) {
        noticesErrorModal = (
          <ErrorModal
            closeModal={this.props.toCloseErrorModal}
            showModal={error.openModal.notices}
            status={error.status.notices}
            statusMessage={error.message.notices}
          />
        );
      }

      return (
        <Wrapper className="ang-error-wrapper">
          {dirsErrorModal}
          {noticesErrorModal}
          <WrappedComponent {...this.props} />
        </Wrapper>
      );
    }
  };
};

export default errorHandler;
