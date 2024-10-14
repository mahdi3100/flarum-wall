"use strict";
(self["webpackChunkmodule_exports"] = self["webpackChunkmodule_exports"] || []).push([["src_core_forum_components_PostStream_js"],{

/***/ "./src/core/forum/components/LoadingPost.tsx":
/*!***************************************************!*\
  !*** ./src/core/forum/components/LoadingPost.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LoadingPost)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/Component */ "./src/core/common/Component.ts");
/* harmony import */ var _common_components_Avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/components/Avatar */ "./src/core/common/components/Avatar.tsx");
/* harmony import */ var _common_utils_classList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/utils/classList */ "./src/core/common/utils/classList.ts");




/**
 * The `LoadingPost` component shows a placeholder that looks like a post,
 * indicating that the post is loading.
 */
var LoadingPost = /*#__PURE__*/function (_Component) {
  function LoadingPost() {
    return _Component.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(LoadingPost, _Component);
  var _proto = LoadingPost.prototype;
  _proto.view = function view() {
    return m("div", {
      className: (0,_common_utils_classList__WEBPACK_IMPORTED_MODULE_3__["default"])(this.attrs.className, 'Post CommentPost LoadingPost')
    }, m("header", {
      className: "Post-header"
    }, m(_common_components_Avatar__WEBPACK_IMPORTED_MODULE_2__["default"], {
      user: null,
      className: "PostUser-avatar"
    }), m("div", {
      className: "fakeText"
    })), m("div", {
      className: "Post-body"
    }, m("div", {
      className: "fakeText"
    }), m("div", {
      className: "fakeText"
    }), m("div", {
      className: "fakeText"
    })));
  };
  return LoadingPost;
}(_common_Component__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./src/core/forum/components/PostStream.js":
/*!*************************************************!*\
  !*** ./src/core/forum/components/PostStream.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PostStream)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../forum/app */ "./src/core/forum/app.ts");
/* harmony import */ var _common_Component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/Component */ "./src/core/common/Component.ts");
/* harmony import */ var _common_utils_ScrollListener__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/utils/ScrollListener */ "./src/core/common/utils/ScrollListener.js");
/* harmony import */ var _LoadingPost__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LoadingPost */ "./src/core/forum/components/LoadingPost.tsx");
/* harmony import */ var _ReplyPlaceholder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ReplyPlaceholder */ "./src/core/forum/components/ReplyPlaceholder.tsx");
/* harmony import */ var _common_components_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/components/Button */ "./src/core/common/components/Button.tsx");
/* harmony import */ var _common_utils_ItemList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/utils/ItemList */ "./src/core/common/utils/ItemList.ts");
/* harmony import */ var _PostType__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PostType */ "./src/core/forum/components/PostType.tsx");










/**
 * The `PostStream` component displays an infinitely-scrollable wall of posts in
 * a discussion. Posts that have not loaded will be displayed as placeholders.
 *
 * ### Attrs
 *
 * - `discussion`
 * - `stream`
 * - `targetPost`
 * - `onPositionChange`
 */
