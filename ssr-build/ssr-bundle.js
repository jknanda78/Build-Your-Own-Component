module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+Pj2":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("JkW7");


/***/ }),

/***/ "2uBq":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cardCVVMaskingHOC = exports.cardExpiryMaskingHOC = exports.cardNumberMaskingHOC = undefined;

var _cardNumberMaskingHoc = __webpack_require__("YHxR");

var _cardNumberMaskingHoc2 = _interopRequireDefault(_cardNumberMaskingHoc);

var _cardExpiryMaskingHoc = __webpack_require__("EIUK");

var _cardExpiryMaskingHoc2 = _interopRequireDefault(_cardExpiryMaskingHoc);

var _cardCvvMaskingHoc = __webpack_require__("gRy4");

var _cardCvvMaskingHoc2 = _interopRequireDefault(_cardCvvMaskingHoc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.cardNumberMaskingHOC = _cardNumberMaskingHoc2.default;
exports.cardExpiryMaskingHOC = _cardExpiryMaskingHoc2.default;
exports.cardCVVMaskingHOC = _cardCvvMaskingHoc2.default;

/***/ }),

/***/ "3OQs":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _preact = __webpack_require__("KM04");

__webpack_require__("fpf/");

__webpack_require__("wb0H");

var Masking = function Masking(props) {
	return (0, _preact.h)(
		'span',
		{ 'class': 'shell' },
		(0, _preact.h)(
			'span',
			null,
			(0, _preact.h)(
				'i',
				{ 'arial-hidden': 'true' },
				props.value
			),
			props.mask
		)
	);
};

Masking.displayName = 'Masking Functional Component';

exports.default = Masking;

/***/ }),

/***/ "5D9O":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) {
  var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 0xeac7;

  var isValidElement = function isValidElement(object) {
    return (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = require('./factoryWithTypeCheckers')(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__("wVGV")();
}

/***/ }),

/***/ "7mgg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateCardNumberHOC = undefined;

var _validateCardNumberHoc = __webpack_require__("zxsQ");

var _validateCardNumberHoc2 = _interopRequireDefault(_validateCardNumberHoc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.validateCardNumberHOC = _validateCardNumberHoc2.default;

/***/ }),

/***/ "8tcF":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _preact = __webpack_require__("KM04");

var _inputField = __webpack_require__("sbNy");

var _inputField2 = _interopRequireDefault(_inputField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CardNumber = function (_Component) {
	_inherits(CardNumber, _Component);

	function CardNumber() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, CardNumber);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CardNumber.__proto__ || Object.getPrototypeOf(CardNumber)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			value: ''
		}, _this.onKeyUpHandler = function (e) {
			var props = _this.props;

			_this.setState({
				value: e.target.value
			});

			if (props.onKeyUp) {
				console.log('CardNumber::onKeyUp');
				props.onKeyUp(e, props.cardType);
			}
		}, _this.onBlurHandler = function (e) {
			var props = _this.props;

			if (props.onBlur) {
				console.log('CardNumber::onBlur');
				props.onBlur(e, props.cardType);
			}
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(CardNumber, [{
		key: 'render',
		value: function render() {
			var props = this.props;

			var label = props.label,
			    Masking = props.Masking,
			    DesignPattern = props.DesignPattern,
			    propsForInput = _objectWithoutProperties(props, ['label', 'Masking', 'DesignPattern']); // eslint-disable-line no-unused-vars

			propsForInput.maxLength = props.maxLength;
			propsForInput.placeholder = props.placeholder;

			var propsForMasking = {};

			propsForMasking.mask = props.mask;
			propsForMasking.value = props.value;

			var val = props.value || this.state.value;

			return (0, _preact.h)(
				DesignPattern,
				{ label: label, error: props.error, name: propsForInput.name },
				(0, _preact.h)(_inputField2.default, _extends({}, propsForInput, {
					onKeyUp: this.onKeyUpHandler,
					onBlur: this.onBlurHandler,
					value: val
				})),
				(0, _preact.h)(Masking, propsForMasking)
			);
		}
	}]);

	return CardNumber;
}(_preact.Component);

CardNumber.displayName = 'Card Number';

exports.default = CardNumber;

/***/ }),

/***/ "Asjh":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;

/***/ }),

/***/ "CB7t":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.VaultDesignInputField = exports.AtomDesignInputField = exports.renderFormField = undefined;

var _preact = __webpack_require__("KM04");

__webpack_require__("+Pj2");

__webpack_require__("HXMd");

var renderFormField = exports.renderFormField = function renderFormField(props) {
	var label = props.label,
	    error = props.error,
	    name = props.name,
	    children = props.children;

	var errMsg = error && error[name] ? error[name] : null;

	if (label) {
		return (0, _preact.h)(
			'div',
			{ 'class': 'group' },
			children,
			(0, _preact.h)(
				'span',
				{ 'class': errMsg ? 'error' : '' },
				errMsg
			),
			(0, _preact.h)('span', { 'class': 'highlight' }),
			(0, _preact.h)('span', { 'class': 'bar' }),
			(0, _preact.h)(
				'label',
				{ 'for': name },
				label
			)
		);
	}

	return (0, _preact.h)(
		'div',
		{ 'class': 'btn-group' },
		children
	);
};

var AtomDesignInputField = exports.AtomDesignInputField = function AtomDesignInputField(props) {
	return (0, _preact.h)(
		'div',
		{ 'class': 'atom-input-field' },
		renderFormField(props)
	);
};

var VaultDesignInputField = exports.VaultDesignInputField = function VaultDesignInputField(props) {
	return (0, _preact.h)(
		'div',
		{ 'class': 'vault-input-field' },
		renderFormField(props)
	);
};

/***/ }),

/***/ "EIUK":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _preact = __webpack_require__("KM04");

