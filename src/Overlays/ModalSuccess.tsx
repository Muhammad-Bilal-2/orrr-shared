import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import {
  IModalNoHeaderOverlayProps,
  ModalNoHeaderOverlay,
} from "./ModalNoHeaderOverlay";

interface IModalSuccessProps extends IModalNoHeaderOverlayProps {
  text: string;
}

export const ModalSuccess: React.FC<IModalSuccessProps> = (props) => {
  return (
    <ModalNoHeaderOverlay show={props.show} setShow={props.setShow}>
      <FontAwesomeIcon
        className="modal-success-icon"
        icon={faCheckCircle}
        size="10x"
      />
      <h2 className="mb-2">Success!</h2>
      <p>{props.text}</p>
    </ModalNoHeaderOverlay>
  );
};
