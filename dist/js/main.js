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
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\n\nvar settings_1 = __webpack_require__(/*! ../settings */ \"./src/js/settings.ts\");\n\nvar helpers_1 = __webpack_require__(/*! ../helpers */ \"./src/js/helpers.ts\");\n\nvar Bubble = function () {\n  function Bubble(canvas, ctx) {\n    this.canvas = canvas;\n    this.ctx = ctx;\n    this.generate();\n  }\n\n  Bubble.prototype.generate = function () {\n    this.radius = (0, helpers_1.random)(settings_1.settings.bubble.radius.min, settings_1.settings.bubble.radius.max);\n    this.position = {\n      x: (0, helpers_1.random)(this.radius, this.canvas.width),\n      y: this.canvas.height + this.radius\n    };\n    this.color = settings_1.settings.bubble.colors[(0, helpers_1.random)(0, settings_1.settings.bubble.colors.length)];\n    this.opacity = (0, helpers_1.random)(0, 1);\n    this.speed = {\n      x: (0, helpers_1.random)(settings_1.settings.bubble.speed.x.min, settings_1.settings.bubble.speed.x.max),\n      y: (0, helpers_1.random)(settings_1.settings.bubble.speed.y.min, settings_1.settings.bubble.speed.y.max)\n    };\n  };\n\n  Bubble.prototype.draw = function () {\n    this.ctx.beginPath();\n    this.ctx.globalAlpha = this.opacity;\n    this.ctx.fillStyle = this.color;\n    this.ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);\n    this.ctx.fill();\n    this.ctx.globalAlpha = 1;\n  };\n\n  Bubble.prototype.update = function () {\n    this.draw();\n\n    if (this.position.y < -this.radius) {\n      this.generate();\n    }\n\n    this.position.y -= this.speed.y;\n    this.position.x += this.speed.x;\n  };\n\n  return Bubble;\n}();\n\nexports[\"default\"] = Bubble;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvTW9kZWxzL0J1YmJsZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBQ0E7O0FBRUE7QUFTSSxrQkFBWUEsTUFBWixFQUF1Q0MsR0FBdkMsRUFBb0U7QUFDaEUsU0FBS0QsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0MsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsU0FBS0MsUUFBTDtBQUNIOztBQUVEQztBQUNJLFNBQUtDLE1BQUwsR0FBYyxzQkFBT0Msb0JBQVNDLE1BQVQsQ0FBZ0JGLE1BQWhCLENBQXVCRyxHQUE5QixFQUFtQ0Ysb0JBQVNDLE1BQVQsQ0FBZ0JGLE1BQWhCLENBQXVCSSxHQUExRCxDQUFkO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQjtBQUNaQyxPQUFDLEVBQUUsc0JBQU8sS0FBS04sTUFBWixFQUFvQixLQUFLSixNQUFMLENBQVlXLEtBQWhDLENBRFM7QUFFWkMsT0FBQyxFQUFFLEtBQUtaLE1BQUwsQ0FBWWEsTUFBWixHQUFxQixLQUFLVDtBQUZqQixLQUFoQjtBQUlBLFNBQUtVLEtBQUwsR0FBYVQsb0JBQVNDLE1BQVQsQ0FBZ0JTLE1BQWhCLENBQXVCLHNCQUFPLENBQVAsRUFBVVYsb0JBQVNDLE1BQVQsQ0FBZ0JTLE1BQWhCLENBQXVCQyxNQUFqQyxDQUF2QixDQUFiO0FBRUEsU0FBS0MsT0FBTCxHQUFlLHNCQUFPLENBQVAsRUFBVSxDQUFWLENBQWY7QUFDQSxTQUFLQyxLQUFMLEdBQWM7QUFDVlIsT0FBQyxFQUFFLHNCQUFPTCxvQkFBU0MsTUFBVCxDQUFnQlksS0FBaEIsQ0FBc0JSLENBQXRCLENBQXdCSCxHQUEvQixFQUFvQ0Ysb0JBQVNDLE1BQVQsQ0FBZ0JZLEtBQWhCLENBQXNCUixDQUF0QixDQUF3QkYsR0FBNUQsQ0FETztBQUVWSSxPQUFDLEVBQUUsc0JBQU9QLG9CQUFTQyxNQUFULENBQWdCWSxLQUFoQixDQUFzQk4sQ0FBdEIsQ0FBd0JMLEdBQS9CLEVBQW9DRixvQkFBU0MsTUFBVCxDQUFnQlksS0FBaEIsQ0FBc0JOLENBQXRCLENBQXdCSixHQUE1RDtBQUZPLEtBQWQ7QUFJSCxHQWJEOztBQWVBTDtBQUNJLFNBQUtGLEdBQUwsQ0FBU2tCLFNBQVQ7QUFDQSxTQUFLbEIsR0FBTCxDQUFTbUIsV0FBVCxHQUF1QixLQUFLSCxPQUE1QjtBQUNBLFNBQUtoQixHQUFMLENBQVNvQixTQUFULEdBQXFCLEtBQUtQLEtBQTFCO0FBQ0EsU0FBS2IsR0FBTCxDQUFTcUIsR0FBVCxDQUFhLEtBQUtiLFFBQUwsQ0FBY0MsQ0FBM0IsRUFBOEIsS0FBS0QsUUFBTCxDQUFjRyxDQUE1QyxFQUErQyxLQUFLUixNQUFwRCxFQUE0RCxDQUE1RCxFQUErRG1CLElBQUksQ0FBQ0MsRUFBTCxHQUFVLENBQXpFO0FBQ0EsU0FBS3ZCLEdBQUwsQ0FBU3dCLElBQVQ7QUFDQSxTQUFLeEIsR0FBTCxDQUFTbUIsV0FBVCxHQUF1QixDQUF2QjtBQUNILEdBUEQ7O0FBU0FqQjtBQUNJLFNBQUt1QixJQUFMOztBQUNBLFFBQUcsS0FBS2pCLFFBQUwsQ0FBY0csQ0FBZCxHQUFrQixDQUFDLEtBQUtSLE1BQTNCLEVBQW1DO0FBQy9CLFdBQUtGLFFBQUw7QUFDSDs7QUFFRCxTQUFLTyxRQUFMLENBQWNHLENBQWQsSUFBbUIsS0FBS00sS0FBTCxDQUFXTixDQUE5QjtBQUNBLFNBQUtILFFBQUwsQ0FBY0MsQ0FBZCxJQUFtQixLQUFLUSxLQUFMLENBQVdSLENBQTlCO0FBRUgsR0FURDs7QUFVSjtBQUFDLENBakREIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnViYmxlLWFxdWFyaXVtLy4vc3JjL2pzL01vZGVscy9CdWJibGUudHM/ODgxYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3NldHRpbmdzfSBmcm9tIFwiLi4vc2V0dGluZ3NcIjtcbmltcG9ydCB7cmFuZG9tfSBmcm9tIFwiLi4vaGVscGVyc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdWJibGUge1xuICAgIHByaXZhdGUgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudFxuICAgIHByaXZhdGUgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkRcbiAgICBwcml2YXRlIHBvc2l0aW9uOiB7eDogbnVtYmVyLCB5OiBudW1iZXJ9XG4gICAgcHJpdmF0ZSByYWRpdXM6IG51bWJlclxuICAgIHByaXZhdGUgb3BhY2l0eTogbnVtYmVyXG4gICAgcHJpdmF0ZSBjb2xvcjogc3RyaW5nXG4gICAgcHJpdmF0ZSBzcGVlZDoge3g6IG51bWJlciwgeTogbnVtYmVyfVxuXG4gICAgY29uc3RydWN0b3IoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXNcbiAgICAgICAgdGhpcy5jdHggPSBjdHhcbiAgICAgICAgdGhpcy5nZW5lcmF0ZSgpXG4gICAgfVxuXG4gICAgZ2VuZXJhdGUoKSB7XG4gICAgICAgIHRoaXMucmFkaXVzID0gcmFuZG9tKHNldHRpbmdzLmJ1YmJsZS5yYWRpdXMubWluLCBzZXR0aW5ncy5idWJibGUucmFkaXVzLm1heClcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IHJhbmRvbSh0aGlzLnJhZGl1cywgdGhpcy5jYW52YXMud2lkdGgpLFxuICAgICAgICAgICAgeTogdGhpcy5jYW52YXMuaGVpZ2h0ICsgdGhpcy5yYWRpdXNcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbG9yID0gc2V0dGluZ3MuYnViYmxlLmNvbG9yc1tyYW5kb20oMCwgc2V0dGluZ3MuYnViYmxlLmNvbG9ycy5sZW5ndGgpXVxuICAgICAgICAvL2NvbnNvbGUubG9nKHNldHRpbmdzLmJ1YmJsZS5jb2xvcnNbcmFuZG9tKDAsIHNldHRpbmdzLmJ1YmJsZS5jb2xvcnMubGVuZ3RoLCBmYWxzZSldKSAvLyBub3Qgd29ya2luZ1xuICAgICAgICB0aGlzLm9wYWNpdHkgPSByYW5kb20oMCwgMSlcbiAgICAgICAgdGhpcy5zcGVlZCA9ICB7XG4gICAgICAgICAgICB4OiByYW5kb20oc2V0dGluZ3MuYnViYmxlLnNwZWVkLngubWluLCBzZXR0aW5ncy5idWJibGUuc3BlZWQueC5tYXgpLFxuICAgICAgICAgICAgeTogcmFuZG9tKHNldHRpbmdzLmJ1YmJsZS5zcGVlZC55Lm1pbiwgc2V0dGluZ3MuYnViYmxlLnNwZWVkLnkubWF4KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKClcbiAgICAgICAgdGhpcy5jdHguZ2xvYmFsQWxwaGEgPSB0aGlzLm9wYWNpdHlcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvclxuICAgICAgICB0aGlzLmN0eC5hcmModGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMucmFkaXVzLCAwLCBNYXRoLlBJICogMilcbiAgICAgICAgdGhpcy5jdHguZmlsbCgpXG4gICAgICAgIHRoaXMuY3R4Lmdsb2JhbEFscGhhID0gMVxuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5kcmF3KClcbiAgICAgICAgaWYodGhpcy5wb3NpdGlvbi55IDwgLXRoaXMucmFkaXVzKSB7XG4gICAgICAgICAgICB0aGlzLmdlbmVyYXRlKClcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucG9zaXRpb24ueSAtPSB0aGlzLnNwZWVkLnlcbiAgICAgICAgdGhpcy5wb3NpdGlvbi54ICs9IHRoaXMuc3BlZWQueFxuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMucG9zaXRpb24pXG4gICAgfVxufVxuIl0sIm5hbWVzIjpbImNhbnZhcyIsImN0eCIsImdlbmVyYXRlIiwiQnViYmxlIiwicmFkaXVzIiwic2V0dGluZ3NfMSIsImJ1YmJsZSIsIm1pbiIsIm1heCIsInBvc2l0aW9uIiwieCIsIndpZHRoIiwieSIsImhlaWdodCIsImNvbG9yIiwiY29sb3JzIiwibGVuZ3RoIiwib3BhY2l0eSIsInNwZWVkIiwiYmVnaW5QYXRoIiwiZ2xvYmFsQWxwaGEiLCJmaWxsU3R5bGUiLCJhcmMiLCJNYXRoIiwiUEkiLCJmaWxsIiwiZHJhdyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/Models/Bubble.ts\n");

