import * as React from 'react';
import { Modal, CloseButton } from 'react-bootstrap';

export interface ILoginModalOverlayProps {
  show: boolean;
  setShow: () => void;
  size?: 'sm' | 'lg';
}

export const LoginModalOverlay: React.FC<ILoginModalOverlayProps> = (props) => {
  return (
    <>
      <Modal
        className="login-modal-overlay"
        onHide={props.setShow}
        animation={false}
        size={props.size ? props.size : 'lg'}
        show={props.show}
        centered
      >
        <CloseButton className="close-modal" onClick={props.setShow} />
        <Modal.Body className="login-modal-body">{props.children}</Modal.Body>
      </Modal>
    </>
  );
};
