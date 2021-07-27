/* eslint-disable */
import classNames from 'classnames';
import * as React from 'react';
import { Spinner } from 'react-bootstrap';

var big = "20rem";
var med = "10rem";
var small = "5rem";
var xsmall = "2rem";
var btn = "1rem";
var getStyle = function (size) {
    switch (size) {
        case "lg":
            return { width: big, height: big };
        case "md":
            return { width: med, height: med };
        case "sm":
            return { width: small, height: small };
        case "xs":
            return { width: xsmall, height: xsmall };
        case "btn":
            return { width: btn, height: btn };
    }
};
var getSpinnerClassNames = function (justifyLeft) {
    return classNames("d-flex", justifyLeft ? "" : "justify-content-center");
};
var CenteredSpinner = function (props) {
    var getSpinner = function () {
        return (React.createElement("div", { className: getSpinnerClassNames(props.justifyLeft) },
            React.createElement(Spinner, { animation: "border", role: "status", variant: "primary", style: getStyle(props.size) })));
    };
    return React.createElement(React.Fragment, null, props.loading ? getSpinner() : props.children);
};

export { CenteredSpinner };
