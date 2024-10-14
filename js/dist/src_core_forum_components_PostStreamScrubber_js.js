"use strict";
(self["webpackChunkmodule_exports"] = self["webpackChunkmodule_exports"] || []).push([["src_core_forum_components_PostStreamScrubber_js"],{

/***/ "./src/core/common/utils/formatNumber.ts":
/*!***********************************************!*\
  !*** ./src/core/common/utils/formatNumber.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ formatNumber)
/* harmony export */ });
/* harmony import */ var _common_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/app */ "./src/core/common/app.ts");


/**
 * The `formatNumber` utility localizes a number into a string with the
 * appropriate punctuation based on the provided locale otherwise will default to the users locale.
 *
 * @example
 * formatNumber(1234);
 * // 1,234
 */
function formatNumber(number, locale) {
  if (locale === void 0) {
    locale = _common_app__WEBPACK_IMPORTED_MODULE_0__["default"].data.locale;
  }
  return new Intl.NumberFormat(locale).format(number);
}

/***/ }),

/***/ "./src/core/forum/components/PostStreamScrubber.js":
/*!*********************************************************!*\
  !*** ./src/core/forum/components/PostStreamScrubber.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PostStreamScrubber)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/readOnlyError */ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _forum_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../forum/app */ "./src/core/forum/app.ts");
/* harmony import */ var _common_Component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/Component */ "./src/core/common/Component.ts");
/* harmony import */ var _common_utils_formatNumber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/utils/formatNumber */ "./src/core/common/utils/formatNumber.ts");
/* harmony import */ var _common_utils_ScrollListener__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/utils/ScrollListener */ "./src/core/common/utils/ScrollListener.js");
/* harmony import */ var _common_components_Icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/components/Icon */ "./src/core/common/components/Icon.tsx");
/* harmony import */ var _common_components_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/components/Button */ "./src/core/common/components/Button.tsx");









/**
 * The `PostStreamScrubber` component displays a scrubber which can be used to
 * navigate/scrub through a post stream.
 *
 * ### Attrs
 *
 * - `stream`
 * - `className`
 */
