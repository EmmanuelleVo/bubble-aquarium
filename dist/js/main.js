/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/Models/Bubble.ts":
/*!*********************************!*\
  !*** ./src/js/Models/Bubble.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\n\nvar __extends = this && this.__extends || function () {\n  var _extendStatics = function extendStatics(d, b) {\n    _extendStatics = Object.setPrototypeOf || {\n      __proto__: []\n    } instanceof Array && function (d, b) {\n      d.__proto__ = b;\n    } || function (d, b) {\n      for (var p in b) {\n        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];\n      }\n    };\n\n    return _extendStatics(d, b);\n  };\n\n  return function (d, b) {\n    if (typeof b !== \"function\" && b !== null) throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n\n    _extendStatics(d, b);\n\n    function __() {\n      this.constructor = d;\n    }\n\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\n\nexports.__esModule = true;\nexports.Bubble = void 0;\n\nvar settings_1 = __webpack_require__(/*! ../settings */ \"./src/js/settings.ts\");\n\nvar helpers_1 = __webpack_require__(/*! ../helpers */ \"./src/js/helpers.ts\");\n\nvar Circle_1 = __webpack_require__(/*! ./Circle */ \"./src/js/Models/Circle.ts\");\n\nvar Bubble = function (_super) {\n  __extends(Bubble, _super);\n\n  function Bubble(canvas, ctx, mouse) {\n    var _this = _super.call(this, canvas, ctx, mouse) || this;\n\n    _this.canvas = canvas;\n    _this.ctx = ctx;\n    _this.mouse = mouse;\n\n    _this.generate();\n\n    return _this;\n  }\n\n  Bubble.prototype.generate = function () {\n    this.radius = (0, helpers_1.random)(settings_1.settings.bubble.radius.min, settings_1.settings.bubble.radius.max);\n    this.position = {\n      x: (0, helpers_1.random)(this.radius, this.canvas.width - this.radius),\n      y: (0, helpers_1.random)(this.canvas.height * 1.5, this.canvas.height + this.radius * 2)\n    };\n    this.color = settings_1.settings.bubble.colors[(0, helpers_1.random)(0, settings_1.settings.bubble.colors.length)];\n    this.opacity = (0, helpers_1.random)(0, 1);\n    this.speed = {\n      x: (0, helpers_1.random)(settings_1.settings.bubble.speed.x.min, settings_1.settings.bubble.speed.x.max),\n      y: (0, helpers_1.random)(settings_1.settings.bubble.speed.y.min, settings_1.settings.bubble.speed.y.max)\n    };\n  };\n\n  Bubble.prototype.draw = function () {\n    this.ctx.beginPath();\n    this.ctx.globalAlpha = this.opacity;\n    this.ctx.fillStyle = this.color;\n    this.ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);\n    this.ctx.fill();\n    this.ctx.globalAlpha = 1;\n    this.ctx.closePath();\n  };\n\n  Bubble.prototype.update = function () {\n    if (this.position.y < -this.radius) {\n      this.generate();\n    }\n\n    var hypotenuse;\n    hypotenuse = Math.sqrt(Math.pow(this.position.x - this.mouse.x, 2) + Math.pow(this.position.y - this.mouse.y, 2));\n\n    if (hypotenuse <= this.radius + settings_1.settings.circle.radius.max) {\n      this.opacity = 0;\n      console.log(hypotenuse, this.radius + settings_1.settings.circle.radius.max);\n    }\n\n    this.position.y -= this.speed.y;\n    this.position.x += this.speed.x;\n    return this.draw();\n  };\n\n  return Bubble;\n}(Circle_1.Circle);\n\nexports.Bubble = Bubble;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFMLENBQVdXLENBQXZDLEVBQTJDLENBQTNDLElBQWdEYSxJQUFJLENBQUNNLEdBQUwsQ0FBVSxLQUFLcEIsUUFBTCxDQUFjRyxDQUFkLEdBQWtCLEtBQUtiLEtBQUwsQ0FBV2EsQ0FBdkMsRUFBMkMsQ0FBM0MsQ0FBMUQsQ0FBYjs7QUFFQSxRQUFJZSxVQUFVLElBQUksS0FBS3ZCLE1BQUwsR0FBY0Msb0JBQVN5QixNQUFULENBQWdCMUIsTUFBaEIsQ0FBdUJJLEdBQXZELEVBQTREO0FBQ3hELFdBQUtTLE9BQUwsR0FBZSxDQUFmO0FBQ0FjLGFBQU8sQ0FBQ0MsR0FBUixDQUFZTCxVQUFaLEVBQXdCLEtBQUt2QixNQUFMLEdBQWNDLG9CQUFTeUIsTUFBVCxDQUFnQjFCLE1BQWhCLENBQXVCSSxHQUE3RDtBQUNIOztBQUVELFNBQUtDLFFBQUwsQ0FBY0csQ0FBZCxJQUFtQixLQUFLTSxLQUFMLENBQVdOLENBQTlCO0FBQ0EsU0FBS0gsUUFBTCxDQUFjQyxDQUFkLElBQW1CLEtBQUtRLEtBQUwsQ0FBV1IsQ0FBOUI7QUFFQSxXQUFPLEtBQUt1QixJQUFMLEVBQVA7QUFDSCxHQWxCRDs7QUFtQko7QUFoRUEsRUFBNEJDLGVBQTVCOztBQUFhQyxjQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2J1YmJsZS1hcXVhcml1bS8uL3NyYy9qcy9Nb2RlbHMvQnViYmxlLnRzPzg4MWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtzZXR0aW5nc30gZnJvbSBcIi4uL3NldHRpbmdzXCI7XG5pbXBvcnQge3JhbmRvbX0gZnJvbSBcIi4uL2hlbHBlcnNcIjtcbmltcG9ydCB7Q2lyY2xlfSBmcm9tIFwiLi9DaXJjbGVcIjtcblxuZXhwb3J0IGNsYXNzIEJ1YmJsZSBleHRlbmRzIENpcmNsZSB7XG4gICAgcHJpdmF0ZSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50XG4gICAgcHJpdmF0ZSBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRFxuICAgIHByaXZhdGUgcG9zaXRpb246IHt4OiBudW1iZXIsIHk6IG51bWJlcn1cbiAgICBwcml2YXRlIHJhZGl1czogbnVtYmVyXG4gICAgcHJpdmF0ZSBvcGFjaXR5OiBudW1iZXJcbiAgICBwcml2YXRlIGNvbG9yOiBzdHJpbmdcbiAgICBwcml2YXRlIG1vdXNlOiB7eDogbnVtYmVyLCB5Om51bWJlcn1cbiAgICBwcml2YXRlIHNwZWVkOiB7eDogbnVtYmVyLCB5OiBudW1iZXJ9XG4gICAgcHJpdmF0ZSBhbmdsZTogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIG1vdXNlOiB7eDogbnVtYmVyLCB5Om51bWJlcn0pIHtcbiAgICAgICAgc3VwZXIoY2FudmFzLCBjdHgsIG1vdXNlKTtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXNcbiAgICAgICAgdGhpcy5jdHggPSBjdHhcbiAgICAgICAgdGhpcy5tb3VzZSA9IG1vdXNlXG4gICAgICAgIHRoaXMuZ2VuZXJhdGUoKVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZW5lcmF0ZSgpIHtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSByYW5kb20oc2V0dGluZ3MuYnViYmxlLnJhZGl1cy5taW4sIHNldHRpbmdzLmJ1YmJsZS5yYWRpdXMubWF4KVxuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgeDogcmFuZG9tKHRoaXMucmFkaXVzLCB0aGlzLmNhbnZhcy53aWR0aCAtIHRoaXMucmFkaXVzKSxcbiAgICAgICAgICAgIHk6IHJhbmRvbSh0aGlzLmNhbnZhcy5oZWlnaHQgKiAxLjUsIHRoaXMuY2FudmFzLmhlaWdodCArIHRoaXMucmFkaXVzICogMilcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29sb3IgPSBzZXR0aW5ncy5idWJibGUuY29sb3JzW3JhbmRvbSgwLCBzZXR0aW5ncy5idWJibGUuY29sb3JzLmxlbmd0aCldXG4gICAgICAgIC8vY29uc29sZS5sb2coc2V0dGluZ3MuYnViYmxlLmNvbG9yc1tyYW5kb20oMCwgc2V0dGluZ3MuYnViYmxlLmNvbG9ycy5sZW5ndGgsIGZhbHNlKV0pIC8vIG5vdCB3b3JraW5nXG4gICAgICAgIHRoaXMub3BhY2l0eSA9IHJhbmRvbSgwLCAxKVxuICAgICAgICB0aGlzLnNwZWVkID0gIHtcbiAgICAgICAgICAgIHg6IHJhbmRvbShzZXR0aW5ncy5idWJibGUuc3BlZWQueC5taW4sIHNldHRpbmdzLmJ1YmJsZS5zcGVlZC54Lm1heCksXG4gICAgICAgICAgICB5OiByYW5kb20oc2V0dGluZ3MuYnViYmxlLnNwZWVkLnkubWluLCBzZXR0aW5ncy5idWJibGUuc3BlZWQueS5tYXgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkcmF3KCkge1xuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKVxuICAgICAgICB0aGlzLmN0eC5nbG9iYWxBbHBoYSA9IHRoaXMub3BhY2l0eVxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yXG4gICAgICAgIHRoaXMuY3R4LmFyYyh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy5yYWRpdXMsIDAsIE1hdGguUEkgKiAyKVxuICAgICAgICB0aGlzLmN0eC5maWxsKClcbiAgICAgICAgdGhpcy5jdHguZ2xvYmFsQWxwaGEgPSAxXG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpXG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICBpZih0aGlzLnBvc2l0aW9uLnkgPCAtdGhpcy5yYWRpdXMpIHtcbiAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGUoKVxuICAgICAgICB9XG5cbiAgICAgICAgLy9wb2ludGV1clxuICAgICAgICBsZXQgaHlwb3RlbnVzZTogbnVtYmVyO1xuICAgICAgICBoeXBvdGVudXNlID0gTWF0aC5zcXJ0KE1hdGgucG93KCh0aGlzLnBvc2l0aW9uLnggLSB0aGlzLm1vdXNlLngpLCAyKSArIE1hdGgucG93KCh0aGlzLnBvc2l0aW9uLnkgLSB0aGlzLm1vdXNlLnkpLCAyKSk7XG5cbiAgICAgICAgaWYgKGh5cG90ZW51c2UgPD0gdGhpcy5yYWRpdXMgKyBzZXR0aW5ncy5jaXJjbGUucmFkaXVzLm1heCkge1xuICAgICAgICAgICAgdGhpcy5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGh5cG90ZW51c2UsIHRoaXMucmFkaXVzICsgc2V0dGluZ3MuY2lyY2xlLnJhZGl1cy5tYXgpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgLT0gdGhpcy5zcGVlZC55XG4gICAgICAgIHRoaXMucG9zaXRpb24ueCArPSB0aGlzLnNwZWVkLnhcblxuICAgICAgICByZXR1cm4gdGhpcy5kcmF3KClcbiAgICB9XG59XG4iXSwibmFtZXMiOlsiX19leHRlbmRzIiwiY2FudmFzIiwiY3R4IiwibW91c2UiLCJfc3VwZXIiLCJfdGhpcyIsImdlbmVyYXRlIiwiQnViYmxlIiwicmFkaXVzIiwic2V0dGluZ3NfMSIsImJ1YmJsZSIsIm1pbiIsIm1heCIsInBvc2l0aW9uIiwieCIsIndpZHRoIiwieSIsImhlaWdodCIsImNvbG9yIiwiY29sb3JzIiwibGVuZ3RoIiwib3BhY2l0eSIsInNwZWVkIiwiYmVnaW5QYXRoIiwiZ2xvYmFsQWxwaGEiLCJmaWxsU3R5bGUiLCJhcmMiLCJNYXRoIiwiUEkiLCJmaWxsIiwiY2xvc2VQYXRoIiwiaHlwb3RlbnVzZSIsInNxcnQiLCJwb3ciLCJjaXJjbGUiLCJjb25zb2xlIiwibG9nIiwiZHJhdyIsIkNpcmNsZV8xIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/Models/Bubble.ts\n");

