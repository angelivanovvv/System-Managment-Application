import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as uiActions from "../../reduxSource/actions/ui";
import Layout from "./Layout-component";

const mapStateToProps = state => {
  return {
    options: state.ui,
    router: state.router
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      toggleNenu: () => uiActions.toggleSideNavMenu(),
      openModal: () => uiActions.openSideNavModal(),
      modalType: modalType => uiActions.getSideNavModalType(modalType)
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);
