import * as React from 'react';
import { useState, useEffect, createContext, useContext, useRef } from 'react';
import { Modal, Spinner, Form, Col, Card, FormControl, InputGroup, Row, Button, Container } from 'react-bootstrap';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faGreaterThan, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';

var ModalOverlay = function (props) {
    return (React.createElement(React.Fragment, null,
        React.createElement(Modal, { className: "modal-card-overlay", onHide: props.setShow, show: props.show, centered: true },
            React.createElement(Modal.Header, { closeButton: true, onHide: props.setShow }, props.header),
            React.createElement(Modal.Body, null, props.children),
            React.createElement(Modal.Footer, null))));
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

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

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

var LoginForm = function (props) {
    var _a = useState(false), passwordVisible = _a[0], setPasswordVisible = _a[1];
    var schema = yup.object().shape({
        username: yup.string().trim().required("Username is required"),
        password: yup.string().trim().required("Password is required"),
    });
    var handleSubmit = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/];
        });
    }); };
    var formik = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        validationSchema: schema,
        onSubmit: handleSubmit,
        enableReinitialize: true,
    });
    var togglePassword = function () {
        setPasswordVisible(!passwordVisible);
    };
    return (React.createElement(React.Fragment, null, props.loading ? (React.createElement(CenteredSpinner, { loading: true, size: "md", loadingText: "Authenticating..." })) : (React.createElement(Form, { as: Col, xs: 10, sm: 8, md: 6, lg: 7, onKeyDown: function (e) {
            if (e.key === "Enter") {
                formik.handleSubmit();
            }
        } },
        React.createElement(Card, { className: "card-login-form card-white" },
            React.createElement(Card.Header, null,
                React.createElement(Card.Title, { className: "login-heading" }, "Welcome")),
            React.createElement(Card.Body, null,
                React.createElement(Form.Group, { className: "mb-3", controlId: "validationCustom01" },
                    React.createElement(FormControl, { name: "username", isInvalid: formik.touched.username && !!formik.errors.username, value: formik.values.username, onChange: formik.handleChange, type: "text", placeholder: "USERNAME" }),
                    React.createElement(Form.Control.Feedback, { type: "invalid" }, formik.errors.username)),
                React.createElement(Form.Group, { className: "mb-3" },
                    React.createElement(InputGroup, null,
                        React.createElement(FormControl, { name: "password", isInvalid: formik.touched.password && !!formik.errors.password, placeholder: "PASSWORD", value: formik.values.password, type: passwordVisible ? "text" : "password", onChange: formik.handleChange }),
                        React.createElement(InputGroup.Text, { id: "basic-addon2" },
                            React.createElement(FontAwesomeIcon, { icon: faEye, onClick: togglePassword })),
                        React.createElement(Form.Control.Feedback, { type: "invalid" }, formik.errors.password))),
                React.createElement(Row, { className: "login-helpers mx-0 d-flex justify-content-between align-items-center" },
                    React.createElement(Col, { className: "mb-2 d-flex flex-column justify-content-center p-0" },
                        React.createElement("div", { className: "forgot-links d-flex justify-content-md-start justify-content-center align-items-center", onClick: function () { return props.setShowModal("password"); } },
                            React.createElement("span", { className: "pr-2" }, "Forgot Password"),
                            React.createElement(FontAwesomeIcon, { icon: faGreaterThan, size: "xs" })),
                        React.createElement("div", { className: "forgot-links d-flex justify-content-md-start justify-content-center align-items-center", onClick: function () { return props.setShowModal("username"); } },
                            React.createElement("span", { className: "pr-2" }, "Forgot Username"),
                            React.createElement(FontAwesomeIcon, { icon: faGreaterThan, size: "xs" }))),
                    React.createElement(Col, { className: "d-flex justify-content-md-end justify-content-center pr-0 align-items-center w-100" },
                        React.createElement(Button, { className: "login-btn", color: "primary", onClick: function () { return formik.handleSubmit(); } }, "Log in")))))))));
};

