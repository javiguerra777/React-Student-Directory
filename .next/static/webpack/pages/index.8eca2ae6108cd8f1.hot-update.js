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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_javig_OneDrive_Desktop_project_student_directory_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-table */ \"./node_modules/react-table/index.js\");\n/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_table__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"C:\\\\Users\\\\javig\\\\OneDrive\\\\Desktop\\\\project\\\\student-directory\\\\src\\\\components\\\\Table.jsx\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,C_Users_javig_OneDrive_Desktop_project_student_directory_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\n\n\n\n\nconst TableWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].table.withConfig({\n  displayName: \"Table__TableWrapper\",\n  componentId: \"sc-d4ga9b-0\"\n})([\"background:orange;th,td{background:white;min-width:100px;}\"]);\n_c = TableWrapper;\n\nconst Table = _ref => {\n  _s();\n\n  let {\n    data,\n    searchTerm\n  } = _ref;\n  const columns = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => [{\n    Header: \"First Name\",\n    accessor: 'firstName'\n  }, {\n    Header: \"Last Name\",\n    accessor: 'lastName'\n  }, {\n    Header: \"Email\",\n    accessor: 'email'\n  }, {\n    Header: \"Department\",\n    accessor: 'department'\n  }], []);\n  const {\n    getTableProps,\n    getTableBodyProps,\n    headerGroups,\n    rows,\n    prepareRow\n  } = (0,react_table__WEBPACK_IMPORTED_MODULE_2__.useTable)({\n    columns,\n    data: data.filter(user => user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) || user.lastName.toLowerCase().includes(searchTerm.toLowerCase()) || user.email.toLowerCase().includes(searchTerm.toLowerCase()) || user.department.toLowerCase().includes(searchTerm.toLowerCase()))\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(TableWrapper, _objectSpread(_objectSpread({}, getTableProps()), {}, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"thead\", {\n      children: headerGroups.map(headerGroup => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"tr\", _objectSpread(_objectSpread({}, headerGroup.getHeaderGroupProps()), {}, {\n        children: headerGroup.headers.map(column => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"th\", _objectSpread(_objectSpread({}, column.getHeaderProps), {}, {\n          children: column.render(\"Header\")\n        }), void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 15\n        }, undefined))\n      }), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 11\n      }, undefined))\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"tbody\", _objectSpread(_objectSpread({}, getTableBodyProps()), {}, {\n      children: rows.map(row => {\n        prepareRow(row);\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"tr\", _objectSpread(_objectSpread({}, row.getRowProps), {}, {\n          children: row.cells.map(cell => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"td\", _objectSpread(_objectSpread({}, cell.getCellProps()), {}, {\n            children: cell.render(\"Cell\")\n          }), void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 62,\n            columnNumber: 17\n          }, undefined))\n        }), void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 13\n        }, undefined);\n      })\n    }), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 7\n    }, undefined)]\n  }), void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 46,\n    columnNumber: 5\n  }, undefined);\n};\n\n_s(Table, \"M838U3hxJikW25A/G7CqVKX0wNE=\", false, function () {\n  return [react_table__WEBPACK_IMPORTED_MODULE_2__.useTable];\n});\n\n_c2 = Table;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Table);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"TableWrapper\");\n$RefreshReg$(_c2, \"Table\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cy9UYWJsZS5qc3g/NTQ5ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VUYWJsZSB9IGZyb20gJ3JlYWN0LXRhYmxlJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5jb25zdCBUYWJsZVdyYXBwZXIgPSBzdHlsZWQudGFibGVgXHJcbiAgYmFja2dyb3VuZDogb3JhbmdlO1xyXG4gIHRoLCB0ZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIG1pbi13aWR0aDogMTAwcHg7XHJcbiAgfVxyXG5gO1xyXG5jb25zdCBUYWJsZSA9ICh7IGRhdGEsIHNlYXJjaFRlcm0gfSkgPT4ge1xyXG4gIGNvbnN0IGNvbHVtbnMgPSB1c2VNZW1vKCgpID0+IFtcclxuICAgIHtcclxuICAgICAgSGVhZGVyOiBcIkZpcnN0IE5hbWVcIixcclxuICAgICAgYWNjZXNzb3I6ICdmaXJzdE5hbWUnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBIZWFkZXI6IFwiTGFzdCBOYW1lXCIsXHJcbiAgICAgIGFjY2Vzc29yOiAnbGFzdE5hbWUnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBIZWFkZXI6IFwiRW1haWxcIixcclxuICAgICAgYWNjZXNzb3I6ICdlbWFpbCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIEhlYWRlcjogXCJEZXBhcnRtZW50XCIsXHJcbiAgICAgIGFjY2Vzc29yOiAnZGVwYXJ0bWVudCdcclxuICAgIH0sXHJcbiAgXSwgW10pO1xyXG4gIGNvbnN0IHtcclxuICAgIGdldFRhYmxlUHJvcHMsXHJcbiAgICBnZXRUYWJsZUJvZHlQcm9wcyxcclxuICAgIGhlYWRlckdyb3VwcyxcclxuICAgIHJvd3MsXHJcbiAgICBwcmVwYXJlUm93XHJcbiAgfSA9IHVzZVRhYmxlKHtcclxuICAgIGNvbHVtbnMsXHJcbiAgICBkYXRhOiBkYXRhLmZpbHRlcigodXNlcikgPT4gdXNlci5maXJzdE5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hUZXJtLnRvTG93ZXJDYXNlKCkpXHJcbiAgICAgIHx8IHVzZXIubGFzdE5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hUZXJtLnRvTG93ZXJDYXNlKCkpXHJcbiAgICAgIHx8IHVzZXIuZW1haWwudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hUZXJtLnRvTG93ZXJDYXNlKCkpXHJcbiAgICAgIHx8IHVzZXIuZGVwYXJ0bWVudC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFRlcm0udG9Mb3dlckNhc2UoKSlcclxuICAgIClcclxuICB9KVxyXG4gIHJldHVybiAoXHJcbiAgICA8VGFibGVXcmFwcGVyIHsuLi5nZXRUYWJsZVByb3BzKCl9PlxyXG4gICAgICA8dGhlYWQ+XHJcbiAgICAgICAge2hlYWRlckdyb3Vwcy5tYXAoKGhlYWRlckdyb3VwKSA9PiAoXHJcbiAgICAgICAgICA8dHIgey4uLmhlYWRlckdyb3VwLmdldEhlYWRlckdyb3VwUHJvcHMoKX0+XHJcbiAgICAgICAgICAgIHtoZWFkZXJHcm91cC5oZWFkZXJzLm1hcCgoY29sdW1uKSA9PiAoXHJcbiAgICAgICAgICAgICAgPHRoIHsuLi5jb2x1bW4uZ2V0SGVhZGVyUHJvcHN9Pntjb2x1bW4ucmVuZGVyKFwiSGVhZGVyXCIpfTwvdGg+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICApKX1cclxuICAgICAgPC90aGVhZD5cclxuICAgICAgPHRib2R5IHsuLi5nZXRUYWJsZUJvZHlQcm9wcygpfT5cclxuICAgICAgICB7cm93cy5tYXAoKHJvdykgPT4ge1xyXG4gICAgICAgICAgcHJlcGFyZVJvdyhyb3cpO1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHRyIHsuLi5yb3cuZ2V0Um93UHJvcHN9PlxyXG4gICAgICAgICAgICAgIHtyb3cuY2VsbHMubWFwKChjZWxsKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8dGQgey4uLmNlbGwuZ2V0Q2VsbFByb3BzKCl9PntjZWxsLnJlbmRlcihcIkNlbGxcIil9PC90ZD5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvdGJvZHk+XHJcbiAgICA8L1RhYmxlV3JhcHBlcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYWJsZTtcclxuIl0sIm5hbWVzIjpbInVzZU1lbW8iLCJ1c2VUYWJsZSIsInN0eWxlZCIsIlRhYmxlV3JhcHBlciIsInRhYmxlIiwiVGFibGUiLCJkYXRhIiwic2VhcmNoVGVybSIsImNvbHVtbnMiLCJIZWFkZXIiLCJhY2Nlc3NvciIsImdldFRhYmxlUHJvcHMiLCJnZXRUYWJsZUJvZHlQcm9wcyIsImhlYWRlckdyb3VwcyIsInJvd3MiLCJwcmVwYXJlUm93IiwiZmlsdGVyIiwidXNlciIsImZpcnN0TmFtZSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJsYXN0TmFtZSIsImVtYWlsIiwiZGVwYXJ0bWVudCIsIm1hcCIsImhlYWRlckdyb3VwIiwiZ2V0SGVhZGVyR3JvdXBQcm9wcyIsImhlYWRlcnMiLCJjb2x1bW4iLCJnZXRIZWFkZXJQcm9wcyIsInJlbmRlciIsInJvdyIsImdldFJvd1Byb3BzIiwiY2VsbHMiLCJjZWxsIiwiZ2V0Q2VsbFByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Table.jsx\n"));

/***/ })

});