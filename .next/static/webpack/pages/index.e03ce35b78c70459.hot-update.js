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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_class_call_check.mjs */ \"./node_modules/@swc/helpers/src/_class_call_check.mjs\");\n/* harmony import */ var _swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_create_class.mjs */ \"./node_modules/@swc/helpers/src/_create_class.mjs\");\n/* harmony import */ var _swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_inherits.mjs */ \"./node_modules/@swc/helpers/src/_inherits.mjs\");\n/* harmony import */ var _swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_create_super.mjs */ \"./node_modules/@swc/helpers/src/_create_super.mjs\");\n/* harmony import */ var _Users_terryrossi1_Desktop_A_Computer_Science_Solidicy_new_bap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_terryrossi1_Desktop_A_Computer_Science_Solidicy_new_bap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_terryrossi1_Desktop_A_Computer_Science_Solidicy_new_bap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _ethereum_factorybap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ethereum/factorybap */ \"./ethereum/factorybap.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../routes */ \"./routes.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\n\n\n//import factory from \"../ethereum/factory\";\n// new code --\n\n// -- new code\n\n\n//class CampaignIndex extends Component {\nvar CampaignIndex = /*#__PURE__*/ function(Component) {\n    \"use strict\";\n    (0,_swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(CampaignIndex, Component);\n    var _super = (0,_swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(CampaignIndex);\n    function CampaignIndex() {\n        (0,_swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(this, CampaignIndex);\n        return _super.apply(this, arguments);\n    }\n    (0,_swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(CampaignIndex, [\n        {\n            key: \"renderCampaigns\",\n            value: function renderCampaigns() {\n                console.log(\"this.props.bulls = \", this.props.bulls);\n                var items = this.props.bulls.map(function(bull) {\n                    return {\n                        header: bull.num,\n                        description: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_routes__WEBPACK_IMPORTED_MODULE_5__.Link, {\n                            route: \"/campaigns/\".concat(bull.owner),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                children: \"View Bull\"\n                            }, void 0, false, {\n                                fileName: \"/Users/terryrossi1/Desktop/A- Computer Science/Solidicy/new_bap/pages/index.js\",\n                                lineNumber: 61,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/terryrossi1/Desktop/A- Computer Science/Solidicy/new_bap/pages/index.js\",\n                            lineNumber: 60,\n                            columnNumber: 11\n                        }, this),\n                        fluid: true\n                    };\n                });\n                //\n                // console.log(items);\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__.Card.Group, {\n                    items: items\n                }, void 0, false, {\n                    fileName: \"/Users/terryrossi1/Desktop/A- Computer Science/Solidicy/new_bap/pages/index.js\",\n                    lineNumber: 69,\n                    columnNumber: 12\n                }, this);\n            }\n        },\n        {\n            key: \"render\",\n            value: function render() {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                children: \"Open Campaigns\"\n                            }, void 0, false, {\n                                fileName: \"/Users/terryrossi1/Desktop/A- Computer Science/Solidicy/new_bap/pages/index.js\",\n                                lineNumber: 76,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_routes__WEBPACK_IMPORTED_MODULE_5__.Link, {\n                                route: \"/campaigns/new\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__.Button, {\n                                        floated: \"right\",\n                                        content: \"Create Campaign\",\n                                        icon: \"add circle\",\n                                        primary: true\n                                    }, void 0, false, {\n                                        fileName: \"/Users/terryrossi1/Desktop/A- Computer Science/Solidicy/new_bap/pages/index.js\",\n                                        lineNumber: 79,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/terryrossi1/Desktop/A- Computer Science/Solidicy/new_bap/pages/index.js\",\n                                    lineNumber: 78,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/terryrossi1/Desktop/A- Computer Science/Solidicy/new_bap/pages/index.js\",\n                                lineNumber: 77,\n                                columnNumber: 11\n                            }, this),\n                            this.renderCampaigns()\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/terryrossi1/Desktop/A- Computer Science/Solidicy/new_bap/pages/index.js\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/terryrossi1/Desktop/A- Computer Science/Solidicy/new_bap/pages/index.js\",\n                    lineNumber: 74,\n                    columnNumber: 7\n                }, this);\n            }\n        }\n    ], [\n        {\n            key: \"getInitialProps\",\n            value: // we're using getInitialProps because of Next.js otherwise componentDidMount\n            // this makes the call to web3 much more efficient because next does server side rendering\n            function getInitialProps() {\n                return (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(_Users_terryrossi1_Desktop_A_Computer_Science_Solidicy_new_bap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                    var bulls, minted, i, bull, balanceOf, breedings, img;\n                    return _Users_terryrossi1_Desktop_A_Computer_Science_Solidicy_new_bap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                        while(1)switch(_ctx.prev = _ctx.next){\n                            case 0:\n                                bulls = [];\n                                _ctx.next = 3;\n                                return _ethereum_factorybap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].methods.minted().call();\n                            case 3:\n                                minted = _ctx.sent;\n                                i = 1;\n                            case 5:\n                                if (!(i <= parseInt(5))) {\n                                    _ctx.next = 20;\n                                    break;\n                                }\n                                _ctx.next = 8;\n                                return _ethereum_factorybap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].methods.ownerOf(i).call();\n                            case 8:\n                                bull = _ctx.sent;\n                                _ctx.next = 11;\n                                return _ethereum_factorybap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].methods.balanceOf(bull).call();\n                            case 11:\n                                balanceOf = _ctx.sent;\n                                _ctx.next = 14;\n                                return _ethereum_factorybap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].methods.breedings(i).call();\n                            case 14:\n                                breedings = _ctx.sent;\n                                img = \"https://bulls-and-apes-images-resized.s3.amazonaws.com/OGBull.00039.png\";\n                                bulls.push({\n                                    owner: bull,\n                                    balanceOf: balanceOf,\n                                    num: i,\n                                    breedings: breedings,\n                                    img: img\n                                });\n                            case 17:\n                                i++;\n                                _ctx.next = 5;\n                                break;\n                            case 20:\n                                return _ctx.abrupt(\"return\", {\n                                    bulls: bulls\n                                });\n                            case 21:\n                            case \"end\":\n                                return _ctx.stop();\n                        }\n                    }, _callee);\n                }))();\n            }\n        }\n    ]);\n    return CampaignIndex;\n}(react__WEBPACK_IMPORTED_MODULE_2__.Component);\n/* harmony default export */ __webpack_exports__[\"default\"] = (CampaignIndex);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TkUsU0FBUyxFQUFFQSxTQUFTO29DQUNwQkMsR0FBRyxFQUFFQSxHQUFHO2lDQUNULENBQUMsQ0FBQzs7Z0NBYjZCSCxDQUFDLEVBQUU7Ozs7NkRBZ0M5QjtvQ0FBRXJCLEtBQUssRUFBTEEsS0FBSztpQ0FBRTs7Ozs7O2lCQUNqQjthQUFBOzs7O0NBd0NGLENBakYyQlgsNENBQVMsQ0FpRnBDO0FBRUQsK0RBQWVNLGFBQWEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENhcmQsIEJ1dHRvbiB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuLy9pbXBvcnQgZmFjdG9yeSBmcm9tIFwiLi4vZXRoZXJldW0vZmFjdG9yeVwiO1xuLy8gbmV3IGNvZGUgLS1cbmltcG9ydCBmYWN0b3J5YmFwIGZyb20gXCIuLi9ldGhlcmV1bS9mYWN0b3J5YmFwXCI7XG4vLyAtLSBuZXcgY29kZVxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwiLi4vcm91dGVzXCI7XG5cbi8vY2xhc3MgQ2FtcGFpZ25JbmRleCBleHRlbmRzIENvbXBvbmVudCB7XG5jbGFzcyBDYW1wYWlnbkluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgLy8gd2UncmUgdXNpbmcgZ2V0SW5pdGlhbFByb3BzIGJlY2F1c2Ugb2YgTmV4dC5qcyBvdGhlcndpc2UgY29tcG9uZW50RGlkTW91bnRcbiAgLy8gdGhpcyBtYWtlcyB0aGUgY2FsbCB0byB3ZWIzIG11Y2ggbW9yZSBlZmZpY2llbnQgYmVjYXVzZSBuZXh0IGRvZXMgc2VydmVyIHNpZGUgcmVuZGVyaW5nXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKSB7XG4gICAgY29uc3QgYnVsbHMgPSBbXTtcblxuICAgIGNvbnN0IG1pbnRlZCA9IGF3YWl0IGZhY3RvcnliYXAubWV0aG9kcy5taW50ZWQoKS5jYWxsKCk7XG5cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBwYXJzZUludCg1KTsgaSsrKSB7XG4gICAgICBjb25zdCBidWxsID0gYXdhaXQgZmFjdG9yeWJhcC5tZXRob2RzLm93bmVyT2YoaSkuY2FsbCgpO1xuICAgICAgY29uc3QgYmFsYW5jZU9mID0gYXdhaXQgZmFjdG9yeWJhcC5tZXRob2RzLmJhbGFuY2VPZihidWxsKS5jYWxsKCk7XG4gICAgICAvLyBjb25zdCB0aW1lU3RhbXAgPSBhd2FpdCBmYWN0b3J5YmFwLm1ldGhvZHMuZ2VuZXNpc1RpbWVzdGFtcChidWxsKS5jYWxsKCk7XG4gICAgICBjb25zdCBicmVlZGluZ3MgPSBhd2FpdCBmYWN0b3J5YmFwLm1ldGhvZHMuYnJlZWRpbmdzKGkpLmNhbGwoKTtcblxuICAgICAgY29uc3QgaW1nID0gYGh0dHBzOi8vYnVsbHMtYW5kLWFwZXMtaW1hZ2VzLXJlc2l6ZWQuczMuYW1hem9uYXdzLmNvbS9PR0J1bGwuMDAwMzkucG5nYDtcbiAgICAgIGJ1bGxzLnB1c2goe1xuICAgICAgICBvd25lcjogYnVsbCxcbiAgICAgICAgYmFsYW5jZU9mOiBiYWxhbmNlT2YsXG4gICAgICAgIG51bTogaSxcbiAgICAgICAgYnJlZWRpbmdzOiBicmVlZGluZ3MsXG4gICAgICAgIGltZzogaW1nXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8PSBwYXJzZUludCg1KTsgaSsrKSB7XG4gICAgLy8gICBjb25zdCBvd25lciA9IGF3YWl0IGZhY3RvcnliYXAubWV0aG9kcy5vd25lck9mKGkpLmNhbGwoKTtcbiAgICAvLyAgIGJ1bGxzLnB1c2goeyBvd25lcjogb3duZXIsIG51bTogaSArIDEgfSk7XG4gICAgLy8gICBjb25zb2xlLmxvZyhidWxscyk7XG4gICAgLy8gfVxuICAgIC8vIGNvbnNvbGUubG9nKFwiT2JqZWN0LmtleXMgPSBcIiwgT2JqZWN0LmtleXMoYnVsbHMpKTtcbiAgICAvLyBjb25zdCBsZXNLZXlzID0gT2JqZWN0LmtleXMoYnVsbHMpO1xuICAgIC8vIGNvbnNvbGUubG9nKFwibGVzS2V5cyA9IFwiLCBsZXNLZXlzKTtcbiAgICAvLyBjb25zb2xlLmxvZyhcIkJBUCBuYW1lID0gXCIsIGJ1bGxzKTtcbiAgICAvLyByZXR1cm4geyBidWxscyB9O1xuICAgIC8vIGxldCBidWxsc09iaiA9IHsgbnVtOiAxLCBvd25lcjogXCJ0b3RvXCIgfTtcbiAgICAvLyBjb25zb2xlLmxvZyhcIioqKioqKioqKiBidWxsc09iaiBpbml0ID0gXCIsIGJ1bGxzT2JqLm51bSk7XG4gICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPD0gcGFyc2VJbnQoNSk7IGkrKykge1xuICAgIC8vICAgY29uc3QgYnVsbCA9IGF3YWl0IGZhY3RvcnliYXAubWV0aG9kcy5vd25lck9mKGkpLmNhbGwoKTtcbiAgICAvLyAgIGNvbnNvbGUubG9nKFwiYnVsbCBpcyA9IFwiLCBidWxsKTtcbiAgICAvLyBidWxsc09ialsxXSA9IHsgbnVtOiAxMCwgb3duZXI6IGJ1bGwgfTtcbiAgICByZXR1cm4geyBidWxscyB9O1xuICB9XG5cbiAgcmVuZGVyQ2FtcGFpZ25zKCkge1xuICAgIGNvbnNvbGUubG9nKFwidGhpcy5wcm9wcy5idWxscyA9IFwiLCB0aGlzLnByb3BzLmJ1bGxzKTtcbiAgICBjb25zdCBpdGVtcyA9IHRoaXMucHJvcHMuYnVsbHMubWFwKGZ1bmN0aW9uKGJ1bGwpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGhlYWRlcjogYnVsbC5udW0sXG4gICAgICAgIGRlc2NyaXB0aW9uOiAoXG4gICAgICAgICAgPExpbmsgcm91dGU9e2AvY2FtcGFpZ25zLyR7YnVsbC5vd25lcn1gfT5cbiAgICAgICAgICAgIDxhPlZpZXcgQnVsbDwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICksXG4gICAgICAgIGZsdWlkOiB0cnVlXG4gICAgICB9O1xuICAgIH0pO1xuICAgIC8vXG4gICAgLy8gY29uc29sZS5sb2coaXRlbXMpO1xuICAgIHJldHVybiA8Q2FyZC5Hcm91cCBpdGVtcz17aXRlbXN9IC8+O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMz5PcGVuIENhbXBhaWduczwvaDM+XG4gICAgICAgICAgPExpbmsgcm91dGU9XCIvY2FtcGFpZ25zL25ld1wiPlxuICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBmbG9hdGVkPVwicmlnaHRcIlxuICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJDcmVhdGUgQ2FtcGFpZ25cIlxuICAgICAgICAgICAgICAgIGljb249XCJhZGQgY2lyY2xlXCJcbiAgICAgICAgICAgICAgICBwcmltYXJ5XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIHt0aGlzLnJlbmRlckNhbXBhaWducygpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTGF5b3V0PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FtcGFpZ25JbmRleDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkNhcmQiLCJCdXR0b24iLCJmYWN0b3J5YmFwIiwiTGF5b3V0IiwiTGluayIsIkNhbXBhaWduSW5kZXgiLCJyZW5kZXJDYW1wYWlnbnMiLCJjb25zb2xlIiwibG9nIiwicHJvcHMiLCJidWxscyIsIml0ZW1zIiwibWFwIiwiYnVsbCIsImhlYWRlciIsIm51bSIsImRlc2NyaXB0aW9uIiwicm91dGUiLCJvd25lciIsImEiLCJmbHVpZCIsIkdyb3VwIiwicmVuZGVyIiwiZGl2IiwiaDMiLCJmbG9hdGVkIiwiY29udGVudCIsImljb24iLCJwcmltYXJ5IiwiZ2V0SW5pdGlhbFByb3BzIiwibWludGVkIiwiaSIsImJhbGFuY2VPZiIsImJyZWVkaW5ncyIsImltZyIsIm1ldGhvZHMiLCJjYWxsIiwicGFyc2VJbnQiLCJvd25lck9mIiwicHVzaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});