"use strict";
(self["webpackChunkmodule_exports"] = self["webpackChunkmodule_exports"] || []).push([["src_core_forum_components_SettingsPage_tsx"],{

/***/ "./src/core/common/components/Checkbox.tsx":
/*!*************************************************!*\
  !*** ./src/core/common/components/Checkbox.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Checkbox)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Component */ "./src/core/common/Component.ts");
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LoadingIndicator */ "./src/core/common/components/LoadingIndicator.tsx");
/* harmony import */ var _utils_classList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/classList */ "./src/core/common/utils/classList.ts");
/* harmony import */ var _utils_withAttr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/withAttr */ "./src/core/common/utils/withAttr.ts");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Icon */ "./src/core/common/components/Icon.tsx");






/**
 * The `Checkbox` component defines a checkbox input.
 *
 * ### Attrs
 *
 * - `state` Whether or not the checkbox is checked.
 * - `className` The class name for the root element.
 * - `disabled` Whether or not the checkbox is disabled.
 * - `loading` Whether or not the checkbox is loading.
 * - `onchange` A callback to run when the checkbox is checked/unchecked.
 * - `children` A text label to display next to the checkbox.
 */
var Checkbox = /*#__PURE__*/function (_Component) {
  function Checkbox() {
    return _Component.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Checkbox, _Component);
  var _proto = Checkbox.prototype;
  _proto.view = function view(vnode) {
    var className = (0,_utils_classList__WEBPACK_IMPORTED_MODULE_3__["default"])(['Checkbox', this.attrs.state ? 'on' : 'off', this.attrs.className, this.attrs.loading && 'loading', this.attrs.disabled && 'disabled']);
    return m("label", {
      className: className
    }, m("input", {
      type: "checkbox",
      checked: this.attrs.state,
      disabled: this.attrs.disabled,
      onchange: (0,_utils_withAttr__WEBPACK_IMPORTED_MODULE_4__["default"])('checked', this.onchange.bind(this))
    }), m("div", {
      className: "Checkbox-display",
      "aria-hidden": "true"
    }, this.getDisplay()), vnode.children);
  }

  /**
   * Get the template for the checkbox's display (tick/cross icon).
   */;
  _proto.getDisplay = function getDisplay() {
    return this.attrs.loading ? m(_LoadingIndicator__WEBPACK_IMPORTED_MODULE_2__["default"], {
      display: "unset",
      size: "small"
    }) : m(_Icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
      name: this.attrs.state ? 'fas fa-check' : 'fas fa-times'
    });
  }

  /**
   * Run a callback when the state of the checkbox is changed.
   */;
  _proto.onchange = function onchange(checked) {
    if (this.attrs.onchange) this.attrs.onchange(checked, this);
  };
  return Checkbox;
}(_Component__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./src/core/common/components/FieldSet.tsx":
/*!*************************************************!*\
  !*** ./src/core/common/components/FieldSet.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FieldSet)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Component */ "./src/core/common/Component.ts");
/* harmony import */ var _utils_classList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/classList */ "./src/core/common/utils/classList.ts");



/**
 * The `FieldSet` component defines a collection of fields, displayed in a list
 * underneath a title.
 *
 * The children should be an array of items to show in the fieldset.
 */
var FieldSet = /*#__PURE__*/function (_Component) {
  function FieldSet() {
    return _Component.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(FieldSet, _Component);
  var _proto = FieldSet.prototype;
  _proto.view = function view(vnode) {
    return m("div", {
      className: (0,_utils_classList__WEBPACK_IMPORTED_MODULE_2__["default"])('FieldSet', this.attrs.className),
      role: "group",
      "aria-label": this.attrs.label,
      "aria-disabled": false
    }, m("label", {
      className: "FieldSet-label",
      "aria-hidden": "true"
    }, this.attrs.label), this.attrs.description ? m("div", {
      className: "FieldSet-description helpText"
    }, this.attrs.description) : null, m("div", {
      className: "FieldSet-items"
    }, vnode.children));
  };
  return FieldSet;
}(_Component__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./src/core/common/components/Switch.tsx":
/*!***********************************************!*\
  !*** ./src/core/common/components/Switch.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Switch)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _utils_classList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/classList */ "./src/core/common/utils/classList.ts");
/* harmony import */ var _Checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Checkbox */ "./src/core/common/components/Checkbox.tsx");