/***/ }),

/***/ "./src/js/Models/Circle.ts":
/*!*********************************!*\
  !*** ./src/js/Models/Circle.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\nexports.Circle = void 0;\n\nvar settings_1 = __webpack_require__(/*! ../settings */ \"./src/js/settings.ts\");\n\nvar Circle = function () {\n  function Circle(canvas, ctx, mouse, radius, color, opacity) {\n    if (radius === void 0) {\n      radius = settings_1.settings.circle.radius.max;\n    }\n\n    if (color === void 0) {\n      color = settings_1.settings.circle.color;\n    }\n\n    if (opacity === void 0) {\n      opacity = 0;\n    }\n\n    this.canvas = canvas;\n    this.ctx = ctx;\n    this.position = mouse;\n    this.radius = radius;\n    this.color = color;\n    this.origin = {\n      x: this.position.x,\n      y: this.position.y\n    };\n    this.opacity = opacity;\n  }\n\n  Circle.prototype.draw = function () {\n    this.ctx.globalAlpha = this.opacity;\n    this.ctx.fillStyle = this.color;\n    this.ctx.beginPath();\n    this.ctx.arc(this.origin.x, this.origin.y, this.radius, 0, 2 * Math.PI);\n    this.ctx.fill();\n    this.ctx.closePath();\n    this.ctx.globalAlpha = 1;\n  };\n\n  Circle.prototype.update = function () {\n    this.origin.x = this.position.x;\n    this.origin.y = this.position.y;\n    this.draw();\n  };\n\n  return Circle;\n}();\n\nexports.Circle = Circle;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvTW9kZWxzL0NpcmNsZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBO0FBVUksa0JBQVlBLE1BQVosRUFBdUNDLEdBQXZDLEVBQXNFQyxLQUF0RSxFQUF1R0MsTUFBdkcsRUFBb0pDLEtBQXBKLEVBQTJMQyxPQUEzTCxFQUE4TTtBQUF2RztBQUFBRixlQUFpQkcsb0JBQVNDLE1BQVQsQ0FBZ0JKLE1BQWhCLENBQXVCSyxHQUF4QztBQUEyQzs7QUFBRTtBQUFBSixjQUFnQkUsb0JBQVNDLE1BQVQsQ0FBZ0JILEtBQWhDO0FBQXFDOztBQUFFO0FBQUFDO0FBQW1COztBQUMxTSxTQUFLTCxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLQyxHQUFMLEdBQVdBLEdBQVg7QUFDQSxTQUFLUSxRQUFMLEdBQWdCUCxLQUFoQjtBQUNBLFNBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtNLE1BQUwsR0FBYztBQUNWQyxPQUFDLEVBQUUsS0FBS0YsUUFBTCxDQUFjRSxDQURQO0FBRVZDLE9BQUMsRUFBRSxLQUFLSCxRQUFMLENBQWNHO0FBRlAsS0FBZDtBQUlBLFNBQUtQLE9BQUwsR0FBZUEsT0FBZjtBQUNIOztBQUVTUSwwQkFBVjtBQUNJLFNBQUtaLEdBQUwsQ0FBU2EsV0FBVCxHQUF1QixLQUFLVCxPQUE1QjtBQUNBLFNBQUtKLEdBQUwsQ0FBU2MsU0FBVCxHQUFxQixLQUFLWCxLQUExQjtBQUNBLFNBQUtILEdBQUwsQ0FBU2UsU0FBVDtBQUNBLFNBQUtmLEdBQUwsQ0FBU2dCLEdBQVQsQ0FBYSxLQUFLUCxNQUFMLENBQVlDLENBQXpCLEVBQTRCLEtBQUtELE1BQUwsQ0FBWUUsQ0FBeEMsRUFBMkMsS0FBS1QsTUFBaEQsRUFBd0QsQ0FBeEQsRUFBMkQsSUFBSWUsSUFBSSxDQUFDQyxFQUFwRTtBQUNBLFNBQUtsQixHQUFMLENBQVNtQixJQUFUO0FBQ0EsU0FBS25CLEdBQUwsQ0FBU29CLFNBQVQ7QUFDQSxTQUFLcEIsR0FBTCxDQUFTYSxXQUFULEdBQXVCLENBQXZCO0FBRUgsR0FUUzs7QUFXQUQsNEJBQVY7QUFDSSxTQUFLSCxNQUFMLENBQVlDLENBQVosR0FBZ0IsS0FBS0YsUUFBTCxDQUFjRSxDQUE5QjtBQUNBLFNBQUtELE1BQUwsQ0FBWUUsQ0FBWixHQUFnQixLQUFLSCxRQUFMLENBQWNHLENBQTlCO0FBQ0EsU0FBS1UsSUFBTDtBQUNILEdBSlM7O0FBS2Q7QUFBQyxDQXZDRDs7QUFBYUMsY0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9idWJibGUtYXF1YXJpdW0vLi9zcmMvanMvTW9kZWxzL0NpcmNsZS50cz9mZWM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7c2V0dGluZ3N9IGZyb20gXCIuLi9zZXR0aW5nc1wiO1xuXG5leHBvcnQgY2xhc3MgQ2lyY2xlIHtcbiAgICBwcm90ZWN0ZWQgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudFxuICAgIHByb3RlY3RlZCBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRFxuICAgIHByb3RlY3RlZCBwb3NpdGlvbjoge3g6IG51bWJlciwgeTogbnVtYmVyfVxuICAgIHByb3RlY3RlZCByYWRpdXM6IG51bWJlclxuICAgIHByb3RlY3RlZCBjb2xvcjogc3RyaW5nXG4gICAgcHJvdGVjdGVkIHNwZWVkOiB7eDogbnVtYmVyLCB5OiBudW1iZXJ9XG4gICAgcHJvdGVjdGVkIG9yaWdpbjogeyB4OiBudW1iZXIsIHk6IG51bWJlciB9O1xuICAgIHByb3RlY3RlZCBvcGFjaXR5OiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgbW91c2U6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSwgcmFkaXVzOiBudW1iZXIgPSBzZXR0aW5ncy5jaXJjbGUucmFkaXVzLm1heCwgY29sb3I6IHN0cmluZyA9IHNldHRpbmdzLmNpcmNsZS5jb2xvciwgb3BhY2l0eTogbnVtYmVyID0gMCkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhc1xuICAgICAgICB0aGlzLmN0eCA9IGN0eFxuICAgICAgICB0aGlzLnBvc2l0aW9uID0gbW91c2U7XG4gICAgICAgIHRoaXMucmFkaXVzID0gcmFkaXVzO1xuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgICAgIHRoaXMub3JpZ2luID0ge1xuICAgICAgICAgICAgeDogdGhpcy5wb3NpdGlvbi54LFxuICAgICAgICAgICAgeTogdGhpcy5wb3NpdGlvbi55XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vcGFjaXR5ID0gb3BhY2l0eTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZHJhdygpIHtcbiAgICAgICAgdGhpcy5jdHguZ2xvYmFsQWxwaGEgPSB0aGlzLm9wYWNpdHk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpXG4gICAgICAgIHRoaXMuY3R4LmFyYyh0aGlzLm9yaWdpbi54LCB0aGlzLm9yaWdpbi55LCB0aGlzLnJhZGl1cywgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5nbG9iYWxBbHBoYSA9IDE7XG5cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgdXBkYXRlKCkge1xuICAgICAgICB0aGlzLm9yaWdpbi54ID0gdGhpcy5wb3NpdGlvbi54XG4gICAgICAgIHRoaXMub3JpZ2luLnkgPSB0aGlzLnBvc2l0aW9uLnlcbiAgICAgICAgdGhpcy5kcmF3KClcbiAgICB9XG59Il0sIm5hbWVzIjpbImNhbnZhcyIsImN0eCIsIm1vdXNlIiwicmFkaXVzIiwiY29sb3IiLCJvcGFjaXR5Iiwic2V0dGluZ3NfMSIsImNpcmNsZSIsIm1heCIsInBvc2l0aW9uIiwib3JpZ2luIiwieCIsInkiLCJDaXJjbGUiLCJnbG9iYWxBbHBoYSIsImZpbGxTdHlsZSIsImJlZ2luUGF0aCIsImFyYyIsIk1hdGgiLCJQSSIsImZpbGwiLCJjbG9zZVBhdGgiLCJkcmF3IiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/Models/Circle.ts\n");

