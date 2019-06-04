import React from "react";
import { Treebeard, decorators } from "react-treebeard";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder, faFile } from "@fortawesome/free-solid-svg-icons";

import Spinner from "../../../common/Components/Spinner";
import customStyle from "./customStyle";
import Wrapper from "../../../common/HOCs/Wrapper";

library.add(faFolder, faFile);

decorators.Header = ({ style, node }) => {
  const iconType = faFolder;
  const iconStyle = { marginRight: "5px" };
  const iconSize = "2x";
  return (
    <div style={style.base}>
      <FontAwesomeIcon icon={iconType} style={iconStyle} size={iconSize} />
      <span>{node.name}</span>
    </div>
  );
};

const FolderTree = props => {
  let treebeard = (
    <Treebeard
      data={props.payload}
      onToggle={props.toggleHandler}
      decorators={decorators}
      style={customStyle}
    />
  );

  if (props.loading && props.loading !== null) treebeard = <Spinner />;
  return (
    <Wrapper className="ang-folders-wrapper">
      <h3 className="ang-title ang-bold-title">{props.description}:</h3>
      <Wrapper className="ang-folders-container">{treebeard}</Wrapper>
    </Wrapper>
  );
};

export default FolderTree;
