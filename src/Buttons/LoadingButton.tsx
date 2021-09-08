import * as React from 'react';
import { Button, ButtonProps, Spinner } from 'react-bootstrap';

export interface ILoadingButtonProps extends ButtonProps {
  isLoading: boolean | undefined;
  defaultText: string;
  loadingText: string;
  onClick?: () => void;
  type?: string;
}

export const LoadingButton: React.FC<ILoadingButtonProps> = ({
  isLoading,
  defaultText,
  loadingText,
  onClick,
  type,
}) => {
  return (
    <Button
      className="d-flex justify-content-center"
      disabled={isLoading}
      onClick={onClick}
      type={type}
    >
      {isLoading && (
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
      )}
      {isLoading ? loadingText : defaultText}
    </Button>
  );
};
