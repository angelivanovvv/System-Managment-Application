import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as uiActions from "../../reduxSource/actions/ui";
import * as noticesActions from "../../reduxSource/actions/notices";
import * as directoriesActions from "../../reduxSource/actions/directories";
import * as searchActions from "../../reduxSource/actions/search";

import Home from "./Home-component";

const mapStateToProps = state => {
  return {
    directories: state.directories.all,

    notices: state.notices.all,
    singleNotice: state.notices.single,

    filter: state.notices.filter,
    filtered: state.notices.filtered,

    options: state.ui,

    loadingDirs: state.directories.loading,
    loadingNotices: state.notices.loading,

    searchList: state.search.list,
    simpleSearchList: state.search.simpleList,
    advanceSearchList: state.search.advanceList,

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

const mapDispatchToPorps = dispatch => {
  return bindActionCreators(
    {
      toGetDirectories: () => directoriesActions.initDirectories(),

      toGetNotices: () => noticesActions.initNotices(),
      toGetSingleNotice: id => noticesActions.initSingleNotice(id),
      toRefreshNotices: () => noticesActions.refreshNotices(),
      toFilterNotices: (notices, dirId) =>
        noticesActions.filterNotices(notices, dirId),
      toEditSingleNotice: (id, data, singleEdit) =>
        noticesActions.initEditNotice(id, data, singleEdit),
      toChangeNoticesPosition: notices =>
        noticesActions.initChangeNoticesPosition(notices),

      toGetSearchType: searchType => uiActions.getSearchType(searchType),

      toAdvanceFilter: advanceList =>
        searchActions.advanceFilterNotices(advanceList),

      toCloseModal: () => uiActions.closeSideNavModal(),
      toCloseErrorModal: () => uiActions.closeErrorModal(),

      toClearDirectoriesTree: () => directoriesActions.clearDirectoriesTree(),
      toClearNoticesList: () => noticesActions.clearNoticesList(),
      toClearSingleNotice: () => noticesActions.clearSingleNotice()
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToPorps
)(Home);
