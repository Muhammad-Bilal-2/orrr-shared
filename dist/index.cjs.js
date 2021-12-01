'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var reactBootstrap = require('react-bootstrap');
var yup = require('yup');
var formik = require('formik');
var freeSolidSvgIcons = require('@fortawesome/free-solid-svg-icons');
var reactFontawesome = require('@fortawesome/react-fontawesome');
var classNames = require('classnames');
var reactRouterDom = require('react-router-dom');
var reactGoogleLogin = require('react-google-login');
var Sentry = require('@sentry/react');
var client = require('@apollo/client');

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
var Sentry__namespace = /*#__PURE__*/_interopNamespace(Sentry);

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

var css_248z$2 = ".Login-module_loginContainer__2EudT {\n  background-color: #fff !important;\n  height: 100vh;\n  margin: 0 !important; }\n  .Login-module_loginContainer__2EudT .Login-module_cardLoginForm__1G8td {\n    box-shadow: none !important;\n    background-color: inherit !important; }\n    .Login-module_loginContainer__2EudT .Login-module_cardLoginForm__1G8td label {\n      color: #222a42 !important; }\n    .Login-module_loginContainer__2EudT .Login-module_cardLoginForm__1G8td .Login-module_loginHeading__2ecv9 {\n      font-size: x-large;\n      text-align: center;\n      font-weight: 700 !important;\n      color: #222a42 !important; }\n    .Login-module_loginContainer__2EudT .Login-module_cardLoginForm__1G8td .Login-module_loginErrorMessage__1QePR {\n      color: red;\n      font-size: 1rem;\n      text-align: center;\n      position: absolute;\n      top: 2.8rem;\n      width: 100%; }\n    .Login-module_loginContainer__2EudT .Login-module_cardLoginForm__1G8td .Login-module_invalidFeedback__Hpui0 {\n      font-size: 0.8rem;\n      margin-top: 0.1rem;\n      margin-bottom: -0.8rem; }\n    .Login-module_loginContainer__2EudT .Login-module_cardLoginForm__1G8td .Login-module_loginInput__GZ68d {\n      border-color: rgba(34, 42, 66, 0.2) !important; }\n    .Login-module_loginContainer__2EudT .Login-module_cardLoginForm__1G8td input[name=\"password\"] {\n      border-color: rgba(34, 42, 66, 0.2) !important; }\n    .Login-module_loginContainer__2EudT .Login-module_cardLoginForm__1G8td .Login-module_loginHelpers__2Dx_E {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      margin: auto 0 !important; }\n      .Login-module_loginContainer__2EudT .Login-module_cardLoginForm__1G8td .Login-module_loginHelpers__2Dx_E .Login-module_loginHelpersContainer__1FCu0 {\n        display: flex;\n        justify-content: center;\n        flex-direction: column;\n        flex-basis: 0; }\n        @media (max-width: 575.98px) {\n          .Login-module_loginContainer__2EudT .Login-module_cardLoginForm__1G8td .Login-module_loginHelpers__2Dx_E .Login-module_loginHelpersContainer__1FCu0 {\n            flex-basis: inherit;\n            margin-bottom: 0.9rem; } }\n        @media (min-width: 575.98px) {\n          .Login-module_loginContainer__2EudT .Login-module_cardLoginForm__1G8td .Login-module_loginHelpers__2Dx_E .Login-module_loginHelpersContainer__1FCu0 {\n            padding: 0; } }\n      .Login-module_loginContainer__2EudT .Login-module_cardLoginForm__1G8td .Login-module_loginHelpers__2Dx_E button {\n        min-width: 160px; }\n        @media (min-width: 1440px) {\n          .Login-module_loginContainer__2EudT .Login-module_cardLoginForm__1G8td .Login-module_loginHelpers__2Dx_E button {\n            min-width: 220px; } }\n    .Login-module_loginContainer__2EudT .Login-module_cardLoginForm__1G8td .Login-module_forgotLinks__2LBVZ {\n      cursor: pointer;\n      color: #00c389;\n      font-size: 0.8rem;\n      display: flex;\n      justify-content: flex-start;\n      align-items: center; }\n      @media (max-width: 575.98px) {\n        .Login-module_loginContainer__2EudT .Login-module_cardLoginForm__1G8td .Login-module_forgotLinks__2LBVZ {\n          justify-content: center; } }\n    .Login-module_loginContainer__2EudT .Login-module_cardLoginForm__1G8td .Login-module_loginFooter__1s1Xl .Login-module_row__3BK-N {\n      margin: 0; }\n  .Login-module_loginContainer__2EudT .Login-module_loginImage__1EIfr {\n    height: 100%;\n    object-fit: cover;\n    max-width: 100%;\n    opacity: 0.2; }\n  .Login-module_loginContainer__2EudT .Login-module_imageOverlay__LUkPu {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    padding: 0 10rem 0 25px; }\n    @media (max-width: 575.98px) {\n      .Login-module_loginContainer__2EudT .Login-module_imageOverlay__LUkPu {\n        padding: 0 2rem 0 25px; } }\n  .Login-module_loginContainer__2EudT .Login-module_loginInfoSection__1exRC {\n    background-color: black !important;\n    color: #fff;\n    margin-bottom: 0;\n    height: 100vh; }\n    .Login-module_loginContainer__2EudT .Login-module_loginInfoSection__1exRC .Login-module_loginInfoTitle__1dfVu {\n      color: #fff;\n      font-weight: 700;\n      font-size: 1.5rem; }\n    .Login-module_loginContainer__2EudT .Login-module_loginInfoSection__1exRC p {\n      color: white;\n      margin-bottom: 1rem; }\n    .Login-module_loginContainer__2EudT .Login-module_loginInfoSection__1exRC ul li {\n      color: white !important; }\n    .Login-module_loginContainer__2EudT .Login-module_loginInfoSection__1exRC .Login-module_loginInfoLink__38Lu6 {\n      display: flex;\n      width: 150px;\n      justify-content: center;\n      align-items: center;\n      position: relative;\n      cursor: pointer; }\n      .Login-module_loginContainer__2EudT .Login-module_loginInfoSection__1exRC .Login-module_loginInfoLink__38Lu6 a {\n        z-index: 100;\n        font-size: 1.2rem;\n        font-weight: 500; }\n      .Login-module_loginContainer__2EudT .Login-module_loginInfoSection__1exRC .Login-module_loginInfoLink__38Lu6 svg {\n        z-index: 100;\n        padding-left: 0.5rem;\n        font-size: 1.5rem;\n        color: #fff; }\n    .Login-module_loginContainer__2EudT .Login-module_loginInfoSection__1exRC .Login-module_loginInfoLinkHover__Sv7Ae {\n      background-color: #ffb81c;\n      position: absolute;\n      top: 0;\n      left: 0;\n      height: 100%;\n      transition: all 0.3s ease-out;\n      width: 0.5rem; }\n    .Login-module_loginContainer__2EudT .Login-module_loginInfoSection__1exRC .Login-module_loginInfoLink__38Lu6:hover > .Login-module_loginInfoLinkHover__Sv7Ae {\n      width: 100%; }\n";
var styles$2 = {"loginContainer":"Login-module_loginContainer__2EudT","cardLoginForm":"Login-module_cardLoginForm__1G8td","loginHeading":"Login-module_loginHeading__2ecv9","loginErrorMessage":"Login-module_loginErrorMessage__1QePR","invalidFeedback":"Login-module_invalidFeedback__Hpui0","loginInput":"Login-module_loginInput__GZ68d","loginHelpers":"Login-module_loginHelpers__2Dx_E","loginHelpersContainer":"Login-module_loginHelpersContainer__1FCu0","forgotLinks":"Login-module_forgotLinks__2LBVZ","loginFooter":"Login-module_loginFooter__1s1Xl","row":"Login-module_row__3BK-N","loginImage":"Login-module_loginImage__1EIfr","imageOverlay":"Login-module_imageOverlay__LUkPu","loginInfoSection":"Login-module_loginInfoSection__1exRC","loginInfoTitle":"Login-module_loginInfoTitle__1dfVu","loginInfoLink":"Login-module_loginInfoLink__38Lu6","loginInfoLinkHover":"Login-module_loginInfoLinkHover__Sv7Ae"};
styleInject(css_248z$2);

