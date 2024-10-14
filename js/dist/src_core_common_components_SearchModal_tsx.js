(self["webpackChunkmodule_exports"] = self["webpackChunkmodule_exports"] || []).push([["src_core_common_components_SearchModal_tsx"],{

/***/ "./src/core/common/components/InfoTile.tsx":
/*!*************************************************!*\
  !*** ./src/core/common/components/InfoTile.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InfoTile)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Component */ "./src/core/common/Component.ts");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Icon */ "./src/core/common/components/Icon.tsx");
/* harmony import */ var _utils_classList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/classList */ "./src/core/common/utils/classList.ts");


var _excluded = ["icon", "className"];



var InfoTile = /*#__PURE__*/function (_Component) {
  function InfoTile() {
    return _Component.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(InfoTile, _Component);
  var _proto = InfoTile.prototype;
  _proto.view = function view(vnode) {
    var _vnode$attrs = vnode.attrs,
      icon = _vnode$attrs.icon,
      className = _vnode$attrs.className,
      attrs = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_vnode$attrs, _excluded);
    return m("div", Object.assign({
      className: (0,_utils_classList__WEBPACK_IMPORTED_MODULE_4__["default"])('InfoTile', className)
    }, attrs), this.icon(), m("div", {
      className: "InfoTile-text"
    }, vnode.children));
  };
  _proto.icon = function icon() {
    if (this.attrs.iconElement) return this.attrs.iconElement;
    if (!this.attrs.icon) return null;
    return m(_Icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: (0,_utils_classList__WEBPACK_IMPORTED_MODULE_4__["default"])(this.attrs.icon, 'InfoTile-icon')
    });
  };
  return InfoTile;
}(_Component__WEBPACK_IMPORTED_MODULE_2__["default"]);


/***/ }),

/***/ "./src/core/common/components/SearchModal.tsx":
/*!****************************************************!*\
  !*** ./src/core/common/components/SearchModal.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SearchModal)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app */ "./src/core/common/app.ts");
/* harmony import */ var _FormModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FormModal */ "./src/core/common/components/FormModal.tsx");
/* harmony import */ var _utils_KeyboardNavigatable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/KeyboardNavigatable */ "./src/core/common/utils/KeyboardNavigatable.ts");
/* harmony import */ var _SearchManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../SearchManager */ "./src/core/common/SearchManager.ts");
/* harmony import */ var _utils_extractText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/extractText */ "./src/core/common/utils/extractText.ts");
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Input */ "./src/core/common/components/Input.tsx");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Button */ "./src/core/common/components/Button.tsx");
/* harmony import */ var _utils_Stream__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/Stream */ "./src/core/common/utils/Stream.ts");
/* harmony import */ var _InfoTile__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./InfoTile */ "./src/core/common/components/InfoTile.tsx");
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./LoadingIndicator */ "./src/core/common/components/LoadingIndicator.tsx");
/* harmony import */ var _utils_ItemList__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/ItemList */ "./src/core/common/utils/ItemList.ts");
/* harmony import */ var _utils_GambitsAutocomplete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/GambitsAutocomplete */ "./src/core/common/utils/GambitsAutocomplete.tsx");
/* harmony import */ var _utils_GambitsAutocomplete__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_utils_GambitsAutocomplete__WEBPACK_IMPORTED_MODULE_12__);













