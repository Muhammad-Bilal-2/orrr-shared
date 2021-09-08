'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var reactBootstrap = require('react-bootstrap');
var yup = require('yup');
var formik = require('formik');
var reactFontawesome = require('@fortawesome/react-fontawesome');
var freeSolidSvgIcons = require('@fortawesome/free-solid-svg-icons');
var classNames = require('classnames');
var reactRouterDom = require('react-router-dom');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () {
            return e[k];
          }
        });
      }
    });
  }
  n['default'] = e;
  return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var yup__namespace = /*#__PURE__*/_interopNamespace(yup);
var classNames__default = /*#__PURE__*/_interopDefaultLegacy(classNames);

var ModalOverlay = function (props) {
    return (React__namespace.createElement(React__namespace.Fragment, null,
        React__namespace.createElement(reactBootstrap.Modal, { className: "modal-card-overlay", onHide: props.setShow, show: props.show, centered: true },
            React__namespace.createElement(reactBootstrap.Modal.Header, { closeButton: true, onHide: props.setShow }, props.header),
            React__namespace.createElement(reactBootstrap.Modal.Body, null, props.children),
            React__namespace.createElement(reactBootstrap.Modal.Footer, null))));
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
    return classNames__default['default']("d-flex", justifyLeft ? "" : "justify-content-center");
};
var CenteredSpinner = function (props) {
    var getSpinner = function () {
        return (React__namespace.createElement("div", { className: getSpinnerClassNames(props.justifyLeft) },
            React__namespace.createElement(reactBootstrap.Spinner, { animation: "border", role: "status", variant: "primary", style: getStyle(props.size) })));
    };
    return React__namespace.createElement(React__namespace.Fragment, null, props.loading ? getSpinner() : props.children);
};
var ButtonSpinner = function (props) {
    var getSpinner = function () {
        return (React__namespace.createElement("div", { className: getSpinnerClassNames(true) },
            React__namespace.createElement(reactBootstrap.Spinner, { animation: "border", role: "status", variant: "primary", style: getStyle("btn") }),
            React__namespace.createElement("span", null,
                " ",
                props.loadingText || "Loading...")));
    };
    return React__namespace.createElement(React__namespace.Fragment, null, props.loading ? getSpinner() : props.children);
};

