"use strict";
(self["webpackChunkmodule_exports"] = self["webpackChunkmodule_exports"] || []).push([["src_core_forum_components_Composer_js"],{

/***/ "./src/core/forum/components/Composer.js":
/*!***********************************************!*\
  !*** ./src/core/forum/components/Composer.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Composer)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../forum/app */ "./src/core/forum/app.ts");
/* harmony import */ var _common_Component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/Component */ "./src/core/common/Component.ts");
/* harmony import */ var _common_utils_ItemList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/utils/ItemList */ "./src/core/common/utils/ItemList.ts");
/* harmony import */ var _ComposerButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ComposerButton */ "./src/core/forum/components/ComposerButton.js");
/* harmony import */ var _common_helpers_listItems__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/helpers/listItems */ "./src/core/common/helpers/listItems.tsx");
/* harmony import */ var _common_utils_classList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/utils/classList */ "./src/core/common/utils/classList.ts");
/* harmony import */ var _states_ComposerState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../states/ComposerState */ "./src/core/forum/states/ComposerState.tsx");









/**
 * The `Composer` component displays the composer. It can be loaded with a
 * content component with `load` and then its position/state can be altered with
 * `show`, `hide`, `close`, `minimize`, `fullScreen`, and `exitFullScreen`.
 */
