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

eval("\n\nvar __extends = this && this.__extends || function () {\n  var _extendStatics = function extendStatics(d, b) {\n    _extendStatics = Object.setPrototypeOf || {\n      __proto__: []\n    } instanceof Array && function (d, b) {\n      d.__proto__ = b;\n    } || function (d, b) {\n      for (var p in b) {\n        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];\n      }\n    };\n\n    return _extendStatics(d, b);\n  };\n\n  return function (d, b) {\n    if (typeof b !== \"function\" && b !== null) throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n\n    _extendStatics(d, b);\n\n    function __() {\n      this.constructor = d;\n    }\n\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\n\nexports.__esModule = true;\nexports.Bubble = void 0;\n\nvar settings_1 = __webpack_require__(/*! ../settings */ \"./src/js/settings.ts\");\n\nvar helpers_1 = __webpack_require__(/*! ../helpers */ \"./src/js/helpers.ts\");\n\nvar Circle_1 = __webpack_require__(/*! ./Circle */ \"./src/js/Models/Circle.ts\");\n\nvar Bubble = function (_super) {\n  __extends(Bubble, _super);\n\n  function Bubble(canvas, ctx, mouse) {\n    var _this = _super.call(this, canvas, ctx, mouse) || this;\n\n    _this.canvas = canvas;\n    _this.ctx = ctx;\n    _this.mouse = mouse;\n\n    _this.generate();\n\n    return _this;\n  }\n\n  Bubble.prototype.generate = function () {\n    this.radius = (0, helpers_1.random)(settings_1.settings.bubble.radius.min, settings_1.settings.bubble.radius.max);\n    this.position = {\n      x: (0, helpers_1.random)(this.radius, this.canvas.width - this.radius),\n      y: (0, helpers_1.random)(this.canvas.height * 1.5, this.canvas.height + this.radius * 2)\n    };\n    this.color = settings_1.settings.bubble.colors[(0, helpers_1.random)(0, settings_1.settings.bubble.colors.length)];\n    this.opacity = (0, helpers_1.random)(0, 1);\n    this.speed = {\n      x: (0, helpers_1.random)(settings_1.settings.bubble.speed.x.min, settings_1.settings.bubble.speed.x.max),\n      y: (0, helpers_1.random)(settings_1.settings.bubble.speed.y.min, settings_1.settings.bubble.speed.y.max)\n    };\n  };\n\n  Bubble.prototype.draw = function () {\n    this.ctx.globalAlpha = this.opacity;\n    this.ctx.fillStyle = this.color;\n    this.ctx.beginPath();\n    this.ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);\n    this.ctx.closePath();\n    this.ctx.fill();\n    this.ctx.globalAlpha = 1;\n  };\n\n  Bubble.prototype.update = function () {\n    if (this.position.y < -this.radius) {\n      this.generate();\n    }\n\n    var hypotenuse;\n    hypotenuse = Math.sqrt(Math.pow(this.position.x - this.mouse.x, 2) + Math.pow(this.position.y - this.mouse.y, 2));\n\n    if (hypotenuse <= this.radius + settings_1.settings.circle.radius.max) {\n      this.opacity = 0;\n    }\n\n    this.position.y -= this.speed.y;\n    this.position.x += this.speed.x;\n    return this.draw();\n  };\n\n  return Bubble;\n}(Circle_1.Circle);\n\nexports.Bubble = Bubble;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFMLENBQVdXLENBQXZDLEVBQTJDLENBQTNDLElBQWdEYSxJQUFJLENBQUNNLEdBQUwsQ0FBVSxLQUFLcEIsUUFBTCxDQUFjRyxDQUFkLEdBQWtCLEtBQUtiLEtBQUwsQ0FBV2EsQ0FBdkMsRUFBMkMsQ0FBM0MsQ0FBMUQsQ0FBYjs7QUFFQSxRQUFJZSxVQUFVLElBQUksS0FBS3ZCLE1BQUwsR0FBY0Msb0JBQVN5QixNQUFULENBQWdCMUIsTUFBaEIsQ0FBdUJJLEdBQXZELEVBQTREO0FBQ3hELFdBQUtTLE9BQUwsR0FBZSxDQUFmO0FBQ0g7O0FBRUQsU0FBS1IsUUFBTCxDQUFjRyxDQUFkLElBQW1CLEtBQUtNLEtBQUwsQ0FBV04sQ0FBOUI7QUFDQSxTQUFLSCxRQUFMLENBQWNDLENBQWQsSUFBbUIsS0FBS1EsS0FBTCxDQUFXUixDQUE5QjtBQUVBLFdBQU8sS0FBS3FCLElBQUwsRUFBUDtBQUNILEdBakJEOztBQWtCSjtBQTlEQSxFQUE0QkMsZUFBNUI7O0FBQWFDLGNBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnViYmxlLWFxdWFyaXVtLy4vc3JjL2pzL01vZGVscy9CdWJibGUudHM/ODgxYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3NldHRpbmdzfSBmcm9tIFwiLi4vc2V0dGluZ3NcIjtcbmltcG9ydCB7cmFuZG9tfSBmcm9tIFwiLi4vaGVscGVyc1wiO1xuaW1wb3J0IHtDaXJjbGV9IGZyb20gXCIuL0NpcmNsZVwiO1xuXG4vLyBAdHMtaWdub3JlXG5leHBvcnQgY2xhc3MgQnViYmxlIGV4dGVuZHMgQ2lyY2xlIHtcbiAgICBwcml2YXRlIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnRcbiAgICBwcml2YXRlIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEXG4gICAgcHJpdmF0ZSBwb3NpdGlvbjoge3g6IG51bWJlciwgeTogbnVtYmVyfVxuICAgIHByaXZhdGUgcmFkaXVzOiBudW1iZXJcbiAgICBwcml2YXRlIG9wYWNpdHk6IG51bWJlclxuICAgIHByaXZhdGUgY29sb3I6IHN0cmluZ1xuICAgIHByaXZhdGUgbW91c2U6IHt4OiBudW1iZXIsIHk6bnVtYmVyfVxuICAgIHByaXZhdGUgc3BlZWQ6IHt4OiBudW1iZXIsIHk6IG51bWJlcn1cblxuICAgIGNvbnN0cnVjdG9yKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBtb3VzZToge3g6IG51bWJlciwgeTpudW1iZXJ9KSB7XG4gICAgICAgIHN1cGVyKGNhbnZhcywgY3R4LCBtb3VzZSk7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzXG4gICAgICAgIHRoaXMuY3R4ID0gY3R4XG4gICAgICAgIHRoaXMubW91c2UgPSBtb3VzZVxuICAgICAgICB0aGlzLmdlbmVyYXRlKClcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2VuZXJhdGUoKSB7XG4gICAgICAgIHRoaXMucmFkaXVzID0gcmFuZG9tKHNldHRpbmdzLmJ1YmJsZS5yYWRpdXMubWluLCBzZXR0aW5ncy5idWJibGUucmFkaXVzLm1heClcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IHJhbmRvbSh0aGlzLnJhZGl1cywgdGhpcy5jYW52YXMud2lkdGggLSB0aGlzLnJhZGl1cyksXG4gICAgICAgICAgICB5OiByYW5kb20odGhpcy5jYW52YXMuaGVpZ2h0ICogMS41LCB0aGlzLmNhbnZhcy5oZWlnaHQgKyB0aGlzLnJhZGl1cyAqIDIpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbG9yID0gc2V0dGluZ3MuYnViYmxlLmNvbG9yc1tyYW5kb20oMCwgc2V0dGluZ3MuYnViYmxlLmNvbG9ycy5sZW5ndGgpXVxuICAgICAgICAvL2NvbnNvbGUubG9nKHNldHRpbmdzLmJ1YmJsZS5jb2xvcnNbcmFuZG9tKDAsIHNldHRpbmdzLmJ1YmJsZS5jb2xvcnMubGVuZ3RoLCBmYWxzZSldKSAvLyBub3Qgd29ya2luZ1xuICAgICAgICB0aGlzLm9wYWNpdHkgPSByYW5kb20oMCwgMSlcbiAgICAgICAgdGhpcy5zcGVlZCA9ICB7XG4gICAgICAgICAgICB4OiByYW5kb20oc2V0dGluZ3MuYnViYmxlLnNwZWVkLngubWluLCBzZXR0aW5ncy5idWJibGUuc3BlZWQueC5tYXgpLFxuICAgICAgICAgICAgeTogcmFuZG9tKHNldHRpbmdzLmJ1YmJsZS5zcGVlZC55Lm1pbiwgc2V0dGluZ3MuYnViYmxlLnNwZWVkLnkubWF4KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgdGhpcy5jdHguZ2xvYmFsQWxwaGEgPSB0aGlzLm9wYWNpdHlcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvclxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKVxuICAgICAgICB0aGlzLmN0eC5hcmModGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMucmFkaXVzLCAwLCBNYXRoLlBJICogMilcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKClcbiAgICAgICAgdGhpcy5jdHguZmlsbCgpXG4gICAgICAgIHRoaXMuY3R4Lmdsb2JhbEFscGhhID0gMVxuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgaWYodGhpcy5wb3NpdGlvbi55IDwgLXRoaXMucmFkaXVzKSB7XG4gICAgICAgICAgICB0aGlzLmdlbmVyYXRlKClcbiAgICAgICAgfVxuXG4gICAgICAgIC8vcG9pbnRldXIgOiBkaXN0YW5jZSA9IE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSkgZXQgZHggPSBjaXJjbGUxLnggLSBjaXJjbGUyLnhcbiAgICAgICAgbGV0IGh5cG90ZW51c2U6IG51bWJlcjtcbiAgICAgICAgaHlwb3RlbnVzZSA9IE1hdGguc3FydChNYXRoLnBvdygodGhpcy5wb3NpdGlvbi54IC0gdGhpcy5tb3VzZS54KSwgMikgKyBNYXRoLnBvdygodGhpcy5wb3NpdGlvbi55IC0gdGhpcy5tb3VzZS55KSwgMikpO1xuICAgICAgICAvLyBkaXN0YW5jZSBlbnRyZSBjZW50cmUgZGVzIDIgY2VyY2xlcyBlc3QgaW5mw6lyaWV1cmUgw6AgbGEgc29tbWUgZGVzIHJheW9ucyBkZSBjZXMgZGV1eCBjZXJjbGVzXG4gICAgICAgIGlmIChoeXBvdGVudXNlIDw9IHRoaXMucmFkaXVzICsgc2V0dGluZ3MuY2lyY2xlLnJhZGl1cy5tYXgpIHtcbiAgICAgICAgICAgIHRoaXMub3BhY2l0eSA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgLT0gdGhpcy5zcGVlZC55XG4gICAgICAgIHRoaXMucG9zaXRpb24ueCArPSB0aGlzLnNwZWVkLnhcblxuICAgICAgICByZXR1cm4gdGhpcy5kcmF3KClcbiAgICB9XG59XG4iXSwibmFtZXMiOlsiX19leHRlbmRzIiwiY2FudmFzIiwiY3R4IiwibW91c2UiLCJfc3VwZXIiLCJfdGhpcyIsImdlbmVyYXRlIiwiQnViYmxlIiwicmFkaXVzIiwic2V0dGluZ3NfMSIsImJ1YmJsZSIsIm1pbiIsIm1heCIsInBvc2l0aW9uIiwieCIsIndpZHRoIiwieSIsImhlaWdodCIsImNvbG9yIiwiY29sb3JzIiwibGVuZ3RoIiwib3BhY2l0eSIsInNwZWVkIiwiZ2xvYmFsQWxwaGEiLCJmaWxsU3R5bGUiLCJiZWdpblBhdGgiLCJhcmMiLCJNYXRoIiwiUEkiLCJjbG9zZVBhdGgiLCJmaWxsIiwiaHlwb3RlbnVzZSIsInNxcnQiLCJwb3ciLCJjaXJjbGUiLCJkcmF3IiwiQ2lyY2xlXzEiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/Models/Bubble.ts\n");

