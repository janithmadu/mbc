"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/from2";
exports.ids = ["vendor-chunks/from2"];
exports.modules = {

/***/ "(ssr)/./node_modules/from2/index.js":
/*!*************************************!*\
  !*** ./node_modules/from2/index.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar Readable = (__webpack_require__(/*! readable-stream */ \"(ssr)/./node_modules/readable-stream/readable.js\").Readable);\nvar inherits = __webpack_require__(/*! inherits */ \"(ssr)/./node_modules/inherits/inherits.js\");\nmodule.exports = from2;\nfrom2.ctor = ctor;\nfrom2.obj = obj;\nvar Proto = ctor();\nfunction toFunction(list) {\n    list = list.slice();\n    return function(_, cb) {\n        var err = null;\n        var item = list.length ? list.shift() : null;\n        if (item instanceof Error) {\n            err = item;\n            item = null;\n        }\n        cb(err, item);\n    };\n}\nfunction from2(opts, read) {\n    if (typeof opts !== \"object\" || Array.isArray(opts)) {\n        read = opts;\n        opts = {};\n    }\n    var rs = new Proto(opts);\n    rs._from = Array.isArray(read) ? toFunction(read) : read || noop;\n    return rs;\n}\nfunction ctor(opts, read) {\n    if (typeof opts === \"function\") {\n        read = opts;\n        opts = {};\n    }\n    opts = defaults(opts);\n    inherits(Class, Readable);\n    function Class(override) {\n        if (!(this instanceof Class)) return new Class(override);\n        this._reading = false;\n        this._callback = check;\n        this.destroyed = false;\n        Readable.call(this, override || opts);\n        var self = this;\n        var hwm = this._readableState.highWaterMark;\n        function check(err, data) {\n            if (self.destroyed) return;\n            if (err) return self.destroy(err);\n            if (data === null) return self.push(null);\n            self._reading = false;\n            if (self.push(data)) self._read(hwm);\n        }\n    }\n    Class.prototype._from = read || noop;\n    Class.prototype._read = function(size) {\n        if (this._reading || this.destroyed) return;\n        this._reading = true;\n        this._from(size, this._callback);\n    };\n    Class.prototype.destroy = function(err) {\n        if (this.destroyed) return;\n        this.destroyed = true;\n        var self = this;\n        process.nextTick(function() {\n            if (err) self.emit(\"error\", err);\n            self.emit(\"close\");\n        });\n    };\n    return Class;\n}\nfunction obj(opts, read) {\n    if (typeof opts === \"function\" || Array.isArray(opts)) {\n        read = opts;\n        opts = {};\n    }\n    opts = defaults(opts);\n    opts.objectMode = true;\n    opts.highWaterMark = 16;\n    return from2(opts, read);\n}\nfunction noop() {}\nfunction defaults(opts) {\n    opts = opts || {};\n    return opts;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZnJvbTIvaW5kZXguanMiLCJtYXBwaW5ncyI6IjtBQUFBLElBQUlBLFdBQVdDLHlHQUFtQztBQUNsRCxJQUFJQyxXQUFXRCxtQkFBT0EsQ0FBQztBQUV2QkUsT0FBT0MsT0FBTyxHQUFHQztBQUVqQkEsTUFBTUMsSUFBSSxHQUFHQTtBQUNiRCxNQUFNRSxHQUFHLEdBQUdBO0FBRVosSUFBSUMsUUFBUUY7QUFFWixTQUFTRyxXQUFXQyxJQUFJO0lBQ3RCQSxPQUFPQSxLQUFLQyxLQUFLO0lBQ2pCLE9BQU8sU0FBVUMsQ0FBQyxFQUFFQyxFQUFFO1FBQ3BCLElBQUlDLE1BQU07UUFDVixJQUFJQyxPQUFPTCxLQUFLTSxNQUFNLEdBQUdOLEtBQUtPLEtBQUssS0FBSztRQUN4QyxJQUFJRixnQkFBZ0JHLE9BQU87WUFDekJKLE1BQU1DO1lBQ05BLE9BQU87UUFDVDtRQUVBRixHQUFHQyxLQUFLQztJQUNWO0FBQ0Y7QUFFQSxTQUFTVixNQUFNYyxJQUFJLEVBQUVDLElBQUk7SUFDdkIsSUFBSSxPQUFPRCxTQUFTLFlBQVlFLE1BQU1DLE9BQU8sQ0FBQ0gsT0FBTztRQUNuREMsT0FBT0Q7UUFDUEEsT0FBTyxDQUFDO0lBQ1Y7SUFFQSxJQUFJSSxLQUFLLElBQUlmLE1BQU1XO0lBQ25CSSxHQUFHQyxLQUFLLEdBQUdILE1BQU1DLE9BQU8sQ0FBQ0YsUUFBUVgsV0FBV1csUUFBU0EsUUFBUUs7SUFDN0QsT0FBT0Y7QUFDVDtBQUVBLFNBQVNqQixLQUFLYSxJQUFJLEVBQUVDLElBQUk7SUFDdEIsSUFBSSxPQUFPRCxTQUFTLFlBQVk7UUFDOUJDLE9BQU9EO1FBQ1BBLE9BQU8sQ0FBQztJQUNWO0lBRUFBLE9BQU9PLFNBQVNQO0lBRWhCakIsU0FBU3lCLE9BQU8zQjtJQUNoQixTQUFTMkIsTUFBTUMsUUFBUTtRQUNyQixJQUFJLENBQUUsS0FBSSxZQUFZRCxLQUFJLEdBQUksT0FBTyxJQUFJQSxNQUFNQztRQUMvQyxJQUFJLENBQUNDLFFBQVEsR0FBRztRQUNoQixJQUFJLENBQUNDLFNBQVMsR0FBR0M7UUFDakIsSUFBSSxDQUFDQyxTQUFTLEdBQUc7UUFDakJoQyxTQUFTaUMsSUFBSSxDQUFDLElBQUksRUFBRUwsWUFBWVQ7UUFFaEMsSUFBSWUsT0FBTyxJQUFJO1FBQ2YsSUFBSUMsTUFBTSxJQUFJLENBQUNDLGNBQWMsQ0FBQ0MsYUFBYTtRQUUzQyxTQUFTTixNQUFNakIsR0FBRyxFQUFFd0IsSUFBSTtZQUN0QixJQUFJSixLQUFLRixTQUFTLEVBQUU7WUFDcEIsSUFBSWxCLEtBQUssT0FBT29CLEtBQUtLLE9BQU8sQ0FBQ3pCO1lBQzdCLElBQUl3QixTQUFTLE1BQU0sT0FBT0osS0FBS00sSUFBSSxDQUFDO1lBQ3BDTixLQUFLTCxRQUFRLEdBQUc7WUFDaEIsSUFBSUssS0FBS00sSUFBSSxDQUFDRixPQUFPSixLQUFLTyxLQUFLLENBQUNOO1FBQ2xDO0lBQ0Y7SUFFQVIsTUFBTWUsU0FBUyxDQUFDbEIsS0FBSyxHQUFHSixRQUFRSztJQUNoQ0UsTUFBTWUsU0FBUyxDQUFDRCxLQUFLLEdBQUcsU0FBU0UsSUFBSTtRQUNuQyxJQUFJLElBQUksQ0FBQ2QsUUFBUSxJQUFJLElBQUksQ0FBQ0csU0FBUyxFQUFFO1FBQ3JDLElBQUksQ0FBQ0gsUUFBUSxHQUFHO1FBQ2hCLElBQUksQ0FBQ0wsS0FBSyxDQUFDbUIsTUFBTSxJQUFJLENBQUNiLFNBQVM7SUFDakM7SUFFQUgsTUFBTWUsU0FBUyxDQUFDSCxPQUFPLEdBQUcsU0FBU3pCLEdBQUc7UUFDcEMsSUFBSSxJQUFJLENBQUNrQixTQUFTLEVBQUU7UUFDcEIsSUFBSSxDQUFDQSxTQUFTLEdBQUc7UUFFakIsSUFBSUUsT0FBTyxJQUFJO1FBQ2ZVLFFBQVFDLFFBQVEsQ0FBQztZQUNmLElBQUkvQixLQUFLb0IsS0FBS1ksSUFBSSxDQUFDLFNBQVNoQztZQUM1Qm9CLEtBQUtZLElBQUksQ0FBQztRQUNaO0lBQ0Y7SUFFQSxPQUFPbkI7QUFDVDtBQUVBLFNBQVNwQixJQUFJWSxJQUFJLEVBQUVDLElBQUk7SUFDckIsSUFBSSxPQUFPRCxTQUFTLGNBQWNFLE1BQU1DLE9BQU8sQ0FBQ0gsT0FBTztRQUNyREMsT0FBT0Q7UUFDUEEsT0FBTyxDQUFDO0lBQ1Y7SUFFQUEsT0FBT08sU0FBU1A7SUFDaEJBLEtBQUs0QixVQUFVLEdBQUc7SUFDbEI1QixLQUFLa0IsYUFBYSxHQUFHO0lBRXJCLE9BQU9oQyxNQUFNYyxNQUFNQztBQUNyQjtBQUVBLFNBQVNLLFFBQVM7QUFFbEIsU0FBU0MsU0FBU1AsSUFBSTtJQUNwQkEsT0FBT0EsUUFBUSxDQUFDO0lBQ2hCLE9BQU9BO0FBQ1QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYmMvLi9ub2RlX21vZHVsZXMvZnJvbTIvaW5kZXguanM/NjE4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgUmVhZGFibGUgPSByZXF1aXJlKCdyZWFkYWJsZS1zdHJlYW0nKS5SZWFkYWJsZVxudmFyIGluaGVyaXRzID0gcmVxdWlyZSgnaW5oZXJpdHMnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZyb20yXG5cbmZyb20yLmN0b3IgPSBjdG9yXG5mcm9tMi5vYmogPSBvYmpcblxudmFyIFByb3RvID0gY3RvcigpXG5cbmZ1bmN0aW9uIHRvRnVuY3Rpb24obGlzdCkge1xuICBsaXN0ID0gbGlzdC5zbGljZSgpXG4gIHJldHVybiBmdW5jdGlvbiAoXywgY2IpIHtcbiAgICB2YXIgZXJyID0gbnVsbFxuICAgIHZhciBpdGVtID0gbGlzdC5sZW5ndGggPyBsaXN0LnNoaWZ0KCkgOiBudWxsXG4gICAgaWYgKGl0ZW0gaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgZXJyID0gaXRlbVxuICAgICAgaXRlbSA9IG51bGxcbiAgICB9XG5cbiAgICBjYihlcnIsIGl0ZW0pXG4gIH1cbn1cblxuZnVuY3Rpb24gZnJvbTIob3B0cywgcmVhZCkge1xuICBpZiAodHlwZW9mIG9wdHMgIT09ICdvYmplY3QnIHx8IEFycmF5LmlzQXJyYXkob3B0cykpIHtcbiAgICByZWFkID0gb3B0c1xuICAgIG9wdHMgPSB7fVxuICB9XG5cbiAgdmFyIHJzID0gbmV3IFByb3RvKG9wdHMpXG4gIHJzLl9mcm9tID0gQXJyYXkuaXNBcnJheShyZWFkKSA/IHRvRnVuY3Rpb24ocmVhZCkgOiAocmVhZCB8fCBub29wKVxuICByZXR1cm4gcnNcbn1cblxuZnVuY3Rpb24gY3RvcihvcHRzLCByZWFkKSB7XG4gIGlmICh0eXBlb2Ygb3B0cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJlYWQgPSBvcHRzXG4gICAgb3B0cyA9IHt9XG4gIH1cblxuICBvcHRzID0gZGVmYXVsdHMob3B0cylcblxuICBpbmhlcml0cyhDbGFzcywgUmVhZGFibGUpXG4gIGZ1bmN0aW9uIENsYXNzKG92ZXJyaWRlKSB7XG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIENsYXNzKSkgcmV0dXJuIG5ldyBDbGFzcyhvdmVycmlkZSlcbiAgICB0aGlzLl9yZWFkaW5nID0gZmFsc2VcbiAgICB0aGlzLl9jYWxsYmFjayA9IGNoZWNrXG4gICAgdGhpcy5kZXN0cm95ZWQgPSBmYWxzZVxuICAgIFJlYWRhYmxlLmNhbGwodGhpcywgb3ZlcnJpZGUgfHwgb3B0cylcblxuICAgIHZhciBzZWxmID0gdGhpc1xuICAgIHZhciBod20gPSB0aGlzLl9yZWFkYWJsZVN0YXRlLmhpZ2hXYXRlck1hcmtcblxuICAgIGZ1bmN0aW9uIGNoZWNrKGVyciwgZGF0YSkge1xuICAgICAgaWYgKHNlbGYuZGVzdHJveWVkKSByZXR1cm5cbiAgICAgIGlmIChlcnIpIHJldHVybiBzZWxmLmRlc3Ryb3koZXJyKVxuICAgICAgaWYgKGRhdGEgPT09IG51bGwpIHJldHVybiBzZWxmLnB1c2gobnVsbClcbiAgICAgIHNlbGYuX3JlYWRpbmcgPSBmYWxzZVxuICAgICAgaWYgKHNlbGYucHVzaChkYXRhKSkgc2VsZi5fcmVhZChod20pXG4gICAgfVxuICB9XG5cbiAgQ2xhc3MucHJvdG90eXBlLl9mcm9tID0gcmVhZCB8fCBub29wXG4gIENsYXNzLnByb3RvdHlwZS5fcmVhZCA9IGZ1bmN0aW9uKHNpemUpIHtcbiAgICBpZiAodGhpcy5fcmVhZGluZyB8fCB0aGlzLmRlc3Ryb3llZCkgcmV0dXJuXG4gICAgdGhpcy5fcmVhZGluZyA9IHRydWVcbiAgICB0aGlzLl9mcm9tKHNpemUsIHRoaXMuX2NhbGxiYWNrKVxuICB9XG5cbiAgQ2xhc3MucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbihlcnIpIHtcbiAgICBpZiAodGhpcy5kZXN0cm95ZWQpIHJldHVyblxuICAgIHRoaXMuZGVzdHJveWVkID0gdHJ1ZVxuXG4gICAgdmFyIHNlbGYgPSB0aGlzXG4gICAgcHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbigpIHtcbiAgICAgIGlmIChlcnIpIHNlbGYuZW1pdCgnZXJyb3InLCBlcnIpXG4gICAgICBzZWxmLmVtaXQoJ2Nsb3NlJylcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIENsYXNzXG59XG5cbmZ1bmN0aW9uIG9iaihvcHRzLCByZWFkKSB7XG4gIGlmICh0eXBlb2Ygb3B0cyA9PT0gJ2Z1bmN0aW9uJyB8fCBBcnJheS5pc0FycmF5KG9wdHMpKSB7XG4gICAgcmVhZCA9IG9wdHNcbiAgICBvcHRzID0ge31cbiAgfVxuXG4gIG9wdHMgPSBkZWZhdWx0cyhvcHRzKVxuICBvcHRzLm9iamVjdE1vZGUgPSB0cnVlXG4gIG9wdHMuaGlnaFdhdGVyTWFyayA9IDE2XG5cbiAgcmV0dXJuIGZyb20yKG9wdHMsIHJlYWQpXG59XG5cbmZ1bmN0aW9uIG5vb3AgKCkge31cblxuZnVuY3Rpb24gZGVmYXVsdHMob3B0cykge1xuICBvcHRzID0gb3B0cyB8fCB7fVxuICByZXR1cm4gb3B0c1xufVxuIl0sIm5hbWVzIjpbIlJlYWRhYmxlIiwicmVxdWlyZSIsImluaGVyaXRzIiwibW9kdWxlIiwiZXhwb3J0cyIsImZyb20yIiwiY3RvciIsIm9iaiIsIlByb3RvIiwidG9GdW5jdGlvbiIsImxpc3QiLCJzbGljZSIsIl8iLCJjYiIsImVyciIsIml0ZW0iLCJsZW5ndGgiLCJzaGlmdCIsIkVycm9yIiwib3B0cyIsInJlYWQiLCJBcnJheSIsImlzQXJyYXkiLCJycyIsIl9mcm9tIiwibm9vcCIsImRlZmF1bHRzIiwiQ2xhc3MiLCJvdmVycmlkZSIsIl9yZWFkaW5nIiwiX2NhbGxiYWNrIiwiY2hlY2siLCJkZXN0cm95ZWQiLCJjYWxsIiwic2VsZiIsImh3bSIsIl9yZWFkYWJsZVN0YXRlIiwiaGlnaFdhdGVyTWFyayIsImRhdGEiLCJkZXN0cm95IiwicHVzaCIsIl9yZWFkIiwicHJvdG90eXBlIiwic2l6ZSIsInByb2Nlc3MiLCJuZXh0VGljayIsImVtaXQiLCJvYmplY3RNb2RlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/from2/index.js\n");

/***/ })

};
;