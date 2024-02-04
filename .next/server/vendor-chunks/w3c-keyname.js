"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/w3c-keyname";
exports.ids = ["vendor-chunks/w3c-keyname"];
exports.modules = {

/***/ "(ssr)/./node_modules/w3c-keyname/index.js":
/*!*******************************************!*\
  !*** ./node_modules/w3c-keyname/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   base: () => (/* binding */ base),\n/* harmony export */   keyName: () => (/* binding */ keyName),\n/* harmony export */   shift: () => (/* binding */ shift)\n/* harmony export */ });\nvar base = {\n    8: \"Backspace\",\n    9: \"Tab\",\n    10: \"Enter\",\n    12: \"NumLock\",\n    13: \"Enter\",\n    16: \"Shift\",\n    17: \"Control\",\n    18: \"Alt\",\n    20: \"CapsLock\",\n    27: \"Escape\",\n    32: \" \",\n    33: \"PageUp\",\n    34: \"PageDown\",\n    35: \"End\",\n    36: \"Home\",\n    37: \"ArrowLeft\",\n    38: \"ArrowUp\",\n    39: \"ArrowRight\",\n    40: \"ArrowDown\",\n    44: \"PrintScreen\",\n    45: \"Insert\",\n    46: \"Delete\",\n    59: \";\",\n    61: \"=\",\n    91: \"Meta\",\n    92: \"Meta\",\n    106: \"*\",\n    107: \"+\",\n    108: \",\",\n    109: \"-\",\n    110: \".\",\n    111: \"/\",\n    144: \"NumLock\",\n    145: \"ScrollLock\",\n    160: \"Shift\",\n    161: \"Shift\",\n    162: \"Control\",\n    163: \"Control\",\n    164: \"Alt\",\n    165: \"Alt\",\n    173: \"-\",\n    186: \";\",\n    187: \"=\",\n    188: \",\",\n    189: \"-\",\n    190: \".\",\n    191: \"/\",\n    192: \"`\",\n    219: \"[\",\n    220: \"\\\\\",\n    221: \"]\",\n    222: \"'\"\n};\nvar shift = {\n    48: \")\",\n    49: \"!\",\n    50: \"@\",\n    51: \"#\",\n    52: \"$\",\n    53: \"%\",\n    54: \"^\",\n    55: \"&\",\n    56: \"*\",\n    57: \"(\",\n    59: \":\",\n    61: \"+\",\n    173: \"_\",\n    186: \":\",\n    187: \"+\",\n    188: \"<\",\n    189: \"_\",\n    190: \">\",\n    191: \"?\",\n    192: \"~\",\n    219: \"{\",\n    220: \"|\",\n    221: \"}\",\n    222: '\"'\n};\nvar mac = typeof navigator != \"undefined\" && /Mac/.test(navigator.platform);\nvar ie = typeof navigator != \"undefined\" && /MSIE \\d|Trident\\/(?:[7-9]|\\d{2,})\\..*rv:(\\d+)/.exec(navigator.userAgent);\n// Fill in the digit keys\nfor(var i = 0; i < 10; i++)base[48 + i] = base[96 + i] = String(i);\n// The function keys\nfor(var i = 1; i <= 24; i++)base[i + 111] = \"F\" + i;\n// And the alphabetic keys\nfor(var i = 65; i <= 90; i++){\n    base[i] = String.fromCharCode(i + 32);\n    shift[i] = String.fromCharCode(i);\n}\n// For each code that doesn't have a shift-equivalent, copy the base name\nfor(var code in base)if (!shift.hasOwnProperty(code)) shift[code] = base[code];\nfunction keyName(event) {\n    // On macOS, keys held with Shift and Cmd don't reflect the effect of Shift in `.key`.\n    // On IE, shift effect is never included in `.key`.\n    var ignoreKey = mac && event.metaKey && event.shiftKey && !event.ctrlKey && !event.altKey || ie && event.shiftKey && event.key && event.key.length == 1 || event.key == \"Unidentified\";\n    var name = !ignoreKey && event.key || (event.shiftKey ? shift : base)[event.keyCode] || event.key || \"Unidentified\";\n    // Edge sometimes produces wrong names (Issue #3)\n    if (name == \"Esc\") name = \"Escape\";\n    if (name == \"Del\") name = \"Delete\";\n    // https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/8860571/\n    if (name == \"Left\") name = \"ArrowLeft\";\n    if (name == \"Up\") name = \"ArrowUp\";\n    if (name == \"Right\") name = \"ArrowRight\";\n    if (name == \"Down\") name = \"ArrowDown\";\n    return name;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdzNjLWtleW5hbWUvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQU8sSUFBSUEsT0FBTztJQUNoQixHQUFHO0lBQ0gsR0FBRztJQUNILElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtJQUNKLElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtJQUNKLElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtJQUNKLElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtJQUNKLElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtJQUNKLElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtJQUNKLElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtJQUNKLElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtJQUNKLEtBQUs7SUFDTCxLQUFLO0lBQ0wsS0FBSztJQUNMLEtBQUs7SUFDTCxLQUFLO0lBQ0wsS0FBSztJQUNMLEtBQUs7SUFDTCxLQUFLO0lBQ0wsS0FBSztJQUNMLEtBQUs7SUFDTCxLQUFLO0lBQ0wsS0FBSztJQUNMLEtBQUs7SUFDTCxLQUFLO0lBQ0wsS0FBSztJQUNMLEtBQUs7SUFDTCxLQUFLO0lBQ0wsS0FBSztJQUNMLEtBQUs7SUFDTCxLQUFLO0lBQ0wsS0FBSztJQUNMLEtBQUs7SUFDTCxLQUFLO0lBQ0wsS0FBSztJQUNMLEtBQUs7SUFDTCxLQUFLO0FBQ1AsRUFBQztBQUVNLElBQUlDLFFBQVE7SUFDakIsSUFBSTtJQUNKLElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtJQUNKLElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtJQUNKLElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtJQUNKLElBQUk7SUFDSixJQUFJO0lBQ0osS0FBSztJQUNMLEtBQUs7SUFDTCxLQUFLO0lBQ0wsS0FBSztJQUNMLEtBQUs7SUFDTCxLQUFLO0lBQ0wsS0FBSztJQUNMLEtBQUs7SUFDTCxLQUFLO0lBQ0wsS0FBSztJQUNMLEtBQUs7SUFDTCxLQUFLO0FBQ1AsRUFBQztBQUVELElBQUlDLE1BQU0sT0FBT0MsYUFBYSxlQUFlLE1BQU1DLElBQUksQ0FBQ0QsVUFBVUUsUUFBUTtBQUMxRSxJQUFJQyxLQUFLLE9BQU9ILGFBQWEsZUFBZSxnREFBZ0RJLElBQUksQ0FBQ0osVUFBVUssU0FBUztBQUVwSCx5QkFBeUI7QUFDekIsSUFBSyxJQUFJQyxJQUFJLEdBQUdBLElBQUksSUFBSUEsSUFBS1QsSUFBSSxDQUFDLEtBQUtTLEVBQUUsR0FBR1QsSUFBSSxDQUFDLEtBQUtTLEVBQUUsR0FBR0MsT0FBT0Q7QUFFbEUsb0JBQW9CO0FBQ3BCLElBQUssSUFBSUEsSUFBSSxHQUFHQSxLQUFLLElBQUlBLElBQUtULElBQUksQ0FBQ1MsSUFBSSxJQUFJLEdBQUcsTUFBTUE7QUFFcEQsMEJBQTBCO0FBQzFCLElBQUssSUFBSUEsSUFBSSxJQUFJQSxLQUFLLElBQUlBLElBQUs7SUFDN0JULElBQUksQ0FBQ1MsRUFBRSxHQUFHQyxPQUFPQyxZQUFZLENBQUNGLElBQUk7SUFDbENSLEtBQUssQ0FBQ1EsRUFBRSxHQUFHQyxPQUFPQyxZQUFZLENBQUNGO0FBQ2pDO0FBRUEseUVBQXlFO0FBQ3pFLElBQUssSUFBSUcsUUFBUVosS0FBTSxJQUFJLENBQUNDLE1BQU1ZLGNBQWMsQ0FBQ0QsT0FBT1gsS0FBSyxDQUFDVyxLQUFLLEdBQUdaLElBQUksQ0FBQ1ksS0FBSztBQUV6RSxTQUFTRSxRQUFRQyxLQUFLO0lBQzNCLHNGQUFzRjtJQUN0RixtREFBbUQ7SUFDbkQsSUFBSUMsWUFBWWQsT0FBT2EsTUFBTUUsT0FBTyxJQUFJRixNQUFNRyxRQUFRLElBQUksQ0FBQ0gsTUFBTUksT0FBTyxJQUFJLENBQUNKLE1BQU1LLE1BQU0sSUFDckZkLE1BQU1TLE1BQU1HLFFBQVEsSUFBSUgsTUFBTU0sR0FBRyxJQUFJTixNQUFNTSxHQUFHLENBQUNDLE1BQU0sSUFBSSxLQUN6RFAsTUFBTU0sR0FBRyxJQUFJO0lBQ2pCLElBQUlFLE9BQU8sQ0FBRVAsYUFBYUQsTUFBTU0sR0FBRyxJQUNqQyxDQUFDTixNQUFNRyxRQUFRLEdBQUdqQixRQUFRRCxJQUFHLENBQUUsQ0FBQ2UsTUFBTVMsT0FBTyxDQUFDLElBQzlDVCxNQUFNTSxHQUFHLElBQUk7SUFDZixpREFBaUQ7SUFDakQsSUFBSUUsUUFBUSxPQUFPQSxPQUFPO0lBQzFCLElBQUlBLFFBQVEsT0FBT0EsT0FBTztJQUMxQixnRkFBZ0Y7SUFDaEYsSUFBSUEsUUFBUSxRQUFRQSxPQUFPO0lBQzNCLElBQUlBLFFBQVEsTUFBTUEsT0FBTztJQUN6QixJQUFJQSxRQUFRLFNBQVNBLE9BQU87SUFDNUIsSUFBSUEsUUFBUSxRQUFRQSxPQUFPO0lBQzNCLE9BQU9BO0FBQ1QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYmMvLi9ub2RlX21vZHVsZXMvdzNjLWtleW5hbWUvaW5kZXguanM/MGZhMSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgdmFyIGJhc2UgPSB7XG4gIDg6IFwiQmFja3NwYWNlXCIsXG4gIDk6IFwiVGFiXCIsXG4gIDEwOiBcIkVudGVyXCIsXG4gIDEyOiBcIk51bUxvY2tcIixcbiAgMTM6IFwiRW50ZXJcIixcbiAgMTY6IFwiU2hpZnRcIixcbiAgMTc6IFwiQ29udHJvbFwiLFxuICAxODogXCJBbHRcIixcbiAgMjA6IFwiQ2Fwc0xvY2tcIixcbiAgMjc6IFwiRXNjYXBlXCIsXG4gIDMyOiBcIiBcIixcbiAgMzM6IFwiUGFnZVVwXCIsXG4gIDM0OiBcIlBhZ2VEb3duXCIsXG4gIDM1OiBcIkVuZFwiLFxuICAzNjogXCJIb21lXCIsXG4gIDM3OiBcIkFycm93TGVmdFwiLFxuICAzODogXCJBcnJvd1VwXCIsXG4gIDM5OiBcIkFycm93UmlnaHRcIixcbiAgNDA6IFwiQXJyb3dEb3duXCIsXG4gIDQ0OiBcIlByaW50U2NyZWVuXCIsXG4gIDQ1OiBcIkluc2VydFwiLFxuICA0NjogXCJEZWxldGVcIixcbiAgNTk6IFwiO1wiLFxuICA2MTogXCI9XCIsXG4gIDkxOiBcIk1ldGFcIixcbiAgOTI6IFwiTWV0YVwiLFxuICAxMDY6IFwiKlwiLFxuICAxMDc6IFwiK1wiLFxuICAxMDg6IFwiLFwiLFxuICAxMDk6IFwiLVwiLFxuICAxMTA6IFwiLlwiLFxuICAxMTE6IFwiL1wiLFxuICAxNDQ6IFwiTnVtTG9ja1wiLFxuICAxNDU6IFwiU2Nyb2xsTG9ja1wiLFxuICAxNjA6IFwiU2hpZnRcIixcbiAgMTYxOiBcIlNoaWZ0XCIsXG4gIDE2MjogXCJDb250cm9sXCIsXG4gIDE2MzogXCJDb250cm9sXCIsXG4gIDE2NDogXCJBbHRcIixcbiAgMTY1OiBcIkFsdFwiLFxuICAxNzM6IFwiLVwiLFxuICAxODY6IFwiO1wiLFxuICAxODc6IFwiPVwiLFxuICAxODg6IFwiLFwiLFxuICAxODk6IFwiLVwiLFxuICAxOTA6IFwiLlwiLFxuICAxOTE6IFwiL1wiLFxuICAxOTI6IFwiYFwiLFxuICAyMTk6IFwiW1wiLFxuICAyMjA6IFwiXFxcXFwiLFxuICAyMjE6IFwiXVwiLFxuICAyMjI6IFwiJ1wiXG59XG5cbmV4cG9ydCB2YXIgc2hpZnQgPSB7XG4gIDQ4OiBcIilcIixcbiAgNDk6IFwiIVwiLFxuICA1MDogXCJAXCIsXG4gIDUxOiBcIiNcIixcbiAgNTI6IFwiJFwiLFxuICA1MzogXCIlXCIsXG4gIDU0OiBcIl5cIixcbiAgNTU6IFwiJlwiLFxuICA1NjogXCIqXCIsXG4gIDU3OiBcIihcIixcbiAgNTk6IFwiOlwiLFxuICA2MTogXCIrXCIsXG4gIDE3MzogXCJfXCIsXG4gIDE4NjogXCI6XCIsXG4gIDE4NzogXCIrXCIsXG4gIDE4ODogXCI8XCIsXG4gIDE4OTogXCJfXCIsXG4gIDE5MDogXCI+XCIsXG4gIDE5MTogXCI/XCIsXG4gIDE5MjogXCJ+XCIsXG4gIDIxOTogXCJ7XCIsXG4gIDIyMDogXCJ8XCIsXG4gIDIyMTogXCJ9XCIsXG4gIDIyMjogXCJcXFwiXCJcbn1cblxudmFyIG1hYyA9IHR5cGVvZiBuYXZpZ2F0b3IgIT0gXCJ1bmRlZmluZWRcIiAmJiAvTWFjLy50ZXN0KG5hdmlnYXRvci5wbGF0Zm9ybSlcbnZhciBpZSA9IHR5cGVvZiBuYXZpZ2F0b3IgIT0gXCJ1bmRlZmluZWRcIiAmJiAvTVNJRSBcXGR8VHJpZGVudFxcLyg/Ols3LTldfFxcZHsyLH0pXFwuLipydjooXFxkKykvLmV4ZWMobmF2aWdhdG9yLnVzZXJBZ2VudClcblxuLy8gRmlsbCBpbiB0aGUgZGlnaXQga2V5c1xuZm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSBiYXNlWzQ4ICsgaV0gPSBiYXNlWzk2ICsgaV0gPSBTdHJpbmcoaSlcblxuLy8gVGhlIGZ1bmN0aW9uIGtleXNcbmZvciAodmFyIGkgPSAxOyBpIDw9IDI0OyBpKyspIGJhc2VbaSArIDExMV0gPSBcIkZcIiArIGlcblxuLy8gQW5kIHRoZSBhbHBoYWJldGljIGtleXNcbmZvciAodmFyIGkgPSA2NTsgaSA8PSA5MDsgaSsrKSB7XG4gIGJhc2VbaV0gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGkgKyAzMilcbiAgc2hpZnRbaV0gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpXG59XG5cbi8vIEZvciBlYWNoIGNvZGUgdGhhdCBkb2Vzbid0IGhhdmUgYSBzaGlmdC1lcXVpdmFsZW50LCBjb3B5IHRoZSBiYXNlIG5hbWVcbmZvciAodmFyIGNvZGUgaW4gYmFzZSkgaWYgKCFzaGlmdC5oYXNPd25Qcm9wZXJ0eShjb2RlKSkgc2hpZnRbY29kZV0gPSBiYXNlW2NvZGVdXG5cbmV4cG9ydCBmdW5jdGlvbiBrZXlOYW1lKGV2ZW50KSB7XG4gIC8vIE9uIG1hY09TLCBrZXlzIGhlbGQgd2l0aCBTaGlmdCBhbmQgQ21kIGRvbid0IHJlZmxlY3QgdGhlIGVmZmVjdCBvZiBTaGlmdCBpbiBgLmtleWAuXG4gIC8vIE9uIElFLCBzaGlmdCBlZmZlY3QgaXMgbmV2ZXIgaW5jbHVkZWQgaW4gYC5rZXlgLlxuICB2YXIgaWdub3JlS2V5ID0gbWFjICYmIGV2ZW50Lm1ldGFLZXkgJiYgZXZlbnQuc2hpZnRLZXkgJiYgIWV2ZW50LmN0cmxLZXkgJiYgIWV2ZW50LmFsdEtleSB8fFxuICAgICAgaWUgJiYgZXZlbnQuc2hpZnRLZXkgJiYgZXZlbnQua2V5ICYmIGV2ZW50LmtleS5sZW5ndGggPT0gMSB8fFxuICAgICAgZXZlbnQua2V5ID09IFwiVW5pZGVudGlmaWVkXCJcbiAgdmFyIG5hbWUgPSAoIWlnbm9yZUtleSAmJiBldmVudC5rZXkpIHx8XG4gICAgKGV2ZW50LnNoaWZ0S2V5ID8gc2hpZnQgOiBiYXNlKVtldmVudC5rZXlDb2RlXSB8fFxuICAgIGV2ZW50LmtleSB8fCBcIlVuaWRlbnRpZmllZFwiXG4gIC8vIEVkZ2Ugc29tZXRpbWVzIHByb2R1Y2VzIHdyb25nIG5hbWVzIChJc3N1ZSAjMylcbiAgaWYgKG5hbWUgPT0gXCJFc2NcIikgbmFtZSA9IFwiRXNjYXBlXCJcbiAgaWYgKG5hbWUgPT0gXCJEZWxcIikgbmFtZSA9IFwiRGVsZXRlXCJcbiAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubWljcm9zb2Z0LmNvbS9lbi11cy9taWNyb3NvZnQtZWRnZS9wbGF0Zm9ybS9pc3N1ZXMvODg2MDU3MS9cbiAgaWYgKG5hbWUgPT0gXCJMZWZ0XCIpIG5hbWUgPSBcIkFycm93TGVmdFwiXG4gIGlmIChuYW1lID09IFwiVXBcIikgbmFtZSA9IFwiQXJyb3dVcFwiXG4gIGlmIChuYW1lID09IFwiUmlnaHRcIikgbmFtZSA9IFwiQXJyb3dSaWdodFwiXG4gIGlmIChuYW1lID09IFwiRG93blwiKSBuYW1lID0gXCJBcnJvd0Rvd25cIlxuICByZXR1cm4gbmFtZVxufVxuIl0sIm5hbWVzIjpbImJhc2UiLCJzaGlmdCIsIm1hYyIsIm5hdmlnYXRvciIsInRlc3QiLCJwbGF0Zm9ybSIsImllIiwiZXhlYyIsInVzZXJBZ2VudCIsImkiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJjb2RlIiwiaGFzT3duUHJvcGVydHkiLCJrZXlOYW1lIiwiZXZlbnQiLCJpZ25vcmVLZXkiLCJtZXRhS2V5Iiwic2hpZnRLZXkiLCJjdHJsS2V5IiwiYWx0S2V5Iiwia2V5IiwibGVuZ3RoIiwibmFtZSIsImtleUNvZGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/w3c-keyname/index.js\n");

/***/ })

};
;