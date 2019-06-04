import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as directoriesActions from "../../../reduxSource/actions/directories";
import * as uiActions from "../../../reduxSource/actions/ui";
import AddDirectory from "./Аdd-component";

const mapStateToProps = state => {
  return {
    directories: state.directories.byId,

    loading: state.directories.loading,
    options: state.ui,

    error: {
      openModal: {
        dirs: state.directories.error.openModal,
        notices: state.directories.error.openModal
      },
      status: {
        dirs: state.directories.error.status,
        notices: state.directories.error.status
      },
      message: {
        dirs: state.directories.error.message,
        notices: state.directories.error.message
      }
    }
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      toGetDirectories: () => directoriesActions.initDirectories(),

      toCreateDirectory: data => directoriesActions.initCreateDirectory(data),

      toCloseModal: () => uiActions.closeSideNavModal(),
      toCloseErrorModal: () => uiActions.closeErrorModal()
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddDirectory);