/***/ }),

/***/ "./src/js/animation.ts":
/*!*****************************!*\
  !*** ./src/js/animation.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.__esModule = true;\nexports.animation = void 0;\nexports.animation = {\n  init: function init(canvas, bubbles) {\n    this.bubbles = bubbles;\n    this.canvas = canvas;\n    this.animate();\n    return this;\n  },\n  animate: function animate() {\n    var _this = this;\n\n    this.canvas.draw();\n    this.bubbles.forEach(function (bubble) {\n      bubble.update();\n    });\n    requestAnimationFrame(function () {\n      _this.animate();\n    });\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvYW5pbWF0aW9uLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFFYUEsaUJBQUFBLEdBQVk7QUFFckJDLE1BQUksZ0JBQUNDLE1BQUQsRUFBU0MsT0FBVCxFQUFnQjtBQUNoQixTQUFLQSxPQUFMLEdBQWVBLE9BQWY7QUFDQSxTQUFLRCxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLRSxPQUFMO0FBRUEsV0FBTyxJQUFQO0FBQ0gsR0FSb0I7QUFXckJBLFNBQU8sRUFBUDtBQUFBOztBQUNJLFNBQUtGLE1BQUwsQ0FBWUcsSUFBWjtBQUNBLFNBQUtGLE9BQUwsQ0FBYUcsT0FBYixDQUFxQixVQUFDQyxNQUFELEVBQWU7QUFDaENBLFlBQU0sQ0FBQ0MsTUFBUDtBQUNILEtBRkQ7QUFHQUMseUJBQXFCLENBQUM7QUFDbEJDLFdBQUksQ0FBQ04sT0FBTDtBQUNILEtBRm9CLENBQXJCO0FBR0g7QUFuQm9CLENBQVoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9idWJibGUtYXF1YXJpdW0vLi9zcmMvanMvYW5pbWF0aW9uLnRzP2M5MjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJ1YmJsZSBmcm9tIFwiLi9Nb2RlbHMvQnViYmxlXCI7XG5cbmV4cG9ydCBjb25zdCBhbmltYXRpb24gPSB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGluaXQoY2FudmFzLCBidWJibGVzKSB7XG4gICAgICAgIHRoaXMuYnViYmxlcyA9IGJ1YmJsZXNcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXNcbiAgICAgICAgdGhpcy5hbmltYXRlKClcblxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH0sXG5cblxuICAgIGFuaW1hdGUoKSB7XG4gICAgICAgIHRoaXMuY2FudmFzLmRyYXcoKVxuICAgICAgICB0aGlzLmJ1YmJsZXMuZm9yRWFjaCgoYnViYmxlOiBCdWJibGUpID0+IHtcbiAgICAgICAgICAgIGJ1YmJsZS51cGRhdGUoKVxuICAgICAgICB9KVxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hbmltYXRlKClcbiAgICAgICAgfSk7XG4gICAgfVxuXG59Il0sIm5hbWVzIjpbImV4cG9ydHMiLCJpbml0IiwiY2FudmFzIiwiYnViYmxlcyIsImFuaW1hdGUiLCJkcmF3IiwiZm9yRWFjaCIsImJ1YmJsZSIsInVwZGF0ZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIl90aGlzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/animation.ts\n");

/***/ }),

