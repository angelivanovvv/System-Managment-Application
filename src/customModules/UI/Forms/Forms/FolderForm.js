import React from "react";

import { Form } from "react-bootstrap";

import Input from "../Inputs/Input";
import Select from "../Inputs/Select";

const DirectoryForm = props => {
  let {
    folderInputType,
    folderInputName,
    folderInputLabel,
    folderInputPlaceholder,
    folderSelectType,
    folderSelectName,
    folderSelectLabel,
    folderSelectDisable,
    folderSelectPlaceholder,
    formInvalid,
    directories,
    updateHandler
  } = props;

  let { folderName, folderId } = props.formErrors;

  return (
    <Form className="ang-directory-form ang-form" id="ang-directory-form">
      {formInvalid ? (
        <span className="ang-error-form">Invalid form.</span>
      ) : null}
      <Form.Row className="ang-form-row">
        <Input
          type={folderInputType}
          name={folderInputName}
          handler={updateHandler}
          labelName={folderInputLabel}
          errorClass={folderName.length > 0 ? "ang-error-style-input" : null}
          placeholder={folderInputPlaceholder}
        />
        {folderName.length > 0 && (
          <span className="ang-error-message-input">{folderName}</span>
        )}

        <Select
          type={folderSelectType}
          name={folderSelectName}
          disable={folderSelectDisable}
          handler={updateHandler}
          labelName={folderSelectLabel}
          errorClass={folderId.length > 0 ? "ang-error-style-input" : null}
          placeholder={folderSelectPlaceholder}
          directories={directories}
        />
        {folderId.length > 0 && (
          <span className="ang-error-message-input">{folderId}</span>
        )}
      </Form.Row>
    </Form>
  );
};

export default DirectoryForm;
