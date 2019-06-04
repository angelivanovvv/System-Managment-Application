import React from "react";

import { Container, Row, Col, Card, Button } from "react-bootstrap";

import { Routes } from "../../../common/ClientRoutes/clientRoutes";
import Wrapper from "../../../common/HOCs/Wrapper";
import errorHandler from "../../../common/HOCs/ErrorHandler";

class Notice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initial: false
    };
  }

  componentDidMount() {
    let { noticeId } = this.props.match.params;
    this.props.toGetSingleNotice(noticeId);
  }

  closeNoticeHandler = () => {
    this.props.history.push(Routes.HOME());
  };

  render() {
    let { title, description, tags } = this.props.singleNotice;

    return (
      <Container className="ang-container-wrapper">
        <Row className="ang-row-wrapper">
          <Col md="12" className="ang-col-wrapper">
            <Wrapper className="ang-single-notice-wrapper">
              <Card className="ang-single-notice">
                <Card.Header className="ang-card-header ang-header">
                  <h3 className="ang-title">Notice</h3>
                  <h3 className="ang-element">{title}</h3>
                </Card.Header>
                <Card.Body className="ang-card-body ang-body">
                  <div className="ang-body-row">
                    <div className="ang-title">
                      <h3>Title</h3>
                    </div>
                    <div className="ang-content">
                      <p>{title}</p>
                    </div>
                  </div>
                  <div className="ang-body-row">
                    <div className="ang-title">
                      <h3>Description</h3>
                    </div>

                    <div className="ang-content">
                      <p>{description}</p>
                    </div>
                  </div>
                  <div className="ang-body-row">
                    <div className="ang-title">
                      <h3>Tags</h3>
                    </div>
                    <div className="ang-content">
                      {tags ? (
                        tags.map((tag, index) => (
                          <span key={index}>#{tag}</span>
                        ))
                      ) : (
                        <span>No Tags</span>
                      )}
                    </div>
                  </div>
                </Card.Body>
                <Card.Footer className="ang-card-footer ang-footer">
                  <Button
                    onClick={this.closeNoticeHandler}
                    className="ang-button ang-close-button"
                  >
                    Close
                  </Button>
                </Card.Footer>
              </Card>
            </Wrapper>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default errorHandler(Notice);
