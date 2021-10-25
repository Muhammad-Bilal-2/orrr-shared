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
            React__namespace.createElement(reactBootstrap.Card, { className: styles.cardLoginForm },
                React__namespace.createElement(reactBootstrap.Card.Header, null,
                    React__namespace.createElement(reactBootstrap.Card.Title, { className: styles.loginHeading }, "Welcome")),
                React__namespace.createElement(reactBootstrap.Card.Body, null,
                    props.error && (React__namespace.createElement("div", { className: styles.loginErrorMessage },
                        props.error.message,
                        " ")),
                    React__namespace.createElement(reactBootstrap.Form.Group, { className: "mb-3" },
                        React__namespace.createElement(reactBootstrap.Form.Label, null, "USERNAME"),
                        React__namespace.createElement(reactBootstrap.FormControl, { name: "username", isInvalid: formik$1.touched.username && !!formik$1.errors.username, value: formik$1.values.username, onChange: formik$1.handleChange, type: "text", placeholder: "USERNAME", className: styles.loginInput }),
                        React__namespace.createElement(reactBootstrap.Form.Control.Feedback, { type: "invalid", className: styles.invalidFeedback }, formik$1.errors.username)),
                    React__namespace.createElement(reactBootstrap.Form.Group, { className: "mb-3" },
                        React__namespace.createElement(PasswordInput, { label: "PASSWORD", placeholder: "PASSWORD", isInvalid: formik$1.touched.password && !!formik$1.errors.password, error: formik$1.errors.password, onChange: formik$1.handleChange, value: formik$1.values.password, name: "password" })),
                    React__namespace.createElement(reactBootstrap.Row, { className: styles.loginHelpers },
                        React__namespace.createElement(reactBootstrap.Col, { className: styles.loginHelpersContainer },
                            React__namespace.createElement("div", { className: styles.forgotLinks, onClick: function () { return props.setShowModal("password"); } },
                                React__namespace.createElement("span", { className: "pr-2" }, "Forgot Password"),
                                React__namespace.createElement(reactFontawesome.FontAwesomeIcon, { icon: freeSolidSvgIcons.faGreaterThan, size: "xs" })),
                            React__namespace.createElement("div", { className: styles.forgotLinks, onClick: function () { return props.setShowModal("username"); } },
                                React__namespace.createElement("span", { className: "pr-2" }, "Forgot Username"),
                                React__namespace.createElement(reactFontawesome.FontAwesomeIcon, { icon: freeSolidSvgIcons.faGreaterThan, size: "xs" }))),
                        React__namespace.createElement(reactBootstrap.Col, { className: "d-flex justify-content-sm-end justify-content-center px-0 align-items-center" },
                            React__namespace.createElement(LoadingButton, { className: styles.loginBtn, color: "primary", isLoading: props.loading, defaultText: "Log in", loadingText: "Loading", onClick: function () { return formik$1.handleSubmit(); } }))))))));
};

var LoginImage = function (props) {
    return (React__namespace.createElement(React__namespace.Fragment, null,
        React__namespace.createElement("div", { className: styles.loginInfoSection },
            React__namespace.createElement("img", { alt: "login-image", className: styles.loginImage, src: props.imgUrl }),
            React__namespace.createElement("div", { className: styles.imageOverlay },
                React__namespace.createElement("h2", { className: styles.loginInfoTitle }, props.header),
                props.text && React__namespace.createElement("p", null, props.text),
                props.children))));
};

var Login = function (props) {
    return (React__namespace.createElement("div", { className: "content h-100" },
        React__namespace.createElement(reactBootstrap.Row, { className: styles.loginContainer },
            React__namespace.createElement(reactBootstrap.Col, { xs: 12, lg: 7, className: "h-100 p-0" },
                React__namespace.createElement(reactBootstrap.Container, { fluid: true, className: "d-flex align-items-center justify-content-center h-100" },
                    React__namespace.createElement(LoginForm, { loading: props.loading, handleSubmit: props.handleSubmit, error: props.error, setShowModal: props.setShowModal }))),
            React__namespace.createElement(reactBootstrap.Col, { xs: 12, lg: 5, className: "h-100 px-0" },
                React__namespace.createElement(LoginImage, { imgUrl: "https://cdn.orrprotection.com/netsite/login2.jpg", header: "WHAT IS NETSITE?", text: "NetSITE provides secure, online access to all critical information\r\n          related to any fire protection system at any facility or site\r\n          serviced by ORR" },
                    React__namespace.createElement("h2", { className: styles.loginInfoTitle }, "All Documentation Online..."),
                    React__namespace.createElement("p", null, "for all fire protection systems, located in any facility across the country"),
                    React__namespace.createElement("ul", null,
                        React__namespace.createElement("li", null, "Inspections Report"),
                        React__namespace.createElement("li", null, "Proposals/ Pricing"),
                        React__namespace.createElement("li", null, "Invoices"),
                        React__namespace.createElement("li", null, "System Drawings"),
                        React__namespace.createElement("li", null, "Owner Manual's")),
                    React__namespace.createElement("div", { className: styles.loginInfoLink },
                        React__namespace.createElement("div", { className: styles.loginInfoLinkHover }),
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
    var tabs = _a.tabs;
    var history = reactRouterDom.useHistory();
    var orderedTabs = React.useMemo(function () { return OrderBy(tabs, "order"); }, [tabs]);
    var search = window.location.search;
    var searchParams = React.useMemo(function () { return new URLSearchParams(search); }, [search]);
    var urlKey = React.useMemo(function () {
        var searchKey = searchParams.get(TAB_SEARCH_KEY);
        return searchKey || orderedTabs[0].key;
    }, [searchParams, orderedTabs]);
    var updateKey = function (key) {
        searchParams.set(TAB_SEARCH_KEY, key);
        history.replace({ search: searchParams.toString() });
    };
    return (React__namespace.createElement(reactBootstrap.Tabs, { id: "custom-tabs", activeKey: urlKey, onSelect: function (k) { return updateKey(k); }, className: "custom-tabs mb-0 p-0" }, orderedTabs === null || orderedTabs === void 0 ? void 0 : orderedTabs.map(function (singleTab) {
        return (React__namespace.createElement(reactBootstrap.Tab, { className: "custom-tab-link", eventKey: singleTab.key, title: singleTab.name, key: singleTab.key }, singleTab.component));
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

exports.AlertWrapped = AlertWrapped;
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
exports.Login = Login;
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
exports.useOnce = useOnce;
