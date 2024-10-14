"use strict";
(self["webpackChunkmodule_exports"] = self["webpackChunkmodule_exports"] || []).push([["src_core_forum_components_ComposerBody_tsx"],{

/***/ "./src/core/common/components/ConfirmDocumentUnload.js":
/*!*************************************************************!*\
  !*** ./src/core/common/components/ConfirmDocumentUnload.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ConfirmDocumentUnload)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Component */ "./src/core/common/Component.ts");



/**
 * The `ConfirmDocumentUnload` component can be used to register a global
 * event handler that prevents closing the browser window/tab based on the
 * return value of a given callback prop.
 *
 * ### Attrs
 *
 * - `when` - a callback returning true when the browser should prompt for
 *            confirmation before closing the window/tab
 */
var ConfirmDocumentUnload = /*#__PURE__*/function (_Component) {
  function ConfirmDocumentUnload() {
    return _Component.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(ConfirmDocumentUnload, _Component);
  var _proto = ConfirmDocumentUnload.prototype;
  _proto.handler = function handler() {
    return this.attrs.when() || undefined;
  };
  _proto.oncreate = function oncreate(vnode) {
    _Component.prototype.oncreate.call(this, vnode);
    this.boundHandler = this.handler.bind(this);
    $(window).on('beforeunload', this.boundHandler);
  };
  _proto.onremove = function onremove(vnode) {
    _Component.prototype.onremove.call(this, vnode);
    $(window).off('beforeunload', this.boundHandler);
  };
  _proto.view = function view(vnode) {
    return m('[', null, vnode.children);
  };
  return ConfirmDocumentUnload;
}(_Component__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./src/core/common/components/TextEditor.js":
/*!**************************************************!*\
  !*** ./src/core/common/components/TextEditor.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TextEditor)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _common_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/app */ "./src/core/common/app.ts");
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Component */ "./src/core/common/Component.ts");
/* harmony import */ var _utils_ItemList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/ItemList */ "./src/core/common/utils/ItemList.ts");
/* harmony import */ var _helpers_listItems__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/listItems */ "./src/core/common/helpers/listItems.tsx");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Button */ "./src/core/common/components/Button.tsx");
/* harmony import */ var _utils_BasicEditorDriver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/BasicEditorDriver */ "./src/core/common/utils/BasicEditorDriver.ts");
/* harmony import */ var _Tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Tooltip */ "./src/core/common/components/Tooltip.tsx");
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./LoadingIndicator */ "./src/core/common/components/LoadingIndicator.tsx");










/**
 * The `TextEditor` component displays a textarea with controls, including a
 * submit button.
 *
 * ### Attrs
 *
 * - `composer`
 * - `submitLabel`
 * - `value`
 * - `placeholder`
 * - `disabled`
 * - `preview`
 */
