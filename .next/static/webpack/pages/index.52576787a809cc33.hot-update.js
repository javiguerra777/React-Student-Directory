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

/***/ "./src/components/Table.jsx":
/*!**********************************!*\
  !*** ./src/components/Table.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_javig_OneDrive_Desktop_project_student_directory_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-table */ \"./node_modules/react-table/index.js\");\n/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_table__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"C:\\\\Users\\\\javig\\\\OneDrive\\\\Desktop\\\\project\\\\student-directory\\\\src\\\\components\\\\Table.jsx\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,C_Users_javig_OneDrive_Desktop_project_student_directory_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\n\n\n\n\nconst TableWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].table.withConfig({\n  displayName: \"Table__TableWrapper\",\n  componentId: \"sc-d4ga9b-0\"\n})([\"background:orange;th,td{min-width:100px;max-width:200px;overflow:auto;}\"]);\n_c = TableWrapper;\n\nconst Table = _ref => {\n  _s();\n\n  let {\n    data,\n    searchTerm\n  } = _ref;\n  const columns = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => [{\n    Header: \"First Name\",\n    accessor: 'firstName'\n  }, {\n    Header: \"Last Name\",\n    accessor: 'lastName'\n  }, {\n    Header: \"Email\",\n    accessor: 'email'\n  }, {\n    Header: \"Department\",\n    accessor: 'department'\n  }], []);\n  const {\n    getTableProps,\n    getTableBodyProps,\n    headerGroups,\n    rows,\n    prepareRow\n  } = (0,react_table__WEBPACK_IMPORTED_MODULE_2__.useTable)({\n    columns,\n    data: data.filter(user => user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) || user.lastName.toLowerCase().includes(searchTerm.toLowerCase()) || user.email.toLowerCase().includes(searchTerm.toLowerCase()) || user.department.toLowerCase().includes(searchTerm.toLowerCase()))\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(TableWrapper, _objectSpread(_objectSpread({}, getTableProps()), {}, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"thead\", {\n      children: headerGroups.map(headerGroup => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"tr\", _objectSpread(_objectSpread({}, headerGroup.getHeaderGroupProps()), {}, {\n        children: headerGroup.headers.map(column => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"th\", _objectSpread(_objectSpread({}, column.getHeaderProps), {}, {\n          children: column.render(\"Header\")\n        }), void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 15\n        }, undefined))\n      }), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 11\n      }, undefined))\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"tbody\", _objectSpread(_objectSpread({}, getTableBodyProps()), {}, {\n      children: rows.map(row => {\n        prepareRow(row);\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"tr\", _objectSpread(_objectSpread({}, row.getRowProps), {}, {\n          children: row.cells.map(cell => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"td\", _objectSpread(_objectSpread({}, cell.getCellProps()), {}, {\n            children: cell.render(\"Cell\")\n          }), void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 63,\n            columnNumber: 17\n          }, undefined))\n        }), void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 13\n        }, undefined);\n      })\n    }), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 7\n    }, undefined)]\n  }), void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 47,\n    columnNumber: 5\n  }, undefined);\n};\n\n_s(Table, \"M838U3hxJikW25A/G7CqVKX0wNE=\", false, function () {\n  return [react_table__WEBPACK_IMPORTED_MODULE_2__.useTable];\n});\n\n_c2 = Table;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Table);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"TableWrapper\");\n$RefreshReg$(_c2, \"Table\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cy9UYWJsZS5qc3g/NTQ5ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VUYWJsZSB9IGZyb20gJ3JlYWN0LXRhYmxlJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5jb25zdCBUYWJsZVdyYXBwZXIgPSBzdHlsZWQudGFibGVgXHJcbiAgYmFja2dyb3VuZDogb3JhbmdlO1xyXG4gIHRoLCB0ZCB7XHJcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAyMDBweDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gIH1cclxuYDtcclxuY29uc3QgVGFibGUgPSAoeyBkYXRhLCBzZWFyY2hUZXJtIH0pID0+IHtcclxuICBjb25zdCBjb2x1bW5zID0gdXNlTWVtbygoKSA9PiBbXHJcbiAgICB7XHJcbiAgICAgIEhlYWRlcjogXCJGaXJzdCBOYW1lXCIsXHJcbiAgICAgIGFjY2Vzc29yOiAnZmlyc3ROYW1lJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgSGVhZGVyOiBcIkxhc3QgTmFtZVwiLFxyXG4gICAgICBhY2Nlc3NvcjogJ2xhc3ROYW1lJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgSGVhZGVyOiBcIkVtYWlsXCIsXHJcbiAgICAgIGFjY2Vzc29yOiAnZW1haWwnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBIZWFkZXI6IFwiRGVwYXJ0bWVudFwiLFxyXG4gICAgICBhY2Nlc3NvcjogJ2RlcGFydG1lbnQnXHJcbiAgICB9LFxyXG4gIF0sIFtdKTtcclxuICBjb25zdCB7XHJcbiAgICBnZXRUYWJsZVByb3BzLFxyXG4gICAgZ2V0VGFibGVCb2R5UHJvcHMsXHJcbiAgICBoZWFkZXJHcm91cHMsXHJcbiAgICByb3dzLFxyXG4gICAgcHJlcGFyZVJvd1xyXG4gIH0gPSB1c2VUYWJsZSh7XHJcbiAgICBjb2x1bW5zLFxyXG4gICAgZGF0YTogZGF0YS5maWx0ZXIoKHVzZXIpID0+IHVzZXIuZmlyc3ROYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVGVybS50b0xvd2VyQ2FzZSgpKVxyXG4gICAgICB8fCB1c2VyLmxhc3ROYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVGVybS50b0xvd2VyQ2FzZSgpKVxyXG4gICAgICB8fCB1c2VyLmVtYWlsLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVGVybS50b0xvd2VyQ2FzZSgpKVxyXG4gICAgICB8fCB1c2VyLmRlcGFydG1lbnQudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hUZXJtLnRvTG93ZXJDYXNlKCkpXHJcbiAgICApXHJcbiAgfSlcclxuICByZXR1cm4gKFxyXG4gICAgPFRhYmxlV3JhcHBlciB7Li4uZ2V0VGFibGVQcm9wcygpfT5cclxuICAgICAgPHRoZWFkPlxyXG4gICAgICAgIHtoZWFkZXJHcm91cHMubWFwKChoZWFkZXJHcm91cCkgPT4gKFxyXG4gICAgICAgICAgPHRyIHsuLi5oZWFkZXJHcm91cC5nZXRIZWFkZXJHcm91cFByb3BzKCl9PlxyXG4gICAgICAgICAgICB7aGVhZGVyR3JvdXAuaGVhZGVycy5tYXAoKGNvbHVtbikgPT4gKFxyXG4gICAgICAgICAgICAgIDx0aCB7Li4uY29sdW1uLmdldEhlYWRlclByb3BzfT57Y29sdW1uLnJlbmRlcihcIkhlYWRlclwiKX08L3RoPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvdGhlYWQ+XHJcbiAgICAgIDx0Ym9keSB7Li4uZ2V0VGFibGVCb2R5UHJvcHMoKX0+XHJcbiAgICAgICAge3Jvd3MubWFwKChyb3cpID0+IHtcclxuICAgICAgICAgIHByZXBhcmVSb3cocm93KTtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDx0ciB7Li4ucm93LmdldFJvd1Byb3BzfT5cclxuICAgICAgICAgICAgICB7cm93LmNlbGxzLm1hcCgoY2VsbCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPHRkIHsuLi5jZWxsLmdldENlbGxQcm9wcygpfT57Y2VsbC5yZW5kZXIoXCJDZWxsXCIpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L3Rib2R5PlxyXG4gICAgPC9UYWJsZVdyYXBwZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFibGU7XHJcbiJdLCJuYW1lcyI6WyJ1c2VNZW1vIiwidXNlVGFibGUiLCJzdHlsZWQiLCJUYWJsZVdyYXBwZXIiLCJ0YWJsZSIsIlRhYmxlIiwiZGF0YSIsInNlYXJjaFRlcm0iLCJjb2x1bW5zIiwiSGVhZGVyIiwiYWNjZXNzb3IiLCJnZXRUYWJsZVByb3BzIiwiZ2V0VGFibGVCb2R5UHJvcHMiLCJoZWFkZXJHcm91cHMiLCJyb3dzIiwicHJlcGFyZVJvdyIsImZpbHRlciIsInVzZXIiLCJmaXJzdE5hbWUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwibGFzdE5hbWUiLCJlbWFpbCIsImRlcGFydG1lbnQiLCJtYXAiLCJoZWFkZXJHcm91cCIsImdldEhlYWRlckdyb3VwUHJvcHMiLCJoZWFkZXJzIiwiY29sdW1uIiwiZ2V0SGVhZGVyUHJvcHMiLCJyZW5kZXIiLCJyb3ciLCJnZXRSb3dQcm9wcyIsImNlbGxzIiwiY2VsbCIsImdldENlbGxQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Table.jsx\n"));

/***/ })

});