import React from "react";

import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStickyNote, faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Wrapper from "../../../common/HOCs/Wrapper";

library.add(faStickyNote, faEllipsisV);

// This type of list notices is for edit notice page
const notice = ({ clickHandler, name, id, active }) => {
  return (
    <Wrapper
      onClick={clickHandler}
      className={`ang-single-notice-item ${active === id ? "active" : ""}`}
      id={id}
    >
      <FontAwesomeIcon icon={faStickyNote} size="2x" className="ang-image" />
      <span className="ang-name">{name}</span>
    </Wrapper>
  );
};

// This type of list notices is for home page
const noticeEditable = props => {
  let dragableIcon = null;

  let {
    id,
    name,
    link,
    active,
    dragable,
    noticeMode,
    editNotice,
    saveNotice,
    cancelNotice,
    singleChange
  } = props;

  let { editMode } = noticeMode;

  if (dragable)
    dragableIcon = (
      <FontAwesomeIcon
        icon={faEllipsisV}
        size="1x"
        className="ang-drag-image"
      />
    );
  else dragableIcon = null;

  return (
    <Wrapper className="ang-single-notice-editable-item">
      <Link className="ang-link" to={editMode ? "#" : link}>
        {dragableIcon}
        <FontAwesomeIcon icon={faStickyNote} size="2x" className="ang-image" />
        {editMode && active === id ? (
          <Form.Control
            className="ang-input"
            defaultValue={name}
            onChange={singleChange}
          />
        ) : (
          <span className="ang-name">{name}</span>
        )}
      </Link>
      <div className="ang-edit-button-container">
        <Button
          id={id}
          type="editMode"
          className={`ang-edit-button  ${
            noticeMode.editMode && active === id ? "hide" : ""
          }`}
          onClick={editNotice}
        >
          Edit
        </Button>
        <Button
          id={id}
          type="saveMode"
          className={`ang-save-button ${
            noticeMode.editMode && active === id ? "" : "hide"
          }`}
          onClick={saveNotice}
        >
          Save
        </Button>
        <Button
          id={id}
          type="cancelMode"
          className={`ang-cancel-button ${
            noticeMode.editMode && active === id ? "" : "hide"
          }`}
          onClick={cancelNotice}
        >
          Cancel
        </Button>
      </div>
    </Wrapper>
  );
};

// single notice component to return
const singleNotice = props => {
  let { type } = props;
  let note = null;
  if (type === "listNote") note = notice(props);
  else note = noticeEditable(props);

  return note;
};

export default singleNotice;