/**
 * The `Switch` component is a `Checkbox`, but with a switch display instead of
 * a tick/cross one.
 */
var Switch = /*#__PURE__*/function (_Checkbox) {
  function Switch() {
    return _Checkbox.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Switch, _Checkbox);
  Switch.initAttrs = function initAttrs(attrs) {
    _Checkbox.initAttrs.call(this, attrs);
    attrs.className = (0,_utils_classList__WEBPACK_IMPORTED_MODULE_1__["default"])(attrs.className, 'Checkbox--switch');
  };
  var _proto = Switch.prototype;
  _proto.getDisplay = function getDisplay() {
    return !!this.attrs.loading && _Checkbox.prototype.getDisplay.call(this);
  };
  return Switch;
}(_Checkbox__WEBPACK_IMPORTED_MODULE_2__["default"]);


/***/ }),

/***/ "./src/core/common/utils/withAttr.ts":
/*!*******************************************!*\
  !*** ./src/core/common/utils/withAttr.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ withAttr)
/* harmony export */ });
/**
 * An event handler factory that makes it simpler to implement data binding
 * for component event listeners.
 *
 * The handler created by this factory passes the DOM element's attribute
 * identified by the first argument to the callback (usually a bidirectional
 * Mithril stream: https://mithril.js.org/stream.html#bidirectional-bindings).
 *
 * Replaces m.withAttr for Mithril 2.0.
 * @see https://mithril.js.org/archive/v0.2.5/mithril.withAttr.html
 */
function withAttr(key, cb) {
  return function () {
    cb(this.getAttribute(key) || this[key]);
  };
}

/***/ }),

/***/ "./src/core/forum/components/ChangeEmailModal.tsx":
/*!********************************************************!*\
  !*** ./src/core/forum/components/ChangeEmailModal.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ChangeEmailModal)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../forum/app */ "./src/core/forum/app.ts");
/* harmony import */ var _common_components_FormModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/components/FormModal */ "./src/core/common/components/FormModal.tsx");
/* harmony import */ var _common_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/components/Button */ "./src/core/common/components/Button.tsx");
/* harmony import */ var _common_utils_Stream__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/utils/Stream */ "./src/core/common/utils/Stream.ts");
/* harmony import */ var _common_utils_ItemList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/utils/ItemList */ "./src/core/common/utils/ItemList.ts");
/* harmony import */ var _common_components_Form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/components/Form */ "./src/core/common/components/Form.tsx");








/**
 * The `ChangeEmailModal` component shows a modal dialog which allows the user
 * to change their email address.
 */
