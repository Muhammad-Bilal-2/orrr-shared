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

exports.ButtonSpinner = ButtonSpinner;
exports.CenteredSpinner = CenteredSpinner;
exports.IsPhoneProvider = IsPhoneProvider;
exports.useIsPhoneContext = useIsPhoneContext;