var _masking = __webpack_require__("3OQs");

var _masking2 = _interopRequireDefault(_masking);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cardExpiryMaskingHOC = function cardExpiryMaskingHOC(WrappedComponent) {
	var HOC = function (_Component) {
		_inherits(HOC, _Component);

		function HOC() {
			var _ref;

			var _temp, _this, _ret;

			_classCallCheck(this, HOC);

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = HOC.__proto__ || Object.getPrototypeOf(HOC)).call.apply(_ref, [this].concat(args))), _this), _this.setMasking = function (e, props) {
				var currentValue = e.target.value,
				    newValue = '';

				var len = currentValue.length,
				    maskedNumber = 'XdDmMyY9';

				if (currentValue.match(/[A-Z]/i)) {
					currentValue = currentValue.substr(0, len - 1);
				}

				var strippedValue = currentValue.replace(/\D/g, '');
				var l = props.placeholder.length;

				for (var i = 0, j = 0; i < l; i++) {
					var isInt = !isNaN(parseInt(strippedValue[j], 10));
					var matchesNumber = maskedNumber.indexOf(props.placeholder[i]) >= 0;

					if (matchesNumber && isInt) {
						newValue += strippedValue[j++];
					} else if (matchesNumber && !isInt) {
						return {
							value: newValue
						};
					} else {
						newValue += props.placeholder[i];
					}

					if (strippedValue[j] === undefined) {
						break;
					}
				}

				if (newValue.length === 1 && props.placeholder.toUpperCase().substr(0, 2) === 'MM') {
					if (newValue > 1 && newValue < 10) {
						newValue = '0' + newValue;
					}
				}

				return {
					value: newValue,
					mask: props.placeholder.substr(newValue.length)
				};
			}, _this.maskingOnKeyUp = function (e, props) {
				switch (e.keyCode) {// allows navigating thru input
					case 20: // caplocks
					case 17: // control
					case 18: // option
					case 16: // shift
					case 37: // arrow keys
					case 38:
					case 40:
						return;
				}

				return _this.setMasking(e, props);
			}, _temp), _possibleConstructorReturn(_this, _ret);
		}

		_createClass(HOC, [{
			key: 'render',
			value: function render() {
				return (0, _preact.h)(WrappedComponent, _extends({}, this.props, {
					Masking: _masking2.default,
					setMasking: this.setMasking,
					maskingOnKeyUp: this.maskingOnKeyUp
				}));
			}
		}]);

		return HOC;
	}(_preact.Component);

	HOC.displayName = 'Card Expiry Masking';
	return HOC;
};

exports.default = cardExpiryMaskingHOC;

/***/ }),

/***/ "HXMd":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "JkW7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _preact = __webpack_require__("KM04");

var _addCard = __webpack_require__("NSdR");

var _addCard2 = _interopRequireDefault(_addCard);

var _designPatterns = __webpack_require__("tZtr");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
	return (0, _preact.h)(_addCard2.default, { DesignPattern: _designPatterns.VaultDesignInputField });
};

exports.default = App;

/***/ }),