/***/ }),

/***/ "./src/js/animation.ts":
/*!*****************************!*\
  !*** ./src/js/animation.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.__esModule = true;\nexports.animation = void 0;\nexports.animation = {\n  init: function init(canvas, bubbles, mousePointer) {\n    this.bubbles = bubbles;\n    this.mousePointer = mousePointer;\n    this.canvas = canvas;\n    this.animate();\n    return this;\n  },\n  animate: function animate() {\n    var _this = this;\n\n    this.canvas.draw();\n    this.bubbles.forEach(function (bubble) {\n      bubble.update();\n    });\n    this.mousePointer.update();\n    requestAnimationFrame(function () {\n      _this.animate();\n    });\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvYW5pbWF0aW9uLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFFYUEsaUJBQUFBLEdBQVk7QUFFckJDLE1BQUksZ0JBQUNDLE1BQUQsRUFBU0MsT0FBVCxFQUFrQkMsWUFBbEIsRUFBOEI7QUFDOUIsU0FBS0QsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsU0FBS0MsWUFBTCxHQUFvQkEsWUFBcEI7QUFDQSxTQUFLRixNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLRyxPQUFMO0FBRUEsV0FBTyxJQUFQO0FBQ0gsR0FUb0I7QUFZckJBLFNBQU8sRUFBUDtBQUFBOztBQUNJLFNBQUtILE1BQUwsQ0FBWUksSUFBWjtBQUNBLFNBQUtILE9BQUwsQ0FBYUksT0FBYixDQUFxQixVQUFDQyxNQUFELEVBQWU7QUFDaENBLFlBQU0sQ0FBQ0MsTUFBUDtBQUNILEtBRkQ7QUFHQSxTQUFLTCxZQUFMLENBQWtCSyxNQUFsQjtBQUVBQyx5QkFBcUIsQ0FBQztBQUNsQkMsV0FBSSxDQUFDTixPQUFMO0FBQ0gsS0FGb0IsQ0FBckI7QUFJSDtBQXZCb0IsQ0FBWiIsInNvdXJjZXMiOlsid2VicGFjazovL2J1YmJsZS1hcXVhcml1bS8uL3NyYy9qcy9hbmltYXRpb24udHM/YzkyOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0J1YmJsZX0gZnJvbSBcIi4vTW9kZWxzL0J1YmJsZVwiO1xuXG5leHBvcnQgY29uc3QgYW5pbWF0aW9uID0ge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBpbml0KGNhbnZhcywgYnViYmxlcywgbW91c2VQb2ludGVyKSB7XG4gICAgICAgIHRoaXMuYnViYmxlcyA9IGJ1YmJsZXNcbiAgICAgICAgdGhpcy5tb3VzZVBvaW50ZXIgPSBtb3VzZVBvaW50ZXJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXNcbiAgICAgICAgdGhpcy5hbmltYXRlKClcblxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH0sXG5cblxuICAgIGFuaW1hdGUoKSB7XG4gICAgICAgIHRoaXMuY2FudmFzLmRyYXcoKVxuICAgICAgICB0aGlzLmJ1YmJsZXMuZm9yRWFjaCgoYnViYmxlOiBCdWJibGUpID0+IHtcbiAgICAgICAgICAgIGJ1YmJsZS51cGRhdGUoKVxuICAgICAgICB9KVxuICAgICAgICB0aGlzLm1vdXNlUG9pbnRlci51cGRhdGUoKVxuXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFuaW1hdGUoKVxuICAgICAgICB9KTtcblxuICAgIH1cblxufSJdLCJuYW1lcyI6WyJleHBvcnRzIiwiaW5pdCIsImNhbnZhcyIsImJ1YmJsZXMiLCJtb3VzZVBvaW50ZXIiLCJhbmltYXRlIiwiZHJhdyIsImZvckVhY2giLCJidWJibGUiLCJ1cGRhdGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJfdGhpcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/animation.ts\n");

/***/ }),

