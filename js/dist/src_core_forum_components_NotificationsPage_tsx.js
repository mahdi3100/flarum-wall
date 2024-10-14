"use strict";
(self["webpackChunkmodule_exports"] = self["webpackChunkmodule_exports"] || []).push([["src_core_forum_components_NotificationsPage_tsx"],{

/***/ "./src/core/forum/components/NotificationsPage.tsx":
/*!*********************************************************!*\
  !*** ./src/core/forum/components/NotificationsPage.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NotificationsPage)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../forum/app */ "./src/core/forum/app.ts");
/* harmony import */ var _common_components_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/components/Page */ "./src/core/common/components/Page.tsx");
/* harmony import */ var _NotificationList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NotificationList */ "./src/core/forum/components/NotificationList.js");
/* harmony import */ var _common_utils_extractText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/utils/extractText */ "./src/core/common/utils/extractText.ts");






/**
 * The `NotificationsPage` component shows the notifications list. It is only
 * used on mobile devices where the notifications dropdown is within the drawer.
 */
var NotificationsPage = /*#__PURE__*/function (_Page) {
  function NotificationsPage() {
    return _Page.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(NotificationsPage, _Page);
  var _proto = NotificationsPage.prototype;
  _proto.oninit = function oninit(vnode) {
    _Page.prototype.oninit.call(this, vnode);
    _forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].history.push('notifications', (0,_common_utils_extractText__WEBPACK_IMPORTED_MODULE_4__["default"])(_forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].translator.trans('core.forum.notifications.title')));
    _forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].notifications.load();
    this.bodyClass = 'App--notifications';
  };
  _proto.view = function view() {
    return m("div", {
      className: "NotificationsPage"
    }, m(_NotificationList__WEBPACK_IMPORTED_MODULE_3__["default"], {
      state: _forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].notifications
    }));
  };
  return NotificationsPage;
}(_common_components_Page__WEBPACK_IMPORTED_MODULE_2__["default"]);


/***/ })

}]);
//# sourceMappingURL=src_core_forum_components_NotificationsPage_tsx.js.map