var ChangeEmailModal = /*#__PURE__*/function (_FormModal) {
  function ChangeEmailModal() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _FormModal.call.apply(_FormModal, [this].concat(args)) || this;
    /**
     * The value of the email input.
     */
    _this.email = void 0;
    /**
     * The value of the password input.
     */
    _this.password = void 0;
    /**
     * Whether or not the email has been changed successfully.
     */
    _this.success = false;
    return _this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(ChangeEmailModal, _FormModal);
  var _proto = ChangeEmailModal.prototype;
  _proto.oninit = function oninit(vnode) {
    _FormModal.prototype.oninit.call(this, vnode);
    this.email = (0,_common_utils_Stream__WEBPACK_IMPORTED_MODULE_4__["default"])(_forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].session.user.email() || '');
    this.password = (0,_common_utils_Stream__WEBPACK_IMPORTED_MODULE_4__["default"])('');
  };
  _proto.className = function className() {
    return 'ChangeEmailModal Modal--small';
  };
  _proto.title = function title() {
    return _forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].translator.trans('core.forum.change_email.title');
  };
  _proto.content = function content() {
    return m("div", {
      className: "Modal-body"
    }, m(_common_components_Form__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: "Form--centered"
    }, this.fields().toArray()));
  };
  _proto.fields = function fields() {
    var items = new _common_utils_ItemList__WEBPACK_IMPORTED_MODULE_5__["default"]();
    if (this.success) {
      items.add('help', m("p", {
        className: "helpText"
      }, _forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].translator.trans('core.forum.change_email.confirmation_message', {
        email: m("strong", null, this.email())
      })));
      items.add('dismiss', m("div", {
        className: "Form-group"
      }, m(_common_components_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
        className: "Button Button--primary Button--block",
        onclick: this.hide.bind(this)
      }, _forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].translator.trans('core.forum.change_email.dismiss_button'))));
    } else {
      items.add('email', m("div", {
        className: "Form-group"
      }, m("input", {
        type: "email",
        name: "email",
        className: "FormControl",
        placeholder: _forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].session.user.email(),
        bidi: this.email,
        disabled: this.loading
      })));
      items.add('password', m("div", {
        className: "Form-group"
      }, m("input", {
        type: "password",
        name: "password",
        className: "FormControl",
        autocomplete: "current-password",
        placeholder: _forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].translator.trans('core.forum.change_email.confirm_password_placeholder'),
        bidi: this.password,
        disabled: this.loading
      })));
      items.add('submit', m("div", {
        className: "Form-group Form-controls"
      }, m(_common_components_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
        className: "Button Button--primary Button--block",
        type: "submit",
        loading: this.loading
      }, _forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].translator.trans('core.forum.change_email.submit_button'))));
    }
    return items;
  };
  _proto.onsubmit = function onsubmit(e) {
    var _this2 = this;
    e.preventDefault();

    // If the user hasn't actually entered a different email address, we don't
    // need to do anything. Woot!
    if (this.email() === _forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].session.user.email()) {
      this.hide();
      return;
    }
    this.loading = true;
    this.alertAttrs = null;
    _forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].session.user.save(this.requestAttributes(), {
      errorHandler: this.onerror.bind(this),
      meta: {
        password: this.password()
      }
    }).then(function () {
      _this2.success = true;
    })["catch"](function () {}).then(this.loaded.bind(this));
  };
  _proto.requestAttributes = function requestAttributes() {
    return {
      email: this.email()
    };
  };
  _proto.onerror = function onerror(error) {
    if (error.status === 401 && error.alert) {
      error.alert.content = _forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].translator.trans('core.forum.change_email.incorrect_password_message');
    }
    _FormModal.prototype.onerror.call(this, error);
  };
  return ChangeEmailModal;
}(_common_components_FormModal__WEBPACK_IMPORTED_MODULE_2__["default"]);


/***/ }),

/***/ "./src/core/forum/components/ChangePasswordModal.tsx":
/*!***********************************************************!*\
  !*** ./src/core/forum/components/ChangePasswordModal.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ChangePasswordModal)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/readOnlyError */ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _forum_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../forum/app */ "./src/core/forum/app.ts");
/* harmony import */ var _common_components_FormModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/components/FormModal */ "./src/core/common/components/FormModal.tsx");
/* harmony import */ var _common_components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/components/Button */ "./src/core/common/components/Button.tsx");
/* harmony import */ var _common_utils_ItemList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/utils/ItemList */ "./src/core/common/utils/ItemList.ts");
/* harmony import */ var _common_components_Form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/components/Form */ "./src/core/common/components/Form.tsx");








/**
 * The `ChangePasswordModal` component shows a modal dialog which allows the
 * user to send themself a password reset email.
 */
