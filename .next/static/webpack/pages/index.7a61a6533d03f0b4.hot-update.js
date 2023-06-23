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

/***/ "./src/components/MainForm.jsx":
/*!*************************************!*\
  !*** ./src/components/MainForm.jsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_javig_OneDrive_Desktop_project_student_directory_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! nanoid */ \"./node_modules/nanoid/index.browser.js\");\n/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Form */ \"./src/components/Form.jsx\");\n/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Search */ \"./src/components/Search.jsx\");\n/* harmony import */ var _Table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Table */ \"./src/components/Table.jsx\");\n/* harmony import */ var _services_people_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/people.json */ \"./src/services/people.json\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\n\n\nvar _jsxFileName = \"C:\\\\Users\\\\javig\\\\OneDrive\\\\Desktop\\\\project\\\\student-directory\\\\src\\\\components\\\\MainForm.jsx\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,C_Users_javig_OneDrive_Desktop_project_student_directory_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\n\n\n\n\n\n\n\n\n\nconst Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div.withConfig({\n  displayName: \"MainForm__Wrapper\",\n  componentId: \"sc-k7c496-0\"\n})([\"height:100%;background:orange;\"]);\n_c = Wrapper;\n\nconst MainForm = () => {\n  _s();\n\n  const {\n    0: people,\n    1: setPeople\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n  const {\n    register,\n    handleSubmit\n  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_8__.useForm)(); //table info\n\n  const {\n    0: newSearch,\n    1: setNewSearch\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    setPeople(_services_people_json__WEBPACK_IMPORTED_MODULE_5__);\n  }, []);\n\n  const addStudent = data => {\n    setPeople(prev => [...prev, data]);\n  };\n\n  const onSubmit = data => {\n    console.log(data);\n\n    const payload = _objectSpread(_objectSpread({}, data), {}, {\n      id: (0,nanoid__WEBPACK_IMPORTED_MODULE_9__.nanoid)(),\n      major: ''\n    });\n\n    addStudent(payload);\n  }; //functions for searching through table\n\n\n  const handleSearch = e => {\n    setNewSearch(e.target.value);\n  };\n\n  const refreshSearch = () => {\n    setNewSearch('');\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(Wrapper, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_Form__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      register: register,\n      handleSubmit: handleSubmit,\n      onSubmit: onSubmit\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_Search__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      newSearch: newSearch,\n      handleSearch: handleSearch,\n      refreshSearch: refreshSearch\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }, undefined), people.length > 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_Table__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      data: people,\n      searchTerm: newSearch\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 9\n    }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"p\", {\n      children: \"can a lot\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 11\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 42,\n    columnNumber: 3\n  }, undefined);\n};\n\n_s(MainForm, \"bfLcobcZ0BEbg1HUq3zIbqTNsFQ=\", false, function () {\n  return [react_hook_form__WEBPACK_IMPORTED_MODULE_8__.useForm];\n});\n\n_c2 = MainForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainForm);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Wrapper\");\n$RefreshReg$(_c2, \"MainForm\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9NYWluRm9ybS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTVMsT0FBTyxHQUFHUCw2REFBSDtFQUFBO0VBQUE7QUFBQSxzQ0FBYjtLQUFNTzs7QUFJTixNQUFNRSxRQUFRLEdBQUcsTUFBTTtFQUFBOztFQUNyQixNQUFNO0lBQUEsR0FBQ0MsTUFBRDtJQUFBLEdBQVNDO0VBQVQsSUFBc0JiLCtDQUFRLENBQUMsRUFBRCxDQUFwQztFQUNBLE1BQU07SUFBRWMsUUFBRjtJQUFZQztFQUFaLElBQTZCWix3REFBTyxFQUExQyxDQUZxQixDQUdyQjs7RUFDQSxNQUFNO0lBQUEsR0FBQ2EsU0FBRDtJQUFBLEdBQVlDO0VBQVosSUFBNEJqQiwrQ0FBUSxDQUFDLEVBQUQsQ0FBMUM7RUFDQUMsZ0RBQVMsQ0FBQyxNQUFNO0lBQ2RZLFNBQVMsQ0FBQ0wsa0RBQUQsQ0FBVDtFQUNELENBRlEsRUFFTixFQUZNLENBQVQ7O0VBR0EsTUFBTVUsVUFBVSxHQUFJQyxJQUFELElBQVU7SUFDM0JOLFNBQVMsQ0FBRU8sSUFBRCxJQUFVLENBQUMsR0FBR0EsSUFBSixFQUFVRCxJQUFWLENBQVgsQ0FBVDtFQUNELENBRkQ7O0VBR0EsTUFBTUUsUUFBUSxHQUFJRixJQUFELElBQVU7SUFDekJHLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSixJQUFaOztJQUNBLE1BQU1LLE9BQU8sbUNBQ1JMLElBRFE7TUFFWE0sRUFBRSxFQUFFckIsOENBQU0sRUFGQztNQUdYc0IsS0FBSyxFQUFFO0lBSEksRUFBYjs7SUFLQVIsVUFBVSxDQUFDTSxPQUFELENBQVY7RUFDRCxDQVJELENBWHFCLENBb0J2Qjs7O0VBQ0EsTUFBTUcsWUFBWSxHQUFJQyxDQUFELElBQU07SUFDekJYLFlBQVksQ0FBQ1csQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBWjtFQUNDLENBRkg7O0VBR0EsTUFBTUMsYUFBYSxHQUFHLE1BQUs7SUFDekJkLFlBQVksQ0FBQyxFQUFELENBQVo7RUFDQyxDQUZIOztFQUdFLG9CQUNBLDhEQUFDLE9BQUQ7SUFBQSx3QkFDSSw4REFBQyw2Q0FBRDtNQUNFLFFBQVEsRUFBRUgsUUFEWjtNQUVFLFlBQVksRUFBRUMsWUFGaEI7TUFHRSxRQUFRLEVBQUVNO0lBSFo7TUFBQTtNQUFBO01BQUE7SUFBQSxhQURKLGVBTUksOERBQUMsK0NBQUQ7TUFDRSxTQUFTLEVBQUVMLFNBRGI7TUFFRSxZQUFZLEVBQUVXLFlBRmhCO01BR0UsYUFBYSxFQUFFSTtJQUhqQjtNQUFBO01BQUE7TUFBQTtJQUFBLGFBTkosRUFXS25CLE1BQU0sQ0FBQ29CLE1BQVAsR0FBZ0IsQ0FBaEIsZ0JBQ0MsOERBQUMsOENBQUQ7TUFDRSxJQUFJLEVBQUVwQixNQURSO01BRUUsVUFBVSxFQUFFSTtJQUZkO01BQUE7TUFBQTtNQUFBO0lBQUEsYUFERCxnQkFNRztNQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQSxhQWpCUjtFQUFBO0lBQUE7SUFBQTtJQUFBO0VBQUEsYUFEQTtBQXNCRCxDQWpERDs7R0FBTUw7VUFFK0JSOzs7TUFGL0JRO0FBbUROLCtEQUFlQSxRQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL01haW5Gb3JtLmpzeD80ZmUyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xyXG5pbXBvcnQgeyBuYW5vaWQgfSBmcm9tICduYW5vaWQnO1xyXG5pbXBvcnQgRm9ybSBmcm9tIFwiLi9Gb3JtXCI7XHJcbmltcG9ydCBTZWFyY2ggZnJvbSBcIi4vU2VhcmNoXCI7XHJcbmltcG9ydCBUYWJsZSBmcm9tIFwiLi9UYWJsZVwiO1xyXG5pbXBvcnQgcGVvcGxlRGF0YSBmcm9tICcuLi9zZXJ2aWNlcy9wZW9wbGUuanNvbic7XHJcblxyXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogb3JhbmdlO1xyXG5gO1xyXG5jb25zdCBNYWluRm9ybSA9ICgpID0+IHtcclxuICBjb25zdCBbcGVvcGxlLCBzZXRQZW9wbGVdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCB9ID0gdXNlRm9ybSgpO1xyXG4gIC8vdGFibGUgaW5mb1xyXG4gIGNvbnN0IFtuZXdTZWFyY2gsIHNldE5ld1NlYXJjaF0gPSB1c2VTdGF0ZSgnJylcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0UGVvcGxlKHBlb3BsZURhdGEpO1xyXG4gIH0sIFtdKTtcclxuICBjb25zdCBhZGRTdHVkZW50ID0gKGRhdGEpID0+IHtcclxuICAgIHNldFBlb3BsZSgocHJldikgPT4gWy4uLnByZXYsIGRhdGFdKTtcclxuICB9O1xyXG4gIGNvbnN0IG9uU3VibWl0ID0gKGRhdGEpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgY29uc3QgcGF5bG9hZCA9IHtcclxuICAgICAgLi4uZGF0YSxcclxuICAgICAgaWQ6IG5hbm9pZCgpLFxyXG4gICAgICBtYWpvcjogJycsXHJcbiAgICB9O1xyXG4gICAgYWRkU3R1ZGVudChwYXlsb2FkKTtcclxuICB9XHJcbi8vZnVuY3Rpb25zIGZvciBzZWFyY2hpbmcgdGhyb3VnaCB0YWJsZVxyXG5jb25zdCBoYW5kbGVTZWFyY2ggPSAoZSk9PiB7XHJcbiAgc2V0TmV3U2VhcmNoKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5jb25zdCByZWZyZXNoU2VhcmNoID0gKCk9PiB7XHJcbiAgc2V0TmV3U2VhcmNoKCcnKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgPFdyYXBwZXI+XHJcbiAgICAgIDxGb3JtXHJcbiAgICAgICAgcmVnaXN0ZXI9e3JlZ2lzdGVyfVxyXG4gICAgICAgIGhhbmRsZVN1Ym1pdD17aGFuZGxlU3VibWl0fVxyXG4gICAgICAgIG9uU3VibWl0PXtvblN1Ym1pdH1cclxuICAgICAgLz5cclxuICAgICAgPFNlYXJjaFxyXG4gICAgICAgIG5ld1NlYXJjaD17bmV3U2VhcmNofVxyXG4gICAgICAgIGhhbmRsZVNlYXJjaD17aGFuZGxlU2VhcmNofVxyXG4gICAgICAgIHJlZnJlc2hTZWFyY2g9e3JlZnJlc2hTZWFyY2h9XHJcbiAgICAgIC8+XHJcbiAgICAgIHtwZW9wbGUubGVuZ3RoID4gMCA/IChcclxuICAgICAgICA8VGFibGVcclxuICAgICAgICAgIGRhdGE9e3Blb3BsZX1cclxuICAgICAgICAgIHNlYXJjaFRlcm09e25ld1NlYXJjaH1cclxuICAgICAgICAvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgICAgPHA+Y2FuIGEgbG90PC9wPlxyXG4gICAgICApfVxyXG4gIDwvV3JhcHBlcj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluRm9ybTsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJzdHlsZWQiLCJ1c2VGb3JtIiwibmFub2lkIiwiRm9ybSIsIlNlYXJjaCIsIlRhYmxlIiwicGVvcGxlRGF0YSIsIldyYXBwZXIiLCJkaXYiLCJNYWluRm9ybSIsInBlb3BsZSIsInNldFBlb3BsZSIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwibmV3U2VhcmNoIiwic2V0TmV3U2VhcmNoIiwiYWRkU3R1ZGVudCIsImRhdGEiLCJwcmV2Iiwib25TdWJtaXQiLCJjb25zb2xlIiwibG9nIiwicGF5bG9hZCIsImlkIiwibWFqb3IiLCJoYW5kbGVTZWFyY2giLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJyZWZyZXNoU2VhcmNoIiwibGVuZ3RoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/MainForm.jsx\n"));

/***/ })

});