var PostStream = /*#__PURE__*/function (_Component) {
  function PostStream() {
    return _Component.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(PostStream, _Component);
  var _proto = PostStream.prototype;
  _proto.oninit = function oninit(vnode) {
    _Component.prototype.oninit.call(this, vnode);
    this.discussion = this.attrs.discussion;
    this.stream = this.attrs.stream;
    this.scrollListener = new _common_utils_ScrollListener__WEBPACK_IMPORTED_MODULE_3__["default"](this.onscroll.bind(this));
  };
  _proto.view = function view() {
    var _this = this;
    var lastTime;
    var viewingEnd = this.stream.viewingEnd();
    var posts = this.stream.posts();
    var postIds = this.discussion.postIds();
    var postFadeIn = function postFadeIn(vnode) {
      $(vnode.dom).addClass('fadeIn');
      // 500 is the duration of the fadeIn CSS animation + 100ms,
      // so the animation has time to complete
      setTimeout(function () {
        return $(vnode.dom).removeClass('fadeIn');
      }, 500);
    };
    var items = posts.map(function (post, i) {
      var content;
      var attrs = {
        'data-index': _this.stream.visibleStart + i
      };
      if (post) {
        var time = post.createdAt();
        content = m(_PostType__WEBPACK_IMPORTED_MODULE_8__["default"], {
          post: post
        });
        attrs.key = 'post' + post.id();
        attrs.oncreate = postFadeIn;
        attrs['data-time'] = time.toISOString();
        attrs['data-number'] = post.number();
        attrs['data-id'] = post.id();
        attrs['data-type'] = post.contentType();

        // If the post before this one was more than 4 days ago, we will
        // display a 'time gap' indicating how long it has been in between
        // the posts.
        var dt = time - lastTime;
        if (dt > 1000 * 60 * 60 * 24 * 4) {
          content = [m("div", {
            className: "PostStream-timeGap"
          }, m("span", null, _forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].translator.trans('core.forum.post_stream.time_lapsed_text', {
            period: dayjs().add(dt, 'ms').fromNow(true)
          }))), content];
        }
        lastTime = time;
      } else {
        attrs.key = 'post' + postIds[_this.stream.visibleStart + i];
        content = m(_LoadingPost__WEBPACK_IMPORTED_MODULE_4__["default"], null);
      }
      return m("div", Object.assign({
        className: "PostStream-item"
      }, attrs), content);
    });
    if (!viewingEnd && posts[this.stream.visibleEnd - this.stream.visibleStart - 1]) {
      items.push(m("div", {
        className: "PostStream-loadMore",
        key: "loadMore"
      }, m(_common_components_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
        className: "Button",
        onclick: this.stream.loadNext.bind(this.stream)
      }, _forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].translator.trans('core.forum.post_stream.load_more_button'))));
    }

    // Allow extensions to add items to the end of the post stream.
    if (viewingEnd) {
      items.push.apply(items, this.endItems().toArray());
    }

    // If we're viewing the end of the discussion, the user can reply, and
    // is not already doing so, then show a 'write a reply' placeholder.
    if (viewingEnd && (!_forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].session.user || this.discussion.canReply())) {
      items.push(m("div", {
        className: "PostStream-item",
        key: "reply",
        "data-index": this.stream.count(),
        oncreate: postFadeIn
      }, m(_ReplyPlaceholder__WEBPACK_IMPORTED_MODULE_5__["default"], {
        discussion: this.discussion
      })));
    }
    return m("div", {
      className: "PostStream",
      role: "feed",
      "aria-live": "off",
      "aria-busy": this.stream.pagesLoading ? 'true' : 'false'
    }, items);
  }

  /**
   * @returns {ItemList<import('mithril').Children>}
   */;
  _proto.endItems = function endItems() {
    var items = new _common_utils_ItemList__WEBPACK_IMPORTED_MODULE_7__["default"]();
    return items;
  };
  _proto.onupdate = function onupdate(vnode) {
    _Component.prototype.onupdate.call(this, vnode);
    this.triggerScroll();
  };
  _proto.oncreate = function oncreate(vnode) {
    var _this2 = this;
    _Component.prototype.oncreate.call(this, vnode);
    this.triggerScroll();

    // This is wrapped in setTimeout due to the following Mithril issue:
    // https://github.com/lhorie/mithril.js/issues/637
    setTimeout(function () {
      return _this2.scrollListener.start();
    });
  };
  _proto.onremove = function onremove(vnode) {
    _Component.prototype.onremove.call(this, vnode);
    this.scrollListener.stop();
    clearTimeout(this.calculatePositionTimeout);
  }

  /**
   * Start scrolling, if appropriate, to a newly-targeted post.
   */;
  _proto.triggerScroll = function triggerScroll() {
    if (!this.stream.needsScroll) return;
    var target = this.stream.targetPost;
    this.stream.needsScroll = false;
    if ('number' in target) {
      this.scrollToNumber(target.number, this.stream.animateScroll);
    } else if ('index' in target) {
      this.scrollToIndex(target.index, this.stream.animateScroll, target.reply);
    }
  }

  /**
   *
   * @param {number} top
   */;
  _proto.onscroll = function onscroll(top) {
    if (top === void 0) {
      top = window.pageYOffset;
    }
    if (this.stream.paused || this.stream.pagesLoading) return;
    this.updateScrubber(top);
    this.loadPostsIfNeeded(top);

    // Throttle calculation of our position (start/end numbers of posts in the
    // viewport) to 100ms.
    clearTimeout(this.calculatePositionTimeout);
    this.calculatePositionTimeout = setTimeout(this.calculatePosition.bind(this, top), 100);
  }

  /**
   * Check if either extreme of the post stream is in the viewport,
   * and if so, trigger loading the next/previous page.
   *
   * @param {number} top
   */;
  _proto.loadPostsIfNeeded = function loadPostsIfNeeded(top) {
    if (top === void 0) {
      top = window.pageYOffset;
    }
    var marginTop = this.getMarginTop();
    var viewportHeight = $(window).height() - marginTop;
    var viewportTop = top + marginTop;
    var loadAheadDistance = 300;
    if (this.stream.visibleStart > 0) {
      var $item = this.$('.PostStream-item[data-index=' + this.stream.visibleStart + ']');
      if ($item.length && $item.offset().top > viewportTop - loadAheadDistance) {
        this.stream.loadPrevious();
      }
    }
    if (this.stream.visibleEnd < this.stream.count()) {
      var _$item = this.$('.PostStream-item[data-index=' + (this.stream.visibleEnd - 1) + ']');
      if (_$item.length && _$item.offset().top + _$item.outerHeight(true) < viewportTop + viewportHeight + loadAheadDistance) {
        this.stream.loadNext();
      }
    }
  };
  _proto.updateScrubber = function updateScrubber(top) {
    if (top === void 0) {
      top = window.pageYOffset;
    }
    var marginTop = this.getMarginTop();
    var viewportHeight = $(window).height() - marginTop;
    var viewportTop = top + marginTop;

    // Before looping through all of the posts, we reset the scrollbar
    // properties to a 'default' state. These values reflect what would be
    // seen if the browser were scrolled right up to the top of the page,
    // and the viewport had a height of 0.
    var $items = this.$('.PostStream-item[data-index]');
    var visible = 0;
    var period = '';
    var indexFromViewPort = null;

    // Now loop through each of the items in the discussion. An 'item' is
    // either a single post or a 'gap' of one or more posts that haven't
    // been loaded yet.
    $items.each(function () {
      var $this = $(this);
      var top = $this.offset().top;
      var height = $this.outerHeight(true);

      // If this item is above the top of the viewport, skip to the next
      // one. If it's below the bottom of the viewport, break out of the
      // loop.
      if (top + height < viewportTop) {
        return true;
      }
      if (top > viewportTop + viewportHeight) {
        return false;
      }

      // Work out how many pixels of this item are visible inside the viewport.
      // Then add the proportion of this item's total height to the index.
      var visibleTop = Math.max(0, viewportTop - top);
      var visibleBottom = Math.min(height, viewportTop + viewportHeight - top);
      var visiblePost = visibleBottom - visibleTop;

      // We take the index of the first item that passed the previous checks.
      // It is the item that is first visible in the viewport.
      if (indexFromViewPort === null) {
        indexFromViewPort = parseFloat($this.data('index')) + visibleTop / height;
      }
      if (visiblePost > 0) {
        visible += visiblePost / height;
      }

      // If this item has a time associated with it, then set the
      // scrollbar's current period to a formatted version of this time.
      var time = $this.data('time');
      if (time) period = time;
    });

    // If indexFromViewPort is null, it means no posts are visible in the
    // viewport. This can happen, when drafting a long reply post. In that case
    // set the index to the last post.
    this.stream.index = indexFromViewPort !== null ? indexFromViewPort + 1 : this.stream.count();
    this.stream.visible = visible;
    if (period) this.stream.description = dayjs(period).format('MMMM YYYY');
  }

  /**
   * Work out which posts (by number) are currently visible in the viewport, and
   * fire an event with the information.
   */;
  _proto.calculatePosition = function calculatePosition(top) {
    if (top === void 0) {
      top = window.pageYOffset;
    }
    var marginTop = this.getMarginTop();
    var $window = $(window);
    var viewportHeight = $window.height() - marginTop;
    var scrollTop = $window.scrollTop() + marginTop;
    var viewportTop = top + marginTop;
    var startNumber;
    var endNumber;
    this.$('.PostStream-item').each(function () {
      var $item = $(this);
      var top = $item.offset().top;
      var height = $item.outerHeight(true);
      var visibleTop = Math.max(0, viewportTop - top);
      var threeQuartersVisible = visibleTop / height < 0.75;
      var coversQuarterOfViewport = (height - visibleTop) / viewportHeight > 0.25;
      if (startNumber === undefined && (threeQuartersVisible || coversQuarterOfViewport)) {
        startNumber = $item.data('number');
      }
      if (top + height > scrollTop) {
        if (top + height < scrollTop + viewportHeight) {
          if ($item.data('number')) {
            endNumber = $item.data('number');
          }
        } else return false;
      }
    });
    if (startNumber) {
      this.attrs.onPositionChange(startNumber || 1, endNumber, startNumber);
    }
  }

  /**
   * Get the distance from the top of the viewport to the point at which we
   * would consider a post to be the first one visible.
   *
   * @return {number}
   */;
  _proto.getMarginTop = function getMarginTop() {
    var headerId = _forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].screen() === 'phone' ? '#app-navigation' : '#header';
    return this.$() && $(headerId).outerHeight() + parseInt(this.$().css('margin-top'), 10);
  }

  /**
   * Scroll down to a certain post by number and 'flash' it.
   *
   * @param {number} number
   * @param {boolean} animate
   * @return {JQueryDeferred}
   */;
  _proto.scrollToNumber = function scrollToNumber(number, animate) {
    var $item = this.$(".PostStream-item[data-number=" + number + "]");
    return this.scrollToItem($item, animate).then(this.flashItem.bind(this, $item));
  }

  /**
   * Scroll down to a certain post by index.
   *
   * @param {number} index
   * @param {boolean} animate
   * @param {boolean} reply Whether or not to scroll to the reply placeholder.
   * @return {JQueryDeferred}
   */;
  _proto.scrollToIndex = function scrollToIndex(index, animate, reply) {
    var $item = reply ? $('.PostStream-item:last-child') : this.$(".PostStream-item[data-index=" + index + "]");
    this.scrollToItem($item, animate, true, reply);
    if (reply) {
      this.flashItem($item);
    }
  }

  /**
   * Scroll down to the given post.
   *
   * @param {JQuery} $item
   * @param {boolean} animate
   * @param {boolean} force Whether or not to force scrolling to the item, even
   *     if it is already in the viewport.
   * @param {boolean} reply Whether or not to scroll to the reply placeholder.
   * @return {JQueryDeferred}
   */;
  _proto.scrollToItem = function scrollToItem($item, animate, force, reply) {
    var _this3 = this;
    var $container = $('html, body').stop(true);
    var index = $item.data('index');
    if ($item.length) {
      var itemTop = $item.offset().top - this.getMarginTop();
      var itemBottom = $item.offset().top + $item.height();
      var scrollTop = $(document).scrollTop();
      var scrollBottom = scrollTop + $(window).height();

      // If the item is already in the viewport, we may not need to scroll.
      // If we're scrolling to the reply placeholder, we'll make sure its
      // bottom will line up with the top of the composer.
      if (force || itemTop < scrollTop || itemBottom > scrollBottom) {
        var top = reply ? itemBottom - $(window).height() + _forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].composer.computedHeight() : $item.is(':first-child') ? 0 : itemTop;
        if (!animate) {
          $container.scrollTop(top);
        } else if (top !== scrollTop) {
          $container.animate({
            scrollTop: top
          }, 'fast');
        }
      }
    }
    var updateScrubberHeight = function updateScrubberHeight() {
      // We manually set the index because we want to display the index of the
      // exact post we've scrolled to, not just that of the first post within viewport.
      _this3.updateScrubber();
      if (index !== undefined) _this3.stream.index = index + 1;
    };

    // If we don't update this before the scroll, the scrubber will start
    // at the top, and animate down, which can be confusing
    updateScrubberHeight();
    this.stream.forceUpdateScrubber = true;
    return Promise.all([$container.promise(), this.stream.loadPromise]).then(function () {
      m.redraw.sync();

      // Rendering post contents will probably throw off our position.
      // To counter this, we'll scroll either:
      //   - To the reply placeholder (aligned with composer top)
      //   - To the top of the page if we're on the first post
      //   - To the top of a post (if that post exists)
      // If the post does not currently exist, it's probably
      // outside of the range we loaded in, so we won't adjust anything,
      // as it will soon be rendered by the "load more" system.
      var itemOffset;
      if (reply) {
        var $placeholder = $('.PostStream-item:last-child');
        $(window).scrollTop($placeholder.offset().top + $placeholder.height() - $(window).height() + _forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].composer.computedHeight());
      } else if (index === 0) {
        $(window).scrollTop(0);
      } else if (itemOffset = $(".PostStream-item[data-index=" + index + "]").offset()) {
        $(window).scrollTop(itemOffset.top - _this3.getMarginTop());
      }

      // We want to adjust this again after posts have been loaded in
      // and position adjusted so that the scrubber's height is accurate.
      updateScrubberHeight();
      _this3.calculatePosition();
      _this3.stream.paused = false;
      // Check if we need to load more posts after scrolling.
      _this3.loadPostsIfNeeded();
    });
  }

  /**
   * 'Flash' the given post, drawing the user's attention to it.
   *
   * @param {JQuery} $item
   */;
  _proto.flashItem = function flashItem($item) {
    // This might execute before the fadeIn class has been removed in PostStreamItem's
    // oncreate, so we remove it just to be safe and avoid a double animation.
    $item.removeClass('fadeIn');
    $item.addClass('flash').on('animationend webkitAnimationEnd', function (e) {
      $item.removeClass('flash');
    });
  };
  return PostStream;
}(_common_Component__WEBPACK_IMPORTED_MODULE_2__["default"]);


