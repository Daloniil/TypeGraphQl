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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _generated__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../generated */ \"./generated.tsx\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\n\n\nvar _s = $RefreshSig$();\nvar Home = function() {\n    var _this1 = _this;\n    _s();\n    var data = (0,_generated__WEBPACK_IMPORTED_MODULE_1__.useGetTasksQuery)().data;\n    var ref = _slicedToArray((0,_generated__WEBPACK_IMPORTED_MODULE_1__.useCreateTaskMutation)(), 1), createTask = ref[0];\n    createTask({\n        variables: {\n            title: \"testUi\"\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            data ? data.getTasks.map(function(task) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: task.title\n                }, task.id, false, {\n                    fileName: \"/Users/daloniil/Desktop/Programer/TypeGraphQl/components/pages/index.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 39\n                }, _this1);\n            }) : \"\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {}, void 0, false, {\n                fileName: \"/Users/daloniil/Desktop/Programer/TypeGraphQl/components/pages/index.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/daloniil/Desktop/Programer/TypeGraphQl/components/pages/index.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, _this);\n};\n_s(Home, \"RB1yxYiMvM+d96bg/mAJ7CfKueU=\", false, function() {\n    return [\n        _generated__WEBPACK_IMPORTED_MODULE_1__.useGetTasksQuery,\n        _generated__WEBPACK_IMPORTED_MODULE_1__.useCreateTaskMutation\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDdUU7O0FBRXZFLElBQU1FLElBQUksR0FBYSxXQUFNOzs7SUFDM0IsSUFBTSxJQUFNLEdBQUtELDREQUFnQixFQUFFLENBQTNCRSxJQUFJO0lBQ1osSUFBcUJILEdBQXVCLGtCQUF2QkEsaUVBQXFCLEVBQUUsTUFBckNJLFVBQVUsR0FBSUosR0FBdUIsR0FBM0I7SUFDakJJLFVBQVUsQ0FBQztRQUNUQyxTQUFTLEVBQUU7WUFDVEMsS0FBSyxFQUFFLFFBQVE7U0FDaEI7S0FDRixDQUFDLENBQUM7SUFFSCxxQkFDRSw4REFBQ0MsS0FBRzs7WUFDREosSUFBSSxHQUNEQSxJQUFJLENBQUNLLFFBQVEsQ0FBQ0MsR0FBRyxDQUFDLFNBQUNDLElBQUk7cUNBQUssOERBQUNDLEdBQUM7OEJBQWdCRCxJQUFJLENBQUNKLEtBQUs7bUJBQXBCSSxJQUFJLENBQUNFLEVBQUU7Ozs7MEJBQWtCO2FBQUEsQ0FBQyxHQUM5RCxFQUFFOzBCQUNOLDhEQUFDQyxRQUFNOzs7O3FCQUFVOzs7Ozs7YUFDYixDQUNOO0NBQ0g7R0FqQktYLElBQUk7O1FBQ1NELHdEQUFnQjtRQUNaRCw2REFBcUI7OztBQUZ0Q0UsS0FBQUEsSUFBSTtBQW1CViwrREFBZUEsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgdXNlQ3JlYXRlVGFza011dGF0aW9uLCB1c2VHZXRUYXNrc1F1ZXJ5IH0gZnJvbSBcIi4uL2dlbmVyYXRlZFwiO1xuXG5jb25zdCBIb21lOiBOZXh0UGFnZSA9ICgpID0+IHtcbiAgY29uc3QgeyBkYXRhIH0gPSB1c2VHZXRUYXNrc1F1ZXJ5KCk7XG4gIGNvbnN0IFtjcmVhdGVUYXNrXSA9IHVzZUNyZWF0ZVRhc2tNdXRhdGlvbigpO1xuICBjcmVhdGVUYXNrKHtcbiAgICB2YXJpYWJsZXM6IHtcbiAgICAgIHRpdGxlOiBcInRlc3RVaVwiLFxuICAgIH0sXG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHtkYXRhXG4gICAgICAgID8gZGF0YS5nZXRUYXNrcy5tYXAoKHRhc2spID0+IDxwIGtleT17dGFzay5pZH0+e3Rhc2sudGl0bGV9PC9wPilcbiAgICAgICAgOiBcIlwifVxuICAgICAgPGJ1dHRvbj48L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwibmFtZXMiOlsidXNlQ3JlYXRlVGFza011dGF0aW9uIiwidXNlR2V0VGFza3NRdWVyeSIsIkhvbWUiLCJkYXRhIiwiY3JlYXRlVGFzayIsInZhcmlhYmxlcyIsInRpdGxlIiwiZGl2IiwiZ2V0VGFza3MiLCJtYXAiLCJ0YXNrIiwicCIsImlkIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});