/***/ "KM04":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function () {
  "use strict";
  function e() {}function t(t, n) {
    var o,
        r,
        i,
        l,
        a = E;for (l = arguments.length; l-- > 2;) {
      W.push(arguments[l]);
    }n && null != n.children && (W.length || W.push(n.children), delete n.children);while (W.length) {
      if ((r = W.pop()) && void 0 !== r.pop) for (l = r.length; l--;) {
        W.push(r[l]);
      } else "boolean" == typeof r && (r = null), (i = "function" != typeof t) && (null == r ? r = "" : "number" == typeof r ? r += "" : "string" != typeof r && (i = !1)), i && o ? a[a.length - 1] += r : a === E ? a = [r] : a.push(r), o = i;
    }var u = new e();return u.nodeName = t, u.children = a, u.attributes = null == n ? void 0 : n, u.key = null == n ? void 0 : n.key, void 0 !== S.vnode && S.vnode(u), u;
  }function n(e, t) {
    for (var n in t) {
      e[n] = t[n];
    }return e;
  }function o(e, o) {
    return t(e.nodeName, n(n({}, e.attributes), o), arguments.length > 2 ? [].slice.call(arguments, 2) : e.children);
  }function r(e) {
    !e.__d && (e.__d = !0) && 1 == A.push(e) && (S.debounceRendering || P)(i);
  }function i() {
    var e,
        t = A;A = [];while (e = t.pop()) {
      e.__d && k(e);
    }
  }function l(e, t, n) {
    return "string" == typeof t || "number" == typeof t ? void 0 !== e.splitText : "string" == typeof t.nodeName ? !e._componentConstructor && a(e, t.nodeName) : n || e._componentConstructor === t.nodeName;
  }function a(e, t) {
    return e.__n === t || e.nodeName.toLowerCase() === t.toLowerCase();
  }function u(e) {
    var t = n({}, e.attributes);t.children = e.children;var o = e.nodeName.defaultProps;if (void 0 !== o) for (var r in o) {
      void 0 === t[r] && (t[r] = o[r]);
    }return t;
  }function _(e, t) {
    var n = t ? document.createElementNS("http://www.w3.org/2000/svg", e) : document.createElement(e);return n.__n = e, n;
  }function p(e) {
    var t = e.parentNode;t && t.removeChild(e);
  }function c(e, t, n, o, r) {
    if ("className" === t && (t = "class"), "key" === t) ;else if ("ref" === t) n && n(null), o && o(e);else if ("class" !== t || r) {
      if ("style" === t) {
        if (o && "string" != typeof o && "string" != typeof n || (e.style.cssText = o || ""), o && "object" == (typeof o === "undefined" ? "undefined" : _typeof(o))) {
          if ("string" != typeof n) for (var i in n) {
            i in o || (e.style[i] = "");
          }for (var i in o) {
            e.style[i] = "number" == typeof o[i] && !1 === V.test(i) ? o[i] + "px" : o[i];
          }
        }
      } else if ("dangerouslySetInnerHTML" === t) o && (e.innerHTML = o.__html || "");else if ("o" == t[0] && "n" == t[1]) {
        var l = t !== (t = t.replace(/Capture$/, ""));t = t.toLowerCase().substring(2), o ? n || e.addEventListener(t, f, l) : e.removeEventListener(t, f, l), (e.__l || (e.__l = {}))[t] = o;
      } else if ("list" !== t && "type" !== t && !r && t in e) s(e, t, null == o ? "" : o), null != o && !1 !== o || e.removeAttribute(t);else {
        var a = r && t !== (t = t.replace(/^xlink\:?/, ""));null == o || !1 === o ? a ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase()) : e.removeAttribute(t) : "function" != typeof o && (a ? e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(), o) : e.setAttribute(t, o));
      }
    } else e.className = o || "";
  }function s(e, t, n) {
    try {
      e[t] = n;
    } catch (e) {}
  }function f(e) {
    return this.__l[e.type](S.event && S.event(e) || e);
  }function d() {
    var e;while (e = D.pop()) {
      S.afterMount && S.afterMount(e), e.componentDidMount && e.componentDidMount();
    }
  }function h(e, t, n, o, r, i) {
    H++ || (R = null != r && void 0 !== r.ownerSVGElement, j = null != e && !("__preactattr_" in e));var l = m(e, t, n, o, i);return r && l.parentNode !== r && r.appendChild(l), --H || (j = !1, i || d()), l;
  }function m(e, t, n, o, r) {
    var i = e,
        l = R;if (null != t && "boolean" != typeof t || (t = ""), "string" == typeof t || "number" == typeof t) return e && void 0 !== e.splitText && e.parentNode && (!e._component || r) ? e.nodeValue != t && (e.nodeValue = t) : (i = document.createTextNode(t), e && (e.parentNode && e.parentNode.replaceChild(i, e), b(e, !0))), i.__preactattr_ = !0, i;var u = t.nodeName;if ("function" == typeof u) return U(e, t, n, o);if (R = "svg" === u || "foreignObject" !== u && R, u += "", (!e || !a(e, u)) && (i = _(u, R), e)) {
      while (e.firstChild) {
        i.appendChild(e.firstChild);
      }e.parentNode && e.parentNode.replaceChild(i, e), b(e, !0);
    }var p = i.firstChild,
        c = i.__preactattr_,
        s = t.children;if (null == c) {
      c = i.__preactattr_ = {};for (var f = i.attributes, d = f.length; d--;) {
        c[f[d].name] = f[d].value;
      }
    }return !j && s && 1 === s.length && "string" == typeof s[0] && null != p && void 0 !== p.splitText && null == p.nextSibling ? p.nodeValue != s[0] && (p.nodeValue = s[0]) : (s && s.length || null != p) && v(i, s, n, o, j || null != c.dangerouslySetInnerHTML), g(i, t.attributes, c), R = l, i;
  }function v(e, t, n, o, r) {
    var i,
        a,
        u,
        _,
        c,
        s = e.childNodes,
        f = [],
        d = {},
        h = 0,
        v = 0,
        y = s.length,
        g = 0,
        w = t ? t.length : 0;if (0 !== y) for (var C = 0; C < y; C++) {
      var x = s[C],
          N = x.__preactattr_,
          k = w && N ? x._component ? x._component.__k : N.key : null;null != k ? (h++, d[k] = x) : (N || (void 0 !== x.splitText ? !r || x.nodeValue.trim() : r)) && (f[g++] = x);
    }if (0 !== w) for (var C = 0; C < w; C++) {
      _ = t[C], c = null;var k = _.key;if (null != k) h && void 0 !== d[k] && (c = d[k], d[k] = void 0, h--);else if (!c && v < g) for (i = v; i < g; i++) {
        if (void 0 !== f[i] && l(a = f[i], _, r)) {
          c = a, f[i] = void 0, i === g - 1 && g--, i === v && v++;break;
        }
      }c = m(c, _, n, o), u = s[C], c && c !== e && c !== u && (null == u ? e.appendChild(c) : c === u.nextSibling ? p(u) : e.insertBefore(c, u));
    }if (h) for (var C in d) {
      void 0 !== d[C] && b(d[C], !1);
    }while (v <= g) {
      void 0 !== (c = f[g--]) && b(c, !1);
    }
  }function b(e, t) {
    var n = e._component;n ? L(n) : (null != e.__preactattr_ && e.__preactattr_.ref && e.__preactattr_.ref(null), !1 !== t && null != e.__preactattr_ || p(e), y(e));
  }function y(e) {
    e = e.lastChild;while (e) {
      var t = e.previousSibling;b(e, !0), e = t;
    }
  }function g(e, t, n) {
    var o;for (o in n) {
      t && null != t[o] || null == n[o] || c(e, o, n[o], n[o] = void 0, R);
    }for (o in t) {
      "children" === o || "innerHTML" === o || o in n && t[o] === ("value" === o || "checked" === o ? e[o] : n[o]) || c(e, o, n[o], n[o] = t[o], R);
    }
  }function w(e) {
    var t = e.constructor.name;(I[t] || (I[t] = [])).push(e);
  }function C(e, t, n) {
    var o,
        r = I[e.name];if (e.prototype && e.prototype.render ? (o = new e(t, n), T.call(o, t, n)) : (o = new T(t, n), o.constructor = e, o.render = x), r) for (var i = r.length; i--;) {
      if (r[i].constructor === e) {
        o.__b = r[i].__b, r.splice(i, 1);break;
      }
    }return o;
  }function x(e, t, n) {
    return this.constructor(e, n);
  }function N(e, t, n, o, i) {
    e.__x || (e.__x = !0, (e.__r = t.ref) && delete t.ref, (e.__k = t.key) && delete t.key, !e.base || i ? e.componentWillMount && e.componentWillMount() : e.componentWillReceiveProps && e.componentWillReceiveProps(t, o), o && o !== e.context && (e.__c || (e.__c = e.context), e.context = o), e.__p || (e.__p = e.props), e.props = t, e.__x = !1, 0 !== n && (1 !== n && !1 === S.syncComponentUpdates && e.base ? r(e) : k(e, 1, i)), e.__r && e.__r(e));
  }function k(e, t, o, r) {
    if (!e.__x) {
      var i,
          l,
          a,
          _ = e.props,
          p = e.state,
          c = e.context,
          s = e.__p || _,
          f = e.__s || p,
          m = e.__c || c,
          v = e.base,
          y = e.__b,
          g = v || y,
          w = e._component,
          x = !1;if (v && (e.props = s, e.state = f, e.context = m, 2 !== t && e.shouldComponentUpdate && !1 === e.shouldComponentUpdate(_, p, c) ? x = !0 : e.componentWillUpdate && e.componentWillUpdate(_, p, c), e.props = _, e.state = p, e.context = c), e.__p = e.__s = e.__c = e.__b = null, e.__d = !1, !x) {
        i = e.render(_, p, c), e.getChildContext && (c = n(n({}, c), e.getChildContext()));var U,
            T,
            M = i && i.nodeName;if ("function" == typeof M) {
          var W = u(i);l = w, l && l.constructor === M && W.key == l.__k ? N(l, W, 1, c, !1) : (U = l, e._component = l = C(M, W, c), l.__b = l.__b || y, l.__u = e, N(l, W, 0, c, !1), k(l, 1, o, !0)), T = l.base;
        } else a = g, U = w, U && (a = e._component = null), (g || 1 === t) && (a && (a._component = null), T = h(a, i, c, o || !v, g && g.parentNode, !0));if (g && T !== g && l !== w) {
          var E = g.parentNode;E && T !== E && (E.replaceChild(T, g), U || (g._component = null, b(g, !1)));
        }if (U && L(U), e.base = T, T && !r) {
          var P = e,
              V = e;while (V = V.__u) {
            (P = V).base = T;
          }T._component = P, T._componentConstructor = P.constructor;
        }
      }if (!v || o ? D.unshift(e) : x || (e.componentDidUpdate && e.componentDidUpdate(s, f, m), S.afterUpdate && S.afterUpdate(e)), null != e.__h) while (e.__h.length) {
        e.__h.pop().call(e);
      }H || r || d();
    }
  }function U(e, t, n, o) {
    var r = e && e._component,
        i = r,
        l = e,
        a = r && e._componentConstructor === t.nodeName,
        _ = a,
        p = u(t);while (r && !_ && (r = r.__u)) {
      _ = r.constructor === t.nodeName;
    }return r && _ && (!o || r._component) ? (N(r, p, 3, n, o), e = r.base) : (i && !a && (L(i), e = l = null), r = C(t.nodeName, p, n), e && !r.__b && (r.__b = e, l = null), N(r, p, 1, n, o), e = r.base, l && e !== l && (l._component = null, b(l, !1))), e;
  }function L(e) {
    S.beforeUnmount && S.beforeUnmount(e);var t = e.base;e.__x = !0, e.componentWillUnmount && e.componentWillUnmount(), e.base = null;var n = e._component;n ? L(n) : t && (t.__preactattr_ && t.__preactattr_.ref && t.__preactattr_.ref(null), e.__b = t, p(t), w(e), y(t)), e.__r && e.__r(null);
  }function T(e, t) {
    this.__d = !0, this.context = t, this.props = e, this.state = this.state || {};
  }function M(e, t, n) {
    return h(n, e, {}, !1, t, !1);
  }var S = {},
      W = [],
      E = [],
      P = "function" == typeof Promise ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout,
      V = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,
      A = [],
      D = [],
      H = 0,
      R = !1,
      j = !1,
      I = {};n(T.prototype, { setState: function setState(e, t) {
      var o = this.state;this.__s || (this.__s = n({}, o)), n(o, "function" == typeof e ? e(o, this.props) : e), t && (this.__h = this.__h || []).push(t), r(this);
    }, forceUpdate: function forceUpdate(e) {
      e && (this.__h = this.__h || []).push(e), k(this, 2);
    }, render: function render() {} });var $ = { h: t, createElement: t, cloneElement: o, Component: T, render: M, rerender: i, options: S }; true ? module.exports = $ : self.preact = $;
}();
//# sourceMappingURL=preact.min.js.map

