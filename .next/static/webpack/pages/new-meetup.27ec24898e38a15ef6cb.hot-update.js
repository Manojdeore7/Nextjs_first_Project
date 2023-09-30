webpackHotUpdate_N_E("pages/new-meetup",{

/***/ "./pages/new-meetup/index.js":
/*!***********************************!*\
  !*** ./pages/new-meetup/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NewMeetUp; });
/* harmony import */ var C_Users_admin_Downloads_013_06_onwards_to_a_bigger_project_starting_project_Dynamic_Routing_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_admin_Downloads_013_06_onwards_to_a_bigger_project_starting_project_Dynamic_Routing_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_admin_Downloads_013_06_onwards_to_a_bigger_project_starting_project_Dynamic_Routing_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_admin_Downloads_013_06_onwards_to_a_bigger_project_starting_project_Dynamic_Routing_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _components_meetups_NewMeetupForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/meetups/NewMeetupForm */ "./components/meetups/NewMeetupForm.js");



var _jsxFileName = "C:\\Users\\admin\\Downloads\\013 06-onwards-to-a-bigger-project-starting-project\\Dynamic_Routing\\pages\\new-meetup\\index.js";

function NewMeetUp() {
  function fun(_x) {
    return _fun.apply(this, arguments);
  }

  function _fun() {
    _fun = Object(C_Users_admin_Downloads_013_06_onwards_to_a_bigger_project_starting_project_Dynamic_Routing_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_admin_Downloads_013_06_onwards_to_a_bigger_project_starting_project_Dynamic_Routing_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(meetupData) {
      var title, image, address, description, res, data;
      return C_Users_admin_Downloads_013_06_onwards_to_a_bigger_project_starting_project_Dynamic_Routing_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              title = meetupData.title, image = meetupData.image, address = meetupData.address, description = meetupData.description;
              _context.next = 3;
              return fetch("/api/new-meetup", {
                method: "POST",
                body: JSON.stringify({
                  title: title,
                  image: image,
                  address: address,
                  description: description
                }),
                headers: {
                  "Content-Type": "application/json"
                }
              });

            case 3:
              res = _context.sent;
              data = res.json();
              console.log(data);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _fun.apply(this, arguments);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_meetups_NewMeetupForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onAddMeetup: fun
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 10
  }, this);
}
_c = NewMeetUp;

var _c;

$RefreshReg$(_c, "NewMeetUp");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbmV3LW1lZXR1cC9pbmRleC5qcyJdLCJuYW1lcyI6WyJOZXdNZWV0VXAiLCJmdW4iLCJtZWV0dXBEYXRhIiwidGl0bGUiLCJpbWFnZSIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwicmVzIiwiZGF0YSIsImpzb24iLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFZSxTQUFTQSxTQUFULEdBQXFCO0FBQUEsV0FDbkJDLEdBRG1CO0FBQUE7QUFBQTs7QUFBQTtBQUFBLDRZQUNsQyxpQkFBbUJDLFVBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNRQyxtQkFEUixHQUMrQ0QsVUFEL0MsQ0FDUUMsS0FEUixFQUNlQyxLQURmLEdBQytDRixVQUQvQyxDQUNlRSxLQURmLEVBQ3NCQyxPQUR0QixHQUMrQ0gsVUFEL0MsQ0FDc0JHLE9BRHRCLEVBQytCQyxXQUQvQixHQUMrQ0osVUFEL0MsQ0FDK0JJLFdBRC9CO0FBQUE7QUFBQSxxQkFFa0JDLEtBQUssQ0FBQyxpQkFBRCxFQUFvQjtBQUN2Q0Msc0JBQU0sRUFBRSxNQUQrQjtBQUV2Q0Msb0JBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDbkJSLHVCQUFLLEVBQUxBLEtBRG1CO0FBRW5CQyx1QkFBSyxFQUFMQSxLQUZtQjtBQUduQkMseUJBQU8sRUFBUEEsT0FIbUI7QUFJbkJDLDZCQUFXLEVBQVhBO0FBSm1CLGlCQUFmLENBRmlDO0FBUXZDTSx1QkFBTyxFQUFFO0FBQ1Asa0NBQWdCO0FBRFQ7QUFSOEIsZUFBcEIsQ0FGdkI7O0FBQUE7QUFFTUMsaUJBRk47QUFjTUMsa0JBZE4sR0FjYUQsR0FBRyxDQUFDRSxJQUFKLEVBZGI7QUFlRUMscUJBQU8sQ0FBQ0MsR0FBUixDQUFZSCxJQUFaOztBQWZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRGtDO0FBQUE7QUFBQTs7QUFrQmxDLHNCQUFPLHFFQUFDLHlFQUFEO0FBQWUsZUFBVyxFQUFFYjtBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDRDtLQW5CdUJELFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbmV3LW1lZXR1cC4yN2VjMjQ4OThlMzhhMTVlZjZjYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5ld01lZXR1cEZvcm0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbWVldHVwcy9OZXdNZWV0dXBGb3JtXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOZXdNZWV0VXAoKSB7XHJcbiAgYXN5bmMgZnVuY3Rpb24gZnVuKG1lZXR1cERhdGEpIHtcclxuICAgIGxldCB7IHRpdGxlLCBpbWFnZSwgYWRkcmVzcywgZGVzY3JpcHRpb24gfSA9IG1lZXR1cERhdGE7XHJcbiAgICBsZXQgcmVzID0gYXdhaXQgZmV0Y2goXCIvYXBpL25ldy1tZWV0dXBcIiwge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgaW1hZ2UsXHJcbiAgICAgICAgYWRkcmVzcyxcclxuICAgICAgICBkZXNjcmlwdGlvbixcclxuICAgICAgfSksXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgbGV0IGRhdGEgPSByZXMuanNvbigpO1xyXG4gICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgfVxyXG4gIHJldHVybiA8TmV3TWVldHVwRm9ybSBvbkFkZE1lZXR1cD17ZnVufSAvPjtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9