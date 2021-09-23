/* eslint-disable */
import * as React from 'react';
import React__default, { useState, useEffect, createContext, useContext, useRef } from 'react';
import { Form, Col, Card, FormControl, Row, Container, Spinner, Modal, Button, InputGroup, CloseButton } from 'react-bootstrap';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { faGreaterThan, faArrowRight, faEye, faLessThan, faCheckCircle, faUserCog, faUserLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { useHistory } from 'react-router-dom';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".Login-module_loginContainer__2EudT {\n  background-color: #fff !important;\n  height: 100vh;\n  margin: 0 !important; }\n  .Login-module_loginContainer__2EudT .Login-module_cardLoginForm__1G8td {\n    box-shadow: none !important;\n    background-color: inherit !important; }\n    .Login-module_loginContainer__2EudT .Login-module_cardLoginForm__1G8td label {\n      color: #222a42 !important; }\n    .Login-module_loginContainer__2EudT .Login-module_cardLoginForm__1G8td .Login-module_loginHeading__2ecv9 {\n      font-size: x-large;\n      text-align: center;\n      font-weight: 700 !important;\n      color: #222a42 !important; }\n    .Login-module_loginContainer__2EudT .Login-module_cardLoginForm__1G8td .Login-module_loginErrorMessage__1QePR {\n      color: red;\n      font-size: 1rem;\n      text-align: center;\n      position: absolute;\n      top: 2.8rem;\n      width: 100%; }\n    .Login-module_loginContainer__2EudT .Login-module_cardLoginForm__1G8td .Login-module_invalidFeedback__Hpui0 {\n      font-size: 0.8rem;\n      margin-top: 0.1rem;\n      margin-bottom: -0.8rem; }\n    .Login-module_loginContainer__2EudT .Login-module_cardLoginForm__1G8td .Login-module_loginInput__GZ68d {\n      border-color: rgba(34, 42, 66, 0.2) !important; }\n    .Login-module_loginContainer__2EudT .Login-module_cardLoginForm__1G8td input[name=\"password\"] {\n      border-color: rgba(34, 42, 66, 0.2) !important; }\n    .Login-module_loginContainer__2EudT .Login-module_cardLoginForm__1G8td .Login-module_loginHelpers__2Dx_E {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      margin: auto 0 !important; }\n      .Login-module_loginContainer__2EudT .Login-module_cardLoginForm__1G8td .Login-module_loginHelpers__2Dx_E .Login-module_loginHelpersContainer__1FCu0 {\n        display: flex;\n        justify-content: center;\n        flex-direction: column;\n        flex-basis: 0; }\n        @media (max-width: 575.98px) {\n          .Login-module_loginContainer__2EudT .Login-module_cardLoginForm__1G8td .Login-module_loginHelpers__2Dx_E .Login-module_loginHelpersContainer__1FCu0 {\n            flex-basis: inherit;\n            margin-bottom: 0.9rem; } }\n        @media (min-width: 575.98px) {\n          .Login-module_loginContainer__2EudT .Login-module_cardLoginForm__1G8td .Login-module_loginHelpers__2Dx_E .Login-module_loginHelpersContainer__1FCu0 {\n            padding: 0; } }\n      .Login-module_loginContainer__2EudT .Login-module_cardLoginForm__1G8td .Login-module_loginHelpers__2Dx_E button {\n        min-width: 160px; }\n        @media (min-width: 1440px) {\n          .Login-module_loginContainer__2EudT .Login-module_cardLoginForm__1G8td .Login-module_loginHelpers__2Dx_E button {\n            min-width: 220px; } }\n    .Login-module_loginContainer__2EudT .Login-module_cardLoginForm__1G8td .Login-module_forgotLinks__2LBVZ {\n      cursor: pointer;\n      color: #00c389;\n      font-size: 0.8rem;\n      display: flex;\n      justify-content: flex-start;\n      align-items: center; }\n      @media (max-width: 575.98px) {\n        .Login-module_loginContainer__2EudT .Login-module_cardLoginForm__1G8td .Login-module_forgotLinks__2LBVZ {\n          justify-content: center; } }\n    .Login-module_loginContainer__2EudT .Login-module_cardLoginForm__1G8td .Login-module_loginFooter__1s1Xl .Login-module_row__3BK-N {\n      margin: 0; }\n  .Login-module_loginContainer__2EudT .Login-module_loginImage__1EIfr {\n    height: 100%;\n    object-fit: cover;\n    max-width: 100%;\n    opacity: 0.2; }\n  .Login-module_loginContainer__2EudT .Login-module_imageOverlay__LUkPu {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    padding: 0 10rem 0 25px; }\n    @media (max-width: 575.98px) {\n      .Login-module_loginContainer__2EudT .Login-module_imageOverlay__LUkPu {\n        padding: 0 2rem 0 25px; } }\n  .Login-module_loginContainer__2EudT .Login-module_loginInfoSection__1exRC {\n    background-color: black !important;\n    color: #fff;\n    margin-bottom: 0;\n    height: 100vh; }\n    .Login-module_loginContainer__2EudT .Login-module_loginInfoSection__1exRC .Login-module_loginInfoTitle__1dfVu {\n      color: #fff;\n      font-weight: 700;\n      font-size: 1.5rem; }\n    .Login-module_loginContainer__2EudT .Login-module_loginInfoSection__1exRC p {\n      color: white;\n      margin-bottom: 1rem; }\n    .Login-module_loginContainer__2EudT .Login-module_loginInfoSection__1exRC ul li {\n      color: white !important; }\n    .Login-module_loginContainer__2EudT .Login-module_loginInfoSection__1exRC .Login-module_loginInfoLink__38Lu6 {\n      display: flex;\n      width: 150px;\n      justify-content: center;\n      align-items: center;\n      position: relative;\n      cursor: pointer; }\n      .Login-module_loginContainer__2EudT .Login-module_loginInfoSection__1exRC .Login-module_loginInfoLink__38Lu6 a {\n        z-index: 100;\n        font-size: 1.2rem;\n        font-weight: 500; }\n      .Login-module_loginContainer__2EudT .Login-module_loginInfoSection__1exRC .Login-module_loginInfoLink__38Lu6 svg {\n        z-index: 100;\n        padding-left: 0.5rem;\n        font-size: 1.5rem;\n        color: #fff; }\n    .Login-module_loginContainer__2EudT .Login-module_loginInfoSection__1exRC .Login-module_loginInfoLinkHover__Sv7Ae {\n      background-color: #ffb81c;\n      position: absolute;\n      top: 0;\n      left: 0;\n      height: 100%;\n      transition: all 0.3s ease-out;\n      width: 0.5rem; }\n    .Login-module_loginContainer__2EudT .Login-module_loginInfoSection__1exRC .Login-module_loginInfoLink__38Lu6:hover > .Login-module_loginInfoLinkHover__Sv7Ae {\n      width: 100%; }\n";
var styles = {"loginContainer":"Login-module_loginContainer__2EudT","cardLoginForm":"Login-module_cardLoginForm__1G8td","loginHeading":"Login-module_loginHeading__2ecv9","loginErrorMessage":"Login-module_loginErrorMessage__1QePR","invalidFeedback":"Login-module_invalidFeedback__Hpui0","loginInput":"Login-module_loginInput__GZ68d","loginHelpers":"Login-module_loginHelpers__2Dx_E","loginHelpersContainer":"Login-module_loginHelpersContainer__1FCu0","forgotLinks":"Login-module_forgotLinks__2LBVZ","loginFooter":"Login-module_loginFooter__1s1Xl","row":"Login-module_row__3BK-N","loginImage":"Login-module_loginImage__1EIfr","imageOverlay":"Login-module_imageOverlay__LUkPu","loginInfoSection":"Login-module_loginInfoSection__1exRC","loginInfoTitle":"Login-module_loginInfoTitle__1dfVu","loginInfoLink":"Login-module_loginInfoLink__38Lu6","loginInfoLinkHover":"Login-module_loginInfoLinkHover__Sv7Ae"};
styleInject(css_248z);

var LoginForm = function (props) {
    var schema = yup.object().shape({
        username: yup.string().trim().required("Username is required"),
        password: yup.string().trim().required("Password is required"),
    });
    var formik = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        validationSchema: schema,
        onSubmit: props.handleSubmit,
        enableReinitialize: true,
    });
    return (React.createElement(React.Fragment, null,
        React.createElement(Form, { as: Col, xs: 10, sm: 8, md: 6, lg: 7, onKeyDown: function (e) {
                if (e.key === "Enter") {
                    formik.handleSubmit();
                }
            } },
            React.createElement(Card, { className: styles.cardLoginForm },
                React.createElement(Card.Header, null,
                    React.createElement(Card.Title, { className: styles.loginHeading }, "Welcome")),
                React.createElement(Card.Body, null,
                    props.error && (React.createElement("div", { className: styles.loginErrorMessage },
                        props.error.message,
                        " ")),
                    React.createElement(Form.Group, { className: "mb-3" },
                        React.createElement(Form.Label, null, "USERNAME"),
                        React.createElement(FormControl, { name: "username", isInvalid: formik.touched.username && !!formik.errors.username, value: formik.values.username, onChange: formik.handleChange, type: "text", placeholder: "USERNAME", className: styles.loginInput }),
                        React.createElement(Form.Control.Feedback, { type: "invalid", className: styles.invalidFeedback }, formik.errors.username)),
                    React.createElement(Form.Group, { className: "mb-3" },
                        React.createElement(PasswordInput, { label: "PASSWORD", placeholder: "PASSWORD", isInvalid: formik.touched.password && !!formik.errors.password, error: formik.errors.password, onChange: formik.handleChange, value: formik.values.password, name: "password" })),
                    React.createElement(Row, { className: styles.loginHelpers },
                        React.createElement(Col, { className: styles.loginHelpersContainer },
                            React.createElement("div", { className: styles.forgotLinks, onClick: function () { return props.setShowModal("password"); } },
                                React.createElement("span", { className: "pr-2" }, "Forgot Password"),
                                React.createElement(FontAwesomeIcon, { icon: faGreaterThan, size: "xs" })),
                            React.createElement("div", { className: styles.forgotLinks, onClick: function () { return props.setShowModal("username"); } },
                                React.createElement("span", { className: "pr-2" }, "Forgot Username"),
                                React.createElement(FontAwesomeIcon, { icon: faGreaterThan, size: "xs" }))),
                        React.createElement(Col, { className: "d-flex justify-content-sm-end justify-content-center px-0 align-items-center" },
                            React.createElement(LoadingButton, { className: styles.loginBtn, color: "primary", isLoading: props.loading, defaultText: "Log in", loadingText: "Loading", onClick: function () { return formik.handleSubmit(); } }))))))));
};