/***/ }),

/***/ "NSdR":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _preact = __webpack_require__("KM04");

var _inputField = __webpack_require__("sbNy");

var _inputField2 = _interopRequireDefault(_inputField);

var _maskingInputField = __webpack_require__("2uBq");

var _cardValidation = __webpack_require__("7mgg");

var _cardNumber = __webpack_require__("8tcF");

var _cardNumber2 = _interopRequireDefault(_cardNumber);

var _cardExpiration = __webpack_require__("YXlM");

var _cardExpiration2 = _interopRequireDefault(_cardExpiration);

var _cardCvv = __webpack_require__("WFeU");

var _cardCvv2 = _interopRequireDefault(_cardCvv);

__webpack_require__("Yfv7");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//Card number field with validation and no masking
var CardNumberWithValidation = (0, _cardValidation.validateCardNumberHOC)(_cardNumber2.default); //eslint-disable-line

//Card number field with masking and no validation
var CardNumberWithMasking = (0, _maskingInputField.cardNumberMaskingHOC)(_cardNumber2.default); //eslint-disable-line

//Card number field with masking and validation
var CardNumberWithMaskingAndValidation = (0, _cardValidation.validateCardNumberHOC)((0, _maskingInputField.cardNumberMaskingHOC)(_cardNumber2.default)); //eslint-disable-line