var SearchModal = /*#__PURE__*/function (_FormModal) {
  function SearchModal() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _FormModal.call.apply(_FormModal, [this].concat(args)) || this;
    _this.searchState = void 0;
    _this.query = void 0;
    /**
     * An array of SearchSources.
     */
    _this.sources = void 0;
    /**
     * The key of the currently-active search source.
     */
    _this.activeSource = void 0;
    /**
     * The sources that are still loading results.
     */
    _this.loadingSources = [];
    /**
     * The index of the currently-selected <li> in the results list. This can be
     * a unique string (to account for the fact that an item's position may jump
     * around as new results load), but otherwise it will be numeric (the
     * sequential position within the list).
     */
    _this.index = 0;
    _this.navigator = void 0;
    _this.searchTimeout = void 0;
    _this.inputScroll = (0,_utils_Stream__WEBPACK_IMPORTED_MODULE_8__["default"])(0);
    _this.gambitsAutocomplete = {};
    return _this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(SearchModal, _FormModal);
  var _proto = SearchModal.prototype;
  _proto.oninit = function oninit(vnode) {
    var _this2 = this;
    _FormModal.prototype.oninit.call(this, vnode);
    this.searchState = this.attrs.searchState;
    this.sources = this.attrs.sources;
    this.activeSource = (0,_utils_Stream__WEBPACK_IMPORTED_MODULE_8__["default"])(this.defaultActiveSource() ? this.sources.find(function (source) {
      return source.resource === _this2.defaultActiveSource();
    }) || this.sources[0] : this.sources[0]);
    this.query = (0,_utils_Stream__WEBPACK_IMPORTED_MODULE_8__["default"])(this.prefill(this.searchState.getValue() || '').trim());
  };
  _proto.title = function title() {
    return _app__WEBPACK_IMPORTED_MODULE_1__["default"].translator.trans('core.lib.search.title');
  };
  _proto.className = function className() {
    return 'SearchModal Modal--flat';
  };
  _proto.content = function content() {
    var _this$gambitsAutocomp,
      _this$activeSource$re,
      _this3 = this;
    (_this$gambitsAutocomp = this.gambitsAutocomplete)[_this$activeSource$re = this.activeSource().resource] || (_this$gambitsAutocomp[_this$activeSource$re] = new (_utils_GambitsAutocomplete__WEBPACK_IMPORTED_MODULE_12___default())(this.activeSource().resource, function () {
      return _this3.inputElement();
    }, this.query, function (value) {
      return _this3.search(value);
    }));
    var searchLabel = (0,_utils_extractText__WEBPACK_IMPORTED_MODULE_5__["default"])(_app__WEBPACK_IMPORTED_MODULE_1__["default"].translator.trans('core.lib.search.placeholder'));
    return m("div", {
      className: "Modal-body SearchModal-body"
    }, m("div", {
      className: "SearchModal-form"
    }, m(_Input__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: "search",
      type: "search",
      loading: !!this.loadingSources.length,
      clearable: true,
      clearLabel: _app__WEBPACK_IMPORTED_MODULE_1__["default"].translator.trans('core.lib.header.search_clear_button_accessible_label'),
      prefixIcon: "fas fa-search",
      "aria-label": searchLabel,
      placeholder: searchLabel,
      value: this.query(),
      onchange: function onchange(value) {
        var _this3$inputElement$, _this3$inputElement$2;
        _this3.query(value);
        _this3.inputScroll((_this3$inputElement$ = (_this3$inputElement$2 = _this3.inputElement()[0]) == null ? void 0 : _this3$inputElement$2.scrollLeft) != null ? _this3$inputElement$ : 0);
      },
      inputAttrs: {
        className: 'SearchModal-input'
      },
      renderInput: function renderInput(attrs) {
        return m('[', null, m("input", Object.assign({}, attrs, {
          onscroll: function onscroll(e) {
            return _this3.inputScroll(e.target.scrollLeft);
          }
        })), m("div", {
          className: "SearchModal-visual-wrapper"
        }, m("div", {
          className: "SearchModal-visual-input",
          style: {
            left: '-' + _this3.inputScroll() + 'px'
          }
        }, _this3.gambifyInput())));
      }
    })), this.tabs());
  };
  _proto.tabs = function tabs() {
    return m("div", {
      className: "SearchModal-tabs"
    }, m("div", {
      className: "SearchModal-tabs-nav"
    }, this.tabItems().toArray()), m("div", {
      className: "SearchModal-tabs-content"
    }, this.activeTabItems().toArray()));
  };
  _proto.tabItems = function tabItems() {
    var _this$sources,
      _this4 = this;
    var items = new _utils_ItemList__WEBPACK_IMPORTED_MODULE_11__["default"]();
    (_this$sources = this.sources) == null || _this$sources.map(function (source, index) {
      return items.add(source.resource, m(_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
        className: "Button Button--link",
        active: _this4.activeSource() === source,
        onclick: function onclick() {
          return _this4.switchSource(source);
        }
      }, source.title()), 100 - index);
    });
    return items;
  };
  _proto.activeTabItems = function activeTabItems() {
    var _this$activeSource;
    var items = new _utils_ItemList__WEBPACK_IMPORTED_MODULE_11__["default"]();
    var loading = this.loadingSources.includes(this.activeSource().resource);
    var shouldShowResults = !!this.query() && !loading;
    var gambits = this.gambits();
    var fullPageLink = this.activeSource().fullPage(this.query());
    var results = (_this$activeSource = this.activeSource()) == null ? void 0 : _this$activeSource.view(this.query());
    var customGrouping = this.activeSource().customGrouping();
    if (shouldShowResults && fullPageLink) {
      items.add('fullPageLink', m("div", {
        className: "SearchModal-section"
      }, m("hr", {
        className: "Modal-divider"
      }), m("ul", {
        className: "Dropdown-menu SearchModal-fullPage"
      }, fullPageLink)), 80);
    }
    if (!!gambits.length) {
      items.add('gambits', m("div", {
        className: "SearchModal-section"
      }, m("hr", {
        className: "Modal-divider"
      }), m("ul", {
        className: "Dropdown-menu SearchModal-options",
        "aria-live": gambits.length ? 'polite' : undefined
      }, m("li", {
        className: "Dropdown-header"
      }, _app__WEBPACK_IMPORTED_MODULE_1__["default"].translator.trans('core.lib.search.options_heading')), gambits)), 60);
    }
    items.add('results', m("div", {
      className: "SearchModal-section"
    }, m("hr", {
      className: "Modal-divider"
    }), m("ul", {
      className: "Dropdown-menu SearchModal-results",
      "aria-live": shouldShowResults ? 'polite' : undefined
    }, !customGrouping && m("li", {
      className: "Dropdown-header"
    }, _app__WEBPACK_IMPORTED_MODULE_1__["default"].translator.trans('core.lib.search.preview_heading')), !shouldShowResults && m("li", {
      className: "Dropdown-message"
    }, m(_InfoTile__WEBPACK_IMPORTED_MODULE_9__["default"], {
      icon: "fas fa-search"
    }, _app__WEBPACK_IMPORTED_MODULE_1__["default"].translator.trans('core.lib.search.no_search_text'))), shouldShowResults && results, shouldShowResults && !(results != null && results.length) && m("li", {
      className: "Dropdown-message"
    }, m(_InfoTile__WEBPACK_IMPORTED_MODULE_9__["default"], {
      icon: "far fa-tired"
    }, _app__WEBPACK_IMPORTED_MODULE_1__["default"].translator.trans('core.lib.search.no_results_text'))), loading && m("li", {
      className: "Dropdown-message"
    }, m(_LoadingIndicator__WEBPACK_IMPORTED_MODULE_10__["default"], null)))), 40);
    return items;
  };
  _proto.switchSource = function switchSource(source) {
    if (this.activeSource() !== source) {
      this.activeSource(source);
      this.search(this.query());
      this.inputElement().focus();
      m.redraw();
    }
  };
  _proto.gambits = function gambits() {
    return this.gambitsAutocomplete[this.activeSource().resource].suggestions(this.query());
  }

  /**
   * Transforms a simple search text to wrap valid gambits in a mark tag.
   * @example `lorem ipsum is:unread dolor` => `lorem ipsum <mark>is:unread</mark> dolor`
   */;
  _proto.gambifyInput = function gambifyInput() {
    var query = this.query();
    var marked = query;
    _app__WEBPACK_IMPORTED_MODULE_1__["default"].search.gambits.match(this.activeSource().resource, query, function (gambit, matches, negate, bit) {
      marked = marked.replace(bit, "<mark>" + bit + "</mark>");
    });
    var jsx = [];
    marked.split(/(<mark>.*?<\/mark>)/).forEach(function (chunk) {
      if (chunk.startsWith('<mark>')) {
        jsx.push(m("mark", null, chunk.replace(/<\/?mark>/g, '')));
      } else {
        jsx.push(chunk);
      }
    });
    return jsx;
  };
  _proto.onupdate = function onupdate(vnode) {
    var _this$sources2;
    _FormModal.prototype.onupdate.call(this, vnode);

    // Highlight the item that is currently selected.
    this.setIndex(this.getCurrentNumericIndex());
    var component = this;
    this.$('.Dropdown-menu')
    // Whenever the mouse is hovered over a search result, highlight it.
    .on('mouseenter', '> li:not(.Dropdown-header):not(.Dropdown-message)', function () {
      component.setIndex(component.selectableItems().index(this));
    });

    // If there are no sources, the search view is not shown.
    if (!((_this$sources2 = this.sources) != null && _this$sources2.length)) return;
  };
  _proto.oncreate = function oncreate(vnode) {
    var _this$sources3,
      _this5 = this;
    _FormModal.prototype.oncreate.call(this, vnode);

    // If there are no sources, we shouldn't initialize logic for
    // search elements, as they will not be shown.
    if (!((_this$sources3 = this.sources) != null && _this$sources3.length)) return;
    var search = this.search.bind(this);

    // Highlight the item that is currently selected.
    this.setIndex(this.getCurrentNumericIndex());
    var $input = this.inputElement();
    this.navigator = new _utils_KeyboardNavigatable__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this.navigator.onUp(function () {
      return _this5.setIndex(_this5.getCurrentNumericIndex() - 1, true);
    }).onDown(function () {
      return _this5.setIndex(_this5.getCurrentNumericIndex() + 1, true);
    }).onSelect(this.selectResult.bind(this), true).onCancel(this.clear.bind(this)).bindTo($input);

    // Handle input key events on the search input, triggering results to load.
    $input.on('input focus', function () {
      search(this.value.toLowerCase());
    });
  };
  _proto.onremove = function onremove(vnode) {
    this.searchState.setValue(this.query());
    _FormModal.prototype.onremove.call(this, vnode);
  };
  _proto.search = function search(query) {
    var _this6 = this;
    if (!query) return;
    var source = this.activeSource();
    if (this.searchTimeout) clearTimeout(this.searchTimeout);
    this.searchTimeout = window.setTimeout(function () {
      if (source.isCached(query)) return;
      if (query.length >= _SearchManager__WEBPACK_IMPORTED_MODULE_4__["default"].MIN_SEARCH_LEN) {
        if (!source.search) return;
        _this6.loadingSources.push(source.resource);
        source.search(query, SearchModal.LIMIT).then(function () {
          _this6.loadingSources = _this6.loadingSources.filter(function (resource) {
            return resource !== source.resource;
          });
          m.redraw();
        });
      }
      _this6.searchState.cache(query);
      m.redraw();
    }, 250);
  }

  /**
   * Navigate to the currently selected search result and close the list.
   */;
  _proto.selectResult = function selectResult() {
    if (this.searchTimeout) clearTimeout(this.searchTimeout);
    this.loadingSources = [];
    var item = this.getItem(this.index);
    var isResult = !!item.attr('data-id');
    var selectedUrl = null;
    if (isResult) {
      var id = item.attr('data-id');
      selectedUrl = id && this.activeSource().gotoItem(id);
    } else if (item.find('a').length) {
      selectedUrl = item.find('a').attr('href');
    }
    var query = this.query();
    if (query && selectedUrl) {
      m.route.set(selectedUrl);
    } else {
      item.find('button')[0].click();
    }
  }

  /**
   * Clear the search
   */;
  _proto.clear = function clear() {
    this.query('');
  }

  /**
   * Get all of the search result items that are selectable.
   */;
  _proto.selectableItems = function selectableItems() {
    return this.$('.Dropdown-menu > li:not(.Dropdown-header):not(.Dropdown-message)');
  }

  /**
   * Get the position of the currently selected search result item.
   * Returns zero if not found.
   */;
  _proto.getCurrentNumericIndex = function getCurrentNumericIndex() {
    return Math.max(0, this.selectableItems().index(this.getItem(this.index)));
  }

  /**
   * Get the <li> in the search results with the given index (numeric or named).
   */;
  _proto.getItem = function getItem(index) {
    var $items = this.selectableItems();
    var $item = $items.filter("[data-index=\"" + index + "\"]");
    if (!$item.length) {
      $item = $items.eq(index);
    }
    return $item;
  }

  /**
   * Set the currently-selected search result item to the one with the given
   * index.
   */;
  _proto.setIndex = function setIndex(index, scrollToItem) {
    if (scrollToItem === void 0) {
      scrollToItem = false;
    }
    var $items = this.selectableItems();
    var $dropdown = $items.parent();
    var fixedIndex = index;
    if (index < 0) {
      fixedIndex = $items.length - 1;
    } else if (index >= $items.length) {
      fixedIndex = 0;
    }
    var $item = $items.removeClass('active').eq(fixedIndex).addClass('active');
    this.index = parseInt($item.attr('data-index')) || fixedIndex;
    if (scrollToItem && $dropdown) {
      var dropdownScroll = $dropdown.scrollTop();
      var dropdownTop = $dropdown.offset().top;
      var dropdownBottom = dropdownTop + $dropdown.outerHeight();
      var itemTop = $item.offset().top;
      var itemBottom = itemTop + $item.outerHeight();
      var scrollTop;
      if (itemTop < dropdownTop) {
        scrollTop = dropdownScroll - dropdownTop + itemTop - parseInt($dropdown.css('padding-top'), 10);
      } else if (itemBottom > dropdownBottom) {
        scrollTop = dropdownScroll - dropdownBottom + itemBottom + parseInt($dropdown.css('padding-bottom'), 10);
      }
      if (typeof scrollTop !== 'undefined') {
        $dropdown.stop(true).animate({
          scrollTop: scrollTop
        }, 100);
      }
    }
  };
  _proto.inputElement = function inputElement() {
    return this.$('.SearchModal-input');
  };
  _proto.defaultActiveSource = function defaultActiveSource() {
    var inDiscussion = _app__WEBPACK_IMPORTED_MODULE_1__["default"].current.data.routeName && ['discussion', 'discussion.near'].includes(_app__WEBPACK_IMPORTED_MODULE_1__["default"].current.data.routeName) && _app__WEBPACK_IMPORTED_MODULE_1__["default"].current.data.discussion;
    var inUser = _app__WEBPACK_IMPORTED_MODULE_1__["default"].current.data.routeName && _app__WEBPACK_IMPORTED_MODULE_1__["default"].current.data.routeName.includes('user.posts') && _app__WEBPACK_IMPORTED_MODULE_1__["default"].current.data.user;
    var inPosts = _app__WEBPACK_IMPORTED_MODULE_1__["default"].current.data.routeName && _app__WEBPACK_IMPORTED_MODULE_1__["default"].current.data.routeName === 'posts';
    if (inDiscussion || inUser || inPosts) {
      return 'posts';
    }
    return null;
  };
  _proto.defaultFilters = function defaultFilters() {
    var filters = {};
    this.sources.forEach(function (source) {
      filters[source.resource] = {};
    });
    if (_app__WEBPACK_IMPORTED_MODULE_1__["default"].current.data.routeName && ['discussion', 'discussion.near'].includes(_app__WEBPACK_IMPORTED_MODULE_1__["default"].current.data.routeName) && _app__WEBPACK_IMPORTED_MODULE_1__["default"].current.data.discussion) {
      filters.posts.discussion = _app__WEBPACK_IMPORTED_MODULE_1__["default"].current.data.discussion.id();
    }
    if (_app__WEBPACK_IMPORTED_MODULE_1__["default"].current.data.routeName && _app__WEBPACK_IMPORTED_MODULE_1__["default"].current.data.routeName.includes('user.posts') && _app__WEBPACK_IMPORTED_MODULE_1__["default"].current.data.user) {
      filters.posts.author = _app__WEBPACK_IMPORTED_MODULE_1__["default"].current.data.user.username();
    }
    return filters;
  };
  _proto.prefill = function prefill(value) {
    var newQuery = _app__WEBPACK_IMPORTED_MODULE_1__["default"].search.gambits.from(this.activeSource().resource, value, this.defaultFilters()[this.activeSource().resource] || {});
    if (!value.includes(newQuery.replace(value, '').trim())) {
      return newQuery;
    }
    return value;
  };
  return SearchModal;
}(_FormModal__WEBPACK_IMPORTED_MODULE_2__["default"]);
SearchModal.LIMIT = 6;


