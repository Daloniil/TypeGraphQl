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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_daloniil_Desktop_Programer_TypeGraphQl_components_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_daloniil_Desktop_Programer_TypeGraphQl_components_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_daloniil_Desktop_Programer_TypeGraphQl_components_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _generated__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../generated */ \"./generated.tsx\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar Home = function() {\n    var _this1 = _this;\n    _s();\n    var data = (0,_generated__WEBPACK_IMPORTED_MODULE_3__.useGetTasksQuery)().data;\n    var ref = _slicedToArray((0,_generated__WEBPACK_IMPORTED_MODULE_3__.useCreateTaskMutation)(), 1), createTask = ref[0];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), task1 = ref1[0], setTask = ref1[1];\n    var addTask = function() {\n        var _ref = _asyncToGenerator(_Users_daloniil_Desktop_Programer_TypeGraphQl_components_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return _Users_daloniil_Desktop_Programer_TypeGraphQl_components_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return createTask({\n                            variables: {\n                                title: \"testUi\"\n                            }\n                        });\n                    case 2:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function addTask() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        setTask(data);\n    }, [\n        data\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            data ? data.getTasks.map(function(task) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                    children: task.title\n                }, task.id, false, {\n                    fileName: \"/Users/daloniil/Desktop/Programer/TypeGraphQl/components/pages/index.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 39\n                }, _this1);\n            }) : \"\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                onClick: addTask\n            }, void 0, false, {\n                fileName: \"/Users/daloniil/Desktop/Programer/TypeGraphQl/components/pages/index.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/daloniil/Desktop/Programer/TypeGraphQl/components/pages/index.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, _this);\n};\n_s(Home, \"YgOreDBDpJVG/u+rKhjfjFmfbJM=\", false, function() {\n    return [\n        _generated__WEBPACK_IMPORTED_MODULE_3__.useGetTasksQuery,\n        _generated__WEBPACK_IMPORTED_MODULE_3__.useCreateTaskMutation\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQzRDO0FBQzJCOztBQUV2RSxJQUFNSSxJQUFJLEdBQWEsV0FBTTs7O0lBQzNCLElBQU0sSUFBTSxHQUFLRCw0REFBZ0IsRUFBRSxDQUEzQkUsSUFBSTtJQUNaLElBQXFCSCxHQUF1QixrQkFBdkJBLGlFQUFxQixFQUFFLE1BQXJDSSxVQUFVLEdBQUlKLEdBQXVCLEdBQTNCO0lBRWpCLElBQXdCRCxJQUE2QixHQUE3QkEsK0NBQVEsQ0FBQyxFQUFFLENBQWtCLEVBUnZELEtBUWEsR0FBYUEsSUFBNkIsR0FBMUMsRUFSYixPQVFzQixHQUFJQSxJQUE2QixHQUFqQztJQUVwQixJQUFNUSxPQUFPO21CQUFHLHlNQUFZOzs7OzsrQkFDcEJILFVBQVUsQ0FBQzs0QkFDZkksU0FBUyxFQUFFO2dDQUNUQyxLQUFLLEVBQUUsUUFBUTs2QkFDaEI7eUJBQ0YsQ0FBQzs7Ozs7O1NBQ0g7d0JBTktGLE9BQU87OztPQU1aO0lBRURULGdEQUFTLENBQUMsV0FBTTtRQUNkUSxPQUFPLENBQUNILElBQUksQ0FBQyxDQUFDO0tBQ2YsRUFBRTtRQUFDQSxJQUFJO0tBQUMsQ0FBQyxDQUFDO0lBRVgscUJBQ0UsOERBQUNPLEtBQUc7O1lBQ0RQLElBQUksR0FDREEsSUFBSSxDQUFDUSxRQUFRLENBQUNDLEdBQUcsQ0FBQyxTQUFDUCxJQUFJO3FDQUFLLDhEQUFDUSxHQUFDOzhCQUFnQlIsSUFBSSxDQUFDSSxLQUFLO21CQUFwQkosSUFBSSxDQUFDUyxFQUFFOzs7OzBCQUFrQjthQUFBLENBQUMsR0FDOUQsRUFBRTswQkFDTiw4REFBQ0MsUUFBTTtnQkFBQ0MsT0FBTyxFQUFFVCxPQUFPOzs7OztxQkFBVzs7Ozs7O2FBQy9CLENBQ047Q0FDSDtHQTFCS0wsSUFBSTs7UUFDU0Qsd0RBQWdCO1FBQ1pELDZEQUFxQjs7O0FBRnRDRSxLQUFBQSxJQUFJO0FBNEJWLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VDcmVhdGVUYXNrTXV0YXRpb24sIHVzZUdldFRhc2tzUXVlcnkgfSBmcm9tIFwiLi4vZ2VuZXJhdGVkXCI7XG5cbmNvbnN0IEhvbWU6IE5leHRQYWdlID0gKCkgPT4ge1xuICBjb25zdCB7IGRhdGEgfSA9IHVzZUdldFRhc2tzUXVlcnkoKTtcbiAgY29uc3QgW2NyZWF0ZVRhc2tdID0gdXNlQ3JlYXRlVGFza011dGF0aW9uKCk7XG5cbiAgY29uc3QgW3Rhc2ssIHNldFRhc2tdID0gdXNlU3RhdGUoXCJcIiBhcyBHZXRUYXNrc1F1ZXJ5KTtcblxuICBjb25zdCBhZGRUYXNrID0gYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IGNyZWF0ZVRhc2soe1xuICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgIHRpdGxlOiBcInRlc3RVaVwiLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFRhc2soZGF0YSk7XG4gIH0sIFtkYXRhXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAge2RhdGFcbiAgICAgICAgPyBkYXRhLmdldFRhc2tzLm1hcCgodGFzaykgPT4gPHAga2V5PXt0YXNrLmlkfT57dGFzay50aXRsZX08L3A+KVxuICAgICAgICA6IFwiXCJ9XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2FkZFRhc2t9PjwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZUNyZWF0ZVRhc2tNdXRhdGlvbiIsInVzZUdldFRhc2tzUXVlcnkiLCJIb21lIiwiZGF0YSIsImNyZWF0ZVRhc2siLCJ0YXNrIiwic2V0VGFzayIsImFkZFRhc2siLCJ2YXJpYWJsZXMiLCJ0aXRsZSIsImRpdiIsImdldFRhc2tzIiwibWFwIiwicCIsImlkIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});