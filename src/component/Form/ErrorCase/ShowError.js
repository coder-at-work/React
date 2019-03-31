import React from "react";

const ShowError = props => {
  return Object.keys(props.error).map((field, index) => {
    if (props.error[field].length > 0) {
      return (
        <p key={index}>
          {field} {props.error[field]}
        </p>
      );
    } else {
      return "";
    }
  });
};

export default ShowError;
