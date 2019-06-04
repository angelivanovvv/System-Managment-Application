import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Modal from "./Modal-component";

const mapStateToProps = state => {
  return {
    options: state.ui
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({}, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
