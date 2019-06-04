import React from "react";

import { Container, Col, Row, Card, Button } from "react-bootstrap";

import { Routes } from "../../../common/ClientRoutes/clientRoutes";

import Folders from "../../UI/FolderTree/FolderTree";
import ConfirmModal from "../../../common/Components/ConfirmModal";
import SuccessModal from "../../../common/Components/SuccessModal";
import errorHandler from "../../../common/HOCs/ErrorHandler";
import Spinner from "../../../common/Components/Spinner";

class RemoveDirectory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.toClearDirectoriesTree();
    this.props.toClearSingleDirectory();
    this.props.toGetDirectories();
    this.props.toGetNotices();
    this.props.toCloseModal();
  }

  foldersToggleHandler = (node, toggled) => {
    let dirId = node.id;
    let { directoriesById } = this.props;

    if (this.state.cursor) {
      this.state.cursor.active = false;
    }
    node.active = true;
    if (node.children) {
      node.toggled = toggled;
    }

    this.setState({
      ...this.state,
      cursor: node
    });

    this.props.toGetSingleDirectory(dirId, directoriesById);
  };

  showRemoveModalHandler = () => {
    this.props.toShowRemoveModal();
  };

  closeRemoveModalHandler = () => {
    this.props.toCloseRemoveModal();
  };

  collectNoticesHandler = (id, notices) => {
    let result = [];
    result = notices
      .filter(notice => {
        return id === parseInt(notice.directoryId);
      })
      .map(notice => {
        return notice.id;
      });
    return result;
  };

  removeHandler = () => {
    let id = this.props.singleDirectory.id;
    let notices = this.props.notices;

    let noticesToDelete = this.collectNoticesHandler(id, notices);

    this.props.toRemoveDirectory(id);
    this.props.toRemoveNoticesForDirectory(noticesToDelete);
  };

  cancelHandler = () => {
    this.props.history.push(Routes.HOME());
  };

  render() {
    let { options, directories, loading, singleDirectory } = this.props;

    let cardInfo = (
      <Card.Body className="ang-card-body">
        <Card.Title className="ang-card-title">
          If you want to remove folder select from list.
        </Card.Title>
        <Card.Text className="ang-card-text">
          If you want to remove folder, first you need to select it from list.
        </Card.Text>
      </Card.Body>
    );

    let cardBody = (
      <Card.Body className="ang-card-body">
        <Card.Title className="ang-card-title">
          Are you sure you want to remove
          <span className="ang-element"> {singleDirectory.name}?</span>
        </Card.Title>
        <Card.Text className="ang-card-text">
          If you want do remove folder, first you need to select it from list
          and then click
          <span className="ang-remove-element"> "remove folder"</span> !
        </Card.Text>
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
          className="ang-button ang-remove-button"
          onClick={this.showRemoveModalHandler}
        >
          Remove Folder
        </Button>
      </Card.Footer>
    );

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
                <h3 className="ang-title">Remove Folder</h3>
                <h4 className="ang-element">{singleDirectory.name}</h4>
              </Card.Header>
              {cardInfo}
              {cardBody}
              {cardFooter}
            </Card>
          </Col>
        </Row>
        <ConfirmModal
          loading={loading}
          showModal={options.modals.removeShow}
          closeModal={this.closeRemoveModalHandler}
          removeElement={singleDirectory}
          removeHandler={this.removeHandler}
        />
        <SuccessModal
          type="delete"
          loading={loading}
          showModal={options.modals.editShow}
          updateElement={singleDirectory.name}
        />
      </Container>
    );
  }
}

export default errorHandler(RemoveDirectory);
