"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/TBodyRow.jsx":
/*!*************************************!*\
  !*** ./src/components/TBodyRow.jsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TBodyRow; }\n/* harmony export */ });\n/* harmony import */ var C_Users_javig_OneDrive_Desktop_project_student_directory_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nanoid */ \"./node_modules/nanoid/index.browser.js\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"C:\\\\Users\\\\javig\\\\OneDrive\\\\Desktop\\\\project\\\\student-directory\\\\src\\\\components\\\\TBodyRow.jsx\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,C_Users_javig_OneDrive_Desktop_project_student_directory_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\n\n\n\n\n\n\nconst TRWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].tr.withConfig({\n  displayName: \"TBodyRow__TRWrapper\",\n  componentId: \"sc-1c4rzqz-0\"\n})([\"background:white;position:relative;height:40px;&:hover{background:whitesmoke;}.options{position:absolute;top:0;right:0;display:flex;justify-content:flex-end;.edit-btn{background:green;}}\"]);\n_c = TRWrapper;\nfunction TBodyRow(_ref) {\n  _s();\n\n  let {\n    prepareRow,\n    row\n  } = _ref;\n  prepareRow(row);\n  const {\n    0: options,\n    1: setOptions\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(TRWrapper, _objectSpread(_objectSpread({}, row.getRowProps), {}, {\n    onMouseEnter: () => setOptions(true),\n    onMouseLeave: () => setOptions(false),\n    children: [row.cells.map(cell => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"td\", _objectSpread(_objectSpread({}, cell.getCellProps()), {}, {\n      children: cell.render(\"Cell\")\n    }), (0,nanoid__WEBPACK_IMPORTED_MODULE_4__.nanoid)(), false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 17\n    }, this)), options && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"td\", {\n      className: \"options\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"button\", {\n        type: \"button\",\n        className: \"edit-btn\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiOutlineEdit, {\n          size: 16\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 11\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"button\", {\n        type: \"button\",\n        className: \"delete-btn\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_6__.BsTrash, {\n          size: 16\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 13\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 11\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 17\n    }, this)]\n  }), void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 13\n  }, this);\n}\n\n_s(TBodyRow, \"82/ETRLSVFR2gTEzi3vo2sZdYY8=\");\n\n_c2 = TBodyRow;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"TRWrapper\");\n$RefreshReg$(_c2, \"TBodyRow\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9UQm9keVJvdy5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUssU0FBUyxHQUFHSiw0REFBSDtFQUFBO0VBQUE7QUFBQSxrTUFBZjtLQUFNSTtBQWtCUyxTQUFTRSxRQUFULE9BQXVDO0VBQUE7O0VBQUEsSUFBckI7SUFBRUMsVUFBRjtJQUFjQztFQUFkLENBQXFCO0VBQ3BERCxVQUFVLENBQUNDLEdBQUQsQ0FBVjtFQUNBLE1BQU07SUFBQSxHQUFDQyxPQUFEO0lBQUEsR0FBVUM7RUFBVixJQUF3QlgsK0NBQVEsQ0FBQyxJQUFELENBQXRDO0VBQ0Esb0JBQ1UsOERBQUMsU0FBRCxrQ0FDTVMsR0FBRyxDQUFDRyxXQURWO0lBRUUsWUFBWSxFQUFFLE1BQU1ELFVBQVUsQ0FBQyxJQUFELENBRmhDO0lBR0UsWUFBWSxFQUFFLE1BQU1BLFVBQVUsQ0FBQyxLQUFELENBSGhDO0lBQUEsV0FLR0YsR0FBRyxDQUFDSSxLQUFKLENBQVVDLEdBQVYsQ0FBZUMsSUFBRCxpQkFDYixvR0FBdUJBLElBQUksQ0FBQ0MsWUFBTCxFQUF2QjtNQUFBLFVBQTZDRCxJQUFJLENBQUNFLE1BQUwsQ0FBWSxNQUFaO0lBQTdDLElBQVNmLDhDQUFNLEVBQWY7TUFBQTtNQUFBO01BQUE7SUFBQSxRQURELENBTEgsRUFRR1EsT0FBTyxpQkFDTjtNQUFJLFNBQVMsRUFBQyxTQUFkO01BQUEsd0JBQ047UUFDRSxJQUFJLEVBQUMsUUFEUDtRQUVFLFNBQVMsRUFBQyxVQUZaO1FBQUEsdUJBSVUsOERBQUMseURBQUQ7VUFBZSxJQUFJLEVBQUU7UUFBckI7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQUpWO1FBQUE7UUFBQTtRQUFBO01BQUEsUUFETSxlQU9OO1FBQ0UsSUFBSSxFQUFDLFFBRFA7UUFFRSxTQUFTLEVBQUMsWUFGWjtRQUFBLHVCQUlFLDhEQUFDLG1EQUFEO1VBQVMsSUFBSSxFQUFFO1FBQWY7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQUpGO1FBQUE7UUFBQTtRQUFBO01BQUEsUUFQTTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFUSjtFQUFBO0lBQUE7SUFBQTtJQUFBO0VBQUEsUUFEVjtBQTJCRDs7R0E5QnVCSDs7TUFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVEJvZHlSb3cuanN4P2YxNjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBuYW5vaWQgfSBmcm9tICduYW5vaWQnO1xyXG5pbXBvcnQgeyBBaU91dGxpbmVFZGl0IH0gZnJvbSAncmVhY3QtaWNvbnMvYWknO1xyXG5pbXBvcnQgeyBCc1RyYXNoIH0gZnJvbSAncmVhY3QtaWNvbnMvYnMnO1xyXG5cclxuY29uc3QgVFJXcmFwcGVyID0gc3R5bGVkLnRyYFxyXG5iYWNrZ3JvdW5kOiB3aGl0ZTtcclxucG9zaXRpb246IHJlbGF0aXZlO1xyXG5oZWlnaHQ6IDQwcHg7XHJcbiY6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XHJcbn1cclxuLm9wdGlvbnMge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIC5lZGl0LWJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kOmdyZWVuO1xyXG4gIH1cclxufVxyXG5gO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUQm9keVJvdyh7IHByZXBhcmVSb3csIHJvdyB9KSB7XHJcbiAgcHJlcGFyZVJvdyhyb3cpO1xyXG4gIGNvbnN0IFtvcHRpb25zLCBzZXRPcHRpb25zXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxUUldyYXBwZXJcclxuICAgICAgICAgICAgICB7Li4ucm93LmdldFJvd1Byb3BzfVxyXG4gICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0T3B0aW9ucyh0cnVlKX1cclxuICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldE9wdGlvbnMoZmFsc2UpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3Jvdy5jZWxscy5tYXAoKGNlbGwpID0+IChcclxuICAgICAgICAgICAgICAgIDx0ZCBrZXk9e25hbm9pZCgpfSB7Li4uY2VsbC5nZXRDZWxsUHJvcHMoKX0+e2NlbGwucmVuZGVyKFwiQ2VsbFwiKX08L3RkPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIHtvcHRpb25zICYmIChcclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJvcHRpb25zXCI+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJlZGl0LWJ0blwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFpT3V0bGluZUVkaXQgc2l6ZT17MTZ9IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGVsZXRlLWJ0blwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxCc1RyYXNoIHNpemU9ezE2fSAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9UUldyYXBwZXI+XHJcbiAgICAgICAgICApO1xyXG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwic3R5bGVkIiwibmFub2lkIiwiQWlPdXRsaW5lRWRpdCIsIkJzVHJhc2giLCJUUldyYXBwZXIiLCJ0ciIsIlRCb2R5Um93IiwicHJlcGFyZVJvdyIsInJvdyIsIm9wdGlvbnMiLCJzZXRPcHRpb25zIiwiZ2V0Um93UHJvcHMiLCJjZWxscyIsIm1hcCIsImNlbGwiLCJnZXRDZWxsUHJvcHMiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/TBodyRow.jsx\n"));

/***/ })

});