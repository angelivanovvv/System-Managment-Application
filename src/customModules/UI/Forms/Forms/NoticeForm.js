import React from "react";

import { Form } from "react-bootstrap";

import Input from "../Inputs/Input";
import Select from "../Inputs/Select";
import TextArea from "../Inputs/Textarea";

const NoticeForm = props => {
  let {
    noticeInputType,
    noticeInputName,
    noticeNameLabel,
    noticeNamePlaceholder,
    folderSelectType,
    folderSelectName,
    folderSelectLabel,
    folderSelectPlaceholder,
    tagsInputType,
    tagsNoticeName,
    tagsNoticeLabel,
    tagsNoticePlaceholder,
    descriptionNoticeType,
    descriptionNoticeName,
    descriptionNoticeLabel,
    descriptionNoticePlaceholder,
    updateHandler,
    formInvalid,
    directories
  } = props;

  let { noticeName, folderId, tags, description } = props.formErrors;

  return (
    <Form className="ang-notice-form" id="ang-notice-form">
      {formInvalid ? (
        <span className="ang-error-form"> Invalid form.</span>
      ) : null}
      <Form.Row className="ang-form-row">
        <Input
          type={noticeInputType}
          name={noticeInputName}
          handler={updateHandler}
          labelName={noticeNameLabel}
          placeholder={noticeNamePlaceholder}
          errorClass={noticeName.length > 0 ? "ang-error-style-input" : null}
        />
        {noticeName.length > 0 && (
          <span className="ang-error-message-input">{noticeName}</span>
        )}
        <Select
          type={folderSelectType}
          name={folderSelectName}
          handler={updateHandler}
          labelName={folderSelectLabel}
          directories={directories}
          placeholder={folderSelectPlaceholder}
          errorClass={folderId.length > 0 ? "ang-error-style-input" : null}
        />
        {folderId.length > 0 && (
          <span className="ang-error-message-input">{folderId}</span>
        )}
        <Input
          type={tagsInputType}
          name={tagsNoticeName}
          handler={updateHandler}
          labelName={tagsNoticeLabel}
          placeholder={tagsNoticePlaceholder}
          errorClass={tags.length > 0 ? "ang-error-style-input" : null}
        />
        {tags.length > 0 && (
          <span className="ang-error-message-input">{tags}</span>
        )}
        <TextArea
          type={descriptionNoticeType}
          name={descriptionNoticeName}
          handler={updateHandler}
          labelName={descriptionNoticeLabel}
          placeholder={descriptionNoticePlaceholder}
          errorClass={description.length > 0 ? "ang-error-style-input" : null}
        />
        {description.length > 0 && (
          <span className="ang-error-message-input">{description}</span>
        )}
      </Form.Row>
    </Form>
  );
};

export default NoticeForm;
