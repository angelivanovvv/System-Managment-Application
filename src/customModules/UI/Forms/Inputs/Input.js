import React from "react";

import { Form, Col } from "react-bootstrap";

const Create = (props, classes) => {
  return (
    <Form.Control
      name={props.name}
      onChange={props.handler}
      className={classes}
      placeholder={props.placeholder}
    />
  );
};

const Edit = (props, classes) => {
  return (
    <Form.Control
      name={props.name}
      onChange={props.handler}
      className={classes}
      placeholder={props.placeholder}
    />
  );
};

const Input = props => {
  let inputBody = null;
  let classes = ["ang-form-input"];

  if (props.errorClass) classes.push(props.errorClass);
  else if (classes.length > 1) classes.pop();

  if (props.type === "create") inputBody = Create(props, classes);
  else inputBody = inputBody = Edit(props, classes);

  return (
    <Form.Group as={Col} sm="12">
      <Form.Label className="ang-form-label">{props.labelName}</Form.Label>
      {inputBody}
    </Form.Group>
  );
};

export default Input;