/***/ "./src/js/canvas.ts":
/*!**************************!*\
  !*** ./src/js/canvas.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\nexports.canvas = void 0;\n\nvar settings_1 = __webpack_require__(/*! ./settings */ \"./src/js/settings.ts\");\n\nexports.canvas = {\n  init: function init(mouse) {\n    this.canvas = document.querySelector('.canvas');\n    this.ctx = this.canvas.getContext('2d');\n    this.mouse = mouse;\n    this.bubbles = [];\n    this.resizeCanvas();\n    this.generateGradient();\n    this.addEventListeners();\n    this.draw();\n    return this;\n  },\n  resizeCanvas: function resizeCanvas() {\n    this.canvas.width = window.innerWidth * settings_1.settings.canvasWidth;\n    this.canvas.height = window.innerHeight * settings_1.settings.canvasHeight;\n    return this;\n  },\n  generateGradient: function generateGradient() {\n    this.gradient = this.ctx.createLinearGradient(0, 0, this.canvas.width, this.canvas.height);\n\n    for (var i = 0; i < settings_1.settings.gradient.length; i++) {\n      this.gradient.addColorStop(i == 0 ? 0 : 1 / i, settings_1.settings.gradient[i]);\n    }\n\n    return this;\n  },\n  draw: function draw() {\n    this.ctx.fillStyle = this.gradient;\n    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);\n    return this;\n  },\n  addEventListeners: function addEventListeners() {\n    var _this = this;\n\n    window.addEventListener('resize', function () {\n      _this.resizeCanvas();\n\n      _this.draw();\n    });\n    this.canvas.addEventListener('mousemove', function (e) {\n      _this.mouse.x = e.clientX - _this.canvas.getBoundingClientRect().x - parseInt(getComputedStyle(_this.canvas).borderWidth);\n      _this.mouse.y = e.clientY - _this.canvas.getBoundingClientRect().y - parseInt(getComputedStyle(_this.canvas).borderWidth);\n    });\n    return this;\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LnRzPzZiZDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtzZXR0aW5nc30gZnJvbSBcIi4vc2V0dGluZ3NcIjtcblxuZXhwb3J0IGNvbnN0IGNhbnZhcyA9IHtcbiAgICBpbml0KG1vdXNlOiB7eDogbnVtYmVyLCB5OiBudW1iZXJ9KSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbnZhcycpIGFzIEhUTUxDYW52YXNFbGVtZW50XG4gICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxuICAgICAgICB0aGlzLm1vdXNlID0gbW91c2VcbiAgICAgICAgdGhpcy5idWJibGVzID0gW11cblxuICAgICAgICB0aGlzLnJlc2l6ZUNhbnZhcygpXG4gICAgICAgIHRoaXMuZ2VuZXJhdGVHcmFkaWVudCgpXG5cbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpXG4gICAgICAgIHRoaXMuZHJhdygpXG5cbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9LFxuXG4gICAgcmVzaXplQ2FudmFzKCkge1xuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoICogc2V0dGluZ3MuY2FudmFzV2lkdGhcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0ICogc2V0dGluZ3MuY2FudmFzSGVpZ2h0XG5cbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9LFxuXG4gICAgZ2VuZXJhdGVHcmFkaWVudCgpIHtcbiAgICAgICAgdGhpcy5ncmFkaWVudCA9IHRoaXMuY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNldHRpbmdzLmdyYWRpZW50Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGkgPT0gMCA/IDAgOiAxIC8gaSlcbiAgICAgICAgICAgIHRoaXMuZ3JhZGllbnQuYWRkQ29sb3JTdG9wKGkgPT0gMCA/IDAgOiAxIC8gaSwgc2V0dGluZ3MuZ3JhZGllbnRbaV0pO1xuICAgICAgICAgICAgLy8gVE9ET1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXNcblxuICAgIH0sXG4gICAgZHJhdygpIHtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5ncmFkaWVudDtcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG5cbiAgICAgICAgLy8gVE9ETyA6XG4gICAgICAgIC8qdGhpcy5jdHguYmVnaW5QYXRoKClcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJ3JlZCc7XG4gICAgICAgIHRoaXMuY3R4LmFyYyh0aGlzLm1vdXNlLngsIHRoaXMubW91c2UueSwgc2V0dGluZ3MuY2lyY2xlLnJhZGl1cy5tYXgsIDAsIDIgKiBNYXRoLlBJKVxuICAgICAgICB0aGlzLmN0eC5maWxsXG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpKi9cblxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH0sXG5cbiAgICBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVzaXplQ2FudmFzKClcbiAgICAgICAgICAgIHRoaXMuZHJhdygpXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMubW91c2UueCA9IGUuY2xpZW50WCAtIHRoaXMuY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnggLSBwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKHRoaXMuY2FudmFzKS5ib3JkZXJXaWR0aClcbiAgICAgICAgICAgIHRoaXMubW91c2UueSA9IGUuY2xpZW50WSAtIHRoaXMuY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnkgLSBwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKHRoaXMuY2FudmFzKS5ib3JkZXJXaWR0aClcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG59O1xuIl0sIm5hbWVzIjpbImV4cG9ydHMiLCJpbml0IiwibW91c2UiLCJjYW52YXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjdHgiLCJnZXRDb250ZXh0IiwiYnViYmxlcyIsInJlc2l6ZUNhbnZhcyIsImdlbmVyYXRlR3JhZGllbnQiLCJhZGRFdmVudExpc3RlbmVycyIsImRyYXciLCJ3aWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJzZXR0aW5nc18xIiwiY2FudmFzV2lkdGgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsImNhbnZhc0hlaWdodCIsImdyYWRpZW50IiwiY3JlYXRlTGluZWFyR3JhZGllbnQiLCJpIiwibGVuZ3RoIiwiYWRkQ29sb3JTdG9wIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJhZGRFdmVudExpc3RlbmVyIiwiX3RoaXMiLCJlIiwieCIsImNsaWVudFgiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJwYXJzZUludCIsImdldENvbXB1dGVkU3R5bGUiLCJib3JkZXJXaWR0aCIsInkiLCJjbGllbnRZIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/canvas.ts\n");

