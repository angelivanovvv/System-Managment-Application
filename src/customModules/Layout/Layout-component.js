import React from "react";

import { images } from "../../common/Exports/images-export";
import NavBar from "../UI/NavBar/NavBar";
import SideNav from "../UI/SideNav/SideNav";
import Wrapper from "../../common/HOCs/Wrapper";

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initial: null
    };
  }

  getModalTypeHandler = e => {
    let itemType = e.currentTarget.attributes.getNamedItem("type").value;
    this.props.modalType(itemType);
    this.props.openModal();
  };

  render() {
    let { options } = this.props;
    return (
      <Wrapper className="d-flex" id="wrapper">
        <SideNav
          {...this.props}
          isOpen={options.sideNav.open}
          logo={images.logo}
          title="Notice Manager"
          getModalType={this.getModalTypeHandler}
        />
        <Wrapper className="ang-body-wrapper">
          <NavBar toggle={this.props.toggleNenu} />
          <Wrapper className="ang-body-container">
            {this.props.children}
          </Wrapper>
        </Wrapper>
      </Wrapper>
    );
  }
}

export default Layout;
