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

            case 5:
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
    lineNumber: 20,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbmV3LW1lZXR1cC9pbmRleC5qcyJdLCJuYW1lcyI6WyJOZXdNZWV0VXAiLCJmdW4iLCJtZWV0dXBEYXRhIiwidGl0bGUiLCJpbWFnZSIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwicmVzIiwiZGF0YSIsImpzb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVlLFNBQVNBLFNBQVQsR0FBcUI7QUFBQSxXQUNuQkMsR0FEbUI7QUFBQTtBQUFBOztBQUFBO0FBQUEsNFlBQ2xDLGlCQUFtQkMsVUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1FDLG1CQURSLEdBQytDRCxVQUQvQyxDQUNRQyxLQURSLEVBQ2VDLEtBRGYsR0FDK0NGLFVBRC9DLENBQ2VFLEtBRGYsRUFDc0JDLE9BRHRCLEdBQytDSCxVQUQvQyxDQUNzQkcsT0FEdEIsRUFDK0JDLFdBRC9CLEdBQytDSixVQUQvQyxDQUMrQkksV0FEL0I7QUFBQTtBQUFBLHFCQUVrQkMsS0FBSyxDQUFDLGlCQUFELEVBQW9CO0FBQ3ZDQyxzQkFBTSxFQUFFLE1BRCtCO0FBRXZDQyxvQkFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUNuQlIsdUJBQUssRUFBTEEsS0FEbUI7QUFFbkJDLHVCQUFLLEVBQUxBLEtBRm1CO0FBR25CQyx5QkFBTyxFQUFQQSxPQUhtQjtBQUluQkMsNkJBQVcsRUFBWEE7QUFKbUIsaUJBQWYsQ0FGaUM7QUFRdkNNLHVCQUFPLEVBQUU7QUFDUCxrQ0FBZ0I7QUFEVDtBQVI4QixlQUFwQixDQUZ2Qjs7QUFBQTtBQUVNQyxpQkFGTjtBQWNNQyxrQkFkTixHQWNhRCxHQUFHLENBQUNFLElBQUosRUFkYjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURrQztBQUFBO0FBQUE7O0FBaUJsQyxzQkFBTyxxRUFBQyx5RUFBRDtBQUFlLGVBQVcsRUFBRWQ7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0Q7S0FsQnVCRCxTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL25ldy1tZWV0dXAuNDM1ZTNjMTdiMjI1MGNiODM4MDMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXdNZWV0dXBGb3JtIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL21lZXR1cHMvTmV3TWVldHVwRm9ybVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmV3TWVldFVwKCkge1xyXG4gIGFzeW5jIGZ1bmN0aW9uIGZ1bihtZWV0dXBEYXRhKSB7XHJcbiAgICBsZXQgeyB0aXRsZSwgaW1hZ2UsIGFkZHJlc3MsIGRlc2NyaXB0aW9uIH0gPSBtZWV0dXBEYXRhO1xyXG4gICAgbGV0IHJlcyA9IGF3YWl0IGZldGNoKFwiL2FwaS9uZXctbWVldHVwXCIsIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIHRpdGxlLFxyXG4gICAgICAgIGltYWdlLFxyXG4gICAgICAgIGFkZHJlc3MsXHJcbiAgICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgIH0pLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIGxldCBkYXRhID0gcmVzLmpzb24oKTtcclxuICB9XHJcbiAgcmV0dXJuIDxOZXdNZWV0dXBGb3JtIG9uQWRkTWVldHVwPXtmdW59IC8+O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=