var TextEditor = /*#__PURE__*/function (_Component) {
  function TextEditor() {
    return _Component.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(TextEditor, _Component);
  var _proto = TextEditor.prototype;
  _proto.oninit = function oninit(vnode) {
    _Component.prototype.oninit.call(this, vnode);

    /**
     * The value of the editor.
     *
     * @type {String}
     */
    this.value = this.attrs.value || '';

    /**
     * Whether the editor is disabled.
     */
    this.disabled = !!this.attrs.disabled;

    /**
     * Whether the editor is loading.
     */
    this.loading = true;

    /**
     * Async operations to complete before the editor is ready.
     */
    this._loaders = [];
  };
  _proto.view = function view() {
    return m("div", {
      className: "TextEditor"
    }, this.loading ? m(_LoadingIndicator__WEBPACK_IMPORTED_MODULE_8__["default"], null) : m('[', null, m("div", {
      className: "TextEditor-editorContainer"
    }), m("ul", {
      className: "TextEditor-controls Composer-footer"
    }, (0,_helpers_listItems__WEBPACK_IMPORTED_MODULE_4__["default"])(this.controlItems().toArray()), m("li", {
      className: "TextEditor-toolbar"
    }, this.toolbarItems().toArray()))));
  };
  _proto.oncreate = function oncreate(vnode) {
    var _this = this;
    _Component.prototype.oncreate.call(this, vnode);
    this._load().then(function () {
      setTimeout(_this.onbuild.bind(_this), 50);
    });
  };
  _proto.onbuild = function onbuild() {
    this.attrs.composer.editor = this.buildEditor(this.$('.TextEditor-editorContainer')[0]);
  };
  _proto.onupdate = function onupdate(vnode) {
    _Component.prototype.onupdate.call(this, vnode);
    var newDisabled = !!this.attrs.disabled;
    if (this.disabled !== newDisabled) {
      this.disabled = newDisabled;
      this.attrs.composer.editor.disabled(newDisabled);
    }
  };
  _proto._load = function _load() {
    var _this2 = this;
    return Promise.all(this._loaders.map(function (loader) {
      return loader();
    })).then(function () {
      _this2.loading = false;
      m.redraw();
    });
  };
  _proto.buildEditorParams = function buildEditorParams() {
    var _this3 = this;
    return {
      classNames: ['FormControl', 'Composer-flexible', 'TextEditor-editor'],
      disabled: this.disabled,
      placeholder: this.attrs.placeholder || '',
      value: this.value,
      oninput: this.oninput.bind(this),
      inputListeners: [],
      onsubmit: function onsubmit() {
        _this3.onsubmit();
        m.redraw();
      }
    };
  };
  _proto.buildEditor = function buildEditor(dom) {
    return new _utils_BasicEditorDriver__WEBPACK_IMPORTED_MODULE_6__["default"](dom, this.buildEditorParams());
  }

  /**
   * Build an item list for the text editor controls.
   *
   * @return {ItemList<import('mithril').Children>}
   */;
  _proto.controlItems = function controlItems() {
    var items = new _utils_ItemList__WEBPACK_IMPORTED_MODULE_3__["default"]();
    items.add('submit', m(_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
      icon: "fas fa-paper-plane",
      className: "Button Button--primary",
      itemClassName: "App-primaryControl",
      onclick: this.onsubmit.bind(this)
    }, this.attrs.submitLabel));
    if (this.attrs.preview) {
      items.add('preview', m(_Tooltip__WEBPACK_IMPORTED_MODULE_7__["default"], {
        text: _common_app__WEBPACK_IMPORTED_MODULE_1__["default"].translator.trans('core.forum.composer.preview_tooltip')
      }, m(_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
        icon: "far fa-eye",
        className: "Button Button--icon",
        onclick: this.attrs.preview
      })));
    }
    return items;
  }

  /**
   * Build an item list for the toolbar controls.
   *
   * @return {ItemList<import('mithril').Children>}
   */;
  _proto.toolbarItems = function toolbarItems() {
    return new _utils_ItemList__WEBPACK_IMPORTED_MODULE_3__["default"]();
  }

  /**
   * Handle input into the textarea.
   *
   * @param {string} value
   */;
  _proto.oninput = function oninput(value) {
    this.value = value;
    this.attrs.onchange(this.value);
  }

  /**
   * Handle the submit button being clicked.
   */;
  _proto.onsubmit = function onsubmit() {
    this.attrs.onsubmit(this.value);
  };
  return TextEditor;
}(_Component__WEBPACK_IMPORTED_MODULE_2__["default"]);


/***/ }),

/***/ "./src/core/common/utils/BasicEditorDriver.ts":
/*!****************************************************!*\
  !*** ./src/core/common/utils/BasicEditorDriver.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BasicEditorDriver)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'textarea-caret'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _insertText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./insertText */ "./src/core/common/utils/insertText.ts");
/* harmony import */ var _ItemList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ItemList */ "./src/core/common/utils/ItemList.ts");



