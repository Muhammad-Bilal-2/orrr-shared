'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var classNames = require('classnames');
var React = require('react');
var reactBootstrap = require('react-bootstrap');

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

var classNames__default = /*#__PURE__*/_interopDefaultLegacy(classNames);
var React__namespace = /*#__PURE__*/_interopNamespace(React);

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

exports.AlertWrapped = AlertWrapped;
exports.ButtonSpinner = ButtonSpinner;
exports.CenteredSpinner = CenteredSpinner;
exports.IsPhoneProvider = IsPhoneProvider;
exports.ModalOverlay = ModalOverlay;
exports.NativeOverlay = NativeOverlay;
exports.useIsPhoneContext = useIsPhoneContext;