var LoginImage = function (props) {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: styles.loginInfoSection },
            React.createElement("img", { alt: "login-image", className: styles.loginImage, src: props.imgUrl }),
            React.createElement("div", { className: styles.imageOverlay },
                React.createElement("h2", { className: styles.loginInfoTitle }, props.header),
                props.text && React.createElement("p", null, props.text),
                props.children))));
};

var Login = function (props) {
    return (React.createElement("div", { className: "content h-100" },
        React.createElement(Row, { className: styles.loginContainer },
            React.createElement(Col, { xs: 12, lg: 7, className: "h-100 p-0" },
                React.createElement(Container, { fluid: true, className: "d-flex align-items-center justify-content-center h-100" },
                    React.createElement(LoginForm, { loading: props.loading, handleSubmit: props.handleSubmit, error: props.error, setShowModal: props.setShowModal }))),
            React.createElement(Col, { xs: 12, lg: 5, className: "h-100 px-0" },
                React.createElement(LoginImage, { imgUrl: "https://cdn.orrprotection.com/netsite/login2.jpg", header: "WHAT IS NETSITE?", text: "NetSITE provides secure, online access to all critical information\r\n          related to any fire protection system at any facility or site\r\n          serviced by ORR" },
                    React.createElement("h2", { className: styles.loginInfoTitle }, "All Documentation Online..."),
                    React.createElement("p", null, "for all fire protection systems, located in any facility across the country"),
                    React.createElement("ul", null,
                        React.createElement("li", null, "Inspections Report"),
                        React.createElement("li", null, "Proposals/ Pricing"),
                        React.createElement("li", null, "Invoices"),
                        React.createElement("li", null, "System Drawings"),
                        React.createElement("li", null, "Owner Manual's")),
                    React.createElement("div", { className: styles.loginInfoLink },
                        React.createElement("div", { className: styles.loginInfoLinkHover }),
                        React.createElement("a", { href: process.env.REACT_APP_ORR_NETREPORT_URL }, "Learn more"),
                        React.createElement(FontAwesomeIcon, { icon: faArrowRight })))))));
};

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