var ChangePasswordModal = /*#__PURE__*/function (_FormModal) {
  function ChangePasswordModal() {
    return _FormModal.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(ChangePasswordModal, _FormModal);
  var _proto = ChangePasswordModal.prototype;
  _proto.className = function className() {
    return 'ChangePasswordModal Modal--small';
  };
  _proto.title = function title() {
    return _forum_app__WEBPACK_IMPORTED_MODULE_2__["default"].translator.trans('core.forum.change_password.title');
  };
  _proto.content = function content() {
    return m("div", {
      className: "Modal-body"
    }, m(_common_components_Form__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: "Form--centered"
    }, this.fields().toArray()));
  };
  _proto.fields = function fields() {
    var fields = new _common_utils_ItemList__WEBPACK_IMPORTED_MODULE_5__["default"]();
    fields.add('help', m("p", {
      className: "helpText"
    }, _forum_app__WEBPACK_IMPORTED_MODULE_2__["default"].translator.trans('core.forum.change_password.text')));
    fields.add('submit', m("div", {
      className: "Form-group Form-controls"
    }, m(_common_components_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: "Button Button--primary Button--block",
      type: "submit",
      loading: this.loading
    }, _forum_app__WEBPACK_IMPORTED_MODULE_2__["default"].translator.trans('core.forum.change_password.send_button'))));
    return fields;
  };
  _proto.onsubmit = function onsubmit(e) {
    e.preventDefault();
    this.loading = true;
    _forum_app__WEBPACK_IMPORTED_MODULE_2__["default"].request({
      method: 'POST',
      url: _forum_app__WEBPACK_IMPORTED_MODULE_2__["default"].forum.attribute('apiUrl') + '/forgot',
      body: this.requestBody()
    }).then(this.hide.bind(this), this.loaded.bind(this));
  };
  _proto.requestBody = function requestBody() {
    return {
      email: _forum_app__WEBPACK_IMPORTED_MODULE_2__["default"].session.user.email()
    };
  };
  return ChangePasswordModal;
}(_common_components_FormModal__WEBPACK_IMPORTED_MODULE_3__["default"]);


/***/ }),

/***/ "./src/core/forum/components/NotificationGrid.js":
/*!*******************************************************!*\
  !*** ./src/core/forum/components/NotificationGrid.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NotificationGrid)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../forum/app */ "./src/core/forum/app.ts");
/* harmony import */ var _common_Component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/Component */ "./src/core/common/Component.ts");
/* harmony import */ var _common_components_Checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/components/Checkbox */ "./src/core/common/components/Checkbox.tsx");
/* harmony import */ var _common_utils_ItemList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/utils/ItemList */ "./src/core/common/utils/ItemList.ts");
/* harmony import */ var _common_components_Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/components/Icon */ "./src/core/common/components/Icon.tsx");







/**
 * The `NotificationGrid` component displays a table of notification types and
 * methods, allowing the user to toggle each combination.
 *
 * ### Attrs
 *
 * - `user`
 */