var LoginForm$1 = function (props) {
    var schema = yup__namespace.object().shape({
        username: yup__namespace.string().trim().required("Username is required"),
        password: yup__namespace.string().trim().required("Password is required"),
    });
    var formik$1 = formik.useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        validationSchema: schema,
        onSubmit: props.handleSubmit,
        enableReinitialize: true,
    });
    return (React__namespace.createElement(React__namespace.Fragment, null,
        React__namespace.createElement(reactBootstrap.Form, { as: reactBootstrap.Col, xs: 10, sm: 8, md: 6, lg: 7, onKeyDown: function (e) {
                if (e.key === "Enter") {
                    formik$1.handleSubmit();
                }
            } },
            React__namespace.createElement(reactBootstrap.Card, { className: styles$2.cardLoginForm },
                React__namespace.createElement(reactBootstrap.Card.Header, null,
                    React__namespace.createElement(reactBootstrap.Card.Title, { className: styles$2.loginHeading }, "Welcome")),
                React__namespace.createElement(reactBootstrap.Card.Body, null,
                    props.error && (React__namespace.createElement("div", { className: styles$2.loginErrorMessage },
                        props.error.message,
                        " ")),
                    React__namespace.createElement(reactBootstrap.Form.Group, { className: "mb-3" },
                        React__namespace.createElement(reactBootstrap.Form.Label, null, "USERNAME"),
                        React__namespace.createElement(reactBootstrap.FormControl, { name: "username", isInvalid: formik$1.touched.username && !!formik$1.errors.username, value: formik$1.values.username, onChange: formik$1.handleChange, type: "text", placeholder: "USERNAME", className: styles$2.loginInput }),
                        React__namespace.createElement(reactBootstrap.Form.Control.Feedback, { type: "invalid", className: styles$2.invalidFeedback }, formik$1.errors.username)),
                    React__namespace.createElement(reactBootstrap.Form.Group, { className: "mb-3" },
                        React__namespace.createElement(PasswordInput, { label: "PASSWORD", placeholder: "PASSWORD", isInvalid: formik$1.touched.password && !!formik$1.errors.password, error: formik$1.errors.password, onChange: formik$1.handleChange, value: formik$1.values.password, name: "password" })),
                    React__namespace.createElement(reactBootstrap.Row, { className: styles$2.loginHelpers },
                        React__namespace.createElement(reactBootstrap.Col, { className: styles$2.loginHelpersContainer },
                            React__namespace.createElement("div", { className: styles$2.forgotLinks, onClick: function () { return props.setShowModal("password"); } },
                                React__namespace.createElement("span", { className: "pr-2" }, "Forgot Password"),
                                React__namespace.createElement(reactFontawesome.FontAwesomeIcon, { icon: freeSolidSvgIcons.faGreaterThan, size: "xs" })),
                            React__namespace.createElement("div", { className: styles$2.forgotLinks, onClick: function () { return props.setShowModal("username"); } },
                                React__namespace.createElement("span", { className: "pr-2" }, "Forgot Username"),
                                React__namespace.createElement(reactFontawesome.FontAwesomeIcon, { icon: freeSolidSvgIcons.faGreaterThan, size: "xs" }))),
                        React__namespace.createElement(reactBootstrap.Col, { className: "d-flex justify-content-sm-end justify-content-center px-0 align-items-center" },
                            React__namespace.createElement(LoadingButton, { className: styles$2.loginBtn, color: "primary", isLoading: props.loading, defaultText: "Log in", loadingText: "Loading", onClick: function () { return formik$1.handleSubmit(); } }))))))));
};

var LoginImage$1 = function (props) {
    return (React__namespace.createElement(React__namespace.Fragment, null,
        React__namespace.createElement("div", { className: styles$2.loginInfoSection },
            React__namespace.createElement("img", { alt: "login-image", className: styles$2.loginImage, src: props.imgUrl }),
            React__namespace.createElement("div", { className: styles$2.imageOverlay },
                React__namespace.createElement("h2", { className: styles$2.loginInfoTitle }, props.header),
                props.text && React__namespace.createElement("p", null, props.text),
                props.children))));
};

var Login$1 = function (props) {
    return (React__namespace.createElement("div", { className: "content h-100" },
        React__namespace.createElement(reactBootstrap.Row, { className: styles$2.loginContainer },
            React__namespace.createElement(reactBootstrap.Col, { xs: 12, lg: 7, className: "h-100 p-0" },
                React__namespace.createElement(reactBootstrap.Container, { fluid: true, className: "d-flex align-items-center justify-content-center h-100" },
                    React__namespace.createElement(LoginForm$1, { loading: props.loading, handleSubmit: props.handleSubmit, error: props.error, setShowModal: props.setShowModal }))),
            React__namespace.createElement(reactBootstrap.Col, { xs: 12, lg: 5, className: "h-100 px-0" },
                React__namespace.createElement(LoginImage$1, { imgUrl: "https://cdn.orrprotection.com/netsite/login2.jpg", header: "WHAT IS NETSITE?", text: "NetSITE provides secure, online access to all critical information\r\n          related to any fire protection system at any facility or site\r\n          serviced by ORR" },
                    React__namespace.createElement("h2", { className: styles$2.loginInfoTitle }, "All Documentation Online..."),
                    React__namespace.createElement("p", null, "for all fire protection systems, located in any facility across the country"),
                    React__namespace.createElement("ul", null,
                        React__namespace.createElement("li", null, "Inspections Report"),
                        React__namespace.createElement("li", null, "Proposals/ Pricing"),
                        React__namespace.createElement("li", null, "Invoices"),
                        React__namespace.createElement("li", null, "System Drawings"),
                        React__namespace.createElement("li", null, "Owner Manual's")),
                    React__namespace.createElement("div", { className: styles$2.loginInfoLink },
                        React__namespace.createElement("div", { className: styles$2.loginInfoLinkHover }),
                        React__namespace.createElement("a", { href: process.env.REACT_APP_ORR_NETREPORT_URL }, "Learn more"),
                        React__namespace.createElement(reactFontawesome.FontAwesomeIcon, { icon: freeSolidSvgIcons.faArrowRight })))))));
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

var ModalOverlay = function (props) {
    return (React__namespace.createElement(React__namespace.Fragment, null,
        React__namespace.createElement(reactBootstrap.Modal, { className: "modal-card-overlay", onHide: props.setShow, show: props.show, centered: true },
            React__namespace.createElement(reactBootstrap.Modal.Header, { closeButton: true, onHide: props.setShow }, props.header),
            React__namespace.createElement(reactBootstrap.Modal.Body, null, props.children),
            React__namespace.createElement(reactBootstrap.Modal.Footer, null))));
};

var NativeOverlay = function (props) {
    return (React__namespace.createElement(React__namespace.Fragment, null,
        React__namespace.createElement(reactBootstrap.Modal, { className: "modal-overlay", show: props.show, backdrop: "static" },
            React__namespace.createElement(reactBootstrap.Modal.Header, { closeButton: true, onHide: function () { return props.setShow(); } }, props.header),
            React__namespace.createElement(reactBootstrap.Modal.Body, null, props.children))));
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
        get: function (target, key) { return key; },
    });
    return f(p);
}
function getUniqueBy(arr, prop) {
    var set = new Set();
    return arr.filter(function (o) { return !set.has(o[prop]) && set.add(o[prop]); });
}
/* export const multipleGroupByArray = <T>(dataArray:T[], groupPropertyArray:(item:T|{[key:string]:string})=>(string|null)[]) => {

  //get properties
  const properties = getPropertyName(dataArray[0], groupPropertyArray) as string[];
  const groups:{[key:string]:any} = {};

  let test = dataArray.map((item)=>{
    return nestedGroupBy(item, properties, groups)
  })


/*   const test = dataArray.reduce((accum, current) => {
    let curr = current as {[key:string]:any};
    let groups = properties.reduce((store, item)=>{
      var group = curr[item];
      store[group] = store[group] || [];
      store[group].push(item);
      return store;
    },{} as {[key:string]:any});
    groups.array.forEach(element => {
      accum[element] = accum[element] || [];

    });
      return accum;
  }, groups)

    dataArray.forEach(item => {
        const group = JSON.stringify(properties);
        groups[group] = groups[group] || [];
        groups[group].push(item);
    });
    return Object.keys(groups).map(function(group) {
        return groups[group];
    });
} */
/* const nestedGroupBy=(item:{[key:string]:any}, properties:string[], groupedObj:{[key:string]:any}) : {[key:string]:any}=> {
  
    let group = {} as {[key:string]:any};
    let currentProp = properties[0];
    let propName = item[currentProp];

    if(properties.length > 1){
      let remainingProps = properties.slice(1);
      let value = nestedGroupBy(item, remainingProps);
      group[propName] = value
      return group;
    }
    group[propName] = item
    return group;
} */