var ModalOverlay = function (props) {
    return (React.createElement(React.Fragment, null,
        React.createElement(Modal, { className: "modal-card-overlay", onHide: props.setShow, show: props.show, centered: true },
            React.createElement(Modal.Header, { closeButton: true, onHide: props.setShow }, props.header),
            React.createElement(Modal.Body, null, props.children),
            React.createElement(Modal.Footer, null))));
};

var NativeOverlay = function (props) {
    return (React.createElement(React.Fragment, null,
        React.createElement(Modal, { className: "modal-overlay", show: props.show, backdrop: "static" },
            React.createElement(Modal.Header, { closeButton: true, onHide: function () { return props.setShow(); } }, props.header),
            React.createElement(Modal.Body, null, props.children))));
};

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

var AlertCard = function (_a) {
    var header = _a.header, title = _a.title, text = _a.text, bgStyle = _a.bgStyle, textColor = _a.textColor;
    return (React.createElement(Card, { bg: bgStyle, text: textColor },
        React.createElement(Card.Header, null, header),
        React.createElement(Card.Body, null,
            title && React.createElement(Card.Title, null, title),
            React.createElement(Card.Text, null, text))));
};

var AlertWrapped = function (props) {
    var AlertCardProps = __rest(props, []);
    return (React.createElement(Row, { className: "justify-content-md-center" },
        React.createElement(Col, { md: 6 },
            React.createElement(AlertCard, __assign({}, AlertCardProps)))));
};