var PostStreamScrubber = /*#__PURE__*/function (_Component) {
  function PostStreamScrubber() {
    return _Component.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(PostStreamScrubber, _Component);
  var _proto = PostStreamScrubber.prototype;
  _proto.oninit = function oninit(vnode) {
    _Component.prototype.oninit.call(this, vnode);
    this.stream = this.attrs.stream;
    this.handlers = {};
    this.scrollListener = new _common_utils_ScrollListener__WEBPACK_IMPORTED_MODULE_5__["default"](this.updateScrubberValues.bind(this, {
      fromScroll: true,
      forceHeightChange: true
    }));
  };
  _proto.view = function view() {
    var count = this.stream.count();

    // Index is left blank for performance reasons, it is filled in in updateScubberValues
    var viewing = _forum_app__WEBPACK_IMPORTED_MODULE_2__["default"].translator.trans('core.forum.post_scrubber.viewing_text', {
      count: count,
      index: m("span", {
        className: "Scrubber-index"
      }),
      formattedCount: m("span", {
        className: "Scrubber-count"
      }, (0,_common_utils_formatNumber__WEBPACK_IMPORTED_MODULE_4__["default"])(count))
    });
    var unreadCount = this.stream.discussion.unreadCount();
    var unreadPercent = count ? Math.min(count - this.stream.index, unreadCount) / count : 0;
    function styleUnread(vnode) {
      var $element = $(vnode.dom);
      var newStyle = {
        top: 100 - unreadPercent * 100 + '%',
        height: unreadPercent * 100 + '%',
        opacity: unreadPercent ? 1 : 0
      };
      if (vnode.state.oldStyle) {
        $element.stop(true).css(vnode.state.oldStyle).animate(newStyle);
      } else {
        $element.css(newStyle);
      }
      vnode.state.oldStyle = newStyle;
    }
    var classNames = ['PostStreamScrubber', 'Dropdown'];
    if (this.attrs.className) classNames.push(this.attrs.className);
    return m("div", {
      className: classNames.join(' ')
    }, m("button", {
      className: "Button Dropdown-toggle",
      "data-toggle": "dropdown"
    }, viewing, " ", m(_common_components_Icon__WEBPACK_IMPORTED_MODULE_6__["default"], {
      name: 'fas fa-sort'
    })), m("div", {
      className: "Dropdown-menu dropdown-menu"
    }, m("div", {
      className: "Scrubber"
    }, m(_common_components_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
      className: "Scrubber-first Button Button--link",
      onclick: this.goToFirst.bind(this),
      icon: "fas fa-angle-double-up"
    }, _forum_app__WEBPACK_IMPORTED_MODULE_2__["default"].translator.trans('core.forum.post_scrubber.original_post_link')), m("div", {
      className: "Scrubber-scrollbar"
    }, m("div", {
      className: "Scrubber-before"
    }), m("div", {
      className: "Scrubber-handle"
    }, m("div", {
      className: "Scrubber-bar"
    }), m("div", {
      className: "Scrubber-info"
    }, m("strong", null, viewing), m("span", {
      className: "Scrubber-description"
    }))), m("div", {
      className: "Scrubber-after"
    }), m("div", {
      className: "Scrubber-unread",
      oncreate: styleUnread,
      onupdate: styleUnread
    }, _forum_app__WEBPACK_IMPORTED_MODULE_2__["default"].translator.trans('core.forum.post_scrubber.unread_text', {
      count: unreadCount
    }))), m(_common_components_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
      className: "Scrubber-last Button Button--link",
      onclick: this.goToLast.bind(this),
      icon: "fas fa-angle-double-down"
    }, _forum_app__WEBPACK_IMPORTED_MODULE_2__["default"].translator.trans('core.forum.post_scrubber.now_link')))));
  };
  _proto.onupdate = function onupdate(vnode) {
    var _this = this;
    _Component.prototype.onupdate.call(this, vnode);
    if (this.stream.forceUpdateScrubber) {
      this.stream.forceUpdateScrubber = false;
      this.stream.loadPromise.then(function () {
        return _this.updateScrubberValues({
          animate: true,
          forceHeightChange: true
        });
      });
    }
  };
  _proto.oncreate = function oncreate(vnode) {
    var _this2 = this;
    _Component.prototype.oncreate.call(this, vnode);

    // Whenever the window is resized, adjust the height of the scrollbar
    // so that it fills the height of the sidebar.
    $(window).on('resize', this.handlers.onresize = this.onresize.bind(this)).resize();

    // When any part of the whole scrollbar is clicked, we want to jump to
    // that position.
    this.$('.Scrubber-scrollbar').bind('click', this.onclick.bind(this))

    // Now we want to make the scrollbar handle draggable. Let's start by
    // preventing default browser events from messing things up.
    .bind('dragstart mousedown touchstart', function (e) {
      return e.preventDefault();
    });

    // When the mouse is pressed on the scrollbar handle, we capture some
    // information about its current position. We will store this
    // information in an object and pass it on to the document's
    // mousemove/mouseup events later.
    this.dragging = false;
    this.mouseStart = 0;
    this.indexStart = 0;
    this.$('.Scrubber-handle').bind('mousedown touchstart', this.onmousedown.bind(this))

    // Exempt the scrollbar handle from the 'jump to' click event.
    .click(function (e) {
      return e.stopPropagation();
    });

    // When the mouse moves and when it is released, we pass the
    // information that we captured when the mouse was first pressed onto
    // some event handlers. These handlers will move the scrollbar/stream-
    // content as appropriate.
    $(document).on('mousemove touchmove', this.handlers.onmousemove = this.onmousemove.bind(this)).on('mouseup touchend', this.handlers.onmouseup = this.onmouseup.bind(this));
    setTimeout(function () {
      return _this2.scrollListener.start();
    });
    this.stream.loadPromise.then(function () {
      return _this2.updateScrubberValues({
        animate: false,
        forceHeightChange: true
      });
    });
  };
  _proto.onremove = function onremove(vnode) {
    _Component.prototype.onremove.call(this, vnode);
    this.scrollListener.stop();
    $(window).off('resize', this.handlers.onresize);
    $(document).off('mousemove touchmove', this.handlers.onmousemove).off('mouseup touchend', this.handlers.onmouseup);
  }

  /**
   * Update the scrollbar's position to reflect the current values of the
   * index/visible properties.
   *
   * @param {Partial<{fromScroll: boolean, forceHeightChange: boolean, animate: boolean}>} options
   */;
  _proto.updateScrubberValues = function updateScrubberValues(options) {
    var _this3 = this;
    if (options === void 0) {
      options = {};
    }
    var index = this.stream.index;
    var count = this.stream.count();
    var visible = this.stream.visible || 1;
    var percentPerPost = this.percentPerPost();
    var $scrubber = this.$();
    $scrubber.find('.Scrubber-index').text((0,_common_utils_formatNumber__WEBPACK_IMPORTED_MODULE_4__["default"])(this.stream.sanitizeIndex(Math.max(1, index))));
    $scrubber.find('.Scrubber-description').text(this.stream.description);
    $scrubber.toggleClass('disabled', this.stream.disabled());
    var heights = {};
    heights.before = Math.max(0, percentPerPost.index * Math.min(index - 1, count - visible));
    heights.handle = Math.min(100 - heights.before, percentPerPost.visible * visible);
    heights.after = 100 - heights.before - heights.handle;

    // If the stream is paused, don't change height on scroll, as the viewport is being scrolled by the JS
    // If a height change animation is already in progress, don't adjust height unless overriden
    if (options.fromScroll && this.stream.paused || this.adjustingHeight && !options.forceHeightChange) return;
    var func = options.animate ? 'animate' : 'css';
    this.adjustingHeight = true;
    var animationPromises = [];
    for (var part in heights) {
      var $part = $scrubber.find(".Scrubber-" + part);
      animationPromises.push($part.stop(true, true)[func]({
        height: heights[part] + '%'
      }, 'fast').promise());

      // jQuery likes to put overflow:hidden, but because the scrollbar handle
      // has a negative margin-left, we need to override.
      if (func === 'animate') $part.css('overflow', 'visible');
    }
    Promise.all(animationPromises).then(function () {
      return _this3.adjustingHeight = false;
    });
  }

  /**
   * Go to the first post in the discussion.
   */;
  _proto.goToFirst = function goToFirst() {
    this.stream.goToFirst();
    this.updateScrubberValues({
      animate: true,
      forceHeightChange: true
    });
  }

  /**
   * Go to the last post in the discussion.
   */;
  _proto.goToLast = function goToLast() {
    this.stream.goToLast();
    this.updateScrubberValues({
      animate: true,
      forceHeightChange: true
    });
  };
  _proto.onresize = function onresize() {
    // Adjust the height of the scrollbar so that it fills the height of
    // the sidebar and doesn't overlap the footer.
    var scrubber = this.$();
    var scrollbar = this.$('.Scrubber-scrollbar');
    scrollbar.css('max-height', $(window).height() - scrubber.offset().top + $(window).scrollTop() - parseInt($('#app').css('padding-bottom'), 10) - (scrubber.outerHeight() - scrollbar.outerHeight()));
  };
  _proto.onmousedown = function onmousedown(e) {
    e.redraw = false;
    this.mouseStart = e.clientY || e.originalEvent.touches[0].clientY;
    this.indexStart = this.stream.index;
    this.dragging = true;
    $('body').css('cursor', 'move');
    this.$().toggleClass('dragging', this.dragging);
  };
  _proto.onmousemove = function onmousemove(e) {
    if (!this.dragging) return;

    // Work out how much the mouse has moved by - first in pixels, then
    // convert it to a percentage of the scrollbar's height, and then
    // finally convert it into an index. Add this delta index onto
    // the index at which the drag was started, and then scroll there.
    var deltaPixels = (e.clientY || e.originalEvent.touches[0].clientY) - this.mouseStart;
    var deltaPercent = deltaPixels / this.$('.Scrubber-scrollbar').outerHeight() * 100;
    var deltaIndex = deltaPercent / this.percentPerPost().index || 0;
    var newIndex = Math.min(this.indexStart + deltaIndex, this.stream.count() - 1);
    this.stream.index = Math.max(0, newIndex);
    this.updateScrubberValues();
  };
  _proto.onmouseup = function onmouseup() {
    this.$().toggleClass('dragging', this.dragging);
    if (!this.dragging) return;
    this.mouseStart = 0;
    this.indexStart = 0;
    this.dragging = false;
    $('body').css('cursor', '');
    this.$().removeClass('open');

    // If the index we've landed on is in a gap, then tell the stream-
    // content that we want to load those posts.
    var intIndex = Math.floor(this.stream.index);
    this.stream.goToIndex(intIndex);
  };
  _proto.onclick = function onclick(e) {
    // Calculate the index which we want to jump to based on the click position.

    // 1. Get the offset of the click from the top of the scrollbar, as a
    //    percentage of the scrollbar's height.
    var $scrollbar = this.$('.Scrubber-scrollbar');
    var offsetPixels = (e.pageY || e.originalEvent.touches[0].pageY) - $scrollbar.offset().top + $('body').scrollTop();
    var offsetPercent = offsetPixels / $scrollbar.outerHeight() * 100;

    // 2. We want the handle of the scrollbar to end up centered on the click
    //    position. Thus, we calculate the height of the handle in percent and
    //    use that to find a new offset percentage.
    offsetPercent = offsetPercent - parseFloat($scrollbar.find('.Scrubber-handle')[0].style.height) / 2;

    // 3. Now we can convert the percentage into an index, and tell the stream-
    //    content component to jump to that index.
    var offsetIndex = offsetPercent / this.percentPerPost().index;
    offsetIndex = Math.max(0, Math.min(this.stream.count() - 1, offsetIndex));
    this.stream.goToIndex(Math.floor(offsetIndex));
    this.updateScrubberValues({
      animate: true,
      forceHeightChange: true
    });
    this.$().removeClass('open');
  }

  /**
   * Get the percentage of the height of the scrubber that should be allocated
   * to each post.
   *
   * @return {{ index: number, visible: number }}
   * @property {Number} index The percent per post for posts on either side of
   *     the visible part of the scrubber.
   * @property {Number} visible The percent per post for the visible part of the
   *     scrubber.
   */;
  _proto.percentPerPost = function percentPerPost() {
    var count = this.stream.count() || 1;
    var visible = this.stream.visible || 1;

    // To stop the handle of the scrollbar from getting too small when there
    // are many posts, we define a minimum percentage height for the handle
    // calculated from a 50 pixel limit. From this, we can calculate the
    // minimum percentage per visible post. If this is greater than the actual
    // percentage per post, then we need to adjust the 'before' percentage to
    // account for it.
    var minPercentVisible = 50 / this.$('.Scrubber-scrollbar').outerHeight() * 100;
    var percentPerVisiblePost = Math.max(100 / count, minPercentVisible / visible);
    var percentPerPost = count === visible ? 0 : (100 - percentPerVisiblePost * visible) / (count - visible);
    return {
      index: percentPerPost,
      visible: percentPerVisiblePost
    };
  };
  return PostStreamScrubber;
}(_common_Component__WEBPACK_IMPORTED_MODULE_3__["default"]);


/***/ })

}]);
//# sourceMappingURL=src_core_forum_components_PostStreamScrubber_js.js.map