/***/ "./src/js/canvas.ts":
/*!**************************!*\
  !*** ./src/js/canvas.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\nexports.canvas = void 0;\n\nvar settings_1 = __webpack_require__(/*! ./settings */ \"./src/js/settings.ts\");\n\nexports.canvas = {\n  init: function init() {\n    this.canvas = document.querySelector('.canvas');\n    this.ctx = this.canvas.getContext('2d');\n    this.bubbles = [];\n    this.resizeCanvas();\n    this.generateGradient();\n    this.addEventListeners();\n    this.draw();\n    return this;\n  },\n  resizeCanvas: function resizeCanvas() {\n    this.canvas.width = window.innerWidth * settings_1.settings.canvasWidth;\n    this.canvas.height = window.innerHeight * settings_1.settings.canvasHeight;\n  },\n  generateGradient: function generateGradient() {\n    this.gradient = this.ctx.createLinearGradient(0, 0, this.canvas.width, this.canvas.height);\n\n    for (var i = 0; i < settings_1.settings.gradient.length; i++) {\n      this.gradient.addColorStop(i == 0 ? 0 : 1 / i, settings_1.settings.gradient[i]);\n    }\n  },\n  draw: function draw() {\n    this.ctx.fillStyle = this.gradient;\n    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);\n  },\n  addEventListeners: function addEventListeners() {\n    var _this = this;\n\n    window.addEventListener('resize', function () {\n      _this.resizeCanvas();\n\n      _this.draw();\n    });\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvY2FudmFzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBR2FBLGNBQUFBLEdBQVM7QUFDbEJDLE1BQUksRUFBSjtBQUNJLFNBQUtDLE1BQUwsR0FBY0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLFNBQXZCLENBQWQ7QUFDQSxTQUFLQyxHQUFMLEdBQVcsS0FBS0gsTUFBTCxDQUFZSSxVQUFaLENBQXVCLElBQXZCLENBQVg7QUFDQSxTQUFLQyxPQUFMLEdBQWUsRUFBZjtBQUVBLFNBQUtDLFlBQUw7QUFDQSxTQUFLQyxnQkFBTDtBQUVBLFNBQUtDLGlCQUFMO0FBQ0EsU0FBS0MsSUFBTDtBQUVBLFdBQU8sSUFBUDtBQUNILEdBYmlCO0FBZWxCSCxjQUFZO0FBQ1IsU0FBS04sTUFBTCxDQUFZVSxLQUFaLEdBQW9CQyxNQUFNLENBQUNDLFVBQVAsR0FBb0JDLG9CQUFTQyxXQUFqRDtBQUNBLFNBQUtkLE1BQUwsQ0FBWWUsTUFBWixHQUFxQkosTUFBTSxDQUFDSyxXQUFQLEdBQXFCSCxvQkFBU0ksWUFBbkQ7QUFDSCxHQWxCaUI7QUFvQmxCVixrQkFBZ0I7QUFDWixTQUFLVyxRQUFMLEdBQWdCLEtBQUtmLEdBQUwsQ0FBU2dCLG9CQUFULENBQThCLENBQTlCLEVBQWlDLENBQWpDLEVBQW9DLEtBQUtuQixNQUFMLENBQVlVLEtBQWhELEVBQXVELEtBQUtWLE1BQUwsQ0FBWWUsTUFBbkUsQ0FBaEI7O0FBQ0EsU0FBSyxJQUFJSyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHUCxvQkFBU0ssUUFBVCxDQUFrQkcsTUFBdEMsRUFBOENELENBQUMsRUFBL0MsRUFBbUQ7QUFFL0MsV0FBS0YsUUFBTCxDQUFjSSxZQUFkLENBQTJCRixDQUFDLElBQUksQ0FBTCxHQUFTLENBQVQsR0FBYSxJQUFJQSxDQUE1QyxFQUErQ1Asb0JBQVNLLFFBQVQsQ0FBa0JFLENBQWxCLENBQS9DO0FBRUg7QUFFSixHQTVCaUI7QUE2QmxCWCxNQUFJO0FBQ0EsU0FBS04sR0FBTCxDQUFTb0IsU0FBVCxHQUFxQixLQUFLTCxRQUExQjtBQUNBLFNBQUtmLEdBQUwsQ0FBU3FCLFFBQVQsQ0FBa0IsQ0FBbEIsRUFBcUIsQ0FBckIsRUFBd0IsS0FBS3hCLE1BQUwsQ0FBWVUsS0FBcEMsRUFBMkMsS0FBS1YsTUFBTCxDQUFZZSxNQUF2RDtBQUNILEdBaENpQjtBQWtDbEJQLG1CQUFpQjtBQUFqQjs7QUFDSUcsVUFBTSxDQUFDYyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQztBQUM5QkMsV0FBSSxDQUFDcEIsWUFBTDs7QUFDQW9CLFdBQUksQ0FBQ2pCLElBQUw7QUFDSCxLQUhEO0FBS0g7QUF4Q2lCLENBQVQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9idWJibGUtYXF1YXJpdW0vLi9zcmMvanMvY2FudmFzLnRzPzZiZDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtzZXR0aW5nc30gZnJvbSBcIi4vc2V0dGluZ3NcIjtcbmltcG9ydCBCdWJibGUgZnJvbSBcIi4vTW9kZWxzL0J1YmJsZVwiO1xuXG5leHBvcnQgY29uc3QgY2FudmFzID0ge1xuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbnZhcycpIGFzIEhUTUxDYW52YXNFbGVtZW50XG4gICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxuICAgICAgICB0aGlzLmJ1YmJsZXMgPSBbXVxuXG4gICAgICAgIHRoaXMucmVzaXplQ2FudmFzKClcbiAgICAgICAgdGhpcy5nZW5lcmF0ZUdyYWRpZW50KClcblxuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKClcbiAgICAgICAgdGhpcy5kcmF3KClcblxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH0sXG5cbiAgICByZXNpemVDYW52YXMoKSB7XG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGggKiBzZXR0aW5ncy5jYW52YXNXaWR0aFxuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgKiBzZXR0aW5ncy5jYW52YXNIZWlnaHRcbiAgICB9LFxuXG4gICAgZ2VuZXJhdGVHcmFkaWVudCgpIHtcbiAgICAgICAgdGhpcy5ncmFkaWVudCA9IHRoaXMuY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNldHRpbmdzLmdyYWRpZW50Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGkgPT0gMCA/IDAgOiAxIC8gaSlcbiAgICAgICAgICAgIHRoaXMuZ3JhZGllbnQuYWRkQ29sb3JTdG9wKGkgPT0gMCA/IDAgOiAxIC8gaSwgc2V0dGluZ3MuZ3JhZGllbnRbaV0pO1xuICAgICAgICAgICAgLy8gVE9ET1xuICAgICAgICB9XG5cbiAgICB9LFxuICAgIGRyYXcoKSB7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuZ3JhZGllbnQ7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgIH0sXG5cbiAgICBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVzaXplQ2FudmFzKClcbiAgICAgICAgICAgIHRoaXMuZHJhdygpXG4gICAgICAgIH0pXG5cbiAgICB9LFxufTtcbiJdLCJuYW1lcyI6WyJleHBvcnRzIiwiaW5pdCIsImNhbnZhcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImN0eCIsImdldENvbnRleHQiLCJidWJibGVzIiwicmVzaXplQ2FudmFzIiwiZ2VuZXJhdGVHcmFkaWVudCIsImFkZEV2ZW50TGlzdGVuZXJzIiwiZHJhdyIsIndpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsInNldHRpbmdzXzEiLCJjYW52YXNXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwiY2FudmFzSGVpZ2h0IiwiZ3JhZGllbnQiLCJjcmVhdGVMaW5lYXJHcmFkaWVudCIsImkiLCJsZW5ndGgiLCJhZGRDb2xvclN0b3AiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJfdGhpcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/canvas.ts\n");

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