var NumberBoolToText = function (number) {
    switch (number) {
        case 0:
            return "Not Active";
        case 1:
            return "Active";
        default:
            return "";
    }
};
var StringToShortDate = function (value) {
    return value ? (new Date(value)).toLocaleDateString('en-US') : "";
};
var StringOrDefault = function (value) {
    return value || "";
};
var NumberOrDefault = function (value) {
    return value || 0;
};

var useOnce = function (callback) {
    var hasRendered = useRef(false);
    if (!hasRendered.current) {
        hasRendered.current = true;
        callback();
    }
};

function notEmpty(value) {
    return value !== null && value !== undefined;
}
function isNotNull(value) {
    var array = [];
    if (value) {
        array = value.filter(notEmpty);
    }
    return array;
}
function GetToday() {
    return new Date().toISOString().split("T")[0];
}
var groupBy = function (data, key) {
    // `data` is an array of objects, `key` is the key (or property accessor) to group by
    // reduce runs this anonymous function on each element of `data` (the `item` parameter,
    // returning the `storage` parameter at the end
    return data.reduce(function (storage, item) {
        // get the first instance of the key by which we're grouping
        var group = item[key];
        // set `storage` for this instance of group to the outer scope (if not empty) or initialize it
        storage[group] = storage[group] || [];
        // add this item to its group within `storage`
        storage[group].push(item);
        // return the updated storage to the reduce function, which will then loop through the next
        return storage;
    }, {}); // {} is the initial value of the storage
};
//Will Check for keys on the given interface.
function extract(properties) {
    return function (value) {
        var result = {};
        for (var _i = 0, _a = Object.keys(properties); _i < _a.length; _i++) {
            var property = _a[_i];
            result[property] = value[property];
        }
        return result;
    };
}
/* export function OrderBy(array:{[key:string]:any}[], property:string){
  let sorted = array.sort((a,b)=>(a[property] > b[property] ? 1: -1));
  return sorted;
} */
function OrderBy(array, property) {
    var sorted = array.sort(function (a, b) { return (a[property] > b[property] ? 1 : -1); });
    return sorted;
}
function checkValuesData(array) {
    return array.map(function (record) {
        return Object.entries(record).reduce(function (recordEntriesModified, _a) {
            var _b;
            var key = _a[0], value = _a[1];
            return __assign(__assign({}, recordEntriesModified), (_b = {}, _b[key] = typeof value === "number" ||
                (typeof value === "string" && value.length)
                ? value
                : "N/A", _b));
        }, {});
    });
}
function nameOf(f) {
    var p = new Proxy({}, {
        get: function (target, key) { return key; }
    });
    return f(p);
}
function getUniqueBy(arr, prop) {
    var set = new Set();
    return arr.filter(function (o) { return !set.has(o[prop]) && set.add(o[prop]); });
}

var LoadingButton = function (_a) {
    var isLoading = _a.isLoading, defaultText = _a.defaultText, loadingText = _a.loadingText, onClick = _a.onClick, type = _a.type;
    return (React.createElement(Button, { className: "d-flex justify-content-center", disabled: isLoading, onClick: onClick, type: type },
        isLoading && (React.createElement(Spinner, { as: "span", animation: "grow", size: "sm", role: "status", "aria-hidden": "true" })),
        isLoading ? loadingText : defaultText));
};

