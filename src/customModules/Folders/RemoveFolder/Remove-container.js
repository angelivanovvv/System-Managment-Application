import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as directoriesActions from "../../../reduxSource/actions/directories";
import * as noticesActions from "../../../reduxSource/actions/notices";
import * as uiActions from "../../../reduxSource/actions/ui";

import RemoveDorectory from "./Remove-component";

const mapStateToProps = state => {
  return {
    notices: state.notices.all,

    directories: state.directories.all,
    directoriesById: state.directories.byId,
    singleDirectory: state.directories.single,

    loading: state.directories.loading,
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
      toGetSingleDirectory: (id, directories) =>
        directoriesActions.initSingleDirectory(id, directories),

      toGetNotices: () => noticesActions.initNotices(),

      toClearSingleDirectory: () => directoriesActions.clearSingleDirectory(),
      toClearDirectoriesTree: () => directoriesActions.clearDirectoriesTree(),

      toRemoveDirectory: id => directoriesActions.initRemoveDirectory(id),
      toRemoveNoticesForDirectory: notices =>
        noticesActions.initRemoveNoticesForDirectory(notices),

      toShowRemoveModal: () => uiActions.openRemoveModal(),
      toCloseRemoveModal: () => uiActions.closeRemoveModal(),

      toCloseModal: () => uiActions.closeSideNavModal()
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RemoveDorectory);
