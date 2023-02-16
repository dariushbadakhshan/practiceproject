import { FC, Fragment } from "react";

type props = {
  title: string;
  message: string;
  onConfirm: () => void;
};

const ErrorModal: FC<props> = ({ title, message, onConfirm }) => {
  return (
    <Fragment>
      <div onClick={onConfirm} />
      <div>
        <header>
          <h2>{title} </h2>
        </header>
        <div>
          <p>{message}</p>
        </div>
        <footer>
          <button onClick={onConfirm}>Okay</button>
        </footer>
      </div>
    </Fragment>
  );
};

export default ErrorModal;