//Card number field with validation and masking
var CardNumberWithValidationAndMasking = (0, _maskingInputField.cardNumberMaskingHOC)(CardNumberWithValidation); //eslint-disable-line

//Card expiry field with masking and no validation
var CardExpiryWithMasking = (0, _maskingInputField.cardExpiryMaskingHOC)(_cardExpiration2.default);

//Card cvv field with masking and no validation
var CardCVVWithMasking = (0, _maskingInputField.cardCVVMaskingHOC)(_cardCvv2.default);

var AddCard = function (_Component) {
	_inherits(AddCard, _Component);

	function AddCard() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, AddCard);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AddCard.__proto__ || Object.getPrototypeOf(AddCard)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			cardType: ''
		}, _this.onChangeHandler = function (e) {
			console.log('AddCard::onChange'); // eslint-disable-line no-console
		}, _this.onKeyUpHandler = function (e, cardType) {
			console.log('AddCard::onKeyUp'); // eslint-disable-line no-console
			if (cardType) {
				_this.setState({
					cardType: cardType
				});
			}
		}, _this.onBlurHandler = function (e, cardType) {
			console.log('AddCard::onBlur'); // eslint-disable-line no-console
			if (cardType) {
				_this.setState({
					cardType: cardType
				});
			}
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(AddCard, [{
		key: 'render',
		value: function render() {
			var DesignPattern = this.props.DesignPattern;


			return (0, _preact.h)(
				'form',
				null,
				(0, _preact.h)(
					'h2',
					null,
					'Add Card'
				),
				(0, _preact.h)(
					'div',
					{ 'class': 'add-card' },
					(0, _preact.h)(CardNumberWithMasking, _extends({}, this.props, {
						label: 'Card Number',
						'class': 'masked',
						type: 'tel',
						name: 'card-number',
						id: 'cardNumber',
						placeholder: '15 to 16 digits',
						onBlur: this.onBlurHandler,
						onChange: this.onChangeHandler,
						onKeyUp: this.onKeyUpHandler,
						required: 'required'
					})),
					(0, _preact.h)(CardExpiryWithMasking, _extends({}, this.props, {
						label: 'Expiry',
						'class': 'masked',
						type: 'tel',
						name: 'cvv',
						id: 'cvv',
						placeholder: 'MM/YY',
						onChange: this.onChangeHandler,
						onKeyUp: this.onKeyUpHandler,
						required: 'required'
					})),
					(0, _preact.h)(CardCVVWithMasking, _extends({}, this.props, {
						label: 'CVV',
						'class': 'masked',
						type: 'tel',
						name: 'cvv',
						id: 'cvv',
						cardType: this.state.cardType,
						placeholder: '3 to 5 digits',
						onChange: this.onChangeHandler,
						onKeyUp: this.onKeyUpHandler,
						required: 'required'
					})),
					(0, _preact.h)(
						DesignPattern,
						{ label: 'Nickname' },
						(0, _preact.h)(_inputField2.default, {
							name: 'nick-name',
							id: 'nickName',
							maxLength: '20',
							placeholder: 'E.g. My Points Card',
							onChange: this.onChangeHandler,
							required: 'required'
						})
					),
					(0, _preact.h)(
						DesignPattern,
						null,
						(0, _preact.h)(_inputField2.default, {
							name: 'addCard',
							type: 'submit'
						})
					)
				)
			);
		}
	}]);

	return AddCard;
}(_preact.Component);

AddCard.displayName = 'Add Card';

exports.default = AddCard;

/***/ }),

/***/ "UQex":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),

/***/ "WFeU":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp, _initialiseProps;

var _preact = __webpack_require__("KM04");

var _inputField = __webpack_require__("sbNy");

var _inputField2 = _interopRequireDefault(_inputField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CardCVV = (_temp = _class = function (_Component) {
	_inherits(CardCVV, _Component);

	function CardCVV(props) {
		_classCallCheck(this, CardCVV);

		var _this = _possibleConstructorReturn(this, (CardCVV.__proto__ || Object.getPrototypeOf(CardCVV)).call(this, props));

		_initialiseProps.call(_this);

		_this.state = {
			value: '',
			mask: '',
			placeholder: props.placeholder,
			maxLength: ''
		};

		_this.onKeyUpHandler = _this.onKeyUpHandler.bind(_this);
		_this.onFocusHandler = _this.onFocusHandler.bind(_this);
		return _this;
	}

	_createClass(CardCVV, [{
		key: 'render',
		value: function render() {
			var props = this.props;

			var label = props.label,
			    maxLength = props.maxLength,
			    Masking = props.Masking,
			    DesignPattern = props.DesignPattern,
			    propsForInput = _objectWithoutProperties(props, ['label', 'maxLength', 'Masking', 'DesignPattern']); // eslint-disable-line no-unused-vars

			propsForInput.maxLength = this.state.maxLength || maxLength;

			var propsForMasking = {};

			propsForMasking.mask = this.state.mask;
			propsForMasking.value = this.state.value;

			return (0, _preact.h)(
				DesignPattern,
				{ label: label },
				(0, _preact.h)(_inputField2.default, _extends({}, propsForInput, { onKeyUp: this.onKeyUpHandler, onFocus: this.onFocusHandler, value: this.state.value })),
				(0, _preact.h)(Masking, propsForMasking)
			);
		}
	}]);

	return CardCVV;
}(_preact.Component), _initialiseProps = function _initialiseProps() {
	var _this2 = this;

	this.onFocusHandler = function (e) {
		var props = _this2.props;
		var cardType = props.cardType;

		var card = cardType ? props.getMasking(cardType) : '';
		var maxlength = card ? card.mask.length : '';

		if (maxlength) {
			_this2.setState({
				maxLength: maxlength
			});
		}
	};

	this.onKeyUpHandler = function (e) {
		var props = _this2.props;
		var inputVal = e.target.value;
		var cardType = props.cardType;

		var card = cardType ? props.getMasking(cardType) : '';

		var propsForCardCVVMasking = {
			value: inputVal,
			mask: card ? card.mask : ''
		};

		var inputState = props.maskingOnKeyUp(e, propsForCardCVVMasking);

		_this2.setState({
			value: inputState && inputState.value || inputVal,
			mask: inputState && inputState.mask
		});
	};
}, _temp);


CardCVV.defaultProps = {
	maxLength: 3
};

exports.default = CardCVV;

/***/ }),