/***/ }),

/***/ "./src/js/helpers.ts":
/*!***************************!*\
  !*** ./src/js/helpers.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.__esModule = true;\nexports.random = void 0;\n\nfunction random(min, max, ceil) {\n  if (ceil === void 0) {\n    ceil = true;\n  }\n\n  if (ceil) {\n    return Math.ceil(Math.random() * (max - min) + min);\n  }\n\n  return Math.random() * (max - min) + min;\n}\n\nexports.random = random;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvaGVscGVycy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUVBLFNBQWdCQSxNQUFoQixDQUF1QkMsR0FBdkIsRUFBb0NDLEdBQXBDLEVBQWlEQyxJQUFqRCxFQUFxRTtBQUFwQjtBQUFBQTtBQUFvQjs7QUFDakUsTUFBR0EsSUFBSCxFQUFTO0FBQ0wsV0FBT0MsSUFBSSxDQUFDRCxJQUFMLENBQVVDLElBQUksQ0FBQ0osTUFBTCxNQUFpQkUsR0FBRyxHQUFHRCxHQUF2QixJQUE4QkEsR0FBeEMsQ0FBUDtBQUNIOztBQUVELFNBQU9HLElBQUksQ0FBQ0osTUFBTCxNQUFpQkUsR0FBRyxHQUFHRCxHQUF2QixJQUE4QkEsR0FBckM7QUFFSDs7QUFQREksY0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9idWJibGUtYXF1YXJpdW0vLi9zcmMvanMvaGVscGVycy50cz9iMGVhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7c2V0dGluZ3N9IGZyb20gXCIuL3NldHRpbmdzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiByYW5kb20obWluOiBudW1iZXIsIG1heDogbnVtYmVyLCBjZWlsOiBib29sZWFuID0gdHJ1ZSkge1xuICAgIGlmKGNlaWwpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW4pXG4gICAgfVxuXG4gICAgcmV0dXJuIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pblxuXG59Il0sIm5hbWVzIjpbInJhbmRvbSIsIm1pbiIsIm1heCIsImNlaWwiLCJNYXRoIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/helpers.ts\n");

/***/ }),

