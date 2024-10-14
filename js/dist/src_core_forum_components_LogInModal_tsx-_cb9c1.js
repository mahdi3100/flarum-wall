"use strict";
(self["webpackChunkmodule_exports"] = self["webpackChunkmodule_exports"] || []).push([["src_core_forum_components_LogInModal_tsx-_cb9c1"],{

/***/ "./src/core/forum/components/ForgotPasswordModal.tsx":
/*!***********************************************************!*\
  !*** ./src/core/forum/components/ForgotPasswordModal.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ForgotPasswordModal)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../forum/app */ "./src/core/forum/app.ts");
/* harmony import */ var _common_components_FormModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/components/FormModal */ "./src/core/common/components/FormModal.tsx");
/* harmony import */ var _common_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/components/Button */ "./src/core/common/components/Button.tsx");
/* harmony import */ var _common_utils_extractText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/utils/extractText */ "./src/core/common/utils/extractText.ts");
/* harmony import */ var _common_utils_Stream__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/utils/Stream */ "./src/core/common/utils/Stream.ts");
/* harmony import */ var _common_utils_ItemList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/utils/ItemList */ "./src/core/common/utils/ItemList.ts");
/* harmony import */ var _common_components_Form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/components/Form */ "./src/core/common/components/Form.tsx");








/**
 * The `ForgotPasswordModal` component displays a modal which allows the user to
 * enter their email address and request a link to reset their password.
 */
var ForgotPasswordModal = /*#__PURE__*/function (_FormModal) {
  function ForgotPasswordModal() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _FormModal.call.apply(_FormModal, [this].concat(args)) || this;
    /**
     * The value of the email input.
     */
    _this.email = void 0;
    _this.success = false;
    return _this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(ForgotPasswordModal, _FormModal);
  var _proto = ForgotPasswordModal.prototype;
  _proto.oninit = function oninit(vnode) {
    _FormModal.prototype.oninit.call(this, vnode);
    this.email = (0,_common_utils_Stream__WEBPACK_IMPORTED_MODULE_5__["default"])(this.attrs.email || '');
  };
  _proto.className = function className() {
    return 'ForgotPasswordModal Modal--small';
  };
  _proto.title = function title() {
    return _forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].translator.trans('core.forum.forgot_password.title');
  };
  _proto.content = function content() {
    if (this.success) {
      return m("div", {
        className: "Modal-body"
      }, m(_common_components_Form__WEBPACK_IMPORTED_MODULE_7__["default"], {
        className: "Form--centered"
      }, m("p", {
        className: "helpText"
      }, _forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].translator.trans('core.forum.forgot_password.email_sent_message')), m("div", {
        className: "Form-group Form-controls"
      }, m(_common_components_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
        className: "Button Button--primary Button--block",
        onclick: this.hide.bind(this)
      }, _forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].translator.trans('core.forum.forgot_password.dismiss_button')))));
    }
    return m("div", {
      className: "Modal-body"
    }, m(_common_components_Form__WEBPACK_IMPORTED_MODULE_7__["default"], {
      className: "Form--centered",
      description: _forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].translator.trans('core.forum.forgot_password.text')
    }, this.fields().toArray()));
  };
  _proto.fields = function fields() {
    var items = new _common_utils_ItemList__WEBPACK_IMPORTED_MODULE_6__["default"]();
    var emailLabel = (0,_common_utils_extractText__WEBPACK_IMPORTED_MODULE_4__["default"])(_forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].translator.trans('core.forum.forgot_password.email_placeholder'));
    items.add('email', m("div", {
      className: "Form-group"
    }, m("input", {
      className: "FormControl",
      name: "email",
      type: "email",
      placeholder: emailLabel,
      "aria-label": emailLabel,
      bidi: this.email,
      disabled: this.loading
    })), 50);
    items.add('submit', m("div", {
      className: "Form-group Form-controls"
    }, m(_common_components_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: "Button Button--primary Button--block",
      type: "submit",
      loading: this.loading
    }, _forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].translator.trans('core.forum.forgot_password.submit_button'))), -10);
    return items;
  };
  _proto.onsubmit = function onsubmit(e) {
    var _this2 = this;
    e.preventDefault();
    this.loading = true;
    _forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].request({
      method: 'POST',
      url: _forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].forum.attribute('apiUrl') + '/forgot',
      body: this.requestParams(),
      errorHandler: this.onerror.bind(this)
    }).then(function () {
      _this2.success = true;
      _this2.alertAttrs = null;
    })["catch"](function () {}).then(this.loaded.bind(this));
  };
  _proto.requestParams = function requestParams() {
    var data = {
      email: this.email()
    };
    return data;
  };
  _proto.onerror = function onerror(error) {
    if (error.status === 404 && error.alert) {
      error.alert.content = _forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].translator.trans('core.forum.forgot_password.not_found_message');
    }
    _FormModal.prototype.onerror.call(this, error);
  };
  return ForgotPasswordModal;
}(_common_components_FormModal__WEBPACK_IMPORTED_MODULE_2__["default"]);