/***/ "YHxR":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _preact = __webpack_require__("KM04");

var _masking = __webpack_require__("3OQs");

var _masking2 = _interopRequireDefault(_masking);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cardNumberMaskingHOC = function cardNumberMaskingHOC(WrappedComponent) {
	var HOC = function (_Component) {
		_inherits(HOC, _Component);

		function HOC() {
			var _ref;

			var _temp, _this, _ret;

			_classCallCheck(this, HOC);

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = HOC.__proto__ || Object.getPrototypeOf(HOC)).call.apply(_ref, [this].concat(args))), _this), _this.onKeyUpHandler = function (e) {
				console.log('cardNumberMaskingHOC::onKeyUp'); // eslint-disable-line
				var props = _this.props;
				var inputVal = e.target.value;
				var card = _this.getMasking(inputVal.charAt(0));
				var placeholder = props.placeholder,
				    value = props.value;

				var maxlength = card.mask.length ? card.mask.length : placeholder.length;
				var propsForCardNumberMasking = {
					value: value,
					mask: card.mask
				};
				var inputState = _this.setMasking(e, propsForCardNumberMasking);

				_this.setState({
					cardType: card.type,
					cardLength: card.length,
					maxLength: maxlength,
					value: inputState && inputState.value || inputVal,
					mask: inputState && inputState.mask
				});

				if (_this.props.onKeyUp) {
					_this.props.onKeyUp(e, _this.state.cardType);
				}
			}, _this.getMasking = function (cardFirstDigit) {
				var fistDigit = parseInt(cardFirstDigit, 10);

				switch (fistDigit) {
					case 3:
						return {
							type: 'American Express',
							mask: 'XXXX XXXXXX XXXXX',
							length: 15
						};
					case 4:
						return {
							type: 'VISA',
							mask: 'XXXX XXXX XXXX XXXX',
							length: 16
						};
					case 5:
						return {
							type: 'MasterCard',
							mask: 'XXXX XXXX XXXX XXXX',
							length: 16
						};
					case 6:
						return {
							type: 'Discover',
							mask: 'XXXX XXXX XXXX XXXX',
							length: 16
						};
					default:
						return {
							type: '',
							mask: ''
						};
				}
			}, _this.setMasking = function (e, props) {
				switch (e.keyCode) {// allows navigating thru input
					case 20: // caplocks
					case 17: // control
					case 18: // option
					case 16: // shift
					case 37: // arrow keys
					case 38:
					case 40:
						return;
				}

				var currentValue = e.target.value,
				    newValue = '';

				var len = currentValue.length,
				    maskedNumber = 'XdDmMyY9';

				if (currentValue.match(/[A-Z]/i)) {
					currentValue = currentValue.substr(0, len - 1);
				}

				var strippedValue = currentValue.replace(/\D/g, '');
				var l = props.mask.length;

				for (var i = 0, j = 0; i < l; i++) {
					var isInt = !isNaN(parseInt(strippedValue[j], 10));
					var matchesNumber = maskedNumber.indexOf(props.mask[i]) >= 0;

					if (matchesNumber && isInt) {
						newValue += strippedValue[j++];
					} else if (matchesNumber && !isInt) {
						return {
							value: newValue
						};
					} else {
						newValue += props.mask[i];
					}

					if (strippedValue[j] === undefined) {
						break;
					}
				}

				return {
					value: newValue,
					mask: props.mask.substr(newValue.length)
				};
			}, _temp), _possibleConstructorReturn(_this, _ret);
		}

		_createClass(HOC, [{
			key: 'render',
			value: function render() {
				return (0, _preact.h)(WrappedComponent, _extends({}, this.props, this.state, {
					Masking: _masking2.default,
					getMasking: this.getMasking,
					setMasking: this.setMasking,
					onKeyUp: this.onKeyUpHandler
				}));
			}
		}]);

		return HOC;
	}(_preact.Component);

	HOC.displayName = 'Card Number Masking';
	return HOC;
};

exports.default = cardNumberMaskingHOC;

/***/ }),

/***/ "YXlM":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _preact = __webpack_require__("KM04");

var _inputField = __webpack_require__("sbNy");