/***/ }),

/***/ "./src/js/Models/Circle.ts":
/*!*********************************!*\
  !*** ./src/js/Models/Circle.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\nexports.Circle = void 0;\n\nvar settings_1 = __webpack_require__(/*! ../settings */ \"./src/js/settings.ts\");\n\nvar Circle = function () {\n  function Circle(canvas, ctx, mouse, radius, color, opacity) {\n    if (radius === void 0) {\n      radius = settings_1.settings.circle.radius.max;\n    }\n\n    if (color === void 0) {\n      color = settings_1.settings.circle.color;\n    }\n\n    if (opacity === void 0) {\n      opacity = 0;\n    }\n\n    this.canvas = canvas;\n    this.ctx = ctx;\n    this.position = mouse;\n    this.radius = radius;\n    this.color = color;\n    this.origin = {\n      x: this.position.x,\n      y: this.position.y\n    };\n    this.opacity = opacity;\n  }\n\n  Circle.prototype.draw = function () {\n    this.ctx.globalAlpha = this.opacity;\n    this.ctx.fillStyle = this.color;\n    this.ctx.beginPath();\n    this.ctx.arc(this.origin.x, this.origin.y, this.radius, 0, 2 * Math.PI);\n    this.ctx.fill();\n    this.ctx.closePath();\n    this.ctx.globalAlpha = 1;\n  };\n\n  Circle.prototype.update = function () {\n    this.origin.x = this.position.x;\n    this.origin.y = this.position.y;\n    this.draw();\n  };\n\n  return Circle;\n}();\n\nexports.Circle = Circle;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvTW9kZWxzL0NpcmNsZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBO0FBVUksa0JBQVlBLE1BQVosRUFBdUNDLEdBQXZDLEVBQXNFQyxLQUF0RSxFQUF1R0MsTUFBdkcsRUFBb0pDLEtBQXBKLEVBQTJMQyxPQUEzTCxFQUE4TTtBQUF2RztBQUFBRixlQUFpQkcsb0JBQVNDLE1BQVQsQ0FBZ0JKLE1BQWhCLENBQXVCSyxHQUF4QztBQUEyQzs7QUFBRTtBQUFBSixjQUFnQkUsb0JBQVNDLE1BQVQsQ0FBZ0JILEtBQWhDO0FBQXFDOztBQUFFO0FBQUFDO0FBQW1COztBQUMxTSxTQUFLTCxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLQyxHQUFMLEdBQVdBLEdBQVg7QUFDQSxTQUFLUSxRQUFMLEdBQWdCUCxLQUFoQjtBQUNBLFNBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtNLE1BQUwsR0FBYztBQUNWQyxPQUFDLEVBQUUsS0FBS0YsUUFBTCxDQUFjRSxDQURQO0FBRVZDLE9BQUMsRUFBRSxLQUFLSCxRQUFMLENBQWNHO0FBRlAsS0FBZDtBQUlBLFNBQUtQLE9BQUwsR0FBZUEsT0FBZjtBQUNIOztBQUVTUSwwQkFBVjtBQUNJLFNBQUtaLEdBQUwsQ0FBU2EsV0FBVCxHQUF1QixLQUFLVCxPQUE1QjtBQUNBLFNBQUtKLEdBQUwsQ0FBU2MsU0FBVCxHQUFxQixLQUFLWCxLQUExQjtBQUNBLFNBQUtILEdBQUwsQ0FBU2UsU0FBVDtBQUNBLFNBQUtmLEdBQUwsQ0FBU2dCLEdBQVQsQ0FBYSxLQUFLUCxNQUFMLENBQVlDLENBQXpCLEVBQTRCLEtBQUtELE1BQUwsQ0FBWUUsQ0FBeEMsRUFBMkMsS0FBS1QsTUFBaEQsRUFBd0QsQ0FBeEQsRUFBMkQsSUFBSWUsSUFBSSxDQUFDQyxFQUFwRTtBQUNBLFNBQUtsQixHQUFMLENBQVNtQixJQUFUO0FBQ0EsU0FBS25CLEdBQUwsQ0FBU29CLFNBQVQ7QUFDQSxTQUFLcEIsR0FBTCxDQUFTYSxXQUFULEdBQXVCLENBQXZCO0FBRUgsR0FUUzs7QUFXQUQsNEJBQVY7QUFDSSxTQUFLSCxNQUFMLENBQVlDLENBQVosR0FBZ0IsS0FBS0YsUUFBTCxDQUFjRSxDQUE5QjtBQUNBLFNBQUtELE1BQUwsQ0FBWUUsQ0FBWixHQUFnQixLQUFLSCxRQUFMLENBQWNHLENBQTlCO0FBQ0EsU0FBS1UsSUFBTDtBQUNILEdBSlM7O0FBS2Q7QUFBQyxDQXZDRDs7QUFBYUMsY0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9idWJibGUtYXF1YXJpdW0vLi9zcmMvanMvTW9kZWxzL0NpcmNsZS50cz9mZWM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7c2V0dGluZ3N9IGZyb20gXCIuLi9zZXR0aW5nc1wiO1xuXG5leHBvcnQgY2xhc3MgQ2lyY2xlIHtcbiAgICBwcml2YXRlIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnRcbiAgICBwcml2YXRlIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEXG4gICAgcHJpdmF0ZSBwb3NpdGlvbjoge3g6IG51bWJlciwgeTogbnVtYmVyfVxuICAgIHByaXZhdGUgcmFkaXVzOiBudW1iZXJcbiAgICBwcml2YXRlIGNvbG9yOiBzdHJpbmdcbiAgICBwcml2YXRlIHNwZWVkOiB7eDogbnVtYmVyLCB5OiBudW1iZXJ9XG4gICAgcHJpdmF0ZSBvcmlnaW46IHsgeDogbnVtYmVyLCB5OiBudW1iZXIgfTtcbiAgICBwcml2YXRlIG9wYWNpdHk6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBtb3VzZTogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9LCByYWRpdXM6IG51bWJlciA9IHNldHRpbmdzLmNpcmNsZS5yYWRpdXMubWF4LCBjb2xvcjogc3RyaW5nID0gc2V0dGluZ3MuY2lyY2xlLmNvbG9yLCBvcGFjaXR5OiBudW1iZXIgPSAwKSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzXG4gICAgICAgIHRoaXMuY3R4ID0gY3R4XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBtb3VzZTtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICAgICAgdGhpcy5vcmlnaW4gPSB7XG4gICAgICAgICAgICB4OiB0aGlzLnBvc2l0aW9uLngsXG4gICAgICAgICAgICB5OiB0aGlzLnBvc2l0aW9uLnlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9wYWNpdHkgPSBvcGFjaXR5O1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBkcmF3KCkge1xuICAgICAgICB0aGlzLmN0eC5nbG9iYWxBbHBoYSA9IHRoaXMub3BhY2l0eTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKClcbiAgICAgICAgdGhpcy5jdHguYXJjKHRoaXMub3JpZ2luLngsIHRoaXMub3JpZ2luLnksIHRoaXMucmFkaXVzLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4Lmdsb2JhbEFscGhhID0gMTtcblxuICAgIH1cblxuICAgIHByb3RlY3RlZCB1cGRhdGUoKSB7XG4gICAgICAgIHRoaXMub3JpZ2luLnggPSB0aGlzLnBvc2l0aW9uLnhcbiAgICAgICAgdGhpcy5vcmlnaW4ueSA9IHRoaXMucG9zaXRpb24ueVxuICAgICAgICB0aGlzLmRyYXcoKVxuICAgIH1cbn0iXSwibmFtZXMiOlsiY2FudmFzIiwiY3R4IiwibW91c2UiLCJyYWRpdXMiLCJjb2xvciIsIm9wYWNpdHkiLCJzZXR0aW5nc18xIiwiY2lyY2xlIiwibWF4IiwicG9zaXRpb24iLCJvcmlnaW4iLCJ4IiwieSIsIkNpcmNsZSIsImdsb2JhbEFscGhhIiwiZmlsbFN0eWxlIiwiYmVnaW5QYXRoIiwiYXJjIiwiTWF0aCIsIlBJIiwiZmlsbCIsImNsb3NlUGF0aCIsImRyYXciLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/Models/Circle.ts\n");

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