var SimpleCard = function (_a) {
    var loading = _a.loading, header = _a.header, buttons = _a.buttons, isMobileView = _a.isMobileView, style = _a.style, bodyStyle = _a.bodyStyle, cardClass = _a.cardClass, headerClass = _a.headerClass, onClick = _a.onClick, children = _a.children, bodyClass = _a.bodyClass;
    return (React.createElement(Card, { className: cardClass, style: style ? style : undefined, onClick: onClick },
        header && (React.createElement(Card.Header, { className: headerClass },
            React.createElement(Row, null,
                React.createElement(Col, { xs: isMobileView ? 12 : 8 }, isMobileView ? (React.createElement("h3", { className: "card-title" }, header)) : (React.createElement("h2", { className: "card-title" }, header))),
                buttons && React.createElement(Col, null, buttons)))),
        children && (React.createElement(Card.Body, { className: bodyClass, style: bodyStyle ? bodyStyle : undefined },
            React.createElement(CenteredSpinner, { loading: loading, size: isMobileView ? "sm" : "md" }, children)))));
};

var PasswordInput = function (_a) {
    var label = _a.label, name = _a.name, isInvalid = _a.isInvalid, error = _a.error, onChange = _a.onChange, value = _a.value, disabled = _a.disabled, placeholder = _a.placeholder, inputGroupCustomClass = _a.inputGroupCustomClass, inputPasswordClass = _a.inputPasswordClass;
    var _b = React__default.useState(false), passwordVisible = _b[0], setPasswordVisible = _b[1];
    var togglePassword = function () {
        setPasswordVisible(!passwordVisible);
    };
    return (React__default.createElement(React__default.Fragment, null,
        label && React__default.createElement(Form.Label, null, label),
        React__default.createElement(InputGroup, { className: inputGroupCustomClass },
            React__default.createElement(Form.Control, { name: name, placeholder: placeholder, isInvalid: isInvalid, value: value, type: passwordVisible ? "text" : "password", onChange: onChange, disabled: disabled, className: inputPasswordClass }),
            React__default.createElement(InputGroup.Append, { className: "togglePasswordHolder", onClick: togglePassword },
                React__default.createElement(InputGroup.Text, { className: passwordVisible ? "passwordInputActive" : "passwordInput" },
                    React__default.createElement(FontAwesomeIcon, { icon: faEye }))),
            error && (React__default.createElement(Form.Control.Feedback, { className: "passwordInvalid", type: "invalid" }, error)))));
};

var BackButton = function () {
    var history = useHistory();
    return (React__default.createElement(React__default.Fragment, null,
        React__default.createElement("div", { className: "backButtonHolder", onClick: function () { return history.goBack(); } },
            React__default.createElement(FontAwesomeIcon, { icon: faLessThan, size: "xs" }),
            React__default.createElement("span", { className: "pl-2" }, "Back"))));
};

var ButtonLoadingSpinner = function (props) {
    var _a = __assign({}, props); _a.loading; _a.loadingText; var btnProps = __rest(_a, ["loading", "loadingText"]);
    return (React.createElement(React.Fragment, null,
        React.createElement(Button, __assign({}, btnProps, { className: "spinner-button-styles" }),
            React.createElement(ButtonSpinner, { loadingText: props.loadingText, loading: props.loading }, props.children))));
};

var ModalNoHeaderOverlay = function (props) {
    return (React.createElement(React.Fragment, null,
        React.createElement(Modal, { className: "modal-no-header", onHide: props.setShow, animation: false, size: props.size ? props.size : "lg", show: props.show, centered: true },
            React.createElement(CloseButton, { onClick: function () { return props.setShow(""); } }),
            React.createElement(Modal.Body, { className: "modal-body" }, props.children))));
};

var ModalSuccess = function (props) {
    return (React__default.createElement(ModalNoHeaderOverlay, { show: props.show, setShow: props.setShow },
        React__default.createElement(FontAwesomeIcon, { className: "modal-success-icon", icon: faCheckCircle, size: "10x" }),
        React__default.createElement("h2", { className: "mb-2" }, "Success!"),
        React__default.createElement("p", null, props.text)));
};

