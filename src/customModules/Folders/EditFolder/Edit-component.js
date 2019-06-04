import React from "react";

import { Container, Row, Col, Card, Button } from "react-bootstrap";

import { Routes } from "../../../common/ClientRoutes/clientRoutes";

import * as helpers from "../../../common/helpers/formHelpers";
import * as _GH from "../../../common/helpers/generalHelpers";

import Folders from "../../UI/FolderTree/FolderTree";
import DirectoryForm from "../../UI/Forms/Forms/FolderForm";
import SuccessModal from "../../../common/Components/SuccessModal";
import Spinner from "../../../common/Components/Spinner";
import errorHandler from "../../../common/HOCs/ErrorHandler";

class EditDirectory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      folderName: null,
      folderId: null,
      disable: true,
      formErrors: {
        folderName: "",
        folderId: ""
      },
      formInvalid: false
    };
  }

  componentDidMount() {
    this.props.toGetDirectories();
    this.props.toCloseModal();
    this.props.toClearDirectoriesTree();
    this.props.toClearSingleDirectory();
  }

  foldersToggleHandler = (node, toggled) => {
    let dirId = node.id;
    let dirName = node.name;
    let dirParentId = node.parentId;
    let { directoriesById, singleDirectory } = this.props;

    if (this.state.cursor) {
      this.state.cursor.active = false;
    }
    node.active = true;
    if (node.children) {
      node.toggled = toggled;
    }

    if (!dirParentId) {
      this.props.toFilterDirectoriesForRoot(directoriesById, dirName);

      if (singleDirectory.name) {
        let directoryForm = document.getElementById("ang-directory-form");
        directoryForm.reset();
      }

      _GH.clearDirectoryState(this, this.state);

      this.setState({
        ...this.state,
        disable: true,
        cursor: node
      });
    } else {
      this.props.toFilterDirectoriesForItem(directoriesById, dirName);

      if (singleDirectory.name) {
        let directoryForm = document.getElementById("ang-directory-form");
        directoryForm.reset();
      }

      _GH.clearDirectoryState(this, this.state);

      this.setState({
        ...this.state,
        disable: false,
        cursor: node
      });
    }

    this.props.toGetSingleDirectory(dirId, directoriesById);
  };

  formDataHandler = event => {
    event.preventDefault();

    let { name, value } = event.target;
    let formErrors = { ...this.state.formErrors };

    helpers.formValidation(name, value, formErrors);

    this.setState({ ...this.state, formErrors, [name]: value });
  };

  editHandler = () => {
    let { folderId, folderName } = this.state;
    let { singleDirectory } = this.props;

    let formData = {
      parentId: folderId,
      name: folderName,
      id: singleDirectory.id
    };
    if (helpers.formValid(this.state)) {
      let folderId = singleDirectory.id;
      let reduceformData = _GH.reduceEditDirectoryData(formData);
      _GH.clearFormInvalid(this, this.state);

      this.props.toEditDirectory(folderId, reduceformData);

      let directoryForm = document.getElementById("ang-directory-form");
      directoryForm.reset();
      _GH.clearDirectoryState(this, this.state);
    } else {
      _GH.setFormInvalid(this, this.state);
    }
  };

  cancelHandler = () => {
    this.props.history.push(Routes.HOME());
  };

  render() {
    let { formErrors, formInvalid, disable, changed } = this.state;
    let {
      directories,
      directoriesFilter,
      singleDirectory,
      loading,
      options
    } = this.props;

    let cardInfo = (
      <Card.Body className="ang-card-body">
        <Card.Title className="ang-card-title">
          If you want to edit Folder select from list.
        </Card.Title>
        <Card.Text className="ang-card-text">
          If you want to edit folder, first you need to select it from list.
          After that form will apper and you will be able to edit selected
          folder.
        </Card.Text>
      </Card.Body>
    );

    let cardBody = (
      <Card.Body className="ang-card-body">
        <DirectoryForm
          folderInputType="edit"
          folderInputName="folderName"
          folderInputLabel="Folder Name"
          folderInputPlaceholder="Enter new name for your folder"
          folderSelectType="edit"
          folderSelectName="folderId"
          folderSelectLabel="Folder"
          folderSelectPlaceholder="Select new forlder"
          folderSelectDisable={disable}
          changeSelectFolder={changed}
          singleDirectory={singleDirectory}
          updateHandler={this.formDataHandler}
          directories={directoriesFilter}
          formErrors={formErrors}
          formInvalid={formInvalid}
        />
      </Card.Body>
    );

    let cardFooter = (
      <Card.Footer className="ang-card-footer">
        <Button
          className="ang-button ang-cancel-button"
          onClick={this.cancelHandler}
        >
          Cancel
        </Button>
        <Button
          className="ang-button ang-edit-button"
          onClick={this.editHandler}
        >
          Edit Folder
        </Button>
      </Card.Footer>
    );

    if (formInvalid) {
      setTimeout(() => {
        _GH.clearFormInvalid(this, this.state);
      }, 1000);
    }

    if (loading && loading !== null) {
      cardBody = <Spinner />;
    }

    if (!singleDirectory.name) {
      cardBody = null;
      cardFooter = null;
    } else {
      cardInfo = null;
    }

    return (
      <Container className="ang-container-wrapper">
        <Row className="ang-row-wrapper">
          <Col className="ang-col-wrapper" lg="5" sm="12">
            <Folders
              description="Folders"
              loading={loading}
              payload={directories}
              toggleHandler={this.foldersToggleHandler}
            />
          </Col>
          <Col className="ang-col-wrapper" lg="7" sm="12">
            <Card className="ang-card-template">
              <Card.Header className="ang-card-header">
                <h3 className="ang-title">Edit Folder:</h3>
                <h4 className="ang-element">{singleDirectory.name}</h4>
              </Card.Header>
              {cardInfo}
              {cardBody}
              {cardFooter}
            </Card>
          </Col>
        </Row>
        <SuccessModal
          type="edit"
          showModal={options.modals.editShow}
          loading={loading}
          updateElement={singleDirectory.name}
        />
      </Container>
    );
  }
}

export default errorHandler(EditDirectory);
