import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as directoriesActions from "../../../reduxSource/actions/directories";
import * as noticesActions from "../../../reduxSource/actions/notices";
import * as uiActions from "../../../reduxSource/actions/ui";

import EditNotice from "./Edit-component";

const mapStateToProps = state => {
  return {
    directories: state.directories.byId,

    notices: state.notices.all,
    singleNotice: state.notices.single,
    filterNotices: state.notices.filter,

    filtered: state.notices.filtered,

    loading: state.notices.loading,
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
      toGetNotices: () => noticesActions.initNotices(),
      toGetSingleNotice: id => noticesActions.initSingleNotice(id),

      toClearSingleNotice: () => noticesActions.clearSingleNotice(),
      toClearNoticesList: () => noticesActions.clearNoticesList(),

      toRefreshNotices: () => noticesActions.refreshNotices(),

      toFilterNotices: (notices, id) =>
        noticesActions.filterNotices(notices, id),
      toCloseModal: () => uiActions.closeSideNavModal(),
      toCloseErrorModal: () => uiActions.closeErrorModal(),

      toEditNotice: (id, data, singleEdit) =>
        noticesActions.initEditNotice(id, data, singleEdit)
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditNotice);