var _inputField2 = _interopRequireDefault(_inputField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CardExpiry = function (_Component) {
	_inherits(CardExpiry, _Component);

	function CardExpiry() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, CardExpiry);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CardExpiry.__proto__ || Object.getPrototypeOf(CardExpiry)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			value: '',
			mask: _this.props.placeholder
		}, _this.onKeyUpHandler = function (e) {
			var inputState = _this.props.maskingOnKeyUp(e, _this.props);

			if (inputState && (inputState.value || inputState.mask)) {
				_this.setState({
					value: inputState.value,
					mask: inputState.mask
				});
			}
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(CardExpiry, [{
		key: 'render',
		value: function render() {
			var props = this.props;

			var label = props.label,
			    Masking = props.Masking,
			    DesignPattern = props.DesignPattern,
			    propsForInput = _objectWithoutProperties(props, ['label', 'Masking', 'DesignPattern']); // eslint-disable-line no-unused-vars

			propsForInput.maxLength = props.placeholder.length;

			var propsForMasking = {};

			propsForMasking.mask = this.state.mask;
			propsForMasking.value = this.state.value;

			return (0, _preact.h)(
				DesignPattern,
				{ label: label },
				(0, _preact.h)(_inputField2.default, _extends({}, propsForInput, { onKeyUp: this.onKeyUpHandler, value: this.state.value })),
				(0, _preact.h)(Masking, propsForMasking)
			);
		}
	}]);

	return CardExpiry;
}(_preact.Component);

exports.default = CardExpiry;

/***/ }),

/***/ "Yfv7":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "atRc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _preact = __webpack_require__("KM04");

var _propTypes = __webpack_require__("5D9O");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var oneOf = _propTypes2.default.oneOf,
    string = _propTypes2.default.string,
    bool = _propTypes2.default.bool,
    func = _propTypes2.default.func;

/**
 * InputField class (UI component) with basic input field features
 */

var InputField = function (_Component) {
	_inherits(InputField, _Component);

	function InputField() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, InputField);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = InputField.__proto__ || Object.getPrototypeOf(InputField)).call.apply(_ref, [this].concat(args))), _this), _this.onClickHandler = function (e) {
			var onClick = _this.props.onClick;


			if (onClick) {
				onClick(e);
			}
		}, _this.onChangeHandler = function (e) {
			var onChange = _this.props.onChange;


			if (onChange) {
				onChange(e);
			}
		}, _this.onKeyUpHandler = function (e) {
			var onKeyUp = _this.props.onKeyUp;


			if (onKeyUp) {
				onKeyUp(e);
			}
		}, _this.onKeyDownHandler = function (e) {
			var onKeyDown = _this.props.onKeyDown;


			if (onKeyDown) {
				onKeyDown(e);
			}
		}, _this.onFocusHandler = function (e) {
			var onFocus = _this.props.onFocus;


			if (onFocus) {
				onFocus(e);
			}
		}, _this.onBlurHandler = function (e) {
			var onBlur = _this.props.onBlur;


			if (onBlur) {
				onBlur(e);
			}
		}, _this.onBlurHandler = function (e) {
			var onBlur = _this.props.onBlur;


			if (onBlur) {
				onBlur(e);
			}
		}, _this.onMouseUpHandler = function (e) {
			var onMouseUp = _this.props.onMouseUp;


			if (onMouseUp) {
				onMouseUp(e);
			}
		}, _this.onMouseDownHandler = function (e) {
			var onMouseDown = _this.props.onMouseDown;


			if (onMouseDown) {
				onMouseDown(e);
			}
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	/**
  * @param {Event} e
  */


	/**
  * @param {Event} e
  */


	/**
  * @param {Event} e
  */


	/**
  * @param {Event} e
  */


	/**
  * @param {Event} e
  */


	/**
  * @param {Event} e
  */


	/**
  * @param {Event} e
  */


	/**
  * @param {Event} e
  */


	/**
  * @param {Event} e
  */


	_createClass(InputField, [{
		key: 'render',
		value: function render(props) {
			var label = props.label,
			    propsForInput = _objectWithoutProperties(props, ['label']); // eslint-disable-line no-unused-vars

			return (0, _preact.h)('input', _extends({}, propsForInput, {
				onClick: this.onClickHandler,
				onChange: this.onChangeHandler,
				onKeyUp: this.onKeyUpHandler,
				onKeyDown: this.onKeyDownHandler,
				onFocus: this.onFocusHandler,
				onBlur: this.onBlurHandler,
				onMouseUp: this.onMouseUpHandler,
				onMouseDown: this.onMouseDownHandler
			}));
		}
	}]);

	return InputField;
}(_preact.Component);

/**
 * @final
 */


InputField.defaultProps = {
	onBlur: null,
	onChange: null,
	onClick: null,
	onFocus: null,
	onKeyDown: null,
	onKeyUp: null,
	onMouseDown: null,
	onMouseUp: null,
	placeholder: null,
	readonly: null,
	required: false,
	type: 'text',
	value: null
};

/**
 * @final
 */
InputField.propTypes = {
	autoComplete: oneOf(['on', 'off']),
	id: string.isRequired,
	label: string.isRequired,
	maxLength: string.isRequired,
	name: string.isRequired,
	onBlur: func,
	onChange: func,
	onClick: func,
	onFocus: func,
	onKeyDown: func,
	onKeyUp: func,
	onMouseDown: func,
	onMouseUp: func,
	placeholder: string,
	readonly: bool,
	required: bool,
	type: string,
	value: oneOf([bool, string])
};

exports.default = InputField;

/***/ }),

/***/ "fpf/":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "gRy4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _preact = __webpack_require__("KM04");

var _masking = __webpack_require__("3OQs");

