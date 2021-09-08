import * as React from "react";
import { Button, ButtonProps } from "react-bootstrap";
import { ButtonSpinner } from "../Spinner/index";

interface IButtonSpinnerProps extends ButtonProps {
  loading: boolean;
  loadingText?: string;
}

export const ButtonLoadingSpinner: React.FC<IButtonSpinnerProps> = (props) => {
  const { loading, loadingText, ...btnProps } = { ...props };
  return (
    <>
      <Button {...btnProps} className="spinner-button-styles">
        <ButtonSpinner loadingText={props.loadingText} loading={props.loading}>
          {props.children}
        </ButtonSpinner>
      </Button>
    </>
  );
};
