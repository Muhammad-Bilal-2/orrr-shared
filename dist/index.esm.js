import classNames from 'classnames';
import * as React from 'react';
import { useState, useEffect, createContext, useContext } from 'react';
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
var ButtonSpinner = function (props) {
    var getSpinner = function () {
        return (React.createElement("div", { className: getSpinnerClassNames(true) },
            React.createElement(Spinner, { animation: "border", role: "status", variant: "primary", style: getStyle("btn") }),
            React.createElement("span", null,
                " ",
                props.loadingText || "Loading...")));
    };
    return React.createElement(React.Fragment, null, props.loading ? getSpinner() : props.children);
};

var MediaQuery = {
    phone: "(min-width: 320px) and (max-width: 568px)",
    tablet: "(min-width : 768px) and (max-width : 1024px)",
    desktop: "(min-width : 1224px)",
};

var useMediaQuery = function (query) {
    var queryToMatch = MediaQuery[query] || query;
    var _a = useState(window.matchMedia(queryToMatch).matches), matches = _a[0], setMatches = _a[1];
    useEffect(function () {
        if (typeof window !== "object")
            return;
        if (!window.matchMedia)
            return;
        var media = window.matchMedia(queryToMatch);
        if (media.matches !== matches)
            setMatches(media.matches);
        var listener = function () { return setMatches(media.matches); };
        media.addEventListener
            ? media.addEventListener("change", listener)
            : media.addListener(listener);
        return function () {
            return media.removeEventListener
                ? media.removeEventListener("change", listener)
                : media.removeListener(listener);
        };
    }, [matches, queryToMatch]);
    return matches;
};

var IsPhoneContext = createContext(false);
var useIsPhoneContext = function () { return useContext(IsPhoneContext); };
var IsPhoneProvider = function (props) {
    var isPhone = useMediaQuery(MediaQuery.phone);
    return (React.createElement(IsPhoneContext.Provider, { value: isPhone }, props.children));
};

export { ButtonSpinner, CenteredSpinner, IsPhoneProvider, useIsPhoneContext };
