"use strict";
(self["webpackChunkmodule_exports"] = self["webpackChunkmodule_exports"] || []).push([["src_core_forum_components_EditPostComposer_js"],{

/***/ "./src/core/forum/components/EditPostComposer.js":
/*!*******************************************************!*\
  !*** ./src/core/forum/components/EditPostComposer.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EditPostComposer)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../forum/app */ "./src/core/forum/app.ts");
/* harmony import */ var _ComposerBody__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ComposerBody */ "./src/core/forum/components/ComposerBody.tsx");
/* harmony import */ var _common_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/components/Button */ "./src/core/common/components/Button.tsx");
/* harmony import */ var _common_components_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/components/Link */ "./src/core/common/components/Link.js");
/* harmony import */ var _common_components_Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/components/Icon */ "./src/core/common/components/Icon.tsx");






function minimizeComposerIfFullScreen(e) {
  if (_forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].composer.isFullScreen()) {
    _forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].composer.minimize();
    e.stopPropagation();
  }
}

/**
 * The `EditPostComposer` component displays the composer content for editing a
 * post. It sets the initial content to the content of the post that is being
 * edited, and adds a header control to indicate which post is being edited.
 *
 * ### Attrs
 *
 * - All of the attrs for ComposerBody
 * - `post`
 */
var EditPostComposer = /*#__PURE__*/function (_ComposerBody) {
  function EditPostComposer() {
    return _ComposerBody.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(EditPostComposer, _ComposerBody);
  EditPostComposer.initAttrs = function initAttrs(attrs) {
    _ComposerBody.initAttrs.call(this, attrs);
    attrs.submitLabel = attrs.submitLabel || _forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].translator.trans('core.forum.composer_edit.submit_button');
    attrs.confirmExit = attrs.confirmExit || _forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].translator.trans('core.forum.composer_edit.discard_confirmation');
    attrs.originalContent = attrs.originalContent || attrs.post.content();
    attrs.user = attrs.user || attrs.post.user();
    attrs.post.editedContent = attrs.originalContent;
  };
  var _proto = EditPostComposer.prototype;
  _proto.headerItems = function headerItems() {
    var items = _ComposerBody.prototype.headerItems.call(this);
    var post = this.attrs.post;
    items.add('title', m("h3", null, m(_common_components_Icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
      name: 'fas fa-pencil-alt'
    }), ' ', m(_common_components_Link__WEBPACK_IMPORTED_MODULE_4__["default"], {
      href: _forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].route.discussion(post.discussion(), post.number()),
      onclick: minimizeComposerIfFullScreen
    }, _forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].translator.trans('core.forum.composer_edit.post_link', {
      number: post.number(),
      discussion: post.discussion().title()
    }))));
    return items;
  }

  /**
   * Jump to the preview when triggered by the text editor.
   */;
  _proto.jumpToPreview = function jumpToPreview(e) {
    minimizeComposerIfFullScreen(e);
    m.route.set(_forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].route.post(this.attrs.post));
  }

  /**
   * Get the data to submit to the server when the post is saved.
   *
   * @return {Record<string, unknown>}
   */;
  _proto.data = function data() {
    return {
      content: this.composer.fields.content()
    };
  };
  _proto.onsubmit = function onsubmit() {
    var _this = this;
    var discussion = this.attrs.post.discussion();
    this.loading = true;
    var data = this.data();
    this.attrs.post.save(data).then(function (post) {
      // If we're currently viewing the discussion which this edit was made
      // in, then we can scroll to the post.
      if (_forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].viewingDiscussion(discussion)) {
        _forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].current.get('stream').goToNumber(post.number());
      } else {
        // Otherwise, we'll create an alert message to inform the user that
        // their edit has been made, containing a button which will
        // transition to their edited post when clicked.
        var alert = _forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].alerts.show({
          type: 'success',
          controls: [m(_common_components_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
            className: "Button Button--link",
            onclick: function onclick() {
              m.route.set(_forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].route.post(post));
              _forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].alerts.dismiss(alert);
            }
          }, _forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].translator.trans('core.forum.composer_edit.view_button'))]
        }, _forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].translator.trans('core.forum.composer_edit.edited_message'));
      }
      _this.composer.hide();
    }, this.loaded.bind(this));
  };
  return EditPostComposer;
}(_ComposerBody__WEBPACK_IMPORTED_MODULE_2__["default"]);


/***/ })

}]);
//# sourceMappingURL=src_core_forum_components_EditPostComposer_js.js.map