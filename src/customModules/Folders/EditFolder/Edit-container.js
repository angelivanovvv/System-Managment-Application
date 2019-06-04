import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as directoriesActions from "../../../reduxSource/actions/directories";
import * as uiActions from "../../../reduxSource/actions/ui";

import EditDirectory from "./Edit-component";

const mapStateToProps = state => {
  return {
    directories: state.directories.all,
    directoriesById: state.directories.byId,
    directoriesFilter: state.directories.filter,
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

      toFilterDirectoriesForItem: (directories, item) =>
        directoriesActions.filterDirectoriesForItem(directories, item),
      toFilterDirectoriesForRoot: () =>
        directoriesActions.filterDirectoriesForRoot(),

      toEditDirectory: (id, data) =>
        directoriesActions.initEditDirectory(id, data),

      toCloseModal: () => uiActions.closeSideNavModal(),
      toCloseErrorModal: () => uiActions.closeErrorModal(),

      toClearSingleDirectory: () => directoriesActions.clearSingleDirectory(),
      toClearDirectoriesTree: () => directoriesActions.clearDirectoriesTree()
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditDirectory);
