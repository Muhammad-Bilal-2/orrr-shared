import React from "react";
import { Form } from "react-bootstrap";
export interface DropDown {
  key: string;
  value: string;
}

export interface Dropdownsprops {
  items?: DropDown[] | undefined;
  selectedItem: string;
  setSelectedItem: (value: string) => void;
  isDisabled?: boolean;
  text?: string;
  dropDownDisplayItemText?: string;
}

export const Dropdowns: React.FC<Dropdownsprops> = ({
  selectedItem,
  items,
  isDisabled = false,
  setSelectedItem,
  text,
  dropDownDisplayItemText,
}) => {
  return (
    <Form.Group>
      <Form.Control
        size="lg"
        as="select"
        value={selectedItem}
        onChange={(e) => {
          setSelectedItem(e.target.value);
        }}
        disabled={isDisabled}
      >
        {items?.length !== 1 ? (
          <>
            {dropDownDisplayItemText ? (
              <option value="">{dropDownDisplayItemText}</option>
            ) : null}

            {items &&
              items.map((dropdownitem, index) => (
                <option key={index} value={dropdownitem.key}>
                  {dropdownitem.value}
                  {text ? text : null}
                </option>
              ))}
          </>
        ) : (
          items && (
            <option key={items[0].key} value={items[0].key}>
              {items[0].value}
            </option>
          )
        )}
      </Form.Control>
    </Form.Group>
  );
};