/***/ }),

/***/ "./src/core/forum/components/PostType.tsx":
/*!************************************************!*\
  !*** ./src/core/forum/components/PostType.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PostType)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/Component */ "./src/core/common/Component.ts");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app */ "./src/core/forum/app.ts");



var PostType = /*#__PURE__*/function (_Component) {
  function PostType() {
    return _Component.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(PostType, _Component);
  var _proto = PostType.prototype;
  _proto.view = function view() {
    var post = this.attrs.post;
    var PostComponent = _app__WEBPACK_IMPORTED_MODULE_2__["default"].postComponents[post.contentType()];
    return !!PostComponent && m(PostComponent, {
      post: post
    });
  };
  return PostType;
}(_common_Component__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./src/core/forum/components/ReplyPlaceholder.tsx":
/*!********************************************************!*\
  !*** ./src/core/forum/components/ReplyPlaceholder.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ReplyPlaceholder)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../forum/app */ "./src/core/forum/app.ts");
/* harmony import */ var _common_Component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/Component */ "./src/core/common/Component.ts");
/* harmony import */ var _common_helpers_username__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/helpers/username */ "./src/core/common/helpers/username.tsx");
/* harmony import */ var _utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/DiscussionControls */ "./src/core/forum/utils/DiscussionControls.js");
/* harmony import */ var _ComposerPostPreview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ComposerPostPreview */ "./src/core/forum/components/ComposerPostPreview.js");
/* harmony import */ var _common_helpers_listItems__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/helpers/listItems */ "./src/core/common/helpers/listItems.tsx");
/* harmony import */ var _common_components_Avatar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/components/Avatar */ "./src/core/common/components/Avatar.tsx");