var BasicEditorDriver = /*#__PURE__*/function () {
  function BasicEditorDriver(dom, params) {
    this.el = void 0;
    this.el = document.createElement('textarea');
    this.build(dom, params);
  }
  var _proto = BasicEditorDriver.prototype;
  _proto.build = function build(dom, params) {
    var _this = this;
    this.el.className = params.classNames.join(' ');
    this.el.disabled = params.disabled;
    this.el.placeholder = params.placeholder;
    this.el.value = params.value;
    var callInputListeners = function callInputListeners(e) {
      params.inputListeners.forEach(function (listener) {
        listener();
      });
      e.redraw = false;
    };
    this.el.oninput = function (e) {
      params.oninput(_this.el.value);
      callInputListeners(e);
    };
    this.el.onclick = callInputListeners;
    this.el.onkeyup = callInputListeners;
    this.el.addEventListener('keydown', function (e) {
      _this.keyHandlers(params).toArray().forEach(function (handler) {
        return handler(e);
      });
    });
    dom.append(this.el);
  };
  _proto.keyHandlers = function keyHandlers(params) {
    var items = new _ItemList__WEBPACK_IMPORTED_MODULE_2__["default"]();
    items.add('submit', function (e) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
        params.onsubmit();
      }
    });
    return items;
  };
  _proto.moveCursorTo = function moveCursorTo(position) {
    this.setSelectionRange(position, position);
  };
  _proto.getSelectionRange = function getSelectionRange() {
    return [this.el.selectionStart, this.el.selectionEnd];
  };
  _proto.getLastNChars = function getLastNChars(n) {
    var value = this.el.value;
    return value.slice(Math.max(0, this.el.selectionStart - n), this.el.selectionStart);
  };
  _proto.insertAtCursor = function insertAtCursor(text) {
    this.insertAt(this.el.selectionStart, text);
  };
  _proto.insertAt = function insertAt(pos, text) {
    this.insertBetween(pos, pos, text);
  };
  _proto.insertBetween = function insertBetween(selectionStart, selectionEnd, text) {
    this.setSelectionRange(selectionStart, selectionEnd);
    var cursorPos = selectionStart + text.length;
    (0,_insertText__WEBPACK_IMPORTED_MODULE_1__["default"])(this.el, {
      text: text,
      selectionStart: cursorPos,
      selectionEnd: cursorPos
    });
  };
  _proto.replaceBeforeCursor = function replaceBeforeCursor(start, text) {
    this.insertBetween(start, this.el.selectionStart, text);
  };
  _proto.setSelectionRange = function setSelectionRange(start, end) {
    this.el.setSelectionRange(start, end);
    this.focus();
  };
  _proto.getCaretCoordinates = function getCaretCoordinates(position) {
    var relCoords = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'textarea-caret'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this.el, position);
    return {
      top: relCoords.top - this.el.scrollTop,
      left: relCoords.left
    };
  }

  // DOM Interactions

  /**
   * Set the disabled status of the editor.
   */;
  _proto.disabled = function disabled(_disabled) {
    this.el.disabled = _disabled;
  }

  /**
   * Focus on the editor.
   */;
  _proto.focus = function focus() {
    this.el.focus();
  }

  /**
   * Destroy the editor
   */;
  _proto.destroy = function destroy() {
    this.el.remove();
  };
  return BasicEditorDriver;
}();


/***/ }),

/***/ "./src/core/common/utils/insertText.ts":
/*!*********************************************!*\
  !*** ./src/core/common/utils/insertText.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ insertText)
/* harmony export */ });
/*
 * Original Copyright GitHub, Inc. Licensed under the MIT License.
 * See license text at https://github.com/github/markdown-toolbar-element/blob/master/LICENSE.
 */

var canInsertText = null;
function insertText(textarea, _ref) {
  var text = _ref.text,
    selectionStart = _ref.selectionStart,
    selectionEnd = _ref.selectionEnd;
  var originalSelectionStart = textarea.selectionStart;
  var before = textarea.value.slice(0, originalSelectionStart);
  var after = textarea.value.slice(textarea.selectionEnd);
  if (canInsertText === null || canInsertText === true) {
    textarea.contentEditable = 'true';
    try {
      canInsertText = document.execCommand('insertText', false, text);
    } catch (error) {
      canInsertText = false;
    }
    textarea.contentEditable = 'false';
  }
  if (canInsertText && !textarea.value.slice(0, textarea.selectionStart).endsWith(text)) {
    canInsertText = false;
  }
  if (!canInsertText) {
    textarea.value = before + text + after;
    textarea.dispatchEvent(new CustomEvent('input', {
      bubbles: true,
      cancelable: true
    }));
  }
  if (selectionStart != null && selectionEnd != null) {
    textarea.setSelectionRange(selectionStart, selectionEnd);
  } else {
    textarea.setSelectionRange(originalSelectionStart, textarea.selectionEnd);
  }
}

/***/ }),

/***/ "./src/core/forum/components/ComposerBody.tsx":
/*!****************************************************!*\
  !*** ./src/core/forum/components/ComposerBody.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ComposerBody)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/Component */ "./src/core/common/Component.ts");
