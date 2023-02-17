import { FC, Fragment } from "react";
import { createPortal } from "react-dom";

//style components
import Backdrop from "./UI/Backdrop";
import Modal, {
  ModalHeader,
  ModalContent,
  ModalFooter,
  ModalButton,
} from "./UI/Modal";

// declare props types
type props = {
  title: string;
  message: string;
  onConfirm: () => void;
};

const OverlayModal: FC<props> = ({ title, message, onConfirm }) => {
  return (
    <Modal>
      <ModalHeader>
        <h2>{title} </h2>
      </ModalHeader>
      <ModalContent>
        <p>{message}</p>
      </ModalContent>
      <ModalFooter>
        <ModalButton onClick={onConfirm}>Okay</ModalButton>
      </ModalFooter>
    </Modal>
  );
};

// main component
const ErrorModal: FC<props> = ({ title, message, onConfirm }) => {
  return (
    <Fragment>
      {/* render backdrop root element */}
      {createPortal(
        <Backdrop onClick={onConfirm} />,

        document.getElementById("backdrop-root") as HTMLElement
      )}

      {/* render modal root element */}
      {createPortal(
        <OverlayModal title={title} message={message} onConfirm={onConfirm} />,

        document.getElementById("modal-root") as HTMLElement
      )}
    </Fragment>
  );
};

export default ErrorModal;