/***/ }),

/***/ "./src/core/common/utils/GambitsAutocomplete.tsx":
/*!*******************************************************!*\
  !*** ./src/core/common/utils/GambitsAutocomplete.tsx ***!
  \*******************************************************/
/***/ (() => {

throw new Error("Module parse failed: The keyword 'public' is reserved (9:31)\nFile was processed with these loaders:\n * ./node_modules/flarum-webpack-config/node_modules/babel-loader/lib/index.js\nYou may need an additional loader to handle the result of these loaders.\n| import Button from '../components/Button';\n| var GambitsAutocomplete = /*#__PURE__*/function () {\n>   function GambitsAutocomplete(public resource, public jqueryInput, public onchange, public afterSuggest) {\n|     this.query = '';\n|   }");

/***/ }),

/***/ "./src/core/common/utils/KeyboardNavigatable.ts":
/*!******************************************************!*\
  !*** ./src/core/common/utils/KeyboardNavigatable.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ KeyboardNavigatable)
/* harmony export */ });
var Keys = /*#__PURE__*/function (Keys) {
  Keys[Keys["Enter"] = 13] = "Enter";
  Keys[Keys["Escape"] = 27] = "Escape";
  Keys[Keys["Space"] = 32] = "Space";
  Keys[Keys["ArrowUp"] = 38] = "ArrowUp";
  Keys[Keys["ArrowDown"] = 40] = "ArrowDown";
  Keys[Keys["ArrowLeft"] = 37] = "ArrowLeft";
  Keys[Keys["ArrowRight"] = 39] = "ArrowRight";
  Keys[Keys["Tab"] = 9] = "Tab";
  Keys[Keys["Backspace"] = 8] = "Backspace";
  return Keys;
}(Keys || {});
/**
 * The `KeyboardNavigatable` class manages lists that can be navigated with the
 * keyboard, calling callbacks for each actions.
 *
 * This helper encapsulates the key binding logic, providing a simple fluent
 * API for use.
 */
