import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as actions from "../../../reduxSource/actions/notices";
import * as uiActions from "../../../reduxSource/actions/ui";

import Notice from "./Notice-component";

const mapStateToProps = state => {
  return {
    singleNotice: state.notices.single,
    loading: state.notices.loading,

    error: {
      openModal: {
        dirs: state.directories.error.openModal,
        notices: state.notices.error.openModal
      },
      status: {
        dirs: state.directories.error.status,
        notices: state.notices.error.status
      },
      message: {
        dirs: state.directories.error.message,
        notices: state.notices.error.message
      }
    }
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      toGetSingleNotice: id => actions.initSingleNotice(id),

      toCloseErrorModal: () => uiActions.closeErrorModal()
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Notice);