var ForgotUsernameModal = function (_a) {
    var loading = _a.loading, closeModal = _a.closeModal, status = _a.status, handleReminder = _a.handleReminder, showError = _a.showError;
    var _b = React.useState(""), value = _b[0], setValue = _b[1];
    return (React.createElement(Col, { className: "text-center d-flex flex-column align-items-center px-3 px-sm-5" },
        React.createElement(FontAwesomeIcon, { icon: faUserCog, size: "7x" }),
        React.createElement("h3", { className: "mt-3 mb-1 font-weight-bold" }, "\"Retrieve User Name\""),
        React.createElement("p", { className: "text-muted text-center mb-3" }, "Enter you email address in the form below and we will send the user name we can match to your email address"),
        React.createElement(Form.Label, { className: "align-self-start" }, "Email Address"),
        React.createElement(Form.Control, { className: "mb-2 text-muted", type: "text", id: "loginInputUsername", value: value, onChange: function (e) { return setValue(e.target.value); }, placeholder: "Email Address" }),
        status && status !== "Success" ? showError() : null,
        React.createElement("div", { className: "my-2 px-2 d-flex justify-content-around flex-column flex-sm-row w-sm-100" },
            React.createElement(Button, { className: "mb-2 mb-sm-0 text-muted", variant: "white", onClick: function () { return closeModal(""); } }, "Cancel"),
            React.createElement(LoadingButton, { isLoading: loading, defaultText: "Send reminder", loadingText: "Loading", onClick: function () { return handleReminder("username", value); } }))));
};

var ForgotPasswordModal = function (_a) {
    var loading = _a.loading, closeModal = _a.closeModal, status = _a.status, handleReminder = _a.handleReminder, showError = _a.showError;
    var _b = React.useState(""), value = _b[0], setValue = _b[1];
    return (React.createElement(Col, { className: "text-center d-flex flex-column align-items-center px-3 px-sm-5" },
        React.createElement(FontAwesomeIcon, { icon: faUserLock, size: "7x" }),
        React.createElement("h3", { className: "mt-3 mb-1 font-weight-bold" }, "Reset Password"),
        React.createElement("p", { className: "text-muted text-center mb-3" }, "Enter your User Name to receive a password reset link at the email address on file"),
        React.createElement(Form.Label, { className: "align-self-start" }, "User Name"),
        React.createElement(Form.Control, { className: "mb-2 text-muted", type: "text", id: "loginInputPassword", value: value, onChange: function (e) { return setValue(e.target.value); }, placeholder: "User Name" }),
        status && status !== "Success" ? showError() : null,
        React.createElement("div", { className: "my-2 px-2 d-flex justify-content-around flex-column flex-sm-row w-sm-100" },
            React.createElement(Button, { className: "mb-2 mb-sm-0 text-muted", variant: "white", onClick: function () { return closeModal(""); } }, "Cancel"),
            React.createElement(LoadingButton, { isLoading: loading, defaultText: "Send reminder", loadingText: "Loading", onClick: function () { return handleReminder("password", value); } }))));
};

var Dropdowns = function (_a) {
    var selectedItem = _a.selectedItem, items = _a.items, _b = _a.isDisabled, isDisabled = _b === void 0 ? false : _b, setSelectedItem = _a.setSelectedItem, text = _a.text, dropDownDisplayItemText = _a.dropDownDisplayItemText;
    return (React__default.createElement(Form.Group, null,
        React__default.createElement(Form.Control, { size: "lg", as: "select", value: selectedItem, onChange: function (e) {
                setSelectedItem(e.target.value);
            }, disabled: isDisabled }, (items === null || items === void 0 ? void 0 : items.length) !== 1 ? (React__default.createElement(React__default.Fragment, null,
            dropDownDisplayItemText ? (React__default.createElement("option", { value: "" }, dropDownDisplayItemText)) : null,
            items &&
                items.map(function (dropdownitem, index) { return (React__default.createElement("option", { key: index, value: dropdownitem.key },
                    dropdownitem.value,
                    text ? text : null)); }))) : (items && (React__default.createElement("option", { key: items[0].key, value: items[0].key }, items[0].value))))));
};

export { AlertWrapped, BackButton, ButtonLoadingSpinner, ButtonSpinner, CenteredSpinner, Dropdowns, ForgotPasswordModal, ForgotUsernameModal, GetToday, IsPhoneProvider, LoadingButton, Login, ModalNoHeaderOverlay, ModalOverlay, ModalSuccess, NativeOverlay, NumberBoolToText, NumberOrDefault, OrderBy, PasswordInput, SimpleCard, StringOrDefault, StringToShortDate, checkValuesData, extract, getUniqueBy, groupBy, isNotNull, nameOf, notEmpty, useIsPhoneContext, useOnce };