var LoginForm = function (props) {
    var _a = React.useState(false), passwordVisible = _a[0], setPasswordVisible = _a[1];
    var schema = yup__namespace.object().shape({
        username: yup__namespace.string().trim().required("Username is required"),
        password: yup__namespace.string().trim().required("Password is required"),
    });
    var handleSubmit = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/];
        });
    }); };
    var formik$1 = formik.useFormik({
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
    return (React__namespace.createElement(React__namespace.Fragment, null, props.loading ? (React__namespace.createElement(CenteredSpinner, { loading: true, size: "md", loadingText: "Authenticating..." })) : (React__namespace.createElement(reactBootstrap.Form, { as: reactBootstrap.Col, xs: 10, sm: 8, md: 6, lg: 7, onKeyDown: function (e) {
            if (e.key === "Enter") {
                formik$1.handleSubmit();
            }
        } },
        React__namespace.createElement(reactBootstrap.Card, { className: "card-login-form card-white" },
            React__namespace.createElement(reactBootstrap.Card.Header, null,
                React__namespace.createElement(reactBootstrap.Card.Title, { className: "login-heading" }, "Welcome")),
            React__namespace.createElement(reactBootstrap.Card.Body, null,
                React__namespace.createElement(reactBootstrap.Form.Group, { className: "mb-3", controlId: "validationCustom01" },
                    React__namespace.createElement(reactBootstrap.FormControl, { name: "username", isInvalid: formik$1.touched.username && !!formik$1.errors.username, value: formik$1.values.username, onChange: formik$1.handleChange, type: "text", placeholder: "USERNAME" }),
                    React__namespace.createElement(reactBootstrap.Form.Control.Feedback, { type: "invalid" }, formik$1.errors.username)),
                React__namespace.createElement(reactBootstrap.Form.Group, { className: "mb-3" },
                    React__namespace.createElement(reactBootstrap.InputGroup, null,
                        React__namespace.createElement(reactBootstrap.FormControl, { name: "password", isInvalid: formik$1.touched.password && !!formik$1.errors.password, placeholder: "PASSWORD", value: formik$1.values.password, type: passwordVisible ? "text" : "password", onChange: formik$1.handleChange }),
                        React__namespace.createElement(reactBootstrap.InputGroup.Text, { id: "basic-addon2" },
                            React__namespace.createElement(reactFontawesome.FontAwesomeIcon, { icon: freeSolidSvgIcons.faEye, onClick: togglePassword })),
                        React__namespace.createElement(reactBootstrap.Form.Control.Feedback, { type: "invalid" }, formik$1.errors.password))),
                React__namespace.createElement(reactBootstrap.Row, { className: "login-helpers mx-0 d-flex justify-content-between align-items-center" },
                    React__namespace.createElement(reactBootstrap.Col, { className: "mb-2 d-flex flex-column justify-content-center p-0" },
                        React__namespace.createElement("div", { className: "forgot-links d-flex justify-content-md-start justify-content-center align-items-center", onClick: function () { return props.setShowModal("password"); } },
                            React__namespace.createElement("span", { className: "pr-2" }, "Forgot Password"),
                            React__namespace.createElement(reactFontawesome.FontAwesomeIcon, { icon: freeSolidSvgIcons.faGreaterThan, size: "xs" })),
                        React__namespace.createElement("div", { className: "forgot-links d-flex justify-content-md-start justify-content-center align-items-center", onClick: function () { return props.setShowModal("username"); } },
                            React__namespace.createElement("span", { className: "pr-2" }, "Forgot Username"),
                            React__namespace.createElement(reactFontawesome.FontAwesomeIcon, { icon: freeSolidSvgIcons.faGreaterThan, size: "xs" }))),
                    React__namespace.createElement(reactBootstrap.Col, { className: "d-flex justify-content-md-end justify-content-center pr-0 align-items-center w-100" },
                        React__namespace.createElement(reactBootstrap.Button, { className: "login-btn", color: "primary", onClick: function () { return formik$1.handleSubmit(); } }, "Log in")))))))));
};

var LoginImage = function (props) {
    return (React__namespace.createElement(React__namespace.Fragment, null,
        React__namespace.createElement("div", { className: "login-info-section h-100 mb-0" },
            React__namespace.createElement("img", { alt: "login-image", className: "login-image", src: props.imgUrl }),
            React__namespace.createElement("div", { className: "d-flex flex-column justify-content-center px-4 px-md-7 image-overlay" },
                React__namespace.createElement("h2", { className: "login-heading" }, props.header),
                props.text && React__namespace.createElement("p", null, props.text),
                props.children))));
};

var ModalLogin = function (props) {
    var handleReminder = function () {
        console.log('Email has been sent to endpoint', props.endpoint);
    };
    return (React__namespace.createElement(reactBootstrap.Col, { lg: "12" },
        React__namespace.createElement("p", null, props.body),
        React__namespace.createElement(reactBootstrap.Form.Label, { htmlFor: "loginInput" + props.modal }, props.modal === 'User Name' ? 'Email address' : 'User Name'),
        React__namespace.createElement(reactBootstrap.Form.Control, { type: "text", id: "loginInput" + props.modal, className: "mb-4" }),
        React__namespace.createElement(reactBootstrap.Button, { color: "primary", onClick: handleReminder, size: "lg" }, "Send Reminder")));
};

var Login = function () {
    var _a = React.useState(""), showModal = _a[0], setShowModal = _a[1];
    var handleToggleModal = function () { return setShowModal(""); };
    return (React__namespace.createElement("div", { className: "content h-100" },
        showModal === "username" && (React__namespace.createElement(ModalOverlay, { show: !!showModal, setShow: handleToggleModal, header: "Forgot User Name" },
            React__namespace.createElement(ModalLogin, { modal: "Username", body: "Enter you email address to receive a User Name Reminder", endpoint: "" }))),
        showModal === "password" && (React__namespace.createElement(ModalOverlay, { show: !!showModal, setShow: handleToggleModal, header: "Forgot Password" },
            React__namespace.createElement(ModalLogin, { modal: "Password", body: "Enter your User Name to receive a password reset link at the email\r\n              address on file", endpoint: "" }))),
        React__namespace.createElement(reactBootstrap.Row, { className: "login-container h-100 m-0" },
            React__namespace.createElement(reactBootstrap.Col, { xs: 12, lg: 7, className: "h-100 p-0" },
                React__namespace.createElement(reactBootstrap.Container, { fluid: true, className: "d-flex align-items-center justify-content-center h-100" },
                    React__namespace.createElement(LoginForm, { loading: false, 
                        // login={login}
                        // error={error}
                        setShowModal: setShowModal }))),
            React__namespace.createElement(reactBootstrap.Col, { xs: 12, lg: 5, className: "h-100 px-0" },
                React__namespace.createElement(LoginImage, { imgUrl: "https://cdn.orrprotection.com/netsite/login2.jpg", header: "WHAT IS NETSITE?", text: "NetSITE provides secure, online access to all critical information\r\n          related to any fire protection system at any facility or site\r\n          serviced by ORR" },
                    React__namespace.createElement("h2", { className: "info-heading" }, "All Documentation Online..."),
                    React__namespace.createElement("ul", { className: "documentation-list" },
                        "for all fire protection systems, located in any facility across the country",
                        React__namespace.createElement("li", null, "Inspections Report"),
                        React__namespace.createElement("li", null, "Proposals/ Pricing"),
                        React__namespace.createElement("li", null, "Invoices"),
                        React__namespace.createElement("li", null, "System Drawings"),
                        React__namespace.createElement("li", null, "Owner Manual's")),
                    React__namespace.createElement("div", { className: "login-info-link" },
                        React__namespace.createElement("div", { className: "login-info-link-hover" }),
                        React__namespace.createElement("a", { href: process.env.REACT_APP_ORR_NETREPORT_URL }, "Learn more"),
                        React__namespace.createElement(reactFontawesome.FontAwesomeIcon, { icon: freeSolidSvgIcons.faArrowRight })))))));
};

var MediaQuery = {
    phone: "(min-width: 320px) and (max-width: 568px)",
    tablet: "(min-width : 768px) and (max-width : 1024px)",
    desktop: "(min-width : 1224px)",
};

var useMediaQuery = function (query) {
    var queryToMatch = MediaQuery[query] || query;
    var _a = React.useState(window.matchMedia(queryToMatch).matches), matches = _a[0], setMatches = _a[1];
    React.useEffect(function () {
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

var IsPhoneContext = React.createContext(false);
var useIsPhoneContext = function () { return React.useContext(IsPhoneContext); };
var IsPhoneProvider = function (props) {
    var isPhone = useMediaQuery(MediaQuery.phone);
    return (React__namespace.createElement(IsPhoneContext.Provider, { value: isPhone }, props.children));
};

var NativeOverlay = function (props) {
    return (React__namespace.createElement(React__namespace.Fragment, null,
        React__namespace.createElement(reactBootstrap.Modal, { className: "modal-overlay", show: props.show, backdrop: "static" },
            React__namespace.createElement(reactBootstrap.Modal.Header, { closeButton: true, onHide: function () { return props.setShow(); } }, props.header),
            React__namespace.createElement(reactBootstrap.Modal.Body, null, props.children))));
};

var AlertCard = function (_a) {
    var header = _a.header, title = _a.title, text = _a.text, bgStyle = _a.bgStyle, textColor = _a.textColor;
    return (React__namespace.createElement(reactBootstrap.Card, { bg: bgStyle, text: textColor },
        React__namespace.createElement(reactBootstrap.Card.Header, null, header),
        React__namespace.createElement(reactBootstrap.Card.Body, null,
            title && React__namespace.createElement(reactBootstrap.Card.Title, null, title),
            React__namespace.createElement(reactBootstrap.Card.Text, null, text))));
};

var AlertWrapped = function (props) {
    var AlertCardProps = __rest(props, []);
    return (React__namespace.createElement(reactBootstrap.Row, { className: "justify-content-md-center" },
        React__namespace.createElement(reactBootstrap.Col, { md: 6 },
            React__namespace.createElement(AlertCard, __assign({}, AlertCardProps)))));
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
    var hasRendered = React.useRef(false);
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
    return (React__namespace.createElement(reactBootstrap.Button, { className: "d-flex justify-content-center", disabled: isLoading, onClick: onClick, type: type },
        isLoading && (React__namespace.createElement(reactBootstrap.Spinner, { as: "span", animation: "grow", size: "sm", role: "status", "aria-hidden": "true" })),
        isLoading ? loadingText : defaultText));
};

var SimpleCard = function (_a) {
    var loading = _a.loading, header = _a.header, buttons = _a.buttons, isMobileView = _a.isMobileView, style = _a.style, bodyStyle = _a.bodyStyle, cardClass = _a.cardClass, headerClass = _a.headerClass, onClick = _a.onClick, children = _a.children; _a.className;
    return (React__namespace.createElement(reactBootstrap.Card, { className: cardClass, style: style ? style : undefined, onClick: onClick },
        header && (React__namespace.createElement(reactBootstrap.Card.Header, { className: headerClass },
            React__namespace.createElement(reactBootstrap.Row, null,
                React__namespace.createElement(reactBootstrap.Col, { xs: isMobileView ? 12 : 8 }, isMobileView ? (React__namespace.createElement("h3", { className: "card-title" }, header)) : (React__namespace.createElement("h2", { className: "card-title" }, header))),
                buttons && React__namespace.createElement(reactBootstrap.Col, null, buttons)))),
        children && (React__namespace.createElement(reactBootstrap.Card.Body, { style: bodyStyle ? bodyStyle : undefined },
            React__namespace.createElement(CenteredSpinner, { loading: loading, size: isMobileView ? "sm" : "md" }, children)))));
};

var PasswordInput = function (_a) {
    var name = _a.name, isInvalid = _a.isInvalid, error = _a.error, onChange = _a.onChange, value = _a.value, disabled = _a.disabled, placeholder = _a.placeholder;
    var _b = React__default['default'].useState(false), passwordVisible = _b[0], setPasswordVisible = _b[1];
    var togglePassword = function () {
        setPasswordVisible(!passwordVisible);
    };
    return (React__default['default'].createElement(React__default['default'].Fragment, null,
        React__default['default'].createElement(reactBootstrap.InputGroup, null,
            React__default['default'].createElement(reactBootstrap.Form.Control, { name: name, placeholder: placeholder, isInvalid: isInvalid, value: value, type: passwordVisible ? "text" : "password", onChange: onChange, disabled: disabled }),
            React__default['default'].createElement(reactBootstrap.InputGroup.Append, { className: "togglePasswordHolder", onClick: togglePassword },
                React__default['default'].createElement(reactBootstrap.InputGroup.Text, { className: passwordVisible ? "passwordInputActive" : "passwordInput" },
                    React__default['default'].createElement(reactFontawesome.FontAwesomeIcon, { icon: freeSolidSvgIcons.faEye }))),
            error && (React__default['default'].createElement(reactBootstrap.Form.Control.Feedback, { className: "passwordInvalid", type: "invalid" }, error)))));
};

var BackButton = function () {
    var history = reactRouterDom.useHistory();
    return (React__default['default'].createElement(React__default['default'].Fragment, null,
        React__default['default'].createElement("div", { className: "backButtonHolder", onClick: function () { return history.goBack(); } },
            React__default['default'].createElement(reactFontawesome.FontAwesomeIcon, { icon: freeSolidSvgIcons.faLessThan, size: "xs" }),
            React__default['default'].createElement("span", { className: "pl-2" }, "Back"))));
};

var ButtonLoadingSpinner = function (props) {
    var _a = __assign({}, props); _a.loading; _a.loadingText; var btnProps = __rest(_a, ["loading", "loadingText"]);
    return (React__namespace.createElement(React__namespace.Fragment, null,
        React__namespace.createElement(reactBootstrap.Button, __assign({}, btnProps, { className: "spinner-button-styles" }),
            React__namespace.createElement(ButtonSpinner, { loadingText: props.loadingText, loading: props.loading }, props.children))));
};

exports.AlertWrapped = AlertWrapped;
exports.BackButton = BackButton;
exports.ButtonLoadingSpinner = ButtonLoadingSpinner;
exports.ButtonSpinner = ButtonSpinner;
exports.CenteredSpinner = CenteredSpinner;
exports.GetToday = GetToday;
exports.IsPhoneProvider = IsPhoneProvider;
exports.LoadingButton = LoadingButton;
exports.Login = Login;
exports.ModalOverlay = ModalOverlay;
exports.NativeOverlay = NativeOverlay;
exports.NumberBoolToText = NumberBoolToText;
exports.NumberOrDefault = NumberOrDefault;
exports.OrderBy = OrderBy;
exports.PasswordInput = PasswordInput;
exports.SimpleCard = SimpleCard;
exports.StringOrDefault = StringOrDefault;
exports.StringToShortDate = StringToShortDate;
exports.checkValuesData = checkValuesData;
exports.extract = extract;
exports.getUniqueBy = getUniqueBy;
exports.groupBy = groupBy;
exports.isNotNull = isNotNull;
exports.nameOf = nameOf;
exports.notEmpty = notEmpty;
exports.useIsPhoneContext = useIsPhoneContext;
exports.useOnce = useOnce;