var LoginImage = function (props) {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "login-info-section h-100 mb-0" },
            React.createElement("img", { alt: "login-image", className: "login-image", src: props.imgUrl }),
            React.createElement("div", { className: "d-flex flex-column justify-content-center px-4 px-md-7 image-overlay" },
                React.createElement("h2", { className: "login-heading" }, props.header),
                props.text && React.createElement("p", null, props.text),
                props.children))));
};

var ModalLogin = function (props) {
    var handleReminder = function () {
        console.log('Email has been sent to endpoint', props.endpoint);
    };
    return (React.createElement(Col, { lg: "12" },
        React.createElement("p", null, props.body),
        React.createElement(Form.Label, { htmlFor: "loginInput" + props.modal }, props.modal === 'User Name' ? 'Email address' : 'User Name'),
        React.createElement(Form.Control, { type: "text", id: "loginInput" + props.modal, className: "mb-4" }),
        React.createElement(Button, { color: "primary", onClick: handleReminder, size: "lg" }, "Send Reminder")));
};

var Login = function () {
    var _a = useState(""), showModal = _a[0], setShowModal = _a[1];
    var handleToggleModal = function () { return setShowModal(""); };
    return (React.createElement("div", { className: "content h-100" },
        showModal === "username" && (React.createElement(ModalOverlay, { show: !!showModal, setShow: handleToggleModal, header: "Forgot User Name" },
            React.createElement(ModalLogin, { modal: "Username", body: "Enter you email address to receive a User Name Reminder", endpoint: "" }))),
        showModal === "password" && (React.createElement(ModalOverlay, { show: !!showModal, setShow: handleToggleModal, header: "Forgot Password" },
            React.createElement(ModalLogin, { modal: "Password", body: "Enter your User Name to receive a password reset link at the email\r\n              address on file", endpoint: "" }))),
        React.createElement(Row, { className: "login-container h-100 m-0" },
            React.createElement(Col, { xs: 12, lg: 7, className: "h-100 p-0" },
                React.createElement(Container, { fluid: true, className: "d-flex align-items-center justify-content-center h-100" },
                    React.createElement(LoginForm, { loading: false, 
                        // login={login}
                        // error={error}
                        setShowModal: setShowModal }))),
            React.createElement(Col, { xs: 12, lg: 5, className: "h-100 px-0" },
                React.createElement(LoginImage, { imgUrl: "https://cdn.orrprotection.com/netsite/login2.jpg", header: "WHAT IS NETSITE?", text: "NetSITE provides secure, online access to all critical information\r\n          related to any fire protection system at any facility or site\r\n          serviced by ORR" },
                    React.createElement("h2", { className: "info-heading" }, "All Documentation Online..."),
                    React.createElement("ul", { className: "documentation-list" },
                        "for all fire protection systems, located in any facility across the country",
                        React.createElement("li", null, "Inspections Report"),
                        React.createElement("li", null, "Proposals/ Pricing"),
                        React.createElement("li", null, "Invoices"),
                        React.createElement("li", null, "System Drawings"),
                        React.createElement("li", null, "Owner Manual's")),
                    React.createElement("div", { className: "login-info-link" },
                        React.createElement("div", { className: "login-info-link-hover" }),
                        React.createElement("a", { href: process.env.REACT_APP_ORR_NETREPORT_URL }, "Learn more"),
                        React.createElement(FontAwesomeIcon, { icon: faArrowRight })))))));
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

var NativeOverlay = function (props) {
    return (React.createElement(React.Fragment, null,
        React.createElement(Modal, { className: "modal-overlay", show: props.show, backdrop: "static" },
            React.createElement(Modal.Header, { closeButton: true, onHide: function () { return props.setShow(); } }, props.header),
            React.createElement(Modal.Body, null, props.children))));
};

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

export { AlertWrapped, ButtonSpinner, CenteredSpinner, GetToday, IsPhoneProvider, Login, ModalOverlay, NativeOverlay, NumberBoolToText, NumberOrDefault, OrderBy, StringOrDefault, StringToShortDate, checkValuesData, extract, getUniqueBy, groupBy, isNotNull, nameOf, notEmpty, useIsPhoneContext, useOnce };