var LoadingButton = function (_a) {
    var isLoading = _a.isLoading, defaultText = _a.defaultText, loadingText = _a.loadingText, onClick = _a.onClick, type = _a.type;
    return (React__namespace.createElement(reactBootstrap.Button, { className: "d-flex justify-content-center", disabled: isLoading, onClick: onClick, type: type },
        isLoading && (React__namespace.createElement(reactBootstrap.Spinner, { as: "span", animation: "grow", size: "sm", role: "status", "aria-hidden": "true" })),
        isLoading ? loadingText : defaultText));
};

var SimpleCard = function (_a) {
    var loading = _a.loading, header = _a.header, buttons = _a.buttons, isMobileView = _a.isMobileView, style = _a.style, bodyStyle = _a.bodyStyle, cardClass = _a.cardClass, headerClass = _a.headerClass, onClick = _a.onClick, children = _a.children, bodyClass = _a.bodyClass;
    return (React__namespace.createElement(reactBootstrap.Card, { className: cardClass, style: style ? style : undefined, onClick: onClick },
        header && (React__namespace.createElement(reactBootstrap.Card.Header, { className: headerClass },
            React__namespace.createElement(reactBootstrap.Row, null,
                React__namespace.createElement(reactBootstrap.Col, { xs: isMobileView ? 12 : 8 }, isMobileView ? (React__namespace.createElement("h3", { className: "card-title" }, header)) : (React__namespace.createElement("h2", { className: "card-title" }, header))),
                buttons && React__namespace.createElement(reactBootstrap.Col, null, buttons)))),
        children && (React__namespace.createElement(reactBootstrap.Card.Body, { className: bodyClass, style: bodyStyle ? bodyStyle : undefined },
            React__namespace.createElement(CenteredSpinner, { loading: loading, size: isMobileView ? "sm" : "md" }, children)))));
};

