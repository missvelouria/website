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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/footer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Footer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = '/Users/velouria/website/my-app/components/footer.js';



var Footer = function Footer() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.Fragment,
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 4
      }
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'div',
      {
        className: 'jsx-1090153289',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 5
        }
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'p',
        {
          className: 'jsx-1090153289',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 6
          }
        },
        'Designed and Developed by Velouria Grey, 2018'
      )
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: '1090153289',
      css: 'div.jsx-1090153289{position:fixed;bottom:0;text-align:center;width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZm9vdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9nQixBQUd3QixlQUNOLFNBQ1Msa0JBQ1AsV0FDYiIsImZpbGUiOiJjb21wb25lbnRzL2Zvb3Rlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvdmVsb3VyaWEvd2Vic2l0ZS9teS1hcHAiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgY29uc3QgRm9vdGVyID0gKCkgPT4gKFxuICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgPGRpdj5cbiAgICAgIDxwPkRlc2lnbmVkIGFuZCBEZXZlbG9wZWQgYnkgVmVsb3VyaWEgR3JleSwgMjAxODwvcD5cbiAgICA8L2Rpdj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBkaXYge1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG48L1JlYWN0LkZyYWdtZW50PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBGb290ZXJcbiJdfQ== */\n/*@ sourceURL=components/footer.js */'
    })
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),

/***/ "./layout/layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/velouria/website/my-app/layout/layout.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


//import { Header } from '../components';

var withAppLayout = function withAppLayout() {
  return function (ComposedComponent) {
    var AppLayout = function (_Component) {
      _inherits(AppLayout, _Component);

      function AppLayout() {
        _classCallCheck(this, AppLayout);

        return _possibleConstructorReturn(this, (AppLayout.__proto__ || Object.getPrototypeOf(AppLayout)).apply(this, arguments));
      }

      _createClass(AppLayout, [{
        key: 'render',
        value: function render() {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'section',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 8
              }
            },
            '// ',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Header, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 9
              }
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ComposedComponent, _extends({}, this.props, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 10
              }
            }))
          );
        }
      }]);

      return AppLayout;
    }(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

    return AppLayout;
  };
};

/* unused harmony default export */ var _unused_webpack_default_export = (withAppLayout);

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__("react-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__layout_layout_js__ = __webpack_require__("./layout/layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_footer_js__ = __webpack_require__("./components/footer.js");
var _jsxFileName = '/Users/velouria/website/my-app/pages/index.js';







/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    {
      className: 'jsx-3667418389',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      }
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_4_next_head___default.a,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1', className: 'jsx-3667418389',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { charSet: 'utf-8', className: 'jsx-3667418389',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      })
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'div',
      {
        className: 'jsx-3667418389',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'p',
        {
          className: 'jsx-3667418389',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          }
        },
        'Dare to indulge?'
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'button',
        {
          className: 'jsx-3667418389',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          }
        },
        'Enter Site'
      )
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: '76673344',
      css: 'p.jsx-3667418389{font-family:Snell Roundhand,Apple Chancery,cursive;font-size:3em;color:#F4CDD6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdCZ0IsQUFHOEQsbURBQ3ZDLGNBQ0EsY0FDaEIiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3ZlbG91cmlhL3dlYnNpdGUvbXktYXBwIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHdpdGhBcHBMYXlvdXQgZnJvbSAnLi4vbGF5b3V0L2xheW91dC5qcyc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL2Zvb3Rlci5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgPGRpdj5cbiAgICA8SGVhZD5cbiAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgIDwvSGVhZD5cbiAgICA8ZGl2PlxuICAgICAgPHA+RGFyZSB0byBpbmR1bGdlPzwvcD5cbiAgICAgIDxidXR0b24+RW50ZXIgU2l0ZTwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIHAge1xuICAgICAgICBmb250LWZhbWlseTogU25lbGwgUm91bmRoYW5kLCBBcHBsZSBDaGFuY2VyeSwgY3Vyc2l2ZTtcbiAgICAgICAgZm9udC1zaXplOiAzZW07XG4gICAgICAgIGNvbG9yOiAjRjRDREQ2O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgZGl2IHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjAlO1xuICAgICAgfVxuICAgICAgYnV0dG9uIHtcbiAgICAgICAgaGVpZ2h0OiAzZW07XG4gICAgICAgIHdpZHRoOiA4ZW07XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNENERDZcbiAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgICAgIGZvbnQtZmFtaWx5OiBTbmVsbCBSb3VuZGhhbmQsIEFwcGxlIENoYW5jZXJ5LCBjdXJzaXZlO1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMS41ZW07XG4gICAgICB9XG4gICAgICBib2R5IHtcbiAgICAgICAgYmFja2dyb3VuZDogIzAwMDtcbiAgICAgICAgZm9udC1mYW1pbHk6IExhdG8sc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICAgICAgICBjb2xvcjogI2ZlZWNlNjtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPEZvb3RlciAvPlxuXG5cbiAgPC9kaXY+XG4pXG4iXX0= */\n/*@ sourceURL=pages/index.js */'
    }),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: '4006758012',
      css: 'div{margin-top:20%;}button{height:3em;width:8em;background-color:#F4CDD6;color:#000;font-size:1.5em;font-family:Snell Roundhand,Apple Chancery,cursive;font-weight:300;line-height:1.5em;}body{background:#000;font-family:Lato,sans-serif;font-weight:300;line-height:1.5em;color:#feece6;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVCdUIsQUFHd0IsQUFHSixBQVVLLFdBVE4sSUFIWixDQWE4QixLQVI1Qix1QkFTZ0IsRUFUTCxXQUNLLEdBU0UsYUFSbUMsS0FTdkMsY0FDSSxrQkFDcEIsY0FWa0IsZ0JBQ0Usa0JBQ3BCIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy92ZWxvdXJpYS93ZWJzaXRlL215LWFwcCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB3aXRoQXBwTGF5b3V0IGZyb20gJy4uL2xheW91dC9sYXlvdXQuanMnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9mb290ZXIuanMnO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxkaXY+XG4gICAgPEhlYWQ+XG4gICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICA8L0hlYWQ+XG4gICAgPGRpdj5cbiAgICAgIDxwPkRhcmUgdG8gaW5kdWxnZT88L3A+XG4gICAgICA8YnV0dG9uPkVudGVyIFNpdGU8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBwIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFNuZWxsIFJvdW5kaGFuZCwgQXBwbGUgQ2hhbmNlcnksIGN1cnNpdmU7XG4gICAgICAgIGZvbnQtc2l6ZTogM2VtO1xuICAgICAgICBjb2xvcjogI0Y0Q0RENjtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgIGRpdiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwJTtcbiAgICAgIH1cbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIGhlaWdodDogM2VtO1xuICAgICAgICB3aWR0aDogOGVtO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRDREQ2XG4gICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgICBmb250LWZhbWlseTogU25lbGwgUm91bmRoYW5kLCBBcHBsZSBDaGFuY2VyeSwgY3Vyc2l2ZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICAgICAgfVxuICAgICAgYm9keSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICMwMDA7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBMYXRvLHNhbnMtc2VyaWY7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbiAgICAgICAgY29sb3I6ICNmZWVjZTY7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDxGb290ZXIgLz5cblxuXG4gIDwvZGl2PlxuKVxuIl19 */\n/*@ sourceURL=pages/index.js */'
    }),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_footer_js__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      }
    })
  );
});

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map