"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/hast-util-parse-selector";
exports.ids = ["vendor-chunks/hast-util-parse-selector"];
exports.modules = {

/***/ "(ssr)/./node_modules/hast-util-parse-selector/index.js":
/*!********************************************************!*\
  !*** ./node_modules/hast-util-parse-selector/index.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\nmodule.exports = parse;\nvar search = /[#.]/g;\n// Create a hast element from a simple CSS selector.\nfunction parse(selector, defaultTagName) {\n    var value = selector || \"\";\n    var name = defaultTagName || \"div\";\n    var props = {};\n    var start = 0;\n    var subvalue;\n    var previous;\n    var match;\n    while(start < value.length){\n        search.lastIndex = start;\n        match = search.exec(value);\n        subvalue = value.slice(start, match ? match.index : value.length);\n        if (subvalue) {\n            if (!previous) {\n                name = subvalue;\n            } else if (previous === \"#\") {\n                props.id = subvalue;\n            } else if (props.className) {\n                props.className.push(subvalue);\n            } else {\n                props.className = [\n                    subvalue\n                ];\n            }\n            start += subvalue.length;\n        }\n        if (match) {\n            previous = match[0];\n            start++;\n        }\n    }\n    return {\n        type: \"element\",\n        tagName: name,\n        properties: props,\n        children: []\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaGFzdC11dGlsLXBhcnNlLXNlbGVjdG9yL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBRUFBLE9BQU9DLE9BQU8sR0FBR0M7QUFFakIsSUFBSUMsU0FBUztBQUViLG9EQUFvRDtBQUNwRCxTQUFTRCxNQUFNRSxRQUFRLEVBQUVDLGNBQWM7SUFDckMsSUFBSUMsUUFBUUYsWUFBWTtJQUN4QixJQUFJRyxPQUFPRixrQkFBa0I7SUFDN0IsSUFBSUcsUUFBUSxDQUFDO0lBQ2IsSUFBSUMsUUFBUTtJQUNaLElBQUlDO0lBQ0osSUFBSUM7SUFDSixJQUFJQztJQUVKLE1BQU9ILFFBQVFILE1BQU1PLE1BQU0sQ0FBRTtRQUMzQlYsT0FBT1csU0FBUyxHQUFHTDtRQUNuQkcsUUFBUVQsT0FBT1ksSUFBSSxDQUFDVDtRQUNwQkksV0FBV0osTUFBTVUsS0FBSyxDQUFDUCxPQUFPRyxRQUFRQSxNQUFNSyxLQUFLLEdBQUdYLE1BQU1PLE1BQU07UUFFaEUsSUFBSUgsVUFBVTtZQUNaLElBQUksQ0FBQ0MsVUFBVTtnQkFDYkosT0FBT0c7WUFDVCxPQUFPLElBQUlDLGFBQWEsS0FBSztnQkFDM0JILE1BQU1VLEVBQUUsR0FBR1I7WUFDYixPQUFPLElBQUlGLE1BQU1XLFNBQVMsRUFBRTtnQkFDMUJYLE1BQU1XLFNBQVMsQ0FBQ0MsSUFBSSxDQUFDVjtZQUN2QixPQUFPO2dCQUNMRixNQUFNVyxTQUFTLEdBQUc7b0JBQUNUO2lCQUFTO1lBQzlCO1lBRUFELFNBQVNDLFNBQVNHLE1BQU07UUFDMUI7UUFFQSxJQUFJRCxPQUFPO1lBQ1RELFdBQVdDLEtBQUssQ0FBQyxFQUFFO1lBQ25CSDtRQUNGO0lBQ0Y7SUFFQSxPQUFPO1FBQUNZLE1BQU07UUFBV0MsU0FBU2Y7UUFBTWdCLFlBQVlmO1FBQU9nQixVQUFVLEVBQUU7SUFBQTtBQUN6RSIsInNvdXJjZXMiOlsid2VicGFjazovL21iYy8uL25vZGVfbW9kdWxlcy9oYXN0LXV0aWwtcGFyc2Utc2VsZWN0b3IvaW5kZXguanM/MWY4ZSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBwYXJzZVxuXG52YXIgc2VhcmNoID0gL1sjLl0vZ1xuXG4vLyBDcmVhdGUgYSBoYXN0IGVsZW1lbnQgZnJvbSBhIHNpbXBsZSBDU1Mgc2VsZWN0b3IuXG5mdW5jdGlvbiBwYXJzZShzZWxlY3RvciwgZGVmYXVsdFRhZ05hbWUpIHtcbiAgdmFyIHZhbHVlID0gc2VsZWN0b3IgfHwgJydcbiAgdmFyIG5hbWUgPSBkZWZhdWx0VGFnTmFtZSB8fCAnZGl2J1xuICB2YXIgcHJvcHMgPSB7fVxuICB2YXIgc3RhcnQgPSAwXG4gIHZhciBzdWJ2YWx1ZVxuICB2YXIgcHJldmlvdXNcbiAgdmFyIG1hdGNoXG5cbiAgd2hpbGUgKHN0YXJ0IDwgdmFsdWUubGVuZ3RoKSB7XG4gICAgc2VhcmNoLmxhc3RJbmRleCA9IHN0YXJ0XG4gICAgbWF0Y2ggPSBzZWFyY2guZXhlYyh2YWx1ZSlcbiAgICBzdWJ2YWx1ZSA9IHZhbHVlLnNsaWNlKHN0YXJ0LCBtYXRjaCA/IG1hdGNoLmluZGV4IDogdmFsdWUubGVuZ3RoKVxuXG4gICAgaWYgKHN1YnZhbHVlKSB7XG4gICAgICBpZiAoIXByZXZpb3VzKSB7XG4gICAgICAgIG5hbWUgPSBzdWJ2YWx1ZVxuICAgICAgfSBlbHNlIGlmIChwcmV2aW91cyA9PT0gJyMnKSB7XG4gICAgICAgIHByb3BzLmlkID0gc3VidmFsdWVcbiAgICAgIH0gZWxzZSBpZiAocHJvcHMuY2xhc3NOYW1lKSB7XG4gICAgICAgIHByb3BzLmNsYXNzTmFtZS5wdXNoKHN1YnZhbHVlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvcHMuY2xhc3NOYW1lID0gW3N1YnZhbHVlXVxuICAgICAgfVxuXG4gICAgICBzdGFydCArPSBzdWJ2YWx1ZS5sZW5ndGhcbiAgICB9XG5cbiAgICBpZiAobWF0Y2gpIHtcbiAgICAgIHByZXZpb3VzID0gbWF0Y2hbMF1cbiAgICAgIHN0YXJ0KytcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge3R5cGU6ICdlbGVtZW50JywgdGFnTmFtZTogbmFtZSwgcHJvcGVydGllczogcHJvcHMsIGNoaWxkcmVuOiBbXX1cbn1cbiJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwicGFyc2UiLCJzZWFyY2giLCJzZWxlY3RvciIsImRlZmF1bHRUYWdOYW1lIiwidmFsdWUiLCJuYW1lIiwicHJvcHMiLCJzdGFydCIsInN1YnZhbHVlIiwicHJldmlvdXMiLCJtYXRjaCIsImxlbmd0aCIsImxhc3RJbmRleCIsImV4ZWMiLCJzbGljZSIsImluZGV4IiwiaWQiLCJjbGFzc05hbWUiLCJwdXNoIiwidHlwZSIsInRhZ05hbWUiLCJwcm9wZXJ0aWVzIiwiY2hpbGRyZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/hast-util-parse-selector/index.js\n");

/***/ })

};
;