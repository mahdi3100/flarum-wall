"use strict";
(self["webpackChunkmodule_exports"] = self["webpackChunkmodule_exports"] || []).push([["src_core_forum_components_ReplyComposer_js"],{

/***/ "./src/core/forum/components/ReplyComposer.js":
/*!****************************************************!*\
  !*** ./src/core/forum/components/ReplyComposer.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ReplyComposer)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../forum/app */ "./src/core/forum/app.ts");
/* harmony import */ var _ComposerBody__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ComposerBody */ "./src/core/forum/components/ComposerBody.tsx");
/* harmony import */ var _common_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/components/Button */ "./src/core/common/components/Button.tsx");
/* harmony import */ var _common_components_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/components/Link */ "./src/core/common/components/Link.js");
/* harmony import */ var _common_utils_extractText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/utils/extractText */ "./src/core/common/utils/extractText.ts");
/* harmony import */ var _common_components_Icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/components/Icon */ "./src/core/common/components/Icon.tsx");







function minimizeComposerIfFullScreen(e) {
  if (_forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].composer.isFullScreen()) {
    _forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].composer.minimize();
    e.stopPropagation();
  }
}

/**
 * The `ReplyComposer` component displays the composer content for replying to a
 * discussion.
 *
 * ### Attrs
 *
 * - All of the attrs of ComposerBody
 * - `discussion`
 */
var ReplyComposer = /*#__PURE__*/function (_ComposerBody) {
  function ReplyComposer() {
    return _ComposerBody.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(ReplyComposer, _ComposerBody);
  ReplyComposer.initAttrs = function initAttrs(attrs) {
    _ComposerBody.initAttrs.call(this, attrs);
    attrs.placeholder = attrs.placeholder || (0,_common_utils_extractText__WEBPACK_IMPORTED_MODULE_5__["default"])(_forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].translator.trans('core.forum.composer_reply.body_placeholder'));
    attrs.submitLabel = attrs.submitLabel || _forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].translator.trans('core.forum.composer_reply.submit_button');
    attrs.confirmExit = attrs.confirmExit || (0,_common_utils_extractText__WEBPACK_IMPORTED_MODULE_5__["default"])(_forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].translator.trans('core.forum.composer_reply.discard_confirmation'));
  };
  var _proto = ReplyComposer.prototype;
  _proto.headerItems = function headerItems() {
    var items = _ComposerBody.prototype.headerItems.call(this);
    var discussion = this.attrs.discussion;
    items.add('title', m("h3", null, m(_common_components_Icon__WEBPACK_IMPORTED_MODULE_6__["default"], {
      name: 'fas fa-reply'
    }), ' ', m(_common_components_Link__WEBPACK_IMPORTED_MODULE_4__["default"], {
      href: _forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].route.discussion(discussion),
      onclick: minimizeComposerIfFullScreen
    }, discussion.title())));
    return items;
  }

  /**
   * Jump to the preview when triggered by the text editor.
   */;
  _proto.jumpToPreview = function jumpToPreview(e) {
    minimizeComposerIfFullScreen(e);
    m.route.set(_forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].route.discussion(this.attrs.discussion, 'reply'));
  }

  /**
   * Get the data to submit to the server when the reply is saved.
   *
   * @return {Record<string, unknown>}
   */;
  _proto.data = function data() {
    return {
      content: this.composer.fields.content(),
      relationships: {
        discussion: this.attrs.discussion
      }
    };
  };
  _proto.onsubmit = function onsubmit() {
    var _this = this;
    var discussion = this.attrs.discussion;
    this.loading = true;
    m.redraw();
    var data = this.data();
    _forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].store.createRecord('posts').save(data).then(function (post) {
      // If we're currently viewing the discussion which this reply was made
      // in, then we can update the post stream and scroll to the post.
      if (_forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].viewingDiscussion(discussion)) {
        var stream = _forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].current.get('stream');
        stream.update().then(function () {
          return stream.goToNumber(post.number());
        });
      } else {
        // Otherwise, we'll create an alert message to inform the user that
        // their reply has been posted, containing a button which will
        // transition to their new post when clicked.
        var alert;
        var viewButton = m(_common_components_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
          className: "Button Button--link",
          onclick: function onclick() {
            m.route.set(_forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].route.post(post));
            _forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].alerts.dismiss(alert);
          }
        }, _forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].translator.trans('core.forum.composer_reply.view_button'));
        alert = _forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].alerts.show({
          type: 'success',
          controls: [viewButton]
        }, _forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].translator.trans('core.forum.composer_reply.posted_message'));
      }
      _this.composer.hide();
    }, this.loaded.bind(this));
  };
  return ReplyComposer;
}(_ComposerBody__WEBPACK_IMPORTED_MODULE_2__["default"]);


/***/ })

}]);
//# sourceMappingURL=src_core_forum_components_ReplyComposer_js.js.map