var NotificationGrid = /*#__PURE__*/function (_Component) {
  function NotificationGrid() {
    return _Component.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(NotificationGrid, _Component);
  var _proto = NotificationGrid.prototype;
  _proto.oninit = function oninit(vnode) {
    _Component.prototype.oninit.call(this, vnode);

    /**
     * Information about the available notification methods.
     *
     * @type {({ name: string, icon: string, label: import('mithril').Children })[]}
     */
    this.methods = this.notificationMethods().toArray();

    /**
     * A map of which notification checkboxes are loading.
     *
     * @type {Record<string, boolean>}
     */
    this.loading = {};

    /**
     * Information about the available notification types.
     *
     * @type {({ name: string, icon: string, label: import('mithril').Children })[]}
     */
    this.types = this.notificationTypes().toArray();
  };
  _proto.view = function view() {
    var _this = this;
    var preferences = this.attrs.user.preferences();
    return m("table", {
      className: "NotificationGrid"
    }, m("thead", null, m("tr", null, m("td", null), this.methods.map(function (method) {
      return m("th", {
        className: "NotificationGrid-groupToggle",
        onclick: _this.toggleMethod.bind(_this, method.name)
      }, m(_common_components_Icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
        name: method.icon
      }), " ", method.label);
    }))), m("tbody", null, this.types.map(function (type) {
      return m("tr", null, m("td", {
        className: "NotificationGrid-groupToggle",
        onclick: _this.toggleType.bind(_this, type.name)
      }, m(_common_components_Icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
        name: type.icon
      }), " ", type.label), _this.methods.map(function (method) {
        var key = _this.preferenceKey(type.name, method.name);
        return m("td", {
          className: "NotificationGrid-checkbox"
        }, m(_common_components_Checkbox__WEBPACK_IMPORTED_MODULE_3__["default"], {
          state: !!preferences[key],
          loading: _this.loading[key],
          disabled: !(key in preferences),
          onchange: _this.toggle.bind(_this, [key])
        }, m("span", {
          className: "sr-only"
        }, _forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].translator.trans('core.forum.settings.notification_checkbox_a11y_label_template', {
          description: type.label,
          method: method.label
        }))));
      }));
    })));
  };
  _proto.oncreate = function oncreate(vnode) {
    _Component.prototype.oncreate.call(this, vnode);
    this.$('thead .NotificationGrid-groupToggle').bind('mouseenter mouseleave', function (e) {
      var i = parseInt($(this).index(), 10) + 1;
      $(this).parents('table').find('td:nth-child(' + i + ')').toggleClass('highlighted', e.type === 'mouseenter');
    });
    this.$('tbody .NotificationGrid-groupToggle').bind('mouseenter mouseleave', function (e) {
      $(this).parent().find('td').toggleClass('highlighted', e.type === 'mouseenter');
    });
  }

  /**
   * Toggle the state of the given preferences, based on the value of the first
   * one.
   *
   * @param {string[]} keys
   */;
  _proto.toggle = function toggle(keys) {
    var _this2 = this;
    var user = this.attrs.user;
    var preferences = user.preferences();
    var enabled = !preferences[keys[0]];
    keys.forEach(function (key) {
      _this2.loading[key] = true;
      preferences[key] = enabled;
    });
    m.redraw();
    user.save({
      preferences: preferences
    }).then(function () {
      keys.forEach(function (key) {
        return _this2.loading[key] = false;
      });
      m.redraw();
    });
  }

  /**
   * Toggle all notification types for the given method.
   *
   * @param {string} method
   */;
  _proto.toggleMethod = function toggleMethod(method) {
    var _this3 = this;
    var keys = this.types.map(function (type) {
      return _this3.preferenceKey(type.name, method);
    }).filter(function (key) {
      return key in _this3.attrs.user.preferences();
    });
    this.toggle(keys);
  }

  /**
   * Toggle all notification methods for the given type.
   *
   * @param {string} type
   */;
  _proto.toggleType = function toggleType(type) {
    var _this4 = this;
    var keys = this.methods.map(function (method) {
      return _this4.preferenceKey(type, method.name);
    }).filter(function (key) {
      return key in _this4.attrs.user.preferences();
    });
    this.toggle(keys);
  }

  /**
   * Get the name of the preference key for the given notification type-method
   * combination.
   *
   * @param {string} type
   * @param {string} method
   * @return {string}
   */;
  _proto.preferenceKey = function preferenceKey(type, method) {
    return 'notify_' + type + '_' + method;
  }

  /**
   * Build an item list for the notification methods to display in the grid.
   *
   * Each notification method is an object which has the following properties:
   *
   * - `name` The name of the notification method.
   * - `icon` The icon to display in the column header.
   * - `label` The label to display in the column header.
   *
   * @return {ItemList<{ name: string, icon: string, label: import('mithril').Children }>}
   */;
  _proto.notificationMethods = function notificationMethods() {
    var items = new _common_utils_ItemList__WEBPACK_IMPORTED_MODULE_4__["default"]();
    items.add('alert', {
      name: 'alert',
      icon: 'fas fa-bell',
      label: _forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].translator.trans('core.forum.settings.notify_by_web_heading')
    });
    items.add('email', {
      name: 'email',
      icon: 'far fa-envelope',
      label: _forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].translator.trans('core.forum.settings.notify_by_email_heading')
    });
    return items;
  }

  /**
   * Build an item list for the notification types to display in the grid.
   *
   * Each notification type is an object which has the following properties:
   *
   * - `name` The name of the notification type.
   * - `icon` The icon to display in the notification grid row.
   * - `label` The label to display in the notification grid row.
   *
   * @return {ItemList<{ name: string, icon: string, label: import('mithril').Children}>}
   */;
  _proto.notificationTypes = function notificationTypes() {
    var items = new _common_utils_ItemList__WEBPACK_IMPORTED_MODULE_4__["default"]();
    items.add('discussionRenamed', {
      name: 'discussionRenamed',
      icon: 'fas fa-pencil-alt',
      label: _forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].translator.trans('core.forum.settings.notify_discussion_renamed_label')
    });
    return items;
  };
  return NotificationGrid;
}(_common_Component__WEBPACK_IMPORTED_MODULE_2__["default"]);


/***/ }),

/***/ "./src/core/forum/components/SettingsPage.tsx":
/*!****************************************************!*\
  !*** ./src/core/forum/components/SettingsPage.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SettingsPage)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _forum_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../forum/app */ "./src/core/forum/app.ts");
