import * as React from "react";
import { Modal, CloseButton } from "react-bootstrap";

export interface IModalNoHeaderOverlayProps {
  show: boolean;
  setShow: () => void;
  size?: "sm" | "lg";
}

export const ModalNoHeaderOverlay: React.FC<IModalNoHeaderOverlayProps> = (
  props
) => {
  return (
    <>
      <Modal
        className="modal-no-header"
        onHide={props.setShow}
        animation={false}
        size={props.size ? props.size : "lg"}
        show={props.show}
        centered
      >
        <CloseButton onClick={props.setShow} />
        <Modal.Body className="modal-body">{props.children}</Modal.Body>
      </Modal>
    </>
  );
};