var Composer = /*#__PURE__*/function (_Component) {
  function Composer() {
    return _Component.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Composer, _Component);
  var _proto = Composer.prototype;
  _proto.oninit = function oninit(vnode) {
    _Component.prototype.oninit.call(this, vnode);

    /**
     * The composer's "state".
     *
     * @type {ComposerState}
     */
    this.state = this.attrs.state;

    /**
     * Whether or not the composer currently has focus.
     *
     * @type {Boolean}
     */
    this.active = false;

    // Store the initial position so that we can trigger animations correctly.
    this.prevPosition = this.state.position;
  };
  _proto.view = function view() {
    var body = this.state.body;
    var classes = {
      normal: this.state.position === _states_ComposerState__WEBPACK_IMPORTED_MODULE_7__["default"].Position.NORMAL,
      minimized: this.state.position === _states_ComposerState__WEBPACK_IMPORTED_MODULE_7__["default"].Position.MINIMIZED,
      fullScreen: this.state.position === _states_ComposerState__WEBPACK_IMPORTED_MODULE_7__["default"].Position.FULLSCREEN,
      active: this.active,
      visible: this.state.isVisible()
    };

    // Set up a handler so that clicks on the content will show the composer.
    var showIfMinimized = this.state.position === _states_ComposerState__WEBPACK_IMPORTED_MODULE_7__["default"].Position.MINIMIZED ? this.state.show.bind(this.state) : undefined;
    var ComposerBody = body.componentClass;
    return m("div", {
      className: 'Composer ' + (0,_common_utils_classList__WEBPACK_IMPORTED_MODULE_6__["default"])(classes)
    }, m("div", {
      className: "Composer-handle",
      oncreate: this.configHandle.bind(this)
    }), m("ul", {
      className: "Composer-controls"
    }, (0,_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_5__["default"])(this.controlItems().toArray())), m("div", {
      className: "Composer-content",
      onclick: showIfMinimized
    }, ComposerBody && m(ComposerBody, Object.assign({}, body.attrs, {
      composer: this.state,
      disabled: classes.minimized
    }))));
  };
  _proto.onupdate = function onupdate(vnode) {
    _Component.prototype.onupdate.call(this, vnode);
    if (this.state.position === this.prevPosition) {
      // Set the height of the Composer element and its contents on each redraw,
      // so that they do not lose it if their DOM elements are recreated.
      this.updateHeight();
    } else {
      this.animatePositionChange();
      this.prevPosition = this.state.position;
    }
  };
  _proto.oncreate = function oncreate(vnode) {
    var _this = this;
    _Component.prototype.oncreate.call(this, vnode);
    this.initializeHeight();
    this.$().hide().css('bottom', -this.state.computedHeight());

    // Whenever any of the inputs inside the composer are have focus, we want to
    // add a class to the composer to draw attention to it.
    this.$().on('focus blur', ':input,.TextEditor-editorContainer', function (e) {
      _this.active = e.type === 'focusin';
      m.redraw();
    });

    // When the escape key is pressed on any inputs, close the composer.
    this.$().on('keydown', ':input,.TextEditor-editorContainer', 'esc', function () {
      return _this.state.close();
    });
    this.handlers = {};
    $(window).on('resize', this.handlers.onresize = this.updateHeight.bind(this)).resize();
    $(document).on('mousemove', this.handlers.onmousemove = this.onmousemove.bind(this)).on('mouseup', this.handlers.onmouseup = this.onmouseup.bind(this));
  };
  _proto.onremove = function onremove(vnode) {
    _Component.prototype.onremove.call(this, vnode);
    $(window).off('resize', this.handlers.onresize);
    $(document).off('mousemove', this.handlers.onmousemove).off('mouseup', this.handlers.onmouseup);
  }

  /**
   * Add the necessary event handlers to the composer's handle so that it can
   * be used to resize the composer.
   */;
  _proto.configHandle = function configHandle(vnode) {
    var composer = this;
    $(vnode.dom).css('cursor', 'row-resize').bind('dragstart mousedown', function (e) {
      return e.preventDefault();
    }).mousedown(function (e) {
      composer.mouseStart = e.clientY;
      composer.heightStart = composer.$().height();
      composer.handle = $(this);
      $('body').css('cursor', 'row-resize');
    });
  }

  /**
   * Resize the composer according to mouse movement.
   *
   * @param {MouseEvent} e
   */;
  _proto.onmousemove = function onmousemove(e) {
    if (!this.handle) return;

    // Work out how much the mouse has been moved, and set the height
    // relative to the old one based on that. Then update the content's
    // height so that it fills the height of the composer, and update the
    // body's padding.
    var deltaPixels = this.mouseStart - e.clientY;
    this.changeHeight(this.heightStart + deltaPixels);

    // Update the body's padding-bottom so that no content on the page will ever
    // get permanently hidden behind the composer. If the user is already
    // scrolled to the bottom of the page, then we will keep them scrolled to
    // the bottom after the padding has been updated.
    var scrollTop = $(window).scrollTop();
    var anchorToBottom = scrollTop > 0 && scrollTop + $(window).height() >= $(document).height();
    this.updateBodyPadding(anchorToBottom);
  }

  /**
   * Finish resizing the composer when the mouse is released.
   */;
  _proto.onmouseup = function onmouseup() {
    if (!this.handle) return;
    this.handle = null;
    $('body').css('cursor', '');
  }

  /**
   * Draw focus to the first focusable content element (the text editor).
   */;
  _proto.focus = function focus() {
    var _this$attrs$state$bod, _this$attrs$state$bod2;
    this.$(((_this$attrs$state$bod = (_this$attrs$state$bod2 = this.attrs.state.body.componentClass).focusOnSelector) == null ? void 0 : _this$attrs$state$bod.call(_this$attrs$state$bod2)) || '.Composer-content :input:enabled:visible, .TextEditor-editor').first().focus();
  }

  /**
   * Update the DOM to reflect the composer's current height. This involves
   * setting the height of the composer's root element, and adjusting the height
   * of any flexible elements inside the composer's body.
   */;
  _proto.updateHeight = function updateHeight() {
    var height = this.state.computedHeight();
    var $flexible = this.$('.Composer-flexible');
    this.$().height(height);
    if ($flexible.length) {
      var headerHeight = $flexible.offset().top - this.$().offset().top;
      var paddingBottom = parseInt($flexible.css('padding-bottom'), 10);
      var footerHeight = this.$('.Composer-footer').outerHeight(true);
      $flexible.height(this.$().outerHeight() - headerHeight - paddingBottom - footerHeight);
    }
  }

  /**
   * Update the amount of padding-bottom on the body so that the page's
   * content will still be visible above the composer when the page is
   * scrolled right to the bottom.
   */;
  _proto.updateBodyPadding = function updateBodyPadding() {
    var visible = this.state.position !== _states_ComposerState__WEBPACK_IMPORTED_MODULE_7__["default"].Position.HIDDEN && this.state.position !== _states_ComposerState__WEBPACK_IMPORTED_MODULE_7__["default"].Position.MINIMIZED && _forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].screen() !== 'phone';
    var paddingBottom = visible ? this.state.computedHeight() - parseInt($('#app').css('padding-bottom'), 10) : 0;
    $('#content').css({
      paddingBottom: paddingBottom
    });
  }

  /**
   * Trigger the right animation depending on the desired new position.
   */;
  _proto.animatePositionChange = function animatePositionChange() {
    // When exiting full-screen mode: focus content
    if (this.prevPosition === _states_ComposerState__WEBPACK_IMPORTED_MODULE_7__["default"].Position.FULLSCREEN && this.state.position === _states_ComposerState__WEBPACK_IMPORTED_MODULE_7__["default"].Position.NORMAL) {
      this.focus();
      return;
    }
    switch (this.state.position) {
      case _states_ComposerState__WEBPACK_IMPORTED_MODULE_7__["default"].Position.HIDDEN:
        return this.hide();
      case _states_ComposerState__WEBPACK_IMPORTED_MODULE_7__["default"].Position.MINIMIZED:
        return this.minimize();
      case _states_ComposerState__WEBPACK_IMPORTED_MODULE_7__["default"].Position.FULLSCREEN:
        return this.focus();
      case _states_ComposerState__WEBPACK_IMPORTED_MODULE_7__["default"].Position.NORMAL:
        return this.show();
    }
  }

  /**
   * Animate the Composer into the new position by changing the height.
   */;
  _proto.animateHeightChange = function animateHeightChange() {
    var $composer = this.$().stop(true);
    var oldHeight = $composer.outerHeight();
    var scrollTop = $(window).scrollTop();
    $composer.show();
    this.updateHeight();
    var newHeight = $composer.outerHeight();
    if (this.prevPosition === _states_ComposerState__WEBPACK_IMPORTED_MODULE_7__["default"].Position.HIDDEN) {
      $composer.css({
        bottom: -newHeight,
        height: newHeight
      });
    } else {
      $composer.css({
        height: oldHeight
      });
    }
    var animation = $composer.animate({
      bottom: 0,
      height: newHeight
    }, 'fast').promise();
    this.updateBodyPadding();
    $(window).scrollTop(scrollTop);
    return animation;
  }

  /**
   * Show the Composer backdrop.
   */;
  _proto.showBackdrop = function showBackdrop() {
    this.$backdrop = $('<div/>').addClass('composer-backdrop').appendTo('body');
  }

  /**
   * Hide the Composer backdrop.
   */;
  _proto.hideBackdrop = function hideBackdrop() {
    if (this.$backdrop) this.$backdrop.remove();
  }

  /**
   * Animate the composer sliding up from the bottom to take its normal height.
   *
   * @private
   */;
  _proto.show = function show() {
    var _this2 = this;
    this.animateHeightChange().then(function () {
      return _this2.focus();
    });
    if (_forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].screen() === 'phone') {
      // On safari fixed position doesn't properly work on mobile,
      // So we use absolute and set the top value.
      // https://github.com/flarum/core/issues/2652

      // Due to another safari bug, `scrollTop` is unreliable when
      // at the very bottom of the page AND opening the composer.
      // So we fallback to a calculated version of scrollTop.
      // https://github.com/flarum/core/issues/2683
      var scrollElement = document.documentElement;
      var topOfViewport = Math.min(scrollElement.scrollTop, scrollElement.scrollHeight - scrollElement.clientHeight);
      this.$().css('top', $('.App').is('.mobile-safari') ? topOfViewport : 0);
      this.showBackdrop();
    }
  }

  /**
   * Animate closing the composer.
   *
   * @private
   */;
  _proto.hide = function hide() {
    var _this3 = this;
    var $composer = this.$();

    // Animate the composer sliding down off the bottom edge of the viewport.
    // Only when the animation is completed, update other elements on the page.
    $composer.stop(true).animate({
      bottom: -$composer.height()
    }, 'fast', function () {
      $composer.hide();
      _this3.hideBackdrop();
      _this3.updateBodyPadding();
    });
  }

  /**
   * Shrink the composer until only its title is visible.
   *
   * @private
   */;
  _proto.minimize = function minimize() {
    this.animateHeightChange();
    this.$().css('top', 'auto');
    this.hideBackdrop();
  }

  /**
   * Build an item list for the composer's controls.
   *
   * @return {ItemList<import('mithril').Children>}
   */;
  _proto.controlItems = function controlItems() {
    var items = new _common_utils_ItemList__WEBPACK_IMPORTED_MODULE_3__["default"]();
    if (this.state.position === _states_ComposerState__WEBPACK_IMPORTED_MODULE_7__["default"].Position.FULLSCREEN) {
      items.add('exitFullScreen', m(_ComposerButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
        icon: "fas fa-compress",
        title: _forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].translator.trans('core.forum.composer.exit_full_screen_tooltip'),
        onclick: this.state.exitFullScreen.bind(this.state)
      }));
    } else {
      if (this.state.position !== _states_ComposerState__WEBPACK_IMPORTED_MODULE_7__["default"].Position.MINIMIZED) {
        items.add('minimize', m(_ComposerButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
          icon: (0,_common_utils_classList__WEBPACK_IMPORTED_MODULE_6__["default"])('fas minimize', {
            'fa-minus': _forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].screen() !== 'phone',
            'fa-times': _forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].screen() === 'phone'
          }),
          title: _forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].translator.trans('core.forum.composer.minimize_tooltip'),
          onclick: this.state.minimize.bind(this.state),
          itemClassName: "App-backControl"
        }));
        items.add('fullScreen', m(_ComposerButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
          icon: "fas fa-expand",
          title: _forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].translator.trans('core.forum.composer.full_screen_tooltip'),
          onclick: this.state.fullScreen.bind(this.state)
        }));
      }
      items.add('close', m(_ComposerButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
        icon: "fas fa-times",
        title: _forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].translator.trans('core.forum.composer.close_tooltip'),
        onclick: this.state.close.bind(this.state)
      }));
    }
    return items;
  }

  /**
   * Initialize default Composer height.
   */;
  _proto.initializeHeight = function initializeHeight() {
    this.state.height = localStorage.getItem('composerHeight');
    if (!this.state.height) {
      this.state.height = this.defaultHeight();
    }
  }

  /**
   * Default height of the Composer in case none is saved.
   * @returns {number}
   */;
  _proto.defaultHeight = function defaultHeight() {
    return this.$().height();
  }

  /**
   * Save a new Composer height and update the DOM.
   * @param {number} height
   */;
  _proto.changeHeight = function changeHeight(height) {
    this.state.height = height;
    this.updateHeight();
    localStorage.setItem('composerHeight', this.state.height);
  };
  return Composer;
}(_common_Component__WEBPACK_IMPORTED_MODULE_2__["default"]);


/***/ }),

/***/ "./src/core/forum/components/ComposerButton.js":
/*!*****************************************************!*\
  !*** ./src/core/forum/components/ComposerButton.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ComposerButton)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _common_components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/components/Button */ "./src/core/common/components/Button.tsx");



/**
 * The `ComposerButton` component displays a button suitable for the composer
 * controls.
 */
var ComposerButton = /*#__PURE__*/function (_Button) {
  function ComposerButton() {
    return _Button.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(ComposerButton, _Button);
  ComposerButton.initAttrs = function initAttrs(attrs) {
    _Button.initAttrs.call(this, attrs);
    attrs.className = attrs.className || 'Button Button--icon Button--link';
  };
  return ComposerButton;
}(_common_components_Button__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ })

}]);
//# sourceMappingURL=src_core_forum_components_Composer_js.js.map