eval("\n\nexports.__esModule = true;\nexports.canvas = void 0;\n\nvar settings_1 = __webpack_require__(/*! ./settings */ \"./src/js/settings.ts\");\n\nexports.canvas = {\n  init: function init(canvas, ctx, mouse) {\n    this.canvas = document.querySelector('.canvas');\n    this.ctx = this.canvas.getContext('2d');\n    this.mouse = mouse;\n    this.bubbles = [];\n    this.resizeCanvas();\n    this.generateGradient();\n    this.addEventListeners();\n    this.draw();\n    return this;\n  },\n  resizeCanvas: function resizeCanvas() {\n    this.canvas.width = window.innerWidth * settings_1.settings.canvasWidth;\n    this.canvas.height = window.innerHeight * settings_1.settings.canvasHeight;\n    return this;\n  },\n  generateGradient: function generateGradient() {\n    this.gradient = this.ctx.createLinearGradient(0, 0, this.canvas.width, this.canvas.height);\n\n    for (var i = 0; i < settings_1.settings.gradient.length; i++) {\n      this.gradient.addColorStop(i == 0 ? 0 : 1 / i, settings_1.settings.gradient[i]);\n    }\n\n    return this;\n  },\n  draw: function draw() {\n    this.ctx.fillStyle = this.gradient;\n    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);\n    return this;\n  },\n  addEventListeners: function addEventListeners() {\n    var _this = this;\n\n    window.addEventListener('resize', function () {\n      _this.resizeCanvas();\n\n      _this.draw();\n    });\n    this.canvas.addEventListener('mousemove', function (e) {\n      _this.mouse.x = Math.max(e.x - _this.canvas.getBoundingClientRect().x - parseInt(getComputedStyle(_this.canvas).borderWidth), 0);\n      _this.mouse.y = Math.max(e.y - _this.canvas.getBoundingClientRect().y - parseInt(getComputedStyle(_this.canvas).borderWidth), 0);\n    });\n    return this;\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RyxDQUE1RyxDQUFmO0FBQ0gsS0FIRDtBQUlBLFdBQU8sSUFBUDtBQUNIO0FBcERpQixDQUFUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnViYmxlLWFxdWFyaXVtLy4vc3JjL2pzL2NhbnZhcy50cz82YmQ5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7c2V0dGluZ3N9IGZyb20gXCIuL3NldHRpbmdzXCI7XG5cbmV4cG9ydCBjb25zdCBjYW52YXMgPSB7XG4gICAgaW5pdChjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgbW91c2U6IHt4OiBudW1iZXIsIHk6IG51bWJlcn0pIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FudmFzJykgYXMgSFRNTENhbnZhc0VsZW1lbnRcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXG4gICAgICAgIHRoaXMubW91c2UgPSBtb3VzZVxuICAgICAgICB0aGlzLmJ1YmJsZXMgPSBbXVxuXG4gICAgICAgIHRoaXMucmVzaXplQ2FudmFzKClcbiAgICAgICAgdGhpcy5nZW5lcmF0ZUdyYWRpZW50KClcblxuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKClcbiAgICAgICAgdGhpcy5kcmF3KClcblxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH0sXG5cbiAgICByZXNpemVDYW52YXMoKSB7XG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGggKiBzZXR0aW5ncy5jYW52YXNXaWR0aFxuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgKiBzZXR0aW5ncy5jYW52YXNIZWlnaHRcblxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH0sXG5cbiAgICBnZW5lcmF0ZUdyYWRpZW50KCkge1xuICAgICAgICB0aGlzLmdyYWRpZW50ID0gdGhpcy5jdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2V0dGluZ3MuZ3JhZGllbnQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coaSA9PSAwID8gMCA6IDEgLyBpKVxuICAgICAgICAgICAgdGhpcy5ncmFkaWVudC5hZGRDb2xvclN0b3AoaSA9PSAwID8gMCA6IDEgLyBpLCBzZXR0aW5ncy5ncmFkaWVudFtpXSk7XG4gICAgICAgICAgICAvLyBUT0RPXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpc1xuXG4gICAgfSxcbiAgICBkcmF3KCkge1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLmdyYWRpZW50O1xuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcblxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH0sXG5cbiAgICBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVzaXplQ2FudmFzKClcbiAgICAgICAgICAgIHRoaXMuZHJhdygpXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMubW91c2UueCA9IE1hdGgubWF4KGUueCAtIHRoaXMuY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnggLSBwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKHRoaXMuY2FudmFzKS5ib3JkZXJXaWR0aCksIDApXG4gICAgICAgICAgICB0aGlzLm1vdXNlLnkgPSBNYXRoLm1heChlLnkgLSB0aGlzLmNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS55IC0gcGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmNhbnZhcykuYm9yZGVyV2lkdGgpLCAwKVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbn07XG4iXSwibmFtZXMiOlsiZXhwb3J0cyIsImluaXQiLCJjYW52YXMiLCJjdHgiLCJtb3VzZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImdldENvbnRleHQiLCJidWJibGVzIiwicmVzaXplQ2FudmFzIiwiZ2VuZXJhdGVHcmFkaWVudCIsImFkZEV2ZW50TGlzdGVuZXJzIiwiZHJhdyIsIndpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsInNldHRpbmdzXzEiLCJjYW52YXNXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwiY2FudmFzSGVpZ2h0IiwiZ3JhZGllbnQiLCJjcmVhdGVMaW5lYXJHcmFkaWVudCIsImkiLCJsZW5ndGgiLCJhZGRDb2xvclN0b3AiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJfdGhpcyIsImUiLCJ4IiwiTWF0aCIsIm1heCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInBhcnNlSW50IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImJvcmRlcldpZHRoIiwieSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/canvas.ts\n");

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

