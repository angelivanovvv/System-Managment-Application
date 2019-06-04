import React from "react";

import { Container, Row, Col, Card, Button } from "react-bootstrap";

import { Routes } from "../../../common/ClientRoutes/clientRoutes";

import * as _GH from "../../../common/helpers/generalHelpers";
import * as helpers from "../../../common/helpers/formHelpers";

import DirectoryForm from "../../UI/Forms/Forms/FolderForm";
import SuccessModal from "../../../common/Components/SuccessModal";
import Spinner from "../../../common/Components/Spinner";
import errorHandler from "../../../common/HOCs/ErrorHandler";

class CreateDirectory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      folderName: null,
      folderId: null,
      formErrors: {
        folderName: "",
        folderId: ""
      },
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

    this.setState({ formErrors, [name]: value });
  };

  createHandler = () => {
    if (helpers.formValid(this.state)) {
      let formData = {
        parentId: this.state.folderId,
        name: this.state.folderName
      };

      _GH.clearFormInvalid(this, this.state);

      this.props.toCreateDirectory(formData);
    } else {
      _GH.setFormInvalid(this, this.state);
    }
  };

  cancelHandler = () => {
    this.props.history.push(Routes.HOME());
  };

  render() {
    let { formErrors, formInvalid, folderName } = this.state;
    let { options, directories, loading, error } = this.props;

    let cardBody = (
      <Card.Body className="ang-card-body">
        <DirectoryForm
          folderInputType="create"
          folderInputName="folderName"
          folderInputLabel="Folder Name"
          folderInputPlaceholder="Enter name for your folder"
          folderSelectType="create"
          folderSelectName="folderId"
          folderSelectLabel="Folder"
          folderSelectPlaceholder="Select forlder"
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

    if (loading && loading !== null) {
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
                <h3 className="ang-title">Create Folder</h3>
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
                  Create Folder
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
        <SuccessModal
          showModal={options.modals.editShow}
          loading={loading}
          type="create"
          updateElement={folderName}
        />
      </Container>
    );
  }
}

export default errorHandler(CreateDirectory);
