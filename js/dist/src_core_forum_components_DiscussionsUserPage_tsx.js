"use strict";
(self["webpackChunkmodule_exports"] = self["webpackChunkmodule_exports"] || []).push([["src_core_forum_components_DiscussionsUserPage_tsx"],{

/***/ "./src/core/forum/components/DiscussionsUserPage.tsx":
/*!***********************************************************!*\
  !*** ./src/core/forum/components/DiscussionsUserPage.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DiscussionsUserPage)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _UserPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserPage */ "./src/core/forum/components/UserPage.tsx");
/* harmony import */ var _DiscussionList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DiscussionList */ "./src/core/forum/components/DiscussionList.js");
/* harmony import */ var _states_DiscussionListState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../states/DiscussionListState */ "./src/core/forum/states/DiscussionListState.ts");




/**
 * The `DiscussionsUserPage` component shows a discussion list inside of a user
 * page.
 */
var DiscussionsUserPage = /*#__PURE__*/function (_UserPage) {
  function DiscussionsUserPage() {
    return _UserPage.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(DiscussionsUserPage, _UserPage);
  var _proto = DiscussionsUserPage.prototype;
  _proto.oninit = function oninit(vnode) {
    _UserPage.prototype.oninit.call(this, vnode);
    this.loadUser(m.route.param('username'));
  };
  _proto.show = function show(user) {
    _UserPage.prototype.show.call(this, user);
    this.state = new _states_DiscussionListState__WEBPACK_IMPORTED_MODULE_3__["default"]({
      filter: {
        author: user.username()
      },
      sort: 'newest'
    });
    this.state.refresh();
  };
  _proto.content = function content() {
    return m("div", {
      className: "DiscussionsUserPage"
    }, m(_DiscussionList__WEBPACK_IMPORTED_MODULE_2__["default"], {
      state: this.state
    }));
  };
  return DiscussionsUserPage;
}(_UserPage__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ })

}]);
//# sourceMappingURL=src_core_forum_components_DiscussionsUserPage_tsx.js.map