eval("\n\nexports.__esModule = true;\n\nvar settings_1 = __webpack_require__(/*! ./settings */ \"./src/js/settings.ts\");\n\nvar Bubble_1 = __webpack_require__(/*! ./Models/Bubble */ \"./src/js/Models/Bubble.ts\");\n\nvar canvas_1 = __webpack_require__(/*! ./canvas */ \"./src/js/canvas.ts\");\n\nvar animation_1 = __webpack_require__(/*! ./animation */ \"./src/js/animation.ts\");\n\nvar Circle_1 = __webpack_require__(/*! ./Models/Circle */ \"./src/js/Models/Circle.ts\");\n\nvar app = {\n  init: function init() {\n    this.canvasElt = document.querySelector('.canvas');\n    this.ctx = this.canvasElt.getContext('2d');\n    this.mouse = {\n      x: 0,\n      y: 0\n    };\n    this.bubbles = [];\n    this.circles = [];\n    this.mousePointer = new Circle_1.Circle(this.canvas, this.ctx, this.mouse, settings_1.settings.circle.radius.max, settings_1.settings.circle.color, 1);\n    this.canvas = canvas_1.canvas.init(this.canvas, this.ctx, this.mouse);\n    this.loadBubbles();\n    this.animation = animation_1.animation.init(this.canvas, this.bubbles, this.mousePointer);\n  },\n  loadBubbles: function loadBubbles() {\n    for (var i = 0; i < settings_1.settings.bubble.maxCount; i++) {\n      this.bubbles.push(new Bubble_1.Bubble(this.canvasElt, this.ctx, this.mouse));\n    }\n  },\n  loadCircle: function loadCircle() {\n    this.circles.push(new Circle_1.Circle(this.canvasElt, this.ctx, this.mouse, settings_1.settings.circle.radius.max, settings_1.settings.circle.color, 1));\n  }\n};\napp.init();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvbWFpbi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUEsSUFBTUEsR0FBRyxHQUFHO0FBRVJDLE1BQUksRUFBSjtBQUNJLFNBQUtDLFNBQUwsR0FBaUJDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixTQUF2QixDQUFqQjtBQUNBLFNBQUtDLEdBQUwsR0FBVyxLQUFLSCxTQUFMLENBQWVJLFVBQWYsQ0FBMEIsSUFBMUIsQ0FBWDtBQUNBLFNBQUtDLEtBQUwsR0FBYTtBQUFDQyxPQUFDLEVBQUUsQ0FBSjtBQUFPQyxPQUFDLEVBQUU7QUFBVixLQUFiO0FBQ0EsU0FBS0MsT0FBTCxHQUFlLEVBQWY7QUFDQSxTQUFLQyxPQUFMLEdBQWUsRUFBZjtBQUVBLFNBQUtDLFlBQUwsR0FBb0IsSUFBSUMsZUFBSixDQUFXLEtBQUtDLE1BQWhCLEVBQXdCLEtBQUtULEdBQTdCLEVBQWtDLEtBQUtFLEtBQXZDLEVBQThDUSxvQkFBU0MsTUFBVCxDQUFnQkMsTUFBaEIsQ0FBdUJDLEdBQXJFLEVBQTBFSCxvQkFBU0MsTUFBVCxDQUFnQkcsS0FBMUYsRUFBaUcsQ0FBakcsQ0FBcEI7QUFDQSxTQUFLTCxNQUFMLEdBQWNNLGdCQUFPbkIsSUFBUCxDQUFZLEtBQUthLE1BQWpCLEVBQXlCLEtBQUtULEdBQTlCLEVBQW1DLEtBQUtFLEtBQXhDLENBQWQ7QUFHQSxTQUFLYyxXQUFMO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQkMsc0JBQVV0QixJQUFWLENBQWUsS0FBS2EsTUFBcEIsRUFBNEIsS0FBS0osT0FBakMsRUFBMEMsS0FBS0UsWUFBL0MsQ0FBakI7QUFFSCxHQWhCTztBQWtCUlMsYUFBVztBQUNQLFNBQUssSUFBSUcsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR1Qsb0JBQVNVLE1BQVQsQ0FBZ0JDLFFBQXBDLEVBQThDRixDQUFDLEVBQS9DLEVBQW1EO0FBQy9DLFdBQUtkLE9BQUwsQ0FBYWlCLElBQWIsQ0FBa0IsSUFBSUMsZUFBSixDQUFXLEtBQUsxQixTQUFoQixFQUEyQixLQUFLRyxHQUFoQyxFQUFxQyxLQUFLRSxLQUExQyxDQUFsQjtBQUNIO0FBQ0osR0F0Qk87QUF3QlJzQixZQUFVO0FBQ04sU0FBS2xCLE9BQUwsQ0FBYWdCLElBQWIsQ0FBa0IsSUFBSWQsZUFBSixDQUFXLEtBQUtYLFNBQWhCLEVBQTJCLEtBQUtHLEdBQWhDLEVBQXFDLEtBQUtFLEtBQTFDLEVBQWlEUSxvQkFBU0MsTUFBVCxDQUFnQkMsTUFBaEIsQ0FBdUJDLEdBQXhFLEVBQTZFSCxvQkFBU0MsTUFBVCxDQUFnQkcsS0FBN0YsRUFBb0csQ0FBcEcsQ0FBbEI7QUFDSDtBQTFCTyxDQUFaO0FBNEJBbkIsR0FBRyxDQUFDQyxJQUFKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnViYmxlLWFxdWFyaXVtLy4vc3JjL2pzL21haW4udHM/NGI3MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3NldHRpbmdzfSBmcm9tIFwiLi9zZXR0aW5nc1wiO1xuaW1wb3J0IHtCdWJibGV9IGZyb20gXCIuL01vZGVscy9CdWJibGVcIjtcbmltcG9ydCB7Y2FudmFzfSBmcm9tIFwiLi9jYW52YXNcIjtcbmltcG9ydCB7YW5pbWF0aW9ufSBmcm9tIFwiLi9hbmltYXRpb25cIjtcbmltcG9ydCB7Q2lyY2xlfSBmcm9tIFwiLi9Nb2RlbHMvQ2lyY2xlXCI7XG5cbmNvbnN0IGFwcCA9IHtcblxuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuY2FudmFzRWx0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbnZhcycpIGFzIEhUTUxDYW52YXNFbGVtZW50XG4gICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXNFbHQuZ2V0Q29udGV4dCgnMmQnKVxuICAgICAgICB0aGlzLm1vdXNlID0ge3g6IDAsIHk6IDB9XG4gICAgICAgIHRoaXMuYnViYmxlcyA9IFtdXG4gICAgICAgIHRoaXMuY2lyY2xlcyA9IFtdXG5cbiAgICAgICAgdGhpcy5tb3VzZVBvaW50ZXIgPSBuZXcgQ2lyY2xlKHRoaXMuY2FudmFzLCB0aGlzLmN0eCwgdGhpcy5tb3VzZSwgc2V0dGluZ3MuY2lyY2xlLnJhZGl1cy5tYXgsIHNldHRpbmdzLmNpcmNsZS5jb2xvciwgMSk7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzLmluaXQodGhpcy5jYW52YXMsIHRoaXMuY3R4LCB0aGlzLm1vdXNlKVxuXG4gICAgICAgIC8vdGhpcy5sb2FkQ2lyY2xlKClcbiAgICAgICAgdGhpcy5sb2FkQnViYmxlcygpXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uID0gYW5pbWF0aW9uLmluaXQodGhpcy5jYW52YXMsIHRoaXMuYnViYmxlcywgdGhpcy5tb3VzZVBvaW50ZXIpXG5cbiAgICB9LFxuXG4gICAgbG9hZEJ1YmJsZXMoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2V0dGluZ3MuYnViYmxlLm1heENvdW50OyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuYnViYmxlcy5wdXNoKG5ldyBCdWJibGUodGhpcy5jYW52YXNFbHQsIHRoaXMuY3R4LCB0aGlzLm1vdXNlKSlcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBsb2FkQ2lyY2xlKCkge1xuICAgICAgICB0aGlzLmNpcmNsZXMucHVzaChuZXcgQ2lyY2xlKHRoaXMuY2FudmFzRWx0LCB0aGlzLmN0eCwgdGhpcy5tb3VzZSwgc2V0dGluZ3MuY2lyY2xlLnJhZGl1cy5tYXgsIHNldHRpbmdzLmNpcmNsZS5jb2xvciwgMSkpXG4gICAgfVxufTtcbmFwcC5pbml0KClcblxuXG4iXSwibmFtZXMiOlsiYXBwIiwiaW5pdCIsImNhbnZhc0VsdCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImN0eCIsImdldENvbnRleHQiLCJtb3VzZSIsIngiLCJ5IiwiYnViYmxlcyIsImNpcmNsZXMiLCJtb3VzZVBvaW50ZXIiLCJDaXJjbGVfMSIsImNhbnZhcyIsInNldHRpbmdzXzEiLCJjaXJjbGUiLCJyYWRpdXMiLCJtYXgiLCJjb2xvciIsImNhbnZhc18xIiwibG9hZEJ1YmJsZXMiLCJhbmltYXRpb24iLCJhbmltYXRpb25fMSIsImkiLCJidWJibGUiLCJtYXhDb3VudCIsInB1c2giLCJCdWJibGVfMSIsImxvYWRDaXJjbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/main.ts\n");

