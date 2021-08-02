import classNames from 'classnames';
import * as React from 'react';
import { useState, useEffect, createContext, useContext } from 'react';
import { Spinner, Modal, Card, Row, Col } from 'react-bootstrap';
import { createHttpLink, ApolloClient, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';

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

var httpLink = createHttpLink({
    uri: process.env.REACT_APP_GATEWAY_URL,
});
var unauthorizedLink = onError(function (_a) {
    var networkError = _a.networkError;
    if (networkError &&
        "statusCode" in networkError &&
        (networkError.statusCode === 401 || networkError.statusCode === 403)) {
        window.location.href = "/unauthorized";
    }
});
var getApolloClient = function () {
    var authLink = setContext(function (_, _a) {
        var headers = _a.headers;
        // get the authentication token from local storage if it exists
        var token = sessionStorage.getItem(process.env.REACT_APP_SESSION_TOKEN_KEY);
        // return the headers to the context so httpLink can read them
        return {
            headers: __assign(__assign({}, headers), { authorization: token ? "Bearer " + token : "" }),
        };
    });
    return new ApolloClient({
        link: authLink.concat(unauthorizedLink).concat(httpLink),
        cache: new InMemoryCache(),
    });
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

export { AlertWrapped, ButtonSpinner, CenteredSpinner, GetToday, IsPhoneProvider, ModalOverlay, NativeOverlay, NumberBoolToText, NumberOrDefault, OrderBy, StringOrDefault, StringToShortDate, checkValuesData, extract, getApolloClient, getUniqueBy, groupBy, isNotNull, nameOf, notEmpty, useIsPhoneContext };