eval("\n\nexports.__esModule = true;\n\nvar settings_1 = __webpack_require__(/*! ./settings */ \"./src/js/settings.ts\");\n\nvar Bubble_1 = __webpack_require__(/*! ./Models/Bubble */ \"./src/js/Models/Bubble.ts\");\n\nvar canvas_1 = __webpack_require__(/*! ./canvas */ \"./src/js/canvas.ts\");\n\nvar animation_1 = __webpack_require__(/*! ./animation */ \"./src/js/animation.ts\");\n\nvar app = {\n  init: function init() {\n    this.canvasElt = document.querySelector('.canvas');\n    this.ctx = this.canvasElt.getContext('2d');\n    this.bubbles = [];\n    this.canvas = canvas_1.canvas.init();\n    this.animation = animation_1.animation.init(this.canvas, this.bubbles);\n    this.loadBubbles();\n  },\n  loadBubbles: function loadBubbles() {\n    for (var i = 0; i < settings_1.settings.bubble.maxCount; i++) {\n      this.bubbles.push(new Bubble_1[\"default\"](this.canvasElt, this.ctx));\n    }\n  }\n};\napp.init();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvbWFpbi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUEsSUFBTUEsR0FBRyxHQUFHO0FBRVJDLE1BQUksRUFBSjtBQUNJLFNBQUtDLFNBQUwsR0FBaUJDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixTQUF2QixDQUFqQjtBQUNBLFNBQUtDLEdBQUwsR0FBVyxLQUFLSCxTQUFMLENBQWVJLFVBQWYsQ0FBMEIsSUFBMUIsQ0FBWDtBQUNBLFNBQUtDLE9BQUwsR0FBZSxFQUFmO0FBRUEsU0FBS0MsTUFBTCxHQUFjQyxnQkFBT1IsSUFBUCxFQUFkO0FBQ0EsU0FBS1MsU0FBTCxHQUFpQkMsc0JBQVVWLElBQVYsQ0FBZSxLQUFLTyxNQUFwQixFQUE0QixLQUFLRCxPQUFqQyxDQUFqQjtBQUVBLFNBQUtLLFdBQUw7QUFFSCxHQVpPO0FBY1JBLGFBQVc7QUFDUCxTQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdDLG9CQUFTQyxNQUFULENBQWdCQyxRQUFwQyxFQUE4Q0gsQ0FBQyxFQUEvQyxFQUFtRDtBQUMvQyxXQUFLTixPQUFMLENBQWFVLElBQWIsQ0FBa0IsSUFBSUMsbUJBQUosQ0FBVyxLQUFLaEIsU0FBaEIsRUFBMkIsS0FBS0csR0FBaEMsQ0FBbEI7QUFDSDtBQUNKO0FBbEJPLENBQVo7QUF1QkFMLEdBQUcsQ0FBQ0MsSUFBSiIsInNvdXJjZXMiOlsid2VicGFjazovL2J1YmJsZS1hcXVhcml1bS8uL3NyYy9qcy9tYWluLnRzPzRiNzEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtzZXR0aW5nc30gZnJvbSBcIi4vc2V0dGluZ3NcIjtcbmltcG9ydCBCdWJibGUgZnJvbSBcIi4vTW9kZWxzL0J1YmJsZVwiO1xuaW1wb3J0IHtjYW52YXN9IGZyb20gXCIuL2NhbnZhc1wiO1xuaW1wb3J0IHthbmltYXRpb259IGZyb20gXCIuL2FuaW1hdGlvblwiO1xuXG5jb25zdCBhcHAgPSB7XG5cbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLmNhbnZhc0VsdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW52YXMnKSBhcyBIVE1MQ2FudmFzRWxlbWVudFxuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzRWx0LmdldENvbnRleHQoJzJkJylcbiAgICAgICAgdGhpcy5idWJibGVzID0gW11cblxuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcy5pbml0KClcbiAgICAgICAgdGhpcy5hbmltYXRpb24gPSBhbmltYXRpb24uaW5pdCh0aGlzLmNhbnZhcywgdGhpcy5idWJibGVzKVxuXG4gICAgICAgIHRoaXMubG9hZEJ1YmJsZXMoKVxuXG4gICAgfSxcblxuICAgIGxvYWRCdWJibGVzKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNldHRpbmdzLmJ1YmJsZS5tYXhDb3VudDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmJ1YmJsZXMucHVzaChuZXcgQnViYmxlKHRoaXMuY2FudmFzRWx0LCB0aGlzLmN0eCkpXG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59O1xuYXBwLmluaXQoKVxuXG5cbiJdLCJuYW1lcyI6WyJhcHAiLCJpbml0IiwiY2FudmFzRWx0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY3R4IiwiZ2V0Q29udGV4dCIsImJ1YmJsZXMiLCJjYW52YXMiLCJjYW52YXNfMSIsImFuaW1hdGlvbiIsImFuaW1hdGlvbl8xIiwibG9hZEJ1YmJsZXMiLCJpIiwic2V0dGluZ3NfMSIsImJ1YmJsZSIsIm1heENvdW50IiwicHVzaCIsIkJ1YmJsZV8xIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/main.ts\n");