/***/ }),

/***/ "./src/core/forum/components/LogInModal.tsx":
/*!**************************************************!*\
  !*** ./src/core/forum/components/LogInModal.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LogInModal)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../forum/app */ "./src/core/forum/app.ts");
/* harmony import */ var _common_components_FormModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/components/FormModal */ "./src/core/common/components/FormModal.tsx");
/* harmony import */ var _common_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/components/Button */ "./src/core/common/components/Button.tsx");
/* harmony import */ var _LogInButtons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LogInButtons */ "./src/core/forum/components/LogInButtons.js");
/* harmony import */ var _common_utils_extractText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/utils/extractText */ "./src/core/common/utils/extractText.ts");
/* harmony import */ var _common_utils_ItemList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/utils/ItemList */ "./src/core/common/utils/ItemList.ts");
/* harmony import */ var _common_utils_Stream__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/utils/Stream */ "./src/core/common/utils/Stream.ts");
/* harmony import */ var _ForgotPasswordModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ForgotPasswordModal */ "./src/core/forum/components/ForgotPasswordModal.tsx");









var LogInModal = /*#__PURE__*/function (_FormModal) {
  function LogInModal() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _FormModal.call.apply(_FormModal, [this].concat(args)) || this;
    /**
     * The value of the identification input.
     */
    _this.identification = void 0;
    /**
     * The value of the password input.
     */
    _this.password = void 0;
    /**
     * The value of the remember me input.
     */
    _this.remember = void 0;
    return _this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(LogInModal, _FormModal);
  var _proto = LogInModal.prototype;
  _proto.oninit = function oninit(vnode) {
    _FormModal.prototype.oninit.call(this, vnode);
    this.identification = (0,_common_utils_Stream__WEBPACK_IMPORTED_MODULE_7__["default"])(this.attrs.identification || '');
    this.password = (0,_common_utils_Stream__WEBPACK_IMPORTED_MODULE_7__["default"])(this.attrs.password || '');
    this.remember = (0,_common_utils_Stream__WEBPACK_IMPORTED_MODULE_7__["default"])(!!this.attrs.remember);
  };
  _proto.className = function className() {
    return 'LogInModal Modal--small';
  };
  _proto.title = function title() {
    return _forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].translator.trans('core.forum.log_in.title');
  };
  _proto.content = function content() {
    return [m("div", {
      className: "Modal-body"
    }, this.body()), m("div", {
      className: "Modal-footer"
    }, this.footer())];
  };
  _proto.body = function body() {
    return [m(_LogInButtons__WEBPACK_IMPORTED_MODULE_4__["default"], null), m("div", {
      className: "Form Form--centered"
    }, this.fields().toArray())];
  };
  _proto.fields = function fields() {
    var items = new _common_utils_ItemList__WEBPACK_IMPORTED_MODULE_6__["default"]();
    var identificationLabel = (0,_common_utils_extractText__WEBPACK_IMPORTED_MODULE_5__["default"])(_forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].translator.trans('core.forum.log_in.username_or_email_placeholder'));
    var passwordLabel = (0,_common_utils_extractText__WEBPACK_IMPORTED_MODULE_5__["default"])(_forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].translator.trans('core.forum.log_in.password_placeholder'));
    items.add('identification', m("div", {
      className: "Form-group"
    }, m("input", {
      className: "FormControl",
      name: "identification",
      type: "text",
      placeholder: identificationLabel,
      "aria-label": identificationLabel,
      bidi: this.identification,
      disabled: this.loading
    })), 30);
    items.add('password', m("div", {
      className: "Form-group"
    }, m("input", {
      className: "FormControl",
      name: "password",
      type: "password",
      autocomplete: "current-password",
      placeholder: passwordLabel,
      "aria-label": passwordLabel,
      bidi: this.password,
      disabled: this.loading
    })), 20);
    items.add('remember', m("div", {
      className: "Form-group"
    }, m("div", null, m("label", {
      className: "checkbox"
    }, m("input", {
      type: "checkbox",
      bidi: this.remember,
      disabled: this.loading
    }), _forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].translator.trans('core.forum.log_in.remember_me_label')))), 10);
    items.add('submit', m("div", {
      className: "Form-group"
    }, m(_common_components_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: "Button Button--primary Button--block",
      type: "submit",
      loading: this.loading
    }, _forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].translator.trans('core.forum.log_in.submit_button'))), -10);
    return items;
  };
  _proto.footer = function footer() {
    return m('[', null, m("p", {
      className: "LogInModal-forgotPassword"
    }, m(_common_components_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: "Button Button--text Button--link",
      onclick: this.forgotPassword.bind(this)
    }, _forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].translator.trans('core.forum.log_in.forgot_password_link'))), _forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].forum.attribute('allowSignUp') && m("p", {
      className: "LogInModal-signUp"
    }, _forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].translator.trans('core.forum.log_in.sign_up_text', {
      a: m(_common_components_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
        className: "Button Button--text Button--link",
        onclick: this.signUp.bind(this)
      })
    })));
  }

  /**
   * Open the forgot password modal, prefilling it with an email if the user has
   * entered one.
   */;
  _proto.forgotPassword = function forgotPassword() {
    var email = this.identification();
    var attrs = email.includes('@') ? {
      email: email
    } : undefined;
    _forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].modal.show(_ForgotPasswordModal__WEBPACK_IMPORTED_MODULE_8__["default"], attrs);
  }

  /**
   * Open the sign up modal, prefilling it with an email/username/password if
   * the user has entered one.
   */;
  _proto.signUp = function signUp() {
    var _attrs;
    var identification = this.identification();
    var attrs = (_attrs = {}, _attrs[identification.includes('@') ? 'email' : 'username'] = identification, _attrs);
    _forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].modal.show(function () {
      return __webpack_require__.e(/*! import() */ "src_core_forum_components_SignUpModal_tsx-_c6e71").then(__webpack_require__.bind(__webpack_require__, /*! ./SignUpModal */ "./src/core/forum/components/SignUpModal.tsx"));
    }, attrs);
  };
  _proto.onready = function onready() {
    this.$('[name=' + (this.identification() ? 'password' : 'identification') + ']').trigger('select');
  };
  _proto.onsubmit = function onsubmit(e) {
    e.preventDefault();
    this.loading = true;
    _forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].session.login(this.loginParams(), {
      errorHandler: this.onerror.bind(this)
    }).then(function () {
      return window.location.reload();
    }, this.loaded.bind(this));
  };
  _proto.loginParams = function loginParams() {
    var data = {
      identification: this.identification(),
      password: this.password(),
      remember: this.remember()
    };
    return data;
  };
  _proto.onerror = function onerror(error) {
    if (error.status === 401 && error.alert) {
      error.alert.content = _forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].translator.trans('core.forum.log_in.invalid_login_message');
      this.password('');
    }
    _FormModal.prototype.onerror.call(this, error);
  };
  return LogInModal;
}(_common_components_FormModal__WEBPACK_IMPORTED_MODULE_2__["default"]);


/***/ })

}]);
//# sourceMappingURL=src_core_forum_components_LogInModal_tsx-_cb9c1.js.map