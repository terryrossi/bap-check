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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_class_call_check.mjs */ \"./node_modules/@swc/helpers/src/_class_call_check.mjs\");\n/* harmony import */ var _swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_create_class.mjs */ \"./node_modules/@swc/helpers/src/_create_class.mjs\");\n/* harmony import */ var _swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_inherits.mjs */ \"./node_modules/@swc/helpers/src/_inherits.mjs\");\n/* harmony import */ var _swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_create_super.mjs */ \"./node_modules/@swc/helpers/src/_create_super.mjs\");\n/* harmony import */ var _Users_terryrossi1_Desktop_A_Computer_Science_Solidicy_new_bap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_terryrossi1_Desktop_A_Computer_Science_Solidicy_new_bap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_terryrossi1_Desktop_A_Computer_Science_Solidicy_new_bap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _ethereum_factorybap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ethereum/factorybap */ \"./ethereum/factorybap.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../routes */ \"./routes.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\n\n\n//import factory from \"../ethereum/factory\";\n// new code --\n\n// -- new code\n\n\n//class CampaignIndex extends Component {\nvar CampaignIndex = /*#__PURE__*/ function(Component) {\n    \"use strict\";\n    (0,_swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(CampaignIndex, Component);\n    var _super = (0,_swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(CampaignIndex);\n    function CampaignIndex() {\n        (0,_swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(this, CampaignIndex);\n        return _super.apply(this, arguments);\n    }\n    (0,_swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(CampaignIndex, [\n        {\n            key: \"renderCampaigns\",\n            value: function renderCampaigns() {\n                console.log(\"this.props.bulls = \", this.props.bulls);\n                var items = this.props.bulls.map(function(bull, i) {\n                    return {\n                        childKey: i,\n                        image: bull.img,\n                        header: \"Bull # \".concat(bull.num),\n                        description: bull.owner,\n                        meta: bull.balanceOf,\n                        extra: bull.breedings\n                    };\n                });\n                //\n                // console.log(items);\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__.Card.Group, {\n                    items: items\n                }, void 0, false, {\n                    fileName: \"/Users/terryrossi1/Desktop/A- Computer Science/Solidicy/new_bap/pages/index.js\",\n                    lineNumber: 63,\n                    columnNumber: 12\n                }, this);\n            // return items;\n            }\n        },\n        {\n            key: \"render\",\n            value: function render() {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                children: \"Open Campaigns\"\n                            }, void 0, false, {\n                                fileName: \"/Users/terryrossi1/Desktop/A- Computer Science/Solidicy/new_bap/pages/index.js\",\n                                lineNumber: 71,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_routes__WEBPACK_IMPORTED_MODULE_5__.Link, {\n                                route: \"/campaigns/new\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__.Button, {\n                                        floated: \"right\",\n                                        content: \"Create Campaign\",\n                                        icon: \"add circle\",\n                                        primary: true\n                                    }, void 0, false, {\n                                        fileName: \"/Users/terryrossi1/Desktop/A- Computer Science/Solidicy/new_bap/pages/index.js\",\n                                        lineNumber: 74,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/terryrossi1/Desktop/A- Computer Science/Solidicy/new_bap/pages/index.js\",\n                                    lineNumber: 73,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/terryrossi1/Desktop/A- Computer Science/Solidicy/new_bap/pages/index.js\",\n                                lineNumber: 72,\n                                columnNumber: 11\n                            }, this),\n                            this.renderCampaigns()\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/terryrossi1/Desktop/A- Computer Science/Solidicy/new_bap/pages/index.js\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/terryrossi1/Desktop/A- Computer Science/Solidicy/new_bap/pages/index.js\",\n                    lineNumber: 69,\n                    columnNumber: 7\n                }, this);\n            }\n        }\n    ], [\n        {\n            key: \"getInitialProps\",\n            value: // we're using getInitialProps because of Next.js otherwise componentDidMount\n            // this makes the call to web3 much more efficient because next does server side rendering\n            function getInitialProps() {\n                return (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(_Users_terryrossi1_Desktop_A_Computer_Science_Solidicy_new_bap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                    var bulls, minted, i, bull, balanceOf, breedings, num, img;\n                    return _Users_terryrossi1_Desktop_A_Computer_Science_Solidicy_new_bap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                        while(1)switch(_ctx.prev = _ctx.next){\n                            case 0:\n                                bulls = [];\n                                _ctx.next = 3;\n                                return _ethereum_factorybap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].methods.minted().call();\n                            case 3:\n                                minted = _ctx.sent;\n                                i = 0;\n                            case 5:\n                                if (!(i <= parseInt(5))) {\n                                    _ctx.next = 21;\n                                    break;\n                                }\n                                _ctx.next = 8;\n                                return _ethereum_factorybap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].methods.ownerOf(i).call();\n                            case 8:\n                                bull = _ctx.sent;\n                                _ctx.next = 11;\n                                return _ethereum_factorybap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].methods.balanceOf(bull).call();\n                            case 11:\n                                balanceOf = _ctx.sent;\n                                _ctx.next = 14;\n                                return _ethereum_factorybap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].methods.breedings(i).call();\n                            case 14:\n                                breedings = _ctx.sent;\n                                num = i + 1;\n                                img = \"https://bulls-and-apes-images-resized.s3.amazonaws.com/OGBull.\".concat(num.toString().padStart(5, \"0\"), \".png\");\n                                bulls.push({\n                                    owner: bull,\n                                    balanceOf: balanceOf,\n                                    num: num,\n                                    breedings: breedings,\n                                    img: img\n                                });\n                            case 18:\n                                i++;\n                                _ctx.next = 5;\n                                break;\n                            case 21:\n                                return _ctx.abrupt(\"return\", {\n                                    bulls: bulls\n                                });\n                            case 22:\n                            case \"end\":\n                                return _ctx.stop();\n                        }\n                    }, _callee);\n                }))();\n            }\n        }\n    ]);\n    return CampaignIndex;\n}(react__WEBPACK_IMPORTED_MODULE_2__.Component);\n/* harmony default export */ __webpack_exports__[\"default\"] = (CampaignIndex);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUZxREUsR0FBRyxDQUM3RXVCLFFBQVEsRUFBRSxDQUNWQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFDLE1BQUksQ0FBQyxDQUFDO2dDQUMxQmpDLEtBQUssQ0FBQ2tDLElBQUksQ0FBQztvQ0FDVHZCLEtBQUssRUFBRVIsSUFBSTtvQ0FDWFUsU0FBUyxFQUFFQSxTQUFTO29DQUNwQkosR0FBRyxFQUFFQSxHQUFHO29DQUNSTSxTQUFTLEVBQUVBLFNBQVM7b0NBQ3BCUixHQUFHLEVBQUVBLEdBQUc7aUNBQ1QsQ0FBQyxDQUFDOztnQ0FmNkJILENBQUMsRUFBRTs7Ozs2REFrQjlCO29DQUFFSixLQUFLLEVBQUxBLEtBQUs7aUNBQUU7Ozs7OztpQkFDakI7YUFBQTs7OztDQWlERixDQTVFMkJiLDRDQUFTLENBNEVwQztBQUVELCtEQUFlUSxhQUFhLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDYXJkLCBCdXR0b24sIEl0ZW0sIEltYWdlIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG4vL2ltcG9ydCBmYWN0b3J5IGZyb20gXCIuLi9ldGhlcmV1bS9mYWN0b3J5XCI7XG4vLyBuZXcgY29kZSAtLVxuaW1wb3J0IGZhY3RvcnliYXAgZnJvbSBcIi4uL2V0aGVyZXVtL2ZhY3RvcnliYXBcIjtcbi8vIC0tIG5ldyBjb2RlXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCIuLi9yb3V0ZXNcIjtcblxuLy9jbGFzcyBDYW1wYWlnbkluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcbmNsYXNzIENhbXBhaWduSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xuICAvLyB3ZSdyZSB1c2luZyBnZXRJbml0aWFsUHJvcHMgYmVjYXVzZSBvZiBOZXh0LmpzIG90aGVyd2lzZSBjb21wb25lbnREaWRNb3VudFxuICAvLyB0aGlzIG1ha2VzIHRoZSBjYWxsIHRvIHdlYjMgbXVjaCBtb3JlIGVmZmljaWVudCBiZWNhdXNlIG5leHQgZG9lcyBzZXJ2ZXIgc2lkZSByZW5kZXJpbmdcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcbiAgICBjb25zdCBidWxscyA9IFtdO1xuXG4gICAgY29uc3QgbWludGVkID0gYXdhaXQgZmFjdG9yeWJhcC5tZXRob2RzLm1pbnRlZCgpLmNhbGwoKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IHBhcnNlSW50KDUpOyBpKyspIHtcbiAgICAgIGNvbnN0IGJ1bGwgPSBhd2FpdCBmYWN0b3J5YmFwLm1ldGhvZHMub3duZXJPZihpKS5jYWxsKCk7XG4gICAgICBjb25zdCBiYWxhbmNlT2YgPSBhd2FpdCBmYWN0b3J5YmFwLm1ldGhvZHMuYmFsYW5jZU9mKGJ1bGwpLmNhbGwoKTtcbiAgICAgIC8vIGNvbnN0IHRpbWVTdGFtcCA9IGF3YWl0IGZhY3RvcnliYXAubWV0aG9kcy5nZW5lc2lzVGltZXN0YW1wKGJ1bGwpLmNhbGwoKTtcbiAgICAgIGNvbnN0IGJyZWVkaW5ncyA9IGF3YWl0IGZhY3RvcnliYXAubWV0aG9kcy5icmVlZGluZ3MoaSkuY2FsbCgpO1xuICAgICAgY29uc3QgbnVtID0gaSArIDE7XG4gICAgICBjb25zdCBpbWcgPSBgaHR0cHM6Ly9idWxscy1hbmQtYXBlcy1pbWFnZXMtcmVzaXplZC5zMy5hbWF6b25hd3MuY29tL09HQnVsbC4ke251bVxuICAgICAgICAudG9TdHJpbmcoKVxuICAgICAgICAucGFkU3RhcnQoNSwgXCIwXCIpfS5wbmdgO1xuICAgICAgYnVsbHMucHVzaCh7XG4gICAgICAgIG93bmVyOiBidWxsLFxuICAgICAgICBiYWxhbmNlT2Y6IGJhbGFuY2VPZixcbiAgICAgICAgbnVtOiBudW0sXG4gICAgICAgIGJyZWVkaW5nczogYnJlZWRpbmdzLFxuICAgICAgICBpbWc6IGltZ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgYnVsbHMgfTtcbiAgfVxuXG4gIHJlbmRlckNhbXBhaWducygpIHtcbiAgICBjb25zb2xlLmxvZyhcInRoaXMucHJvcHMuYnVsbHMgPSBcIiwgdGhpcy5wcm9wcy5idWxscyk7XG4gICAgY29uc3QgaXRlbXMgPSB0aGlzLnByb3BzLmJ1bGxzLm1hcChmdW5jdGlvbihidWxsLCBpKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjaGlsZEtleTogaSxcbiAgICAgICAgaW1hZ2U6IGJ1bGwuaW1nLFxuICAgICAgICBoZWFkZXI6IGBCdWxsICMgJHtidWxsLm51bX1gLFxuICAgICAgICBkZXNjcmlwdGlvbjogYnVsbC5vd25lcixcbiAgICAgICAgbWV0YTogYnVsbC5iYWxhbmNlT2YsXG4gICAgICAgIGV4dHJhOiBidWxsLmJyZWVkaW5nc1xuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIGhlYWRlcjogYnVsbC5udW0sXG4gICAgICAgIC8vIGRlc2NyaXB0aW9uOiAoXG4gICAgICAgIC8vICAgPExpbmsgcm91dGU9e2AvY2FtcGFpZ25zLyR7YnVsbC5vd25lcn1gfT5cbiAgICAgICAgLy8gICAgIDxhPlZpZXcgQnVsbDwvYT5cbiAgICAgICAgLy8gICA8L0xpbms+XG4gICAgICAgIC8vICksXG4gICAgICAgIC8vIGZsdWlkOiB0cnVlXG4gICAgICB9O1xuICAgIH0pO1xuICAgIC8vXG4gICAgLy8gY29uc29sZS5sb2coaXRlbXMpO1xuICAgIHJldHVybiA8Q2FyZC5Hcm91cCBpdGVtcz17aXRlbXN9IC8+O1xuICAgIC8vIHJldHVybiBpdGVtcztcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dD5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDM+T3BlbiBDYW1wYWlnbnM8L2gzPlxuICAgICAgICAgIDxMaW5rIHJvdXRlPVwiL2NhbXBhaWducy9uZXdcIj5cbiAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgZmxvYXRlZD1cInJpZ2h0XCJcbiAgICAgICAgICAgICAgICBjb250ZW50PVwiQ3JlYXRlIENhbXBhaWduXCJcbiAgICAgICAgICAgICAgICBpY29uPVwiYWRkIGNpcmNsZVwiXG4gICAgICAgICAgICAgICAgcHJpbWFyeVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICB7dGhpcy5yZW5kZXJDYW1wYWlnbnMoKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0xheW91dD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhbXBhaWduSW5kZXg7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJDYXJkIiwiQnV0dG9uIiwiSXRlbSIsIkltYWdlIiwiZmFjdG9yeWJhcCIsIkxheW91dCIsIkxpbmsiLCJDYW1wYWlnbkluZGV4IiwicmVuZGVyQ2FtcGFpZ25zIiwiY29uc29sZSIsImxvZyIsInByb3BzIiwiYnVsbHMiLCJpdGVtcyIsIm1hcCIsImJ1bGwiLCJpIiwiY2hpbGRLZXkiLCJpbWFnZSIsImltZyIsImhlYWRlciIsIm51bSIsImRlc2NyaXB0aW9uIiwib3duZXIiLCJtZXRhIiwiYmFsYW5jZU9mIiwiZXh0cmEiLCJicmVlZGluZ3MiLCJHcm91cCIsInJlbmRlciIsImRpdiIsImgzIiwicm91dGUiLCJhIiwiZmxvYXRlZCIsImNvbnRlbnQiLCJpY29uIiwicHJpbWFyeSIsImdldEluaXRpYWxQcm9wcyIsIm1pbnRlZCIsIm1ldGhvZHMiLCJjYWxsIiwicGFyc2VJbnQiLCJvd25lck9mIiwidG9TdHJpbmciLCJwYWRTdGFydCIsInB1c2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});