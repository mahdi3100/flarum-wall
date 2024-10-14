"use strict";
(self["webpackChunkmodule_exports"] = self["webpackChunkmodule_exports"] || []).push([["src_core_forum_components_DiscussionComposer_js"],{

/***/ "./src/core/forum/components/DiscussionComposer.js":
/*!*********************************************************!*\
  !*** ./src/core/forum/components/DiscussionComposer.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DiscussionComposer)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../forum/app */ "./src/core/forum/app.ts");
/* harmony import */ var _ComposerBody__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ComposerBody */ "./src/core/forum/components/ComposerBody.tsx");
/* harmony import */ var _common_utils_extractText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/utils/extractText */ "./src/core/common/utils/extractText.ts");
/* harmony import */ var _common_utils_Stream__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/utils/Stream */ "./src/core/common/utils/Stream.ts");






/**
 * The `DiscussionComposer` component displays the composer content for starting
 * a new discussion. It adds a text field as a header control so the user can
 * enter the title of their discussion. It also overrides the `submit` and
 * `willExit` actions to account for the title.
 *
 * ### Attrs
 *
 * - All of the attrs for ComposerBody
 * - `titlePlaceholder`
 */
var DiscussionComposer = /*#__PURE__*/function (_ComposerBody) {
  function DiscussionComposer() {
    return _ComposerBody.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(DiscussionComposer, _ComposerBody);
  DiscussionComposer.initAttrs = function initAttrs(attrs) {
    _ComposerBody.initAttrs.call(this, attrs);
    attrs.placeholder = attrs.placeholder || (0,_common_utils_extractText__WEBPACK_IMPORTED_MODULE_3__["default"])(_forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].translator.trans('core.forum.composer_discussion.body_placeholder'));
    attrs.submitLabel = attrs.submitLabel || _forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].translator.trans('core.forum.composer_discussion.submit_button');
    attrs.confirmExit = attrs.confirmExit || (0,_common_utils_extractText__WEBPACK_IMPORTED_MODULE_3__["default"])(_forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].translator.trans('core.forum.composer_discussion.discard_confirmation'));
    attrs.titlePlaceholder = attrs.titlePlaceholder || (0,_common_utils_extractText__WEBPACK_IMPORTED_MODULE_3__["default"])(_forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].translator.trans('core.forum.composer_discussion.title_placeholder'));
    attrs.className = 'ComposerBody--discussion';
  };
  var _proto = DiscussionComposer.prototype;
  _proto.oninit = function oninit(vnode) {
    _ComposerBody.prototype.oninit.call(this, vnode);
    this.composer.fields.title = this.composer.fields.title || (0,_common_utils_Stream__WEBPACK_IMPORTED_MODULE_4__["default"])('');

    /**
     * The value of the title input.
     *
     * @type {Function}
     */
    this.title = this.composer.fields.title;
  };
  _proto.headerItems = function headerItems() {
    var items = _ComposerBody.prototype.headerItems.call(this);
    items.add('title', m("h3", null, _forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].translator.trans('core.forum.composer_discussion.title')), 100);
    items.add('discussionTitle', m("h3", null, m("input", {
      className: "FormControl",
      bidi: this.title,
      placeholder: this.attrs.titlePlaceholder,
      disabled: !!this.attrs.disabled,
      onkeydown: this.onkeydown.bind(this)
    })));
    return items;
  }

  /**
   * Handle the title input's keydown event. When the return key is pressed,
   * move the focus to the start of the text editor.
   *
   * @param {KeyboardEvent} e
   */;
  _proto.onkeydown = function onkeydown(e) {
    if (e.which === 13) {
      // Return
      e.preventDefault();
      this.composer.editor.moveCursorTo(0);
    }
    e.redraw = false;
  };
  _proto.hasChanges = function hasChanges() {
    return this.title() || this.composer.fields.content();
  }

  /**
   * Get the data to submit to the server when the discussion is saved.
   *
   * @return {Record<string, unknown>}
   */;
  _proto.data = function data() {
    return {
      title: this.title(),
      content: this.composer.fields.content()
    };
  };
  _proto.onsubmit = function onsubmit() {
    var _this = this;
    this.loading = true;
    var data = this.data();
    _forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].store.createRecord('discussions').save(data).then(function (discussion) {
      _this.composer.hide();
      _forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].discussions.refresh();
      m.route.set(_forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].route.discussion(discussion));
    }, this.loaded.bind(this));
  };
  return DiscussionComposer;
}(_ComposerBody__WEBPACK_IMPORTED_MODULE_2__["default"]);


/***/ })

}]);
//# sourceMappingURL=src_core_forum_components_DiscussionComposer_js.js.map