/* harmony import */ var _UserPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UserPage */ "./src/core/forum/components/UserPage.tsx");
/* harmony import */ var _common_utils_ItemList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/utils/ItemList */ "./src/core/common/utils/ItemList.ts");
/* harmony import */ var _common_components_Switch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/components/Switch */ "./src/core/common/components/Switch.tsx");
/* harmony import */ var _common_components_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/components/Button */ "./src/core/common/components/Button.tsx");
/* harmony import */ var _common_components_FieldSet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/components/FieldSet */ "./src/core/common/components/FieldSet.tsx");
/* harmony import */ var _NotificationGrid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./NotificationGrid */ "./src/core/forum/components/NotificationGrid.js");
/* harmony import */ var _ChangePasswordModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ChangePasswordModal */ "./src/core/forum/components/ChangePasswordModal.tsx");
/* harmony import */ var _ChangeEmailModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ChangeEmailModal */ "./src/core/forum/components/ChangeEmailModal.tsx");
/* harmony import */ var _common_helpers_listItems__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/helpers/listItems */ "./src/core/common/helpers/listItems.tsx");
/* harmony import */ var _common_utils_extractText__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/utils/extractText */ "./src/core/common/utils/extractText.ts");
/* harmony import */ var _common_utils_classList__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../common/utils/classList */ "./src/core/common/utils/classList.ts");
/* harmony import */ var _common_components_ThemeMode__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../common/components/ThemeMode */ "./src/core/common/components/ThemeMode.tsx");
/* harmony import */ var _common_utils_string__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../common/utils/string */ "./src/core/common/utils/string.ts");


var _excluded = ["className", "visible"];














/**
 * The `SettingsPage` component displays the user's settings control panel, in
 * the context of their user profile.
 */