/**
 * The `ReplyPlaceholder` component displays a placeholder for a reply, which,
 * when clicked, opens the reply composer.
 */
var ReplyPlaceholder = /*#__PURE__*/function (_Component) {
  function ReplyPlaceholder() {
    return _Component.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(ReplyPlaceholder, _Component);
  var _proto = ReplyPlaceholder.prototype;
  _proto.view = function view() {
    var _this = this;
    var composingReply = this.attrs.composingReply ? this.attrs.composingReply() : _forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].composer.composingReplyTo(this.attrs.discussion);
    if (composingReply) {
      return m("article", {
        className: "Post CommentPost editing",
        "aria-busy": "true"
      }, m("div", {
        className: "Post-container"
      }, m("div", {
        className: "Post-side"
      }, m(_common_components_Avatar__WEBPACK_IMPORTED_MODULE_7__["default"], {
        user: _forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].session.user,
        className: "Post-avatar"
      })), m("div", {
        className: "Post-main"
      }, m("header", {
        className: "Post-header"
      }, m("div", {
        className: "PostUser"
      }, m("h3", {
        className: "PostUser-name"
      }, (0,_common_helpers_username__WEBPACK_IMPORTED_MODULE_3__["default"])(_forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].session.user)), m("ul", {
        className: "PostUser-badges badges badges--packed"
      }, (0,_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_6__["default"])(_forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].session.user.badges().toArray())))), m("div", {
        className: "Post-body"
      }, m(_ComposerPostPreview__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: "Post-body",
        composer: _forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].composer,
        surround: this.anchorPreview.bind(this)
      })))));
    }
    var reply = this.attrs.onclick || function () {
      _utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_4__["default"].replyAction.call(_this.attrs.discussion, true, false)["catch"](function () {});
    };
    return m("button", {
      className: "Post ReplyPlaceholder",
      onclick: reply
    }, m("div", {
      className: "Post-container"
    }, m("div", {
      className: "Post-side"
    }, m(_common_components_Avatar__WEBPACK_IMPORTED_MODULE_7__["default"], {
      user: _forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].session.user,
      className: "Post-avatar"
    })), m("div", {
      className: "Post-main"
    }, m("span", {
      className: "Post-header"
    }, _forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].translator.trans('core.forum.post_stream.reply_placeholder')))));
  };
  _proto.anchorPreview = function anchorPreview(preview) {
    var anchorToBottom = $(window).scrollTop() + $(window).height() >= $(document).height();
    preview();
    if (anchorToBottom) {
      $(window).scrollTop($(document).height());
    }
  };
  return ReplyPlaceholder;
}(_common_Component__WEBPACK_IMPORTED_MODULE_2__["default"]);


/***/ })

}]);
//# sourceMappingURL=src_core_forum_components_PostStream_js.js.map