/***/ }),

/***/ "./src/js/settings.ts":
/*!****************************!*\
  !*** ./src/js/settings.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.__esModule = true;\nexports.settings = void 0;\nexports.settings = {\n  canvasWidth: 0.8,\n  canvasHeight: 0.6,\n  gradient: ['hsl(165, 19%, 40%)', 'hsl(133, 18%, 59%)'],\n  bubble: {\n    radius: {\n      min: 10,\n      max: 30\n    },\n    speed: {\n      x: {\n        min: -2,\n        max: 2\n      },\n      y: {\n        min: 3,\n        max: 7\n      }\n    },\n    colors: ['hsl(201, 20%, 23%)', 'hsl(186, 21%, 26%)', 'hsl(165, 19%, 40%)', 'hsl(133, 18%, 59%)', 'hsl(97, 13%, 80%)'],\n    maxCount: 20\n  },\n  circle: {\n    radius: {\n      min: 10,\n      max: 30\n    },\n    color: '#e58b8b',\n    maxCount: 1\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvc2V0dGluZ3MudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFhQSxnQkFBQUEsR0FBVztBQUNwQkMsYUFBVyxFQUFFLEdBRE87QUFFcEJDLGNBQVksRUFBRSxHQUZNO0FBR3BCQyxVQUFRLEVBQUUsQ0FDTixvQkFETSxFQUVOLG9CQUZNLENBSFU7QUFPcEJDLFFBQU0sRUFBRTtBQUNKQyxVQUFNLEVBQUU7QUFDSkMsU0FBRyxFQUFFLEVBREQ7QUFFSkMsU0FBRyxFQUFFO0FBRkQsS0FESjtBQUtKQyxTQUFLLEVBQUU7QUFDSEMsT0FBQyxFQUFFO0FBQUNILFdBQUcsRUFBRSxDQUFDLENBQVA7QUFBV0MsV0FBRyxFQUFFO0FBQWhCLE9BREE7QUFFSEcsT0FBQyxFQUFFO0FBQUNKLFdBQUcsRUFBRSxDQUFOO0FBQVVDLFdBQUcsRUFBRTtBQUFmO0FBRkEsS0FMSDtBQVNKSSxVQUFNLEVBQ0YsQ0FDSSxvQkFESixFQUVJLG9CQUZKLEVBR0ksb0JBSEosRUFJSSxvQkFKSixFQUtJLG1CQUxKLENBVkE7QUFpQkpDLFlBQVEsRUFBRTtBQWpCTixHQVBZO0FBMEJwQkMsUUFBTSxFQUFFO0FBQ0pSLFVBQU0sRUFBRTtBQUNKQyxTQUFHLEVBQUUsRUFERDtBQUVKQyxTQUFHLEVBQUU7QUFGRCxLQURKO0FBS0pPLFNBQUssRUFBRSxTQUxIO0FBTUpGLFlBQVEsRUFBRTtBQU5OO0FBMUJZLENBQVgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9idWJibGUtYXF1YXJpdW0vLi9zcmMvanMvc2V0dGluZ3MudHM/YzQyMSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgc2V0dGluZ3MgPSB7XG4gICAgY2FudmFzV2lkdGg6IDAuOCxcbiAgICBjYW52YXNIZWlnaHQ6IDAuNixcbiAgICBncmFkaWVudDogW1xuICAgICAgICAnaHNsKDE2NSwgMTklLCA0MCUpJyxcbiAgICAgICAgJ2hzbCgxMzMsIDE4JSwgNTklKScsXG4gICAgXSxcbiAgICBidWJibGU6IHtcbiAgICAgICAgcmFkaXVzOiB7XG4gICAgICAgICAgICBtaW46IDEwLFxuICAgICAgICAgICAgbWF4OiAzMCxcbiAgICAgICAgfSxcbiAgICAgICAgc3BlZWQ6IHtcbiAgICAgICAgICAgIHg6IHttaW46IC0yLCAgbWF4OiAyfSxcbiAgICAgICAgICAgIHk6IHttaW46IDMsICBtYXg6IDd9LFxuICAgICAgICB9LFxuICAgICAgICBjb2xvcnM6XG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgJ2hzbCgyMDEsIDIwJSwgMjMlKScsXG4gICAgICAgICAgICAgICAgJ2hzbCgxODYsIDIxJSwgMjYlKScsXG4gICAgICAgICAgICAgICAgJ2hzbCgxNjUsIDE5JSwgNDAlKScsXG4gICAgICAgICAgICAgICAgJ2hzbCgxMzMsIDE4JSwgNTklKScsXG4gICAgICAgICAgICAgICAgJ2hzbCg5NywgMTMlLCA4MCUpJ1xuICAgICAgICAgICAgXSxcbiAgICAgICAgbWF4Q291bnQ6IDIwLFxuICAgIH0sXG4gICAgY2lyY2xlOiB7XG4gICAgICAgIHJhZGl1czoge1xuICAgICAgICAgICAgbWluOiAxMCxcbiAgICAgICAgICAgIG1heDogMzAsXG4gICAgICAgIH0sXG4gICAgICAgIGNvbG9yOiAnI2U1OGI4YicsXG4gICAgICAgIG1heENvdW50OiAxLFxuICAgIH0sXG5cbn0iXSwibmFtZXMiOlsiZXhwb3J0cyIsImNhbnZhc1dpZHRoIiwiY2FudmFzSGVpZ2h0IiwiZ3JhZGllbnQiLCJidWJibGUiLCJyYWRpdXMiLCJtaW4iLCJtYXgiLCJzcGVlZCIsIngiLCJ5IiwiY29sb3JzIiwibWF4Q291bnQiLCJjaXJjbGUiLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/settings.ts\n");

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