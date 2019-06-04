import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as directoriesActions from "../../../reduxSource/actions/directories";
import * as noticesActions from "../../../reduxSource/actions/notices";
import * as uiActions from "../../../reduxSource/actions/ui";
import AddNotice from "./Add-component";

const mapStateToProps = state => {
  return {
    directories: state.directories.byId,

    loading: {
      dirs: state.directories.loading,
      notices: state.notices.loading
    },
    options: state.ui,

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
      toGetDirectories: () => directoriesActions.initDirectories(),

      toCreateNotice: data => noticesActions.initCreateNotices(data),

      toCloseModal: () => uiActions.closeSideNavModal(),
      toCloseErrorModal: () => uiActions.closeErrorModal()
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddNotice);
