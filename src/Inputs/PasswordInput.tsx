import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

interface IPasswordInputProps {
  isInvalid?: boolean;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<any>) => void;
  error?: string;
  disabled?: boolean;
  placeholder?: string;
}

export const PasswordInput: React.FC<IPasswordInputProps> = ({
  name,
  isInvalid,
  error,
  onChange,
  value,
  disabled,
  placeholder,
}) => {
  const [passwordVisible, setPasswordVisible] = React.useState<boolean>(false);
  const togglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
      <InputGroup>
        <Form.Control
          name={name}
          placeholder={placeholder}
          isInvalid={isInvalid}
          value={value}
          type={passwordVisible ? "text" : "password"}
          onChange={onChange}
          disabled={disabled}
        />
        <InputGroup.Append
          className="togglePasswordHolder"
          onClick={togglePassword}
        >
          <InputGroup.Text
            className={
              passwordVisible ? "passwordInputActive" : "passwordInput"
            }
          >
            <FontAwesomeIcon icon={faEye} />
          </InputGroup.Text>
        </InputGroup.Append>
        {error && (
          <Form.Control.Feedback className="passwordInvalid" type="invalid">
            {error}
          </Form.Control.Feedback>
        )}
      </InputGroup>
    </>
  );
};
