import React from "react";

const Wrapper = React.forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      id={props.id}
      className={props.className}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
});

export default Wrapper;
