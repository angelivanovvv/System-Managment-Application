import React from "react";

import { Form, Col } from "react-bootstrap";

const Create = (props, classes) => {
  return (
    <Form.Control
      as="textarea"
      rows="3"
      name={props.name}
      className={classes}
      onChange={props.handler}
      placeholder={props.placeholder}
    />
  );
};

const Edit = (props, classes) => {
  return (
    <Form.Control
      as="textarea"
      rows="3"
      name={props.name}
      className={classes}
      onChange={props.handler}
      placeholder={props.placeholder}
    />
  );
};

const Textarea = props => {
  let textAreaBody = null;
  let classes = ["ang-form-input"];

  if (props.errorClass) classes.push(props.errorClass);
  else if (classes.length > 1) classes.pop();

  if (props.type === "create") textAreaBody = Create(props, classes);
  else textAreaBody = Edit(props, classes);

  return (
    <Form.Group as={Col} sm="12">
      <Form.Label className="ang-form-label">{props.labelName}</Form.Label>
      {textAreaBody}
    </Form.Group>
  );
};

export default Textarea;
