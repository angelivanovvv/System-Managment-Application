import React from "react";

import { Container, Row, Col, Card, Button } from "react-bootstrap";

import { Routes } from "../../../common/ClientRoutes/clientRoutes";
import * as _GH from "../../../common/helpers/generalHelpers";
import * as helpers from "../../../common/helpers/formHelpers";

import NoticeForm from "../../UI/Forms/Forms/NoticeForm";
import SuccessModal from "../../../common/Components/SuccessModal";
import Spinner from "../../../common/Components/Spinner";
import errorHandler from "../../../common/HOCs/ErrorHandler";

class CreateNotice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      folderId: null,
      noticeName: null,
      description: null,
      tags: null,
      formErrors: {
        folderId: "",
        noticeName: "",
        description: "",
        tags: ""
      },
      tagsInvalid: false,
      formInvalid: false
    };
  }

  componentDidMount() {
    this.props.toCloseModal();
    this.props.toGetDirectories();
  }

  formDataHandler = event => {
    event.preventDefault();

    let { name, value } = event.target;
    let formErrors = { ...this.state.formErrors };

    helpers.formValidation(name, value, formErrors);

    this.setState({
      ...this.state,
      formErrors,
      [name]: value
    });
  };

  createHandler = () => {
    let { folderId, noticeName, description, tags } = this.state;

    if (helpers.formValid(this.state)) {
      let formData = {
        directoryId: folderId,
        title: noticeName,
        description: description,
        tags: _GH.tagsToArray(tags)
      };

      _GH.clearFormInvalid(this, this.state);

      this.props.toCreateNotice(formData);
    } else {
      _GH.setFormInvalid(this, this.state);
    }
  };

  cancelHandler = () => {
    this.props.history.push(Routes.HOME());
  };

  render() {
    let { formErrors, formInvalid, noticeName } = this.state;
    let { options, directories, loading } = this.props;

    let cardBody = (
      <Card.Body className="ang-card-body">
        <NoticeForm
          noticeInputType="create"
          noticeInputName="noticeName"
          noticeNameLabel="Notice Name"
          noticeNamePlaceholder="Enter name for your notice"
          folderSelectType="create"
          folderSelectName="folderId"
          folderSelectLabel="Folder"
          folderSelectPlaceholder="Select Folder to add notice"
          tagsInputType="create"
          tagsNoticeName="tags"
          tagsNoticeLabel="tags"
          tagsNoticePlaceholder="Enter tags for your notice"
          descriptionNoticeType="create"
          descriptionNoticeName="description"
          descriptionNoticeLabel="Description"
          descriptionNoticePlaceholder="Enter description for your notice"
          updateHandler={this.formDataHandler}
          directories={directories}
          formInvalid={formInvalid}
          formErrors={formErrors}
        />
      </Card.Body>
    );

    if (formInvalid) {
      setTimeout(() => {
        _GH.clearFormInvalid(this, this.state);
      }, 1000);
    }

    if (loading.dirs && loading.dirs !== null) {
      cardBody = <Spinner />;
    }

    if (loading.notices && loading.notices !== null) {
      cardBody = <Spinner />;
    }
    return (
      <Container className="ang-container-wrapper">
        <Row className="ang-row-wrapper">
          <Col
            lg={{ span: 8, offset: 2 }}
            md={{ span: 10, offset: 1 }}
            sm={{ span: 12, offset: 0 }}
          >
            <Card className="ang-card-template">
              <Card.Header className="ang-card-header">
                <h3 className="ang-title">Create Notice</h3>
              </Card.Header>
              {cardBody}
              <Card.Footer className="ang-card-footer">
                <Button
                  className="ang-button ang-cancel-button"
                  onClick={this.cancelHandler}
                >
                  Cancel
                </Button>
                <Button
                  className="ang-button ang-create-button"
                  onClick={this.createHandler}
                >
                  Create Notice
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
        <SuccessModal
          showModal={options.modals.editShow}
          loading={loading.dirs}
          type="create"
          updateElement={noticeName}
        />
      </Container>
    );
  }
}

export default errorHandler(CreateNotice);