/***/ }),

/***/ "./src/js/settings.ts":
/*!****************************!*\
  !*** ./src/js/settings.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.__esModule = true;\nexports.settings = void 0;\nexports.settings = {\n  canvasWidth: 0.8,\n  canvasHeight: 0.6,\n  gradient: ['hsl(165, 19%, 40%)', 'hsl(133, 18%, 59%)'],\n  bubble: {\n    radius: {\n      min: 10,\n      max: 30\n    },\n    speed: {\n      x: {\n        min: -2,\n        max: 2\n      },\n      y: {\n        min: 3,\n        max: 7\n      }\n    },\n    colors: ['hsl(201, 20%, 23%)', 'hsl(186, 21%, 26%)', 'hsl(165, 19%, 40%)', 'hsl(133, 18%, 59%)', 'hsl(97, 13%, 80%)'],\n    maxCount: 5\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvc2V0dGluZ3MudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFhQSxnQkFBQUEsR0FBVztBQUNwQkMsYUFBVyxFQUFFLEdBRE87QUFFcEJDLGNBQVksRUFBRSxHQUZNO0FBR3BCQyxVQUFRLEVBQUUsQ0FDTixvQkFETSxFQUVOLG9CQUZNLENBSFU7QUFPcEJDLFFBQU0sRUFBRTtBQUNKQyxVQUFNLEVBQUU7QUFDSkMsU0FBRyxFQUFFLEVBREQ7QUFFSkMsU0FBRyxFQUFFO0FBRkQsS0FESjtBQUtKQyxTQUFLLEVBQUU7QUFDSEMsT0FBQyxFQUFFO0FBQUNILFdBQUcsRUFBRSxDQUFDLENBQVA7QUFBV0MsV0FBRyxFQUFFO0FBQWhCLE9BREE7QUFFSEcsT0FBQyxFQUFFO0FBQUNKLFdBQUcsRUFBRSxDQUFOO0FBQVVDLFdBQUcsRUFBRTtBQUFmO0FBRkEsS0FMSDtBQWdCSkksVUFBTSxFQUNGLENBQ0ksb0JBREosRUFFSSxvQkFGSixFQUdJLG9CQUhKLEVBSUksb0JBSkosRUFLSSxtQkFMSixDQWpCQTtBQXdCSkMsWUFBUSxFQUFFO0FBeEJOO0FBUFksQ0FBWCIsInNvdXJjZXMiOlsid2VicGFjazovL2J1YmJsZS1hcXVhcml1bS8uL3NyYy9qcy9zZXR0aW5ncy50cz9jNDIxIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBzZXR0aW5ncyA9IHtcbiAgICBjYW52YXNXaWR0aDogMC44LFxuICAgIGNhbnZhc0hlaWdodDogMC42LFxuICAgIGdyYWRpZW50OiBbXG4gICAgICAgICdoc2woMTY1LCAxOSUsIDQwJSknLFxuICAgICAgICAnaHNsKDEzMywgMTglLCA1OSUpJyxcbiAgICBdLFxuICAgIGJ1YmJsZToge1xuICAgICAgICByYWRpdXM6IHtcbiAgICAgICAgICAgIG1pbjogMTAsXG4gICAgICAgICAgICBtYXg6IDMwLFxuICAgICAgICB9LFxuICAgICAgICBzcGVlZDoge1xuICAgICAgICAgICAgeDoge21pbjogLTIsICBtYXg6IDJ9LFxuICAgICAgICAgICAgeToge21pbjogMywgIG1heDogN30sXG4gICAgICAgIH0sXG4gICAgICAgIC8qY29sb3JzOiBbXG4gICAgICAgICAgICBbJzIwMScsICcyMCcsICcyMyddLFxuICAgICAgICAgICAgWycxODYnLCAnMjEnLCAnMjYnXSxcbiAgICAgICAgICAgIFsnMTY1JywgJzE5JywgJzQwJ10sXG4gICAgICAgICAgICBbJzEzMycsICcxOCcsICc1OSddLFxuICAgICAgICAgICAgWyc5NycsICcxMycsICc4MCddLFxuICAgICAgICBdLCovXG4gICAgICAgIGNvbG9yczpcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAnaHNsKDIwMSwgMjAlLCAyMyUpJyxcbiAgICAgICAgICAgICAgICAnaHNsKDE4NiwgMjElLCAyNiUpJyxcbiAgICAgICAgICAgICAgICAnaHNsKDE2NSwgMTklLCA0MCUpJyxcbiAgICAgICAgICAgICAgICAnaHNsKDEzMywgMTglLCA1OSUpJyxcbiAgICAgICAgICAgICAgICAnaHNsKDk3LCAxMyUsIDgwJSknXG4gICAgICAgICAgICBdLFxuICAgICAgICBtYXhDb3VudDogNSxcbiAgICB9LFxuXG59Il0sIm5hbWVzIjpbImV4cG9ydHMiLCJjYW52YXNXaWR0aCIsImNhbnZhc0hlaWdodCIsImdyYWRpZW50IiwiYnViYmxlIiwicmFkaXVzIiwibWluIiwibWF4Iiwic3BlZWQiLCJ4IiwieSIsImNvbG9ycyIsIm1heENvdW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/settings.ts\n");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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