var SettingsPage = /*#__PURE__*/function (_UserPage) {
  function SettingsPage() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _UserPage.call.apply(_UserPage, [this].concat(args)) || this;
    _this.discloseOnlineLoading = void 0;
    _this.colorSchemeLoading = void 0;
    return _this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(SettingsPage, _UserPage);
  var _proto = SettingsPage.prototype;
  _proto.oninit = function oninit(vnode) {
    _UserPage.prototype.oninit.call(this, vnode);
    this.show(_forum_app__WEBPACK_IMPORTED_MODULE_2__["default"].session.user);
    _forum_app__WEBPACK_IMPORTED_MODULE_2__["default"].setTitle((0,_common_utils_extractText__WEBPACK_IMPORTED_MODULE_12__["default"])(_forum_app__WEBPACK_IMPORTED_MODULE_2__["default"].translator.trans('core.forum.settings.title')));
  };
  _proto.content = function content() {
    return m("div", {
      className: "SettingsPage"
    }, m("ul", null, (0,_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_11__["default"])(this.settingsItems().toArray())));
  };
  _proto.sectionProps = function sectionProps() {
    return {
      account: {
        className: 'FieldSet--col'
      },
      colorScheme: {
        className: 'FieldSet--col',
        visible: function visible() {
          return _forum_app__WEBPACK_IMPORTED_MODULE_2__["default"].allowUserColorScheme;
        }
      }
    };
  }

  /**
   * Build an item list for the user's settings controls.
   */;
  _proto.settingsItems = function settingsItems() {
    var _this2 = this;
    var items = new _common_utils_ItemList__WEBPACK_IMPORTED_MODULE_4__["default"]();
    ['account', 'notifications', 'privacy', 'colorScheme'].forEach(function (section, index) {
      var sectionItems = section + "Items";
      var _ref = _this2.sectionProps()[section] || {},
        className = _ref.className,
        visible = _ref.visible,
        props = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, _excluded);
      if (visible && visible() === false) return;
      items.add(section, m(_common_components_FieldSet__WEBPACK_IMPORTED_MODULE_7__["default"], Object.assign({
        className: (0,_common_utils_classList__WEBPACK_IMPORTED_MODULE_13__["default"])("Settings-" + section + " FieldSet--min", className || ''),
        label: _forum_app__WEBPACK_IMPORTED_MODULE_2__["default"].translator.trans("core.forum.settings." + (0,_common_utils_string__WEBPACK_IMPORTED_MODULE_15__.camelCaseToSnakeCase)(section) + "_heading")
      }, props), _this2[sectionItems]().toArray()), 100 - index * 10);
    });
    return items;
  }

  /**
   * Build an item list for the user's account settings.
   */;
  _proto.accountItems = function accountItems() {
    var items = new _common_utils_ItemList__WEBPACK_IMPORTED_MODULE_4__["default"]();
    items.add('changePassword', m(_common_components_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: "Button",
      onclick: function onclick() {
        return _forum_app__WEBPACK_IMPORTED_MODULE_2__["default"].modal.show(_ChangePasswordModal__WEBPACK_IMPORTED_MODULE_9__["default"]);
      }
    }, _forum_app__WEBPACK_IMPORTED_MODULE_2__["default"].translator.trans('core.forum.settings.change_password_button')), 100);
    items.add('changeEmail', m(_common_components_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: "Button",
      onclick: function onclick() {
        return _forum_app__WEBPACK_IMPORTED_MODULE_2__["default"].modal.show(_ChangeEmailModal__WEBPACK_IMPORTED_MODULE_10__["default"]);
      }
    }, _forum_app__WEBPACK_IMPORTED_MODULE_2__["default"].translator.trans('core.forum.settings.change_email_button')), 90);
    return items;
  }

  /**
   * Build an item list for the user's notification settings.
   */;
  _proto.notificationsItems = function notificationsItems() {
    var items = new _common_utils_ItemList__WEBPACK_IMPORTED_MODULE_4__["default"]();
    items.add('notificationGrid', m(_NotificationGrid__WEBPACK_IMPORTED_MODULE_8__["default"], {
      user: this.user
    }), 100);
    return items;
  }

  /**
   * Build an item list for the user's privacy settings.
   */;
  _proto.privacyItems = function privacyItems() {
    var _preferences,
      _this3 = this;
    var items = new _common_utils_ItemList__WEBPACK_IMPORTED_MODULE_4__["default"]();
    items.add('discloseOnline', m(_common_components_Switch__WEBPACK_IMPORTED_MODULE_5__["default"], {
      state: (_preferences = this.user.preferences()) == null ? void 0 : _preferences.discloseOnline,
      onchange: function onchange(value) {
        _this3.discloseOnlineLoading = true;
        _this3.user.savePreferences({
          discloseOnline: value
        }).then(function () {
          _this3.discloseOnlineLoading = false;
          m.redraw();
        });
      },
      loading: this.discloseOnlineLoading
    }, _forum_app__WEBPACK_IMPORTED_MODULE_2__["default"].translator.trans('core.forum.settings.privacy_disclose_online_label')), 100);
    return items;
  }

  /**
   * Color schemes.
   */;
  _proto.colorSchemeItems = function colorSchemeItems() {
    var _this4 = this;
    var items = new _common_utils_ItemList__WEBPACK_IMPORTED_MODULE_4__["default"]();
    _common_components_ThemeMode__WEBPACK_IMPORTED_MODULE_14__["default"].colorSchemes.forEach(function (mode) {
      var _preferences2;
      items.add(mode.id, m(_common_components_ThemeMode__WEBPACK_IMPORTED_MODULE_14__["default"], {
        mode: mode.id,
        label: mode.label || _forum_app__WEBPACK_IMPORTED_MODULE_2__["default"].translator.trans('core.forum.settings.color_schemes.' + mode.id.replace('-', '_') + '_mode_label'),
        selected: ((_preferences2 = _this4.user.preferences()) == null ? void 0 : _preferences2.colorScheme) === mode.id,
        loading: _this4.colorSchemeLoading,
        onclick: function onclick() {
          _this4.colorSchemeLoading = true;
          _this4.user.savePreferences({
            colorScheme: mode.id
          }).then(function () {
            _this4.colorSchemeLoading = false;
            _forum_app__WEBPACK_IMPORTED_MODULE_2__["default"].setColorScheme(mode.id);
            m.redraw();
          });
        }
      }), 100);
    });
    return items;
  };
  return SettingsPage;
}(_UserPage__WEBPACK_IMPORTED_MODULE_3__["default"]);


/***/ })

}]);
//# sourceMappingURL=src_core_forum_components_SettingsPage_tsx.js.map