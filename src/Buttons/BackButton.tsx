import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLessThan } from "@fortawesome/free-solid-svg-icons";
import React from "react";

export const BackButton = () => {
  let history = useHistory();
  return (
    <>
      <div className="backButtonHolder" onClick={() => history.goBack()}>
        <FontAwesomeIcon icon={faLessThan} size="xs" />
        <span className="pl-2">Back</span>
      </div>
    </>
  );
};