var KeyboardNavigatable = /*#__PURE__*/function () {
  function KeyboardNavigatable() {
    /**
     * Callback to be executed for a specified input.
     */
    this.callbacks = new Map();
    /**
     * Callback that determines whether keyboard input should be handled.
     * By default, always handle keyboard navigation.
     */
    this.whenCallback = function (event) {
      return true;
    };
  }
  var _proto = KeyboardNavigatable.prototype;
  /**
   * Provide a callback to be executed when navigating upwards.
   *
   * This will be triggered by the Up key.
   */
  _proto.onUp = function onUp(callback) {
    return this.onDirection(callback, Keys.ArrowUp);
  }

  /**
   * Provide a callback to be executed when navigating downwards.
   *
   * This will be triggered by the Down key.
   */;
  _proto.onDown = function onDown(callback) {
    return this.onDirection(callback, Keys.ArrowDown);
  }

  /**
   * Provide a callback to be executed when navigating leftwards.
   *
   * This will be triggered by the Left key.
   */;
  _proto.onLeft = function onLeft(callback) {
    return this.onDirection(callback, Keys.ArrowLeft);
  }

  /**
   * Provide a callback to be executed when navigating rightwards.
   *
   * This will be triggered by the Right key.
   */;
  _proto.onRight = function onRight(callback) {
    return this.onDirection(callback, Keys.ArrowRight);
  };
  _proto.onDirection = function onDirection(callback, direction) {
    this.callbacks.set(direction, function (e) {
      e.preventDefault();
      callback(e);
    });
    return this;
  }

  /**
   * Provide a callback to be executed when the current item is selected..
   *
   * This will be triggered by the Return key (and Tab key, if not disabled).
   */;
  _proto.onSelect = function onSelect(callback, ignoreTabPress) {
    if (ignoreTabPress === void 0) {
      ignoreTabPress = false;
    }
    var handler = function handler(e) {
      e.preventDefault();
      callback(e);
    };
    if (!ignoreTabPress) this.callbacks.set(Keys.Tab, handler);
    this.callbacks.set(Keys.Enter, handler);
    return this;
  }

  /**
   * Provide a callback to be executed when the current item is tabbed into.
   *
   * This will be triggered by the Tab key.
   */;
  _proto.onTab = function onTab(callback) {
    var handler = function handler(e) {
      e.preventDefault();
      callback(e);
    };
    this.callbacks.set(9, handler);
    return this;
  }

  /**
   * Provide a callback to be executed when the navigation is canceled.
   *
   * This will be triggered by the Escape key.
   */;
  _proto.onCancel = function onCancel(callback) {
    this.callbacks.set(Keys.Escape, function (e) {
      e.stopPropagation();
      e.preventDefault();
      callback(e);
    });
    return this;
  }

  /**
   * Provide a callback to be executed when previous input is removed.
   *
   * This will be triggered by the Backspace key.
   */;
  _proto.onRemove = function onRemove(callback) {
    this.callbacks.set(Keys.Backspace, function (e) {
      if (e instanceof KeyboardEvent && e.target instanceof HTMLInputElement && e.target.selectionStart === 0 && e.target.selectionEnd === 0) {
        callback(e);
        e.preventDefault();
      }
    });
    return this;
  }

  /**
   * Provide a callback that determines whether keyboard input should be handled.
   */;
  _proto.when = function when(callback) {
    this.whenCallback = callback;
    return this;
  }

  /**
   * Set up the navigation key bindings on the given jQuery element.
   */;
  _proto.bindTo = function bindTo($element) {
    // Handle navigation key events on the navigatable element.
    $element[0].addEventListener('keydown', this.navigate.bind(this));
  }

  /**
   * Interpret the given keyboard event as navigation commands.
   */;
  _proto.navigate = function navigate(event) {
    // This callback determines whether keyboard should be handled or ignored.
    if (!this.whenCallback(event)) return;
    var keyCallback = this.callbacks.get(event.which);
    if (keyCallback) {
      keyCallback(event);
    }
  };
  return KeyboardNavigatable;
}();


/***/ })

}]);
//# sourceMappingURL=src_core_common_components_SearchModal_tsx.js.map