/***/ "./src/js/main.ts":
/*!************************!*\
  !*** ./src/js/main.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\n\nvar settings_1 = __webpack_require__(/*! ./settings */ \"./src/js/settings.ts\");\n\nvar Bubble_1 = __webpack_require__(/*! ./Models/Bubble */ \"./src/js/Models/Bubble.ts\");\n\nvar canvas_1 = __webpack_require__(/*! ./canvas */ \"./src/js/canvas.ts\");\n\nvar animation_1 = __webpack_require__(/*! ./animation */ \"./src/js/animation.ts\");\n\nvar Circle_1 = __webpack_require__(/*! ./Models/Circle */ \"./src/js/Models/Circle.ts\");\n\nvar app = {\n  init: function init() {\n    this.canvasElt = document.querySelector('.canvas');\n    this.ctx = this.canvasElt.getContext('2d');\n    this.mouse = {\n      x: 0,\n      y: 0\n    };\n    this.bubbles = [];\n    this.circles = [];\n    this.mousePointer = Circle_1.Circle;\n    this.mousePointer = new Circle_1.Circle(this.canvas, this.ctx, this.mouse, settings_1.settings.circle.radius.max, settings_1.settings.circle.color, 1);\n    this.canvas = canvas_1.canvas.init(this.mouse);\n    this.animation = animation_1.animation.init(this.canvas, this.bubbles, this.mousePointer);\n    this.loadBubbles();\n  },\n  loadBubbles: function loadBubbles() {\n    for (var i = 0; i < settings_1.settings.bubble.maxCount; i++) {\n      this.bubbles.push(new Bubble_1.Bubble(this.canvasElt, this.ctx, this.mouse));\n    }\n  },\n  loadCircle: function loadCircle() {\n    this.circles.push(new Circle_1.Circle(this.canvasElt, this.ctx, this.mouse, settings_1.settings.circle.radius.max, settings_1.settings.circle.color, 1));\n  }\n};\napp.init();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvbWFpbi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUEsSUFBTUEsR0FBRyxHQUFHO0FBRVJDLE1BQUksRUFBSjtBQUNJLFNBQUtDLFNBQUwsR0FBaUJDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixTQUF2QixDQUFqQjtBQUNBLFNBQUtDLEdBQUwsR0FBVyxLQUFLSCxTQUFMLENBQWVJLFVBQWYsQ0FBMEIsSUFBMUIsQ0FBWDtBQUNBLFNBQUtDLEtBQUwsR0FBYTtBQUFDQyxPQUFDLEVBQUUsQ0FBSjtBQUFPQyxPQUFDLEVBQUU7QUFBVixLQUFiO0FBQ0EsU0FBS0MsT0FBTCxHQUFlLEVBQWY7QUFDQSxTQUFLQyxPQUFMLEdBQWUsRUFBZjtBQUNBLFNBQUtDLFlBQUwsR0FBb0JDLGVBQXBCO0FBRUEsU0FBS0QsWUFBTCxHQUFvQixJQUFJQyxlQUFKLENBQVcsS0FBS0MsTUFBaEIsRUFBd0IsS0FBS1QsR0FBN0IsRUFBa0MsS0FBS0UsS0FBdkMsRUFBOENRLG9CQUFTQyxNQUFULENBQWdCQyxNQUFoQixDQUF1QkMsR0FBckUsRUFBMEVILG9CQUFTQyxNQUFULENBQWdCRyxLQUExRixFQUFpRyxDQUFqRyxDQUFwQjtBQUNBLFNBQUtMLE1BQUwsR0FBY00sZ0JBQU9uQixJQUFQLENBQVksS0FBS00sS0FBakIsQ0FBZDtBQUNBLFNBQUtjLFNBQUwsR0FBaUJDLHNCQUFVckIsSUFBVixDQUFlLEtBQUthLE1BQXBCLEVBQTRCLEtBQUtKLE9BQWpDLEVBQTBDLEtBQUtFLFlBQS9DLENBQWpCO0FBR0EsU0FBS1csV0FBTDtBQUVILEdBakJPO0FBbUJSQSxhQUFXO0FBQ1AsU0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHVCxvQkFBU1UsTUFBVCxDQUFnQkMsUUFBcEMsRUFBOENGLENBQUMsRUFBL0MsRUFBbUQ7QUFDL0MsV0FBS2QsT0FBTCxDQUFhaUIsSUFBYixDQUFrQixJQUFJQyxlQUFKLENBQVcsS0FBSzFCLFNBQWhCLEVBQTJCLEtBQUtHLEdBQWhDLEVBQXFDLEtBQUtFLEtBQTFDLENBQWxCO0FBQ0g7QUFDSixHQXZCTztBQXlCUnNCLFlBQVU7QUFDTixTQUFLbEIsT0FBTCxDQUFhZ0IsSUFBYixDQUFrQixJQUFJZCxlQUFKLENBQVcsS0FBS1gsU0FBaEIsRUFBMkIsS0FBS0csR0FBaEMsRUFBcUMsS0FBS0UsS0FBMUMsRUFBaURRLG9CQUFTQyxNQUFULENBQWdCQyxNQUFoQixDQUF1QkMsR0FBeEUsRUFBNkVILG9CQUFTQyxNQUFULENBQWdCRyxLQUE3RixFQUFvRyxDQUFwRyxDQUFsQjtBQUNIO0FBM0JPLENBQVo7QUFnQ0FuQixHQUFHLENBQUNDLElBQUoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9idWJibGUtYXF1YXJpdW0vLi9zcmMvanMvbWFpbi50cz80YjcxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7c2V0dGluZ3N9IGZyb20gXCIuL3NldHRpbmdzXCI7XG5pbXBvcnQge0J1YmJsZX0gZnJvbSBcIi4vTW9kZWxzL0J1YmJsZVwiO1xuaW1wb3J0IHtjYW52YXN9IGZyb20gXCIuL2NhbnZhc1wiO1xuaW1wb3J0IHthbmltYXRpb259IGZyb20gXCIuL2FuaW1hdGlvblwiO1xuaW1wb3J0IHtDaXJjbGV9IGZyb20gXCIuL01vZGVscy9DaXJjbGVcIjtcblxuY29uc3QgYXBwID0ge1xuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5jYW52YXNFbHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FudmFzJykgYXMgSFRNTENhbnZhc0VsZW1lbnRcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhc0VsdC5nZXRDb250ZXh0KCcyZCcpXG4gICAgICAgIHRoaXMubW91c2UgPSB7eDogMCwgeTogMH1cbiAgICAgICAgdGhpcy5idWJibGVzID0gW11cbiAgICAgICAgdGhpcy5jaXJjbGVzID0gW11cbiAgICAgICAgdGhpcy5tb3VzZVBvaW50ZXIgPSBDaXJjbGVcblxuICAgICAgICB0aGlzLm1vdXNlUG9pbnRlciA9IG5ldyBDaXJjbGUodGhpcy5jYW52YXMsIHRoaXMuY3R4LCB0aGlzLm1vdXNlLCBzZXR0aW5ncy5jaXJjbGUucmFkaXVzLm1heCwgc2V0dGluZ3MuY2lyY2xlLmNvbG9yLCAxKTtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXMuaW5pdCh0aGlzLm1vdXNlKVxuICAgICAgICB0aGlzLmFuaW1hdGlvbiA9IGFuaW1hdGlvbi5pbml0KHRoaXMuY2FudmFzLCB0aGlzLmJ1YmJsZXMsIHRoaXMubW91c2VQb2ludGVyKVxuXG4gICAgICAgIC8vdGhpcy5sb2FkQ2lyY2xlKClcbiAgICAgICAgdGhpcy5sb2FkQnViYmxlcygpXG5cbiAgICB9LFxuXG4gICAgbG9hZEJ1YmJsZXMoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2V0dGluZ3MuYnViYmxlLm1heENvdW50OyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuYnViYmxlcy5wdXNoKG5ldyBCdWJibGUodGhpcy5jYW52YXNFbHQsIHRoaXMuY3R4LCB0aGlzLm1vdXNlKSlcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBsb2FkQ2lyY2xlKCkge1xuICAgICAgICB0aGlzLmNpcmNsZXMucHVzaChuZXcgQ2lyY2xlKHRoaXMuY2FudmFzRWx0LCB0aGlzLmN0eCwgdGhpcy5tb3VzZSwgc2V0dGluZ3MuY2lyY2xlLnJhZGl1cy5tYXgsIHNldHRpbmdzLmNpcmNsZS5jb2xvciwgMSkpXG4gICAgfVxuXG5cblxufTtcbmFwcC5pbml0KClcblxuXG4iXSwibmFtZXMiOlsiYXBwIiwiaW5pdCIsImNhbnZhc0VsdCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImN0eCIsImdldENvbnRleHQiLCJtb3VzZSIsIngiLCJ5IiwiYnViYmxlcyIsImNpcmNsZXMiLCJtb3VzZVBvaW50ZXIiLCJDaXJjbGVfMSIsImNhbnZhcyIsInNldHRpbmdzXzEiLCJjaXJjbGUiLCJyYWRpdXMiLCJtYXgiLCJjb2xvciIsImNhbnZhc18xIiwiYW5pbWF0aW9uIiwiYW5pbWF0aW9uXzEiLCJsb2FkQnViYmxlcyIsImkiLCJidWJibGUiLCJtYXhDb3VudCIsInB1c2giLCJCdWJibGVfMSIsImxvYWRDaXJjbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/main.ts\n");