/* harmony import */ var _common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/components/LoadingIndicator */ "./src/core/common/components/LoadingIndicator.tsx");
/* harmony import */ var _common_components_ConfirmDocumentUnload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/components/ConfirmDocumentUnload */ "./src/core/common/components/ConfirmDocumentUnload.js");
/* harmony import */ var _common_components_TextEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/components/TextEditor */ "./src/core/common/components/TextEditor.js");
/* harmony import */ var _common_helpers_listItems__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/helpers/listItems */ "./src/core/common/helpers/listItems.tsx");
/* harmony import */ var _common_utils_ItemList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/utils/ItemList */ "./src/core/common/utils/ItemList.ts");
/* harmony import */ var _common_utils_classList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/utils/classList */ "./src/core/common/utils/classList.ts");
/* harmony import */ var _common_components_Avatar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/components/Avatar */ "./src/core/common/components/Avatar.tsx");









/**
 * The `ComposerBody` component handles the body, or the content, of the
 * composer. Subclasses should implement the `onsubmit` method and override
 * `headerTimes`.
 */
var ComposerBody = /*#__PURE__*/function (_Component) {
  function ComposerBody() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.loading = false;
    _this.composer = void 0;
    _this.jumpToPreview = void 0;
    return _this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(ComposerBody, _Component);
  var _proto = ComposerBody.prototype;
  _proto.oninit = function oninit(vnode) {
    var _this2 = this;
    _Component.prototype.oninit.call(this, vnode);
    this.composer = this.attrs.composer;

    // Let the composer state know to ask for confirmation under certain
    // circumstances, if the body supports / requires it and has a corresponding
    // confirmation question to ask.
    if (this.attrs.confirmExit) {
      this.composer.preventClosingWhen(function () {
        return _this2.hasChanges();
      }, this.attrs.confirmExit);
    }
    this.composer.fields.content(this.attrs.originalContent || '');
  };
  _proto.view = function view() {
    var _this$jumpToPreview;
    return m(_common_components_ConfirmDocumentUnload__WEBPACK_IMPORTED_MODULE_3__["default"], {
      when: this.hasChanges.bind(this)
    }, m("div", {
      className: (0,_common_utils_classList__WEBPACK_IMPORTED_MODULE_7__["default"])('ComposerBody', this.attrs.className)
    }, m(_common_components_Avatar__WEBPACK_IMPORTED_MODULE_8__["default"], {
      user: this.attrs.user,
      className: "ComposerBody-avatar"
    }), m("div", {
      className: "ComposerBody-content"
    }, m("ul", {
      className: "ComposerBody-header"
    }, (0,_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_5__["default"])(this.headerItems().toArray())), m("div", {
      className: "ComposerBody-editor"
    }, m(_common_components_TextEditor__WEBPACK_IMPORTED_MODULE_4__["default"], {
      submitLabel: this.attrs.submitLabel,
      placeholder: this.attrs.placeholder,
      disabled: this.loading || this.attrs.disabled,
      composer: this.composer,
      preview: (_this$jumpToPreview = this.jumpToPreview) == null ? void 0 : _this$jumpToPreview.bind(this),
      onchange: this.composer.fields.content,
      onsubmit: this.onsubmit.bind(this),
      value: this.composer.fields.content()
    }))), m(_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_2__["default"], {
      display: "unset",
      containerClassName: (0,_common_utils_classList__WEBPACK_IMPORTED_MODULE_7__["default"])('ComposerBody-loading', this.loading && 'active'),
      size: "large"
    })));
  }

  /**
   * Check if there is any unsaved data.
   */;
  _proto.hasChanges = function hasChanges() {
    var content = this.composer.fields.content();
    return Boolean(content) && content !== this.attrs.originalContent;
  }

  /**
   * Build an item list for the composer's header.
   */;
  _proto.headerItems = function headerItems() {
    return new _common_utils_ItemList__WEBPACK_IMPORTED_MODULE_6__["default"]();
  }

  /**
   * Handle the submit event of the text editor.
   */;
  /**
   * Stop loading.
   */
  _proto.loaded = function loaded() {
    this.loading = false;
    m.redraw();
  };
  return ComposerBody;
}(_common_Component__WEBPACK_IMPORTED_MODULE_1__["default"]);
ComposerBody.focusOnSelector = null;


/***/ })

}]);
//# sourceMappingURL=src_core_forum_components_ComposerBody_tsx.js.map