import React from "react";
import { Spinner } from "react-bootstrap";

const spinner = () => {
  return (
    <Spinner className="ang-spinner" animation="border" role="status" size="lg">
      <span className="sr-only">Loading...</span>
    </Spinner>
  );
};

export default spinner;
