import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Wrapper from "../../../../common/HOCs/Wrapper";

const modalButtom = props => {
  return (
    <Wrapper className={props.className}>
      <Link className="ang-link" to={props.link}>
        <FontAwesomeIcon
          icon={props.icon}
          size={props.size}
          style={props.style}
        />
        <h3>{props.title}</h3>
      </Link>
    </Wrapper>
  );
};

export default modalButtom;
