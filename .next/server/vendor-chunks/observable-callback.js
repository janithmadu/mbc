"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/observable-callback";
exports.ids = ["vendor-chunks/observable-callback"];
exports.modules = {

/***/ "(ssr)/./node_modules/observable-callback/dist/esm/observableCallback.js":
/*!*************************************************************************!*\
  !*** ./node_modules/observable-callback/dist/esm/observableCallback.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   observableCallback: () => (/* binding */ observableCallback)\n/* harmony export */ });\n/* harmony import */ var _barrel_optimize_names_Subject_rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! __barrel_optimize__?names=Subject!=!rxjs */ \"(ssr)/./node_modules/rxjs/dist/cjs/index.js\");\n/* harmony import */ var _barrel_optimize_names_Subject_rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_barrel_optimize_names_Subject_rxjs__WEBPACK_IMPORTED_MODULE_0__);\n\nvar pass = function(input$) {\n    return input$;\n};\nfunction observableCallback(operator) {\n    if (operator === void 0) {\n        operator = pass;\n    }\n    var subject = new _barrel_optimize_names_Subject_rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();\n    return [\n        subject.pipe(operator),\n        function(arg) {\n            return subject.next(arg);\n        }\n    ];\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvb2JzZXJ2YWJsZS1jYWxsYmFjay9kaXN0L2VzbS9vYnNlcnZhYmxlQ2FsbGJhY2suanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQStCO0FBQy9CLElBQUlDLE9BQU8sU0FBVUMsTUFBTTtJQUFJLE9BQU9BO0FBQVE7QUFDdkMsU0FBU0MsbUJBQW1CQyxRQUFRO0lBQ3ZDLElBQUlBLGFBQWEsS0FBSyxHQUFHO1FBQUVBLFdBQVdIO0lBQU07SUFDNUMsSUFBSUksVUFBVSxJQUFJTCx3RUFBT0E7SUFDekIsT0FBTztRQUFDSyxRQUFRQyxJQUFJLENBQUNGO1FBQVcsU0FBVUcsR0FBRztZQUFJLE9BQU9GLFFBQVFHLElBQUksQ0FBQ0Q7UUFBTTtLQUFFO0FBQ2pGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWJjLy4vbm9kZV9tb2R1bGVzL29ic2VydmFibGUtY2FsbGJhY2svZGlzdC9lc20vb2JzZXJ2YWJsZUNhbGxiYWNrLmpzPzU5YjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gXCJyeGpzXCI7XG52YXIgcGFzcyA9IGZ1bmN0aW9uIChpbnB1dCQpIHsgcmV0dXJuIGlucHV0JDsgfTtcbmV4cG9ydCBmdW5jdGlvbiBvYnNlcnZhYmxlQ2FsbGJhY2sob3BlcmF0b3IpIHtcbiAgICBpZiAob3BlcmF0b3IgPT09IHZvaWQgMCkgeyBvcGVyYXRvciA9IHBhc3M7IH1cbiAgICB2YXIgc3ViamVjdCA9IG5ldyBTdWJqZWN0KCk7XG4gICAgcmV0dXJuIFtzdWJqZWN0LnBpcGUob3BlcmF0b3IpLCBmdW5jdGlvbiAoYXJnKSB7IHJldHVybiBzdWJqZWN0Lm5leHQoYXJnKTsgfV07XG59XG4iXSwibmFtZXMiOlsiU3ViamVjdCIsInBhc3MiLCJpbnB1dCQiLCJvYnNlcnZhYmxlQ2FsbGJhY2siLCJvcGVyYXRvciIsInN1YmplY3QiLCJwaXBlIiwiYXJnIiwibmV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/observable-callback/dist/esm/observableCallback.js\n");

/***/ })

};
;