import React from "react";

import { Form, Col } from "react-bootstrap";

const Create = (props, classes) => {
  return (
    <Form.Control
      as="select"
      id={props.id}
      name={props.name}
      disabled={props.disable}
      onChange={props.handler}
      className={classes}
    >
      <option value="default">{props.placeholder}</option>
      {props.directories.map(item => {
        return (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        );
      })}
    </Form.Control>
  );
};

const Edit = (props, classes) => {
  return (
    <Form.Control
      as="select"
      id={props.id}
      name={props.name}
      disabled={props.disable}
      onChange={props.handler}
      className={classes}
    >
      <option value="default">{props.placeholder}</option>
      {props.directories.map(item => {
        return (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        );
      })}
    </Form.Control>
  );
};

const Select = props => {
  let selectBody = null;
  let classes = ["ang-form-input"];

  if (props.errorClass) classes.push(props.errorClass);
  else if (classes.length > 1) classes.pop();

  if (props.type === "create") selectBody = Create(props, classes);
  else selectBody = Edit(props, classes);

  return (
    <Form.Group className={props.className} as={Col} sm="12">
      <Form.Label className="ang-form-label">{props.labelName}</Form.Label>
      {selectBody}
    </Form.Group>
  );
};

export default Select;