/***/ }),

/***/ "./src/js/settings.ts":
/*!****************************!*\
  !*** ./src/js/settings.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.__esModule = true;\nexports.settings = void 0;\nexports.settings = {\n  canvasWidth: 0.8,\n  canvasHeight: 0.6,\n  gradient: ['hsl(165, 19%, 40%)', 'hsl(133, 18%, 59%)'],\n  bubble: {\n    radius: {\n      min: 10,\n      max: 30\n    },\n    speed: {\n      x: {\n        min: -2,\n        max: 2\n      },\n      y: {\n        min: 3,\n        max: 7\n      }\n    },\n    colors: ['hsl(201, 20%, 23%)', 'hsl(186, 21%, 26%)', 'hsl(165, 19%, 40%)', 'hsl(133, 18%, 59%)', 'hsl(97, 13%, 80%)'],\n    maxCount: 20\n  },\n  circle: {\n    radius: {\n      min: 10,\n      max: 30\n    },\n    color: 'black',\n    maxCount: 1\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvc2V0dGluZ3MudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFhQSxnQkFBQUEsR0FBVztBQUNwQkMsYUFBVyxFQUFFLEdBRE87QUFFcEJDLGNBQVksRUFBRSxHQUZNO0FBR3BCQyxVQUFRLEVBQUUsQ0FDTixvQkFETSxFQUVOLG9CQUZNLENBSFU7QUFPcEJDLFFBQU0sRUFBRTtBQUNKQyxVQUFNLEVBQUU7QUFDSkMsU0FBRyxFQUFFLEVBREQ7QUFFSkMsU0FBRyxFQUFFO0FBRkQsS0FESjtBQUtKQyxTQUFLLEVBQUU7QUFDSEMsT0FBQyxFQUFFO0FBQUNILFdBQUcsRUFBRSxDQUFDLENBQVA7QUFBV0MsV0FBRyxFQUFFO0FBQWhCLE9BREE7QUFFSEcsT0FBQyxFQUFFO0FBQUNKLFdBQUcsRUFBRSxDQUFOO0FBQVVDLFdBQUcsRUFBRTtBQUFmO0FBRkEsS0FMSDtBQVNKSSxVQUFNLEVBQ0YsQ0FDSSxvQkFESixFQUVJLG9CQUZKLEVBR0ksb0JBSEosRUFJSSxvQkFKSixFQUtJLG1CQUxKLENBVkE7QUFpQkpDLFlBQVEsRUFBRTtBQWpCTixHQVBZO0FBMEJwQkMsUUFBTSxFQUFFO0FBQ0pSLFVBQU0sRUFBRTtBQUNKQyxTQUFHLEVBQUUsRUFERDtBQUVKQyxTQUFHLEVBQUU7QUFGRCxLQURKO0FBS0pPLFNBQUssRUFBRSxPQUxIO0FBTUpGLFlBQVEsRUFBRTtBQU5OO0FBMUJZLENBQVgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9idWJibGUtYXF1YXJpdW0vLi9zcmMvanMvc2V0dGluZ3MudHM/YzQyMSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgc2V0dGluZ3MgPSB7XG4gICAgY2FudmFzV2lkdGg6IDAuOCxcbiAgICBjYW52YXNIZWlnaHQ6IDAuNixcbiAgICBncmFkaWVudDogW1xuICAgICAgICAnaHNsKDE2NSwgMTklLCA0MCUpJyxcbiAgICAgICAgJ2hzbCgxMzMsIDE4JSwgNTklKScsXG4gICAgXSxcbiAgICBidWJibGU6IHtcbiAgICAgICAgcmFkaXVzOiB7XG4gICAgICAgICAgICBtaW46IDEwLFxuICAgICAgICAgICAgbWF4OiAzMCxcbiAgICAgICAgfSxcbiAgICAgICAgc3BlZWQ6IHtcbiAgICAgICAgICAgIHg6IHttaW46IC0yLCAgbWF4OiAyfSxcbiAgICAgICAgICAgIHk6IHttaW46IDMsICBtYXg6IDd9LFxuICAgICAgICB9LFxuICAgICAgICBjb2xvcnM6XG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgJ2hzbCgyMDEsIDIwJSwgMjMlKScsXG4gICAgICAgICAgICAgICAgJ2hzbCgxODYsIDIxJSwgMjYlKScsXG4gICAgICAgICAgICAgICAgJ2hzbCgxNjUsIDE5JSwgNDAlKScsXG4gICAgICAgICAgICAgICAgJ2hzbCgxMzMsIDE4JSwgNTklKScsXG4gICAgICAgICAgICAgICAgJ2hzbCg5NywgMTMlLCA4MCUpJ1xuICAgICAgICAgICAgXSxcbiAgICAgICAgbWF4Q291bnQ6IDIwLFxuICAgIH0sXG4gICAgY2lyY2xlOiB7XG4gICAgICAgIHJhZGl1czoge1xuICAgICAgICAgICAgbWluOiAxMCxcbiAgICAgICAgICAgIG1heDogMzAsXG4gICAgICAgIH0sXG4gICAgICAgIGNvbG9yOiAnYmxhY2snLFxuICAgICAgICBtYXhDb3VudDogMSxcbiAgICB9LFxuXG59Il0sIm5hbWVzIjpbImV4cG9ydHMiLCJjYW52YXNXaWR0aCIsImNhbnZhc0hlaWdodCIsImdyYWRpZW50IiwiYnViYmxlIiwicmFkaXVzIiwibWluIiwibWF4Iiwic3BlZWQiLCJ4IiwieSIsImNvbG9ycyIsIm1heENvdW50IiwiY2lyY2xlIiwiY29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/settings.ts\n");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2Nzcy9tYWluLnNjc3MuanMiLCJtYXBwaW5ncyI6IjtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnViYmxlLWFxdWFyaXVtLy4vc3JjL3Njc3MvbWFpbi5zY3NzP2Y3ZTUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scss/main.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/main": 0,
/******/ 			"css/main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkbubble_aquarium"] = self["webpackChunkbubble_aquarium"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/js/main.ts")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/scss/main.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;