var PasswordInput = function (_a) {
    var label = _a.label, name = _a.name, isInvalid = _a.isInvalid, error = _a.error, onChange = _a.onChange, value = _a.value, disabled = _a.disabled, placeholder = _a.placeholder, inputGroupCustomClass = _a.inputGroupCustomClass, inputPasswordClass = _a.inputPasswordClass;
    var _b = React__default['default'].useState(false), passwordVisible = _b[0], setPasswordVisible = _b[1];
    var togglePassword = function () {
        setPasswordVisible(!passwordVisible);
    };
    return (React__default['default'].createElement(React__default['default'].Fragment, null,
        label && React__default['default'].createElement(reactBootstrap.Form.Label, null, label),
        React__default['default'].createElement(reactBootstrap.InputGroup, { className: inputGroupCustomClass },
            React__default['default'].createElement(reactBootstrap.Form.Control, { name: name, placeholder: placeholder, isInvalid: isInvalid, value: value, type: passwordVisible ? "text" : "password", onChange: onChange, disabled: disabled, className: inputPasswordClass }),
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

var ModalNoHeaderOverlay = function (props) {
    return (React__namespace.createElement(React__namespace.Fragment, null,
        React__namespace.createElement(reactBootstrap.Modal, { className: "modal-no-header", onHide: props.setShow, animation: false, size: props.size ? props.size : "lg", show: props.show, centered: true },
            React__namespace.createElement(reactBootstrap.CloseButton, { onClick: function () { return props.setShow(""); } }),
            React__namespace.createElement(reactBootstrap.Modal.Body, { className: "modal-body" }, props.children))));
};

var ModalSuccess = function (props) {
    return (React__default['default'].createElement(ModalNoHeaderOverlay, { show: props.show, setShow: props.setShow },
        React__default['default'].createElement(reactFontawesome.FontAwesomeIcon, { className: "modal-success-icon", icon: freeSolidSvgIcons.faCheckCircle, size: "10x" }),
        React__default['default'].createElement("h2", { className: "mb-2" }, "Success!"),
        React__default['default'].createElement("p", null, props.text)));
};

var ForgotUsernameModal = function (_a) {
    var loading = _a.loading, closeModal = _a.closeModal, status = _a.status, handleReminder = _a.handleReminder, showError = _a.showError;
    var _b = React__namespace.useState(""), value = _b[0], setValue = _b[1];
    return (React__namespace.createElement(reactBootstrap.Col, { className: "text-center d-flex flex-column align-items-center px-3 px-sm-5" },
        React__namespace.createElement(reactFontawesome.FontAwesomeIcon, { icon: freeSolidSvgIcons.faUserCog, size: "7x" }),
        React__namespace.createElement("h3", { className: "mt-3 mb-1 font-weight-bold" }, "\"Retrieve User Name\""),
        React__namespace.createElement("p", { className: "text-muted text-center mb-3" }, "Enter you email address in the form below and we will send the user name we can match to your email address"),
        React__namespace.createElement(reactBootstrap.Form.Label, { className: "align-self-start" }, "Email Address"),
        React__namespace.createElement(reactBootstrap.Form.Control, { className: "mb-2 text-muted", type: "text", id: "loginInputUsername", value: value, onChange: function (e) { return setValue(e.target.value); }, placeholder: "Email Address" }),
        status && status !== "Success" ? showError() : null,
        React__namespace.createElement("div", { className: "my-2 px-2 d-flex justify-content-around flex-column flex-sm-row w-sm-100" },
            React__namespace.createElement(reactBootstrap.Button, { className: "mb-2 mb-sm-0 text-muted", variant: "white", onClick: function () { return closeModal(""); } }, "Cancel"),
            React__namespace.createElement(LoadingButton, { isLoading: loading, defaultText: "Send reminder", loadingText: "Loading", onClick: function () { return handleReminder(value); } }))));
};

var ForgotPasswordModal = function (_a) {
    var loading = _a.loading, closeModal = _a.closeModal, status = _a.status, handleReminder = _a.handleReminder, showError = _a.showError;
    var _b = React__namespace.useState(""), value = _b[0], setValue = _b[1];
    return (React__namespace.createElement(reactBootstrap.Col, { className: "text-center d-flex flex-column align-items-center px-3 px-sm-5" },
        React__namespace.createElement(reactFontawesome.FontAwesomeIcon, { icon: freeSolidSvgIcons.faUserLock, size: "7x" }),
        React__namespace.createElement("h3", { className: "mt-3 mb-1 font-weight-bold" }, "Reset Password"),
        React__namespace.createElement("p", { className: "text-muted text-center mb-3" }, "Enter your User Name to receive a password reset link at the email address on file"),
        React__namespace.createElement(reactBootstrap.Form.Label, { className: "align-self-start" }, "User Name"),
        React__namespace.createElement(reactBootstrap.Form.Control, { className: "mb-2 text-muted", type: "text", id: "loginInputPassword", value: value, onChange: function (e) { return setValue(e.target.value); }, placeholder: "User Name" }),
        status && status !== "Success" ? showError() : null,
        React__namespace.createElement("div", { className: "my-2 px-2 d-flex justify-content-around flex-column flex-sm-row w-sm-100" },
            React__namespace.createElement(reactBootstrap.Button, { className: "mb-2 mb-sm-0 text-muted", variant: "white", onClick: function () { return closeModal(""); } }, "Cancel"),
            React__namespace.createElement(LoadingButton, { isLoading: loading, defaultText: "Send reminder", loadingText: "Loading", onClick: function () { return handleReminder(value); } }))));
};

var Dropdowns = function (_a) {
    var selectedItem = _a.selectedItem, items = _a.items, _b = _a.isDisabled, isDisabled = _b === void 0 ? false : _b, setSelectedItem = _a.setSelectedItem, text = _a.text, dropDownDisplayItemText = _a.dropDownDisplayItemText;
    return (React__default['default'].createElement(reactBootstrap.Form.Group, null,
        React__default['default'].createElement(reactBootstrap.Form.Control, { size: "lg", as: "select", value: selectedItem, onChange: function (e) {
                setSelectedItem(e.target.value);
            }, disabled: isDisabled }, (items === null || items === void 0 ? void 0 : items.length) !== 1 ? (React__default['default'].createElement(React__default['default'].Fragment, null,
            dropDownDisplayItemText ? (React__default['default'].createElement("option", { value: "" }, dropDownDisplayItemText)) : null,
            items &&
                items.map(function (dropdownitem, index) { return (React__default['default'].createElement("option", { key: index, value: dropdownitem.key },
                    dropdownitem.value,
                    text ? text : null)); }))) : (items && (React__default['default'].createElement("option", { key: items[0].key, value: items[0].key }, items[0].value))))));
};

var TAB_SEARCH_KEY = "tab";
var Tabs = function (_a) {
    var tabs = _a.tabs, uniqueKey = _a.uniqueKey, mountOnEnter = _a.mountOnEnter, unmountOnExit = _a.unmountOnExit;
    var history = reactRouterDom.useHistory();
    var orderedTabs = React.useMemo(function () { return OrderBy(tabs, "order"); }, [tabs]);
    var search = window.location.search;
    var searchParams = React.useMemo(function () { return new URLSearchParams(search); }, [search]);
    var uniqueSearchKey = React.useMemo(function () { return uniqueKey + "-" + TAB_SEARCH_KEY; }, [uniqueKey]);
    var urlKey = React.useMemo(function () {
        var searchKey = searchParams.get(uniqueSearchKey);
        return searchKey || orderedTabs[0].key;
    }, [searchParams, orderedTabs, uniqueSearchKey]);
    var updateKey = function (key) {
        searchParams.set(uniqueSearchKey, key);
        history.replace({ search: searchParams.toString() });
    };
    return (React__namespace.createElement(reactBootstrap.Tabs, { id: uniqueKey, activeKey: urlKey, onSelect: function (k) { return updateKey(k); }, className: "custom-tabs mb-0 p-0", mountOnEnter: mountOnEnter, unmountOnExit: unmountOnExit }, orderedTabs === null || orderedTabs === void 0 ? void 0 : orderedTabs.map(function (singleTab) {
        return (React__namespace.createElement(reactBootstrap.Tab, { tabClassName: "custom-tab-link", eventKey: singleTab.key, title: singleTab.name, key: singleTab.key },
            React__namespace.createElement(singleTab.component, null)));
    })));
};

//gives date prior to current date
var getDate = function (duration) {
    var dateObj = new Date();
    var requiredDate = dateObj.setMonth(dateObj.getMonth() - parseInt(duration));
    var ISO_date = new Date(requiredDate).toISOString();
    return ISO_date;
};

var getPropertyName = function (obj, expression) {
    var res = {};
    Object.keys(obj).forEach(function (k) {
        res[k] = k;
    });
    return expression(res);
};

function useLocalStorage(key, initialValue) {
    if (initialValue === void 0) { initialValue = ''; }
    var _a = React.useState(function () { return window.localStorage.getItem(key) || initialValue; }), value = _a[0], setValue = _a[1];
    var setItem = function (newValue) {
        setValue(newValue);
        window.localStorage.setItem(key, newValue);
    };
    React.useEffect(function () {
        var newValue = window.localStorage.getItem(key);
        if (value !== newValue) {
            setValue(newValue || initialValue);
        }
    }, [key, value, initialValue]);
    var handleStorage = React.useCallback(function (event) {
        if (event.key === key && event.newValue !== value) {
            setValue(event.newValue || initialValue);
        }
    }, [value, key, initialValue]);
    React.useEffect(function () {
        window.addEventListener('storage', handleStorage);
        return function () { return window.removeEventListener('storage', handleStorage); };
    }, [handleStorage]);
    return [value, setItem];
}

var AuthenticationState;
(function (AuthenticationState) {
    AuthenticationState["Unauthenticated"] = "Unauthenticated";
    AuthenticationState["InProgress"] = "InProgress";
    AuthenticationState["Authenticated"] = "Authenticated";
})(AuthenticationState || (AuthenticationState = {}));

var useGoogleProvider = function (_a) {
    var googleClientId = _a.googleClientId, onLoginCallback = _a.onLoginCallback, onLogoutCallback = _a.onLogoutCallback;
    var googleSuccessHandler = React.useCallback(function (response) {
        onLoginCallback(true, response.getAuthResponse().id_token, getAccountInfo(response));
    }, [onLoginCallback]);
    var onAutoLoginFinished = function (successLogin) {
        if (!successLogin) {
            onLoginCallback(false);
        }
        return successLogin;
    };
    var signIn = reactGoogleLogin.useGoogleLogin({
        onSuccess: googleSuccessHandler,
        onAutoLoadFinished: onAutoLoginFinished,
        clientId: googleClientId,
        onFailure: function (error) { return onLoginCallback(true, undefined, undefined, error); },
        cookiePolicy: "single_host_origin",
        isSignedIn: true,
        prompt: "consent",
    }).signIn;
    var logout = React.useCallback(function () {
        onLogoutCallback();
    }, [onLogoutCallback]);
    var getAccountInfo = function (response) {
        var authUser = undefined;
        if (response && response.profileObj) {
            authUser = {
                googleInfo: response,
                // userId: response.googleId,
                // email: response.profileObj.email,
                // familyName: response.profileObj.familyName,
                // givenName: response.profileObj.givenName,
                // imageUrl: response.profileObj.imageUrl,
                // name: response.profileObj.name,
            };
        }
        return authUser;
    };
    return {
        login: signIn,
        logout: logout,
    };
};

var Authentication = function (props) {
    var _a = props.googleId, googleId = _a === void 0 ? "1051642862462-235q758ihuibbn4hv3ic2nudqu7444fq.apps.googleusercontent.com" : _a, tag = props.tag, loginCallBack = props.loginCallBack, logoutCallBack = props.logoutCallBack;
    var _b = React__namespace.useState(false), loading = _b[0], _setLoading = _b[1];
    var _c = React__namespace.useState(undefined), accountInfo = _c[0], _setAccountInfo = _c[1];
    var _d = React__namespace.useState(null), error = _d[0], _setError = _d[1];
    var _e = React__namespace.useState(AuthenticationState.InProgress), authenticationState = _e[0], _setAuthenticationState = _e[1];
    var onLogin = React__namespace.useCallback(function (isSuccessFulLogin, token, accountInfo, error) {
        if (isSuccessFulLogin && accountInfo) {
            token &&
                sessionStorage.setItem(process.env.REACT_APP_SESSION_TOKEN_KEY, token);
            _setAuthenticationState(AuthenticationState.Authenticated);
            _setAccountInfo(accountInfo);
            _setError(error);
        }
        else {
            _setAuthenticationState(AuthenticationState.Unauthenticated);
        }
        _setLoading(false);
        loginCallBack();
    }, []);
    var onLogout = React__namespace.useCallback(function () {
        sessionStorage.removeItem(process.env.REACT_APP_SESSION_TOKEN_KEY);
        _setAuthenticationState(AuthenticationState.Unauthenticated);
        logoutCallBack();
    }, []);
    var _f = useGoogleProvider({
        googleClientId: googleId,
        onLoginCallback: onLogin,
        onLogoutCallback: onLogout,
    }), login = _f.login, logout = _f.logout;
    // const { login: logins, logout: logouts } = usePassportProvider({
    //   onLoginCallback: onLogin,
    //   onLogoutCallback: onLogout,
    // });
    // const login = props.tag ? loging : logins;
    // const logout = props.tag ? logoutg : logouts;
    var childrenFunctionProps = React.useMemo(function () { return ({
        accountInfo: accountInfo,
        authenticationState: authenticationState,
        error: error,
        logout: logout,
        loading: loading,
        login: login,
        tag: tag,
    }); }, [accountInfo, authenticationState, error, logout, loading, login, tag]);
    function getChildrenOrFunction(children, childrenProps) {
        if (children) {
            if (isChildrenFunction(children)) {
                return children(childrenProps);
            }
            else {
                return children;
            }
        }
        else {
            return null;
        }
    }
    function isChildrenFunction(children) {
        return typeof children == "function" || false;
    }
    if (isChildrenFunction(props.children)) {
        return getChildrenOrFunction(props.children, childrenFunctionProps);
    }
    else {
        return null;
    }
};

var css_248z$1 = ".Login-module_loginContainer__ovFhO {\n  background-color: #fff;\n  height: 100vh;\n  margin: 0 !important; }\n  .Login-module_loginContainer__ovFhO .Login-module_cardLoginForm__1RNQN {\n    box-shadow: none !important;\n    background-color: #fff; }\n    .Login-module_loginContainer__ovFhO .Login-module_cardLoginForm__1RNQN .Login-module_loginErrorMessage__1hZrs {\n      color: red;\n      font-size: 1rem;\n      text-align: center;\n      position: absolute;\n      top: 2.8rem;\n      width: 100%; }\n    .Login-module_loginContainer__ovFhO .Login-module_cardLoginForm__1RNQN .Login-module_invalidFeedback__1_xPc {\n      font-size: 0.8rem;\n      margin-top: 0.1rem;\n      margin-bottom: -0.8rem; }\n    .Login-module_loginContainer__ovFhO .Login-module_cardLoginForm__1RNQN .Login-module_loginInput__obfve {\n      border-color: rgba(34, 42, 66, 0.2) !important; }\n    .Login-module_loginContainer__ovFhO .Login-module_cardLoginForm__1RNQN input[name=\"password\"] {\n      border-color: rgba(34, 42, 66, 0.2) !important; }\n    .Login-module_loginContainer__ovFhO .Login-module_cardLoginForm__1RNQN .Login-module_loginHelpers__1vXiR {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      margin: auto 0 !important; }\n      .Login-module_loginContainer__ovFhO .Login-module_cardLoginForm__1RNQN .Login-module_loginHelpers__1vXiR .Login-module_loginHelpersContainer__2bpKL {\n        display: flex;\n        justify-content: center;\n        flex-direction: column;\n        flex-basis: 0; }\n        @media (max-width: 575.98px) {\n          .Login-module_loginContainer__ovFhO .Login-module_cardLoginForm__1RNQN .Login-module_loginHelpers__1vXiR .Login-module_loginHelpersContainer__2bpKL {\n            flex-basis: inherit;\n            margin-bottom: 0.9rem; } }\n      .Login-module_loginContainer__ovFhO .Login-module_cardLoginForm__1RNQN .Login-module_loginHelpers__1vXiR button {\n        min-width: 160px; }\n        @media (min-width: 1440px) {\n          .Login-module_loginContainer__ovFhO .Login-module_cardLoginForm__1RNQN .Login-module_loginHelpers__1vXiR button {\n            min-width: 220px; } }\n    .Login-module_loginContainer__ovFhO .Login-module_cardLoginForm__1RNQN .Login-module_loginHeading__1HKkI {\n      font-size: x-large;\n      text-align: center;\n      font-weight: 700 !important;\n      color: #000 !important; }\n      .Login-module_loginContainer__ovFhO .Login-module_cardLoginForm__1RNQN .Login-module_loginHeading__1HKkI span {\n        font-size: medium;\n        font-weight: 500; }\n    .Login-module_loginContainer__ovFhO .Login-module_cardLoginForm__1RNQN .Login-module_forgotLinks__9HJ1I {\n      cursor: pointer;\n      color: #00c389;\n      font-size: 0.8rem;\n      display: flex;\n      justify-content: flex-start;\n      align-items: center; }\n      @media (max-width: 575.98px) {\n        .Login-module_loginContainer__ovFhO .Login-module_cardLoginForm__1RNQN .Login-module_forgotLinks__9HJ1I {\n          justify-content: center; } }\n    .Login-module_loginContainer__ovFhO .Login-module_cardLoginForm__1RNQN .Login-module_loginFooter__1NiI- .Login-module_row__3zplp {\n      margin: 0; }\n  .Login-module_loginContainer__ovFhO .Login-module_loginImage__1_7s6 {\n    height: 100%;\n    object-fit: cover;\n    max-width: 100%;\n    opacity: 0.2; }\n  .Login-module_loginContainer__ovFhO .Login-module_imageOverlay__1eAiO {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    padding: 0 10rem 0 25px; }\n  .Login-module_loginContainer__ovFhO .Login-module_loginInfoSection__2vkC8 {\n    background-color: black !important;\n    color: #fff;\n    margin-bottom: 0;\n    height: 100vh; }\n    .Login-module_loginContainer__ovFhO .Login-module_loginInfoSection__2vkC8 .Login-module_loginInfoTitle__2WFTa {\n      color: #fff;\n      font-weight: 700;\n      font-size: 1.5rem; }\n    .Login-module_loginContainer__ovFhO .Login-module_loginInfoSection__2vkC8 p {\n      color: white;\n      margin-bottom: 1rem; }\n    .Login-module_loginContainer__ovFhO .Login-module_loginInfoSection__2vkC8 ul li {\n      color: white !important; }\n    .Login-module_loginContainer__ovFhO .Login-module_loginInfoSection__2vkC8 .Login-module_loginInfoLink__1ASEM {\n      display: flex;\n      width: 150px;\n      justify-content: center;\n      align-items: center;\n      position: relative;\n      cursor: pointer; }\n      .Login-module_loginContainer__ovFhO .Login-module_loginInfoSection__2vkC8 .Login-module_loginInfoLink__1ASEM a {\n        z-index: 100;\n        font-size: 1.2rem;\n        font-weight: 500; }\n      .Login-module_loginContainer__ovFhO .Login-module_loginInfoSection__2vkC8 .Login-module_loginInfoLink__1ASEM a:hover {\n        color: #fff; }\n      .Login-module_loginContainer__ovFhO .Login-module_loginInfoSection__2vkC8 .Login-module_loginInfoLink__1ASEM svg {\n        z-index: 100;\n        padding-left: 0.5rem;\n        font-size: 1.5rem;\n        color: #fff; }\n    .Login-module_loginContainer__ovFhO .Login-module_loginInfoSection__2vkC8 .Login-module_loginInfoLinkHover__3JuBp {\n      background-color: #ffb81c;\n      position: absolute;\n      top: 0;\n      left: 0;\n      height: 100%;\n      transition: all 0.3s ease-out;\n      width: 0.5rem; }\n    .Login-module_loginContainer__ovFhO .Login-module_loginInfoSection__2vkC8 .Login-module_loginInfoLink__1ASEM:hover > .Login-module_loginInfoLinkHover__3JuBp {\n      width: 100%; }\n\n.Login-module_loginButton__7GV6C {\n  background-color: white;\n  color: rgba(0, 0, 0, 0.54);\n  padding-right: 5px;\n  border-radius: 2px;\n  border: 1px solid transparent;\n  font-size: 14px;\n  font-weight: 500;\n  font-family: Roboto, sans-serif;\n  height: 50px;\n  box-shadow: #cac6c6 0px 2px 2px 0px, #cac6c6 0px 0px 1px 0px; }\n\n.Login-module_imgSize__tE5Wg {\n  width: 20px;\n  margin-right: 5px; }\n";
var styles$1 = {"loginContainer":"Login-module_loginContainer__ovFhO","cardLoginForm":"Login-module_cardLoginForm__1RNQN","loginErrorMessage":"Login-module_loginErrorMessage__1hZrs","invalidFeedback":"Login-module_invalidFeedback__1_xPc","loginInput":"Login-module_loginInput__obfve","loginHelpers":"Login-module_loginHelpers__1vXiR","loginHelpersContainer":"Login-module_loginHelpersContainer__2bpKL","loginHeading":"Login-module_loginHeading__1HKkI","forgotLinks":"Login-module_forgotLinks__9HJ1I","loginFooter":"Login-module_loginFooter__1NiI-","row":"Login-module_row__3zplp","loginImage":"Login-module_loginImage__1_7s6","imageOverlay":"Login-module_imageOverlay__1eAiO","loginInfoSection":"Login-module_loginInfoSection__2vkC8","loginInfoTitle":"Login-module_loginInfoTitle__2WFTa","loginInfoLink":"Login-module_loginInfoLink__1ASEM","loginInfoLinkHover":"Login-module_loginInfoLinkHover__3JuBp","loginButton":"Login-module_loginButton__7GV6C","imgSize":"Login-module_imgSize__tE5Wg"};
styleInject(css_248z$1);

var LoginImage = function (props) {
    return (React__namespace.createElement(React__namespace.Fragment, null,
        React__namespace.createElement("div", { className: styles$1.loginInfoSection },
            React__namespace.createElement("img", { alt: "login-img", className: styles$1.loginImage, src: props.imgUrl }),
            React__namespace.createElement("div", { className: styles$1.imageOverlay },
                React__namespace.createElement("h2", { className: styles$1.loginInfoTitle }, props.header),
                props.text && React__namespace.createElement("p", null, props.text),
                props.children))));
};

var LoginForm = function (props) {
    var schema = yup__namespace.object().shape({
        username: yup__namespace.string().trim().required("Username is required"),
        password: yup__namespace.string().trim().required("Password is required"),
    });
    var handleSubmit = function (values) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            try {
                if (props.signIn) {
                    props.signIn(values.username, values.password);
                }
            }
            catch (error) {
                Sentry__namespace.captureException(error);
            }
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
    return (React__namespace.createElement(React__namespace.Fragment, null,
        React__namespace.createElement(reactBootstrap.Form, { as: reactBootstrap.Col, xs: 10, sm: 8, md: 6, lg: 7, onKeyDown: function (e) {
                if (e.key === "Enter") {
                    formik$1.handleSubmit();
                }
            } },
            React__namespace.createElement(reactBootstrap.Card, { className: styles$1.cardLoginForm },
                React__namespace.createElement(reactBootstrap.Card.Header, null,
                    React__namespace.createElement(reactBootstrap.Card.Title, { className: styles$1.loginHeading },
                        "Welcome! ",
                        React__namespace.createElement("br", null),
                        React__namespace.createElement("span", null, "Please sign in with your google account."))),
                React__namespace.createElement(reactBootstrap.Card.Body, null,
                    props.error && (React__namespace.createElement("div", { className: styles$1.loginErrorMessage },
                        props.error.message,
                        " ")),
                    React__namespace.createElement(reactBootstrap.Form.Group, { className: "mb-3" },
                        React__namespace.createElement(reactBootstrap.Form.Label, null, "USERNAME"),
                        React__namespace.createElement(reactBootstrap.FormControl, { name: "username", isInvalid: formik$1.touched.username && !!formik$1.errors.username, value: formik$1.values.username, onChange: formik$1.handleChange, type: "text", placeholder: "USERNAME", className: styles$1.loginInput }),
                        React__namespace.createElement(reactBootstrap.Form.Control.Feedback, { type: "invalid", className: styles$1.invalidFeedback }, formik$1.errors.username)),
                    React__namespace.createElement(reactBootstrap.Form.Group, { className: "mb-3" },
                        React__namespace.createElement(PasswordInput, { label: "PASSWORD", placeholder: "PASSWORD", isInvalid: formik$1.touched.password && !!formik$1.errors.password, error: formik$1.errors.password, onChange: formik$1.handleChange, value: formik$1.values.password, name: "password" })),
                    React__namespace.createElement(reactBootstrap.Row, { className: styles$1.loginHelpers },
                        React__namespace.createElement(reactBootstrap.Col, { className: styles$1.loginHelpersContainer },
                            React__namespace.createElement(reactBootstrap.Row, { className: styles$1.forgotLinks, onClick: function () { return props.setShowModal("password"); } },
                                React__namespace.createElement("span", { className: "pr-2" }, "Forgot Password"),
                                React__namespace.createElement(reactFontawesome.FontAwesomeIcon, { icon: freeSolidSvgIcons.faGreaterThan, size: "xs" })),
                            React__namespace.createElement(reactBootstrap.Row, { className: styles$1.forgotLinks, onClick: function () { return props.setShowModal("username"); } },
                                React__namespace.createElement("span", { className: "pr-2" }, "Forgot Username"),
                                React__namespace.createElement(reactFontawesome.FontAwesomeIcon, { icon: freeSolidSvgIcons.faGreaterThan, size: "xs" }))),
                        React__namespace.createElement(reactBootstrap.Col, { className: "d-flex justify-content-sm-end justify-content-center px-0 align-items-center" },
                            React__namespace.createElement(LoadingButton, { className: styles$1.loginBtn, color: "primary", isLoading: props.loading, defaultText: "Log in", loadingText: "Loading", onClick: function () { return formik$1.handleSubmit(); } }))),
                    React__namespace.createElement(reactBootstrap.Row, { className: styles$1.loginHelpers },
                        React__namespace.createElement(reactBootstrap.Col, { className: "d-flex justify-content-center px-0 align-items-center mt-3" },
                            React__namespace.createElement(reactBootstrap.Button, { variant: "light", onClick: function () { return props.signIn(); } },
                                React__namespace.createElement("img", { className: styles$1.imgSize, src: props.logo, alt: "Google icon" }),
                                "Google Login"))))))));
};

var ModalLogin = function (_a) {
    var modal = _a.modal, text = _a.text; _a.endpoint; var onClick = _a.onClick;
    var _b = React__namespace.useState(""), value = _b[0], setValue = _b[1];
    var _c = React__namespace.useState(""), status = _c[0]; _c[1];
    var _d = React__namespace.useState(false), loading = _d[0]; _d[1];
    // const handleForgottenCredentials = async (value: string) => {
    //   const bodyArg: { [key: string]: { [key: string]: string } } = {
    //     Username: { emailAddress: value },
    //     Password: { LoginId: value },
    //   };
    //   let body = JSON.stringify(bodyArg[modal]);
    //   return await new ApiPostRequest(endpoint, body)
    //     .Invoke()
    //     .then((result) => result.json())
    //     .catch((error) => {
    //       Sentry.captureException(error);
    //     });
    // };
    // const handleReminder = async (value: string) => {
    //   try {
    //     if (value.trim() === "") {
    //       return setStatus("Empty");
    //     }
    //     setLoading(true);
    //     const response = await handleForgottenCredentials(value);
    //     setLoading(false);
    //     setStatus(response.Code || "Failed");
    //   } catch (error) {
    //     Sentry.captureException(error);
    //   }
    // };
    var errorMessage = function () {
        return (React__namespace.createElement("p", { className: "mt-0 text-danger" }, status === "Failed"
            ? "An error occured, please try again or contact support"
            : "The field cannot be empty"));
    };
    return (React__namespace.createElement(reactBootstrap.Col, { className: "text-center d-flex flex-column align-items-center px-3 px-sm-5" }, status === "Success" ? (React__namespace.createElement(React__namespace.Fragment, null,
        React__namespace.createElement(reactFontawesome.FontAwesomeIcon, { className: "modal-success-icon", icon: freeSolidSvgIcons.faCheckCircle, size: "10x" }),
        React__namespace.createElement("h2", { className: "mb-1" }, "Success!"),
        React__namespace.createElement("p", null,
            "You will receive your",
            " ",
            modal === "Username" ? "username" : "password",
            " shortly"))) : (React__namespace.createElement(React__namespace.Fragment, null,
        modal === "Username" ? (React__namespace.createElement(reactFontawesome.FontAwesomeIcon, { icon: freeSolidSvgIcons.faUserCog, size: "7x" })) : (React__namespace.createElement(reactFontawesome.FontAwesomeIcon, { icon: freeSolidSvgIcons.faUserLock, size: "7x" })),
        React__namespace.createElement("h3", { className: "mt-3 mb-1 font-weight-bold" }, modal === "Username" ? "Retrieve User Name" : "Reset Password"),
        React__namespace.createElement("p", { className: "text-muted text-center mb-3" }, text),
        React__namespace.createElement(reactBootstrap.Form.Label, { className: "align-self-start" }, modal === "Username" ? "Email Address" : "User Name"),
        React__namespace.createElement(reactBootstrap.Form.Control, { className: "mb-2 text-muted", type: "text", id: "loginInput" + modal, value: value, onChange: function (e) { return setValue(e.target.value); }, placeholder: modal === "Username" ? "Email Address" : "User Name" }),
        status && status !== "Success" ? errorMessage() : null,
        React__namespace.createElement("div", { className: "my-2 px-2 d-flex justify-content-around flex-column flex-sm-row w-sm-100" },
            React__namespace.createElement(reactBootstrap.Button, { className: "mb-2 mb-sm-0 text-muted", variant: "white", onClick: onClick }, "Cancel"),
            React__namespace.createElement(LoadingButton, { isLoading: loading, defaultText: "Send reminder", loadingText: "Loading" }))))));
};

var LoginModalOverlay = function (props) {
    return (React__namespace.createElement(React__namespace.Fragment, null,
        React__namespace.createElement(reactBootstrap.Modal, { className: "login-modal-overlay", onHide: props.setShow, animation: false, size: props.size ? props.size : 'lg', show: props.show, centered: true },
            React__namespace.createElement(reactBootstrap.CloseButton, { className: "close-modal", onClick: props.setShow }),
            React__namespace.createElement(reactBootstrap.Modal.Body, { className: "login-modal-body" }, props.children))));
};

var Login = function (_a) {
    var error = _a.error, loading = _a.loading, signIn = _a.signIn, isAutoLogin = _a.isAutoLogin, logo = _a.logo;
    var _b = React.useState(""), showModal = _b[0], setShowModal = _b[1];
    var handleToggleModal = function () { return setShowModal(""); };
    if (loading) {
        return (React__namespace.createElement(CenteredSpinner, { loading: true, size: "lg", loadingText: "Authenticating..." }));
    }
    else {
        return (React__namespace.createElement("div", { className: "content h-100" },
            showModal === "username" && (React__namespace.createElement(LoginModalOverlay, { show: !!showModal, setShow: handleToggleModal },
                React__namespace.createElement(ModalLogin, { modal: "Username", text: "Enter you email address in the form below and we will send the user name we can match to your email address", endpoint: process.env.REACT_APP_FORGOT_USERNAME_URL || "", onClick: handleToggleModal }))),
            showModal === "password" && (React__namespace.createElement(LoginModalOverlay, { show: !!showModal, setShow: handleToggleModal },
                React__namespace.createElement(ModalLogin, { modal: "Password", text: "Enter your User Name in the form below and we will send you further instrutctions on how to reset your password.", endpoint: process.env.REACT_APP_FORGOT_PASSWORD_URL || "", onClick: handleToggleModal }))),
            React__namespace.createElement(reactBootstrap.Row, { className: styles$1.loginContainer },
                React__namespace.createElement(reactBootstrap.Col, { xs: 12, lg: 7, className: "h-100 p-0" },
                    React__namespace.createElement(reactBootstrap.Container, { fluid: true, className: "d-flex align-items-center justify-content-center h-100" },
                        React__namespace.createElement(LoginForm, { loading: loading, error: error, signIn: signIn, isAutoLogin: isAutoLogin, setShowModal: setShowModal, logo: logo }))),
                React__namespace.createElement(reactBootstrap.Col, { xs: 12, lg: 5, className: "h-100 px-0" },
                    React__namespace.createElement(LoginImage, { header: "Lorem ipsum ?", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\r\n            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\r\n            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium", imgUrl: process.env.REACT_APP_CDN_URL + "/netsite/login2.jpg" },
                        React__namespace.createElement("h2", { className: styles$1.loginInfoTitle }, "Lorem ipsum Online..."),
                        React__namespace.createElement("p", null,
                            " ",
                            "for all fire protection systems, located in any facility across the country"),
                        React__namespace.createElement("ul", null,
                            React__namespace.createElement("li", null, "Inspections Report"),
                            React__namespace.createElement("li", null, "Proposals/ Pricing"),
                            React__namespace.createElement("li", null, "Invoices"),
                            React__namespace.createElement("li", null, "System Drawings"),
                            React__namespace.createElement("li", null, "Owner Manual's")),
                        React__namespace.createElement("div", { className: styles$1.loginInfoLink },
                            React__namespace.createElement("div", { className: styles$1.loginInfoLinkHover }),
                            React__namespace.createElement("a", { href: process.env.REACT_APP_ORR_NETREPORT_URL }, "Learn more"),
                            React__namespace.createElement(reactFontawesome.FontAwesomeIcon, { icon: freeSolidSvgIcons.faArrowRight })))))));
    }
};

var AuthenticationProvider = function (props) {
    var googleId = props.googleId, login = props.login, logout = props.logout, AuthenticatedAccountInfoRoutes = props.AuthenticatedAccountInfoRoutes, UnauthenticatedRoutes = props.UnauthenticatedRoutes, AuthenticatedAccountErrorRoutes = props.AuthenticatedAccountErrorRoutes;
    return (React__default['default'].createElement(React__default['default'].Fragment, null,
        React__default['default'].createElement(Authentication, { googleId: googleId, loginCallBack: login, logoutCallBack: logout }, function (_a) {
            var authenticationState = _a.authenticationState, accountInfo = _a.accountInfo, loading = _a.loading, error = _a.error, login = _a.login, logout = _a.logout;
            switch (authenticationState) {
                case AuthenticationState.Authenticated:
                    if (accountInfo) {
                        return (React__default['default'].createElement(AuthenticatedAccountInfoRoutes, { userInformation: accountInfo, logout: logout }));
                    }
                    return (React__default['default'].createElement(AuthenticatedAccountErrorRoutes, { loading: loading, error: error, signIn: login, LoginPage: Login }));
                case AuthenticationState.Unauthenticated:
                    return (React__default['default'].createElement(UnauthenticatedRoutes, { loading: loading, error: error, signIn: login, loaded: loading, LoginPage: Login }));
                case AuthenticationState.InProgress:
                    return (React__default['default'].createElement(CenteredSpinner, { loading: accountInfo === undefined && !error ? true : false, size: "lg", loadingText: "Authenticating..." }));
            }
        })));
};

//These should reflect permissions from the DB
exports.AuthorizationRoles = void 0;
(function (AuthorizationRoles) {
    AuthorizationRoles["admin"] = "admin";
    AuthorizationRoles["user"] = "user";
})(exports.AuthorizationRoles || (exports.AuthorizationRoles = {}));

var css_248z = ".Unauthorized-module_cardUnauthorized__y5fKe {\n  width: 290px !important; }\n  .Unauthorized-module_cardUnauthorized__y5fKe p {\n    color: black !important; }\n\n.Unauthorized-module_unauthorizedWarining__1tv3a {\n  display: flex;\n  height: 100%;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 100vh;\n  padding: 0; }\n\n.Unauthorized-module_unauthorizedHeading__1bKDZ {\n  font-size: 1.5rem;\n  font-weight: 700;\n  text-align: center; }\n";
var styles = {"cardUnauthorized":"Unauthorized-module_cardUnauthorized__y5fKe","unauthorizedWarining":"Unauthorized-module_unauthorizedWarining__1tv3a","unauthorizedHeading":"Unauthorized-module_unauthorizedHeading__1bKDZ"};
styleInject(css_248z);

var Unauthorized = function (props) {
    var history = reactRouterDom.useHistory();
    var handleBack = function () {
        history.push("/login");
    };
    return (React__namespace.createElement(React__namespace.Fragment, null,
        React__namespace.createElement(reactBootstrap.Container, { className: "d-flex align-items-center justify-content-center h-100", fluid: true },
            React__namespace.createElement(reactBootstrap.Row, null,
                React__namespace.createElement(reactBootstrap.Col, { className: styles.unauthorizedWarining },
                    React__namespace.createElement(reactBootstrap.Card, { className: styles.cardUnauthorized },
                        React__namespace.createElement(reactBootstrap.Card.Body, { className: "d-flex flex-column justify-content-center" },
                            React__namespace.createElement(reactBootstrap.Card.Title, { className: styles.unauthorizedHeading }, "Unauthorized"),
                            React__namespace.createElement(reactBootstrap.Card.Text, { className: "mb-4" }, "Something has gone wrong. Please navigate back to the beginning..."),
                            React__namespace.createElement(reactBootstrap.Button, { variant: "primary", className: "unauthorizedBtn", size: "lg", onClick: handleBack }, "Back home"))))))));
};

Object.defineProperty(exports, 'ApolloProvider', {
  enumerable: true,
  get: function () {
    return client.ApolloProvider;
  }
});
exports.AlertWrapped = AlertWrapped;
exports.AuthenticationProvider = AuthenticationProvider;
exports.BackButton = BackButton;
exports.ButtonLoadingSpinner = ButtonLoadingSpinner;
exports.ButtonSpinner = ButtonSpinner;
exports.CenteredSpinner = CenteredSpinner;
exports.Dropdowns = Dropdowns;
exports.ForgotPasswordModal = ForgotPasswordModal;
exports.ForgotUsernameModal = ForgotUsernameModal;
exports.GetToday = GetToday;
exports.IsPhoneProvider = IsPhoneProvider;
exports.LoadingButton = LoadingButton;
exports.Login = Login$1;
exports.LoginForm = LoginForm;
exports.ModalNoHeaderOverlay = ModalNoHeaderOverlay;
exports.ModalOverlay = ModalOverlay;
exports.ModalSuccess = ModalSuccess;
exports.NativeOverlay = NativeOverlay;
exports.NumberBoolToText = NumberBoolToText;
exports.NumberOrDefault = NumberOrDefault;
exports.OrderBy = OrderBy;
exports.PasswordInput = PasswordInput;
exports.SimpleCard = SimpleCard;
exports.StringOrDefault = StringOrDefault;
exports.StringToShortDate = StringToShortDate;
exports.Tabs = Tabs;
exports.Unauthorized = Unauthorized;
exports.checkValuesData = checkValuesData;
exports.extract = extract;
exports.getDate = getDate;
exports.getPropertyName = getPropertyName;
exports.getUniqueBy = getUniqueBy;
exports.groupBy = groupBy;
exports.isNotNull = isNotNull;
exports.nameOf = nameOf;
exports.notEmpty = notEmpty;
exports.useIsPhoneContext = useIsPhoneContext;
exports.useLocalStorage = useLocalStorage;
exports.useOnce = useOnce;