var _masking2 = _interopRequireDefault(_masking);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cardCVVMaskingHOC = function cardCVVMaskingHOC(WrappedComponent) {
	var HOC = function (_Component) {
		_inherits(HOC, _Component);

		function HOC() {
			var _ref;

			var _temp, _this, _ret;

			_classCallCheck(this, HOC);

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = HOC.__proto__ || Object.getPrototypeOf(HOC)).call.apply(_ref, [this].concat(args))), _this), _this.getMasking = function (cardType) {

				switch (cardType) {
					case 'American Express':
						return {
							mask: 'XXXX'
						};
					case 'VISA':
					case 'MasterCard':
					case 'Discover':
						return {
							mask: 'XXX'
						};
					default:
						return {
							mask: ''
						};
				}
			}, _this.setMasking = function (e, props) {
				var currentValue = e.target.value,
				    newValue = '';

				var len = currentValue.length,
				    maskedNumber = 'XdDmMyY9';

				if (currentValue.match(/[A-Z]/i)) {
					currentValue = currentValue.substr(0, len - 1);
				}

				var strippedValue = currentValue.replace(/\D/g, '');
				var l = props.mask.length;

				for (var i = 0, j = 0; i < l; i++) {
					var isInt = !isNaN(parseInt(strippedValue[j], 10));
					var matchesNumber = maskedNumber.indexOf(props.mask[i]) >= 0;

					if (matchesNumber && isInt) {
						newValue += strippedValue[j++];
					} else if (matchesNumber && !isInt) {
						return {
							value: newValue
						};
					} else {
						newValue += props.mask[i];
					}

					if (strippedValue[j] === undefined) {
						break;
					}
				}

				return {
					value: newValue,
					mask: props.mask.substr(newValue.length)
				};
			}, _this.maskingOnKeyUp = function (e, props) {
				switch (e.keyCode) {// allows navigating thru input
					case 20: // caplocks
					case 17: // control
					case 18: // option
					case 16: // shift
					case 37: // arrow keys
					case 38:
					case 40:
						return;
				}

				return _this.setMasking(e, props);
			}, _temp), _possibleConstructorReturn(_this, _ret);
		}

		_createClass(HOC, [{
			key: 'render',
			value: function render() {
				return (0, _preact.h)(WrappedComponent, _extends({}, this.props, {
					Masking: _masking2.default,
					getMasking: this.getMasking,
					setMasking: this.setMasking,
					maskingOnKeyUp: this.maskingOnKeyUp
				}));
			}
		}]);

		return HOC;
	}(_preact.Component);

	HOC.displayName = 'Card CVV Masking';
	return HOC;
};

exports.default = cardCVVMaskingHOC;

/***/ }),

/***/ "sbNy":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inputField = __webpack_require__("atRc");

var _inputField2 = _interopRequireDefault(_inputField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _inputField2.default;

/***/ }),

/***/ "tZtr":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VaultDesignInputField = exports.AtomDesignInputField = undefined;

var _inputFieldPatterns = __webpack_require__("CB7t");

exports.AtomDesignInputField = _inputFieldPatterns.AtomDesignInputField;
exports.VaultDesignInputField = _inputFieldPatterns.VaultDesignInputField;

/***/ }),

/***/ "wRU+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (false) {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),

/***/ "wVGV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__("UQex");
var invariant = __webpack_require__("wRU+");
var ReactPropTypesSecret = __webpack_require__("Asjh");

module.exports = function () {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(false, 'Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/***/ }),

/***/ "wb0H":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "zxsQ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _preact = __webpack_require__("KM04");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var validateCardNumberHOC = function validateCardNumberHOC(WrappedComponent) {
	var HOC = function (_Component) {
		_inherits(HOC, _Component);

		function HOC() {
			var _ref;

			var _temp, _this, _ret;

			_classCallCheck(this, HOC);

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = HOC.__proto__ || Object.getPrototypeOf(HOC)).call.apply(_ref, [this].concat(args))), _this), _this.getCardLenth = function (cardFirstDigit) {
				var fistDigit = parseInt(cardFirstDigit, 10);

				switch (fistDigit) {
					case 3:
						return {
							type: 'American Express',
							length: 15
						};
					case 4:
						return {
							type: 'VISA',
							length: 16
						};
					case 5:
						return {
							type: 'MasterCard',
							length: 16
						};
					case 6:
						return {
							type: 'Discover',
							length: 16
						};
					default:
						return {
							type: '',
							length: 0
						};
				}
			}, _this.cardNumber = function (inputVal, cardLen) {
				var errKey = null;

				if (inputVal) {
					if (!cardLen) {
						var card = _this.getCardLenth(inputVal.charAt(0));

						cardLen = card.length;
						_this.setState({
							cardType: card.type
						});
					}

					if (inputVal.replace(/\s/g, '').length !== cardLen) {
						errKey = 'cardNumber.length.mismatch';
					}
				}

				return errKey;
			}, _this.validationOnKeyUp = function (e) {
				console.log('validateCardNumberHOC::onKeyUp'); //eslint-disable-line
				var inputVal = e.target.value;
				var card = _this.getCardLenth(inputVal.charAt(0));

				_this.setState({
					cardType: card.type,
					cardLength: card.length,
					error: {}
				});

				if (_this.props.onKeyUp) {
					_this.props.onKeyUp(e, _this.state.cardType);
				}
			}, _this.validationOnBlur = function (e) {
				console.log('validateCardNumberHOC::onBlur');
				var props = _this.props;
				var errMsg = _this.cardNumber(e.target.value, _this.state.cardLength);

				if (errMsg) {
					_this.setState({
						error: _defineProperty({}, props.name, errMsg)
					});
				} else {
					_this.setState({
						error: {}
					});
				}

				if (_this.props.onBlur) {
					_this.props.onBlur(e);
				}
			}, _temp), _possibleConstructorReturn(_this, _ret);
		}

		_createClass(HOC, [{
			key: 'render',
			value: function render() {
				return (0, _preact.h)(WrappedComponent, _extends({}, this.props, this.state, {
					onBlur: this.validationOnBlur,
					onKeyUp: this.validationOnKeyUp
				}));
			}
		}]);

		return HOC;
	}(_preact.Component);

	HOC.displayName = 'Validate Card Number';
	return HOC;
};

exports.default = validateCardNumberHOC;

/***/ })

/******/ });
//# sourceMappingURL=ssr-bundle.js.map