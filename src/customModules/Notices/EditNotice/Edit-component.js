import React from "react";

import { Container, Col, Row, Card, Button } from "react-bootstrap";

import { Routes } from "../../../common/ClientRoutes/clientRoutes";

import * as helpers from "../../../common/helpers/formHelpers";
import * as _GH from "../../../common/helpers/generalHelpers";

import NoticeList from "../../UI/Notices/NoticesList";
import NoticeForm from "../../UI/Forms/Forms/NoticeForm";
import SuccessModal from "../../../common/Components/SuccessModal";
import Spinner from "../../../common/Components/Spinner";
import errorHandler from "../../../common/HOCs/ErrorHandler";

class EditNotice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      folderId: null,
      noticeName: null,
      tags: null,
      description: null,
      formErrors: {
        folderId: "",
        noticeName: "",
        tags: "",
        description: ""
      },
      formInvalid: false,
      activeIndex: null
    };
  }

  componentDidMount() {
    this.props.toClearSingleNotice();
    this.props.toGetDirectories();
    this.props.toGetNotices();
    this.props.toCloseModal();
  }

  noticesFilterHadler = event => {
    let { value } = event.target;
    let { notices } = this.props;

    if (value === "default") {
      this.props.toRefreshNotices();
    } else {
      this.props.toFilterNotices(notices, value);
    }
  };

  noticesHandler = id => {
    let { singleNotice } = this.props;

    if (singleNotice.title) {
      let noticeForm = document.getElementById("ang-notice-form");
      noticeForm.reset();
      _GH.clearNoticeState(this, this.state);
    }

    this.setState({
      ...this.state,
      activeIndex: id
    });

    this.props.toGetSingleNotice(id);
  };

  formDataHandler = event => {
    event.preventDefault();

    let { name, value } = event.target;
    let formErrors = { ...this.state.formErrors };

    helpers.formValidation(name, value, formErrors);

    this.setState({ ...this.state, formErrors, [name]: value });
  };

  editHandler = () => {
    let { id, position } = this.props.singleNotice;
    let { folderId, noticeName, description, tags } = this.state;

    let formData = {
      directoryId: folderId,
      title: noticeName,
      description: description,
      tags: _GH.tagsToArray(tags),
      id: id,
      position: position
    };

    if (helpers.formValid(this.state)) {
      this.props.toEditNotice(id, formData, false);

      let noticeForm = document.getElementById("ang-notice-form");
      let noticeFilterSelect = document.getElementById("ang-notice-filter");

      noticeFilterSelect.selectedIndex = 0;
      noticeForm.reset();

      this.setState({
        ...this.state,
        folderId: null,
        noticeName: null,
        tags: null,
        description: null,
        formErrors: {
          folderId: "",
          noticeName: "",
          tags: "",
          description: ""
        },
        activeIndex: null,
        formInvalid: false
      });
    } else {
      _GH.setFormInvalid(this, this.state);
    }
  };

  cancelHandler = () => {
    this.props.history.push(Routes.HOME());
  };

  render() {
    let { formErrors, formInvalid, activeIndex } = this.state;

    let {
      options,
      directories,
      notices,
      filterNotices,
      filtered,
      loading,
      singleNotice
    } = this.props;

    let cardInfo = (
      <Card.Body className="ang-card-body">
        <Card.Title className="ang-card-title">
          If you want to edit notice select from list.
        </Card.Title>
        <Card.Text className="ang-card-text">
          If you want to edit notice, first you need to select it from list.
          After that form will apper and you will be able to edit selected
          notice.
        </Card.Text>
      </Card.Body>
    );

    let cardBody = (
      <Card.Body className="ang-card-body">
        <NoticeForm
          noticeInputType="edit"
          noticeInputName="noticeName"
          noticeNameLabel="Notice Name"
          noticeNamePlaceholder="Enter new name for your notice"
          folderSelectType="edit"
          folderSelectName="folderId"
          folderSelectLabel="Folder"
          folderSelectPlaceholder="Select new folder for your notice"
          tagsInputType="edit"
          tagsNoticeName="tags"
          tagsNoticeLabel="tags"
          tagsNoticePlaceholder="Enter new tags for your notice"
          descriptionNoticeType="edit"
          descriptionNoticeName="description"
          descriptionNoticeLabel="Description"
          descriptionNoticePlaceholder="Enter new description for your notice"
          updateHandler={this.formDataHandler}
          directories={directories}
          formErrors={formErrors}
          formInvalid={formInvalid}
          singleNotice={singleNotice}
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

    if (!singleNotice.title) {
      cardBody = null;
      cardFooter = null;
    } else {
      cardInfo = null;
    }

    return (
      <Container className="ang-container-wrapper">
        <Row className="ang-row-wrapper">
          <Col className="ang-col-wrapper" lg="5" sm="12">
            <NoticeList
              folderSelectId="ang-notice-filter"
              folderSelectName="filterId"
              folderSelectClassName="ang-filter-select"
              folderSelectLabel="Filter"
              folderSelectPlaceholder="Select Folder"
              loading={loading}
              notices={filtered ? filterNotices : notices}
              directories={directories}
              selectNotice={activeIndex}
              updateHandler={this.noticesFilterHadler}
              noticesListHandler={id => this.noticesHandler(id)}
            />
          </Col>
          <Col className="ang-col-wrapper" lg="7" sm="12">
            <Card className="ang-card-template">
              <Card.Header className="ang-card-header">
                <h3 className="ang-title">Edit Notice:</h3>
                <h4 className="ang-element">{singleNotice.title}</h4>
              </Card.Header>
              {cardInfo}
              {cardBody}
              {cardFooter}
            </Card>
          </Col>
        </Row>
        <SuccessModal
          type="edit"
          loading={loading}
          showModal={options.modals.editShow}
          updateElement={singleNotice.title}
        />
      </Container>
    );
  }
}

export default errorHandler(EditNotice);
