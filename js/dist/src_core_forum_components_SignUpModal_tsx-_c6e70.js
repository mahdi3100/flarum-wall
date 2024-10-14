"use strict";
(self["webpackChunkmodule_exports"] = self["webpackChunkmodule_exports"] || []).push([["src_core_forum_components_SignUpModal_tsx-_c6e70"],{

/***/ "./src/core/forum/components/LogInButtons.js":
/*!***************************************************!*\
  !*** ./src/core/forum/components/LogInButtons.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LogInButtons)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/Component */ "./src/core/common/Component.ts");
/* harmony import */ var _common_utils_ItemList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/utils/ItemList */ "./src/core/common/utils/ItemList.ts");




/**
 * The `LogInButtons` component displays a collection of social login buttons.
 */
var LogInButtons = /*#__PURE__*/function (_Component) {
  function LogInButtons() {
    return _Component.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(LogInButtons, _Component);
  var _proto = LogInButtons.prototype;
  _proto.view = function view() {
    return m("div", {
      className: "LogInButtons"
    }, this.items().toArray());
  }

  /**
   * Build a list of LogInButton components.
   *
   * @return {ItemList<import('mithril').Children>}
   */;
  _proto.items = function items() {
    return new _common_utils_ItemList__WEBPACK_IMPORTED_MODULE_2__["default"]();
  };
  return LogInButtons;
}(_common_Component__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./src/core/forum/components/SignUpModal.tsx":
/*!***************************************************!*\
  !*** ./src/core/forum/components/SignUpModal.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SignUpModal)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _forum_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../forum/app */ "./src/core/forum/app.ts");
/* harmony import */ var _common_components_FormModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/components/FormModal */ "./src/core/common/components/FormModal.tsx");
/* harmony import */ var _common_components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/components/Button */ "./src/core/common/components/Button.tsx");
/* harmony import */ var _LogInButtons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LogInButtons */ "./src/core/forum/components/LogInButtons.js");
/* harmony import */ var _common_utils_extractText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/utils/extractText */ "./src/core/common/utils/extractText.ts");
/* harmony import */ var _common_utils_ItemList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/utils/ItemList */ "./src/core/common/utils/ItemList.ts");
/* harmony import */ var _common_utils_Stream__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/utils/Stream */ "./src/core/common/utils/Stream.ts");









var SignUpModal = /*#__PURE__*/function (_FormModal) {
  function SignUpModal() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _FormModal.call.apply(_FormModal, [this].concat(args)) || this;
    /**
     * The value of the username input.
     */
    _this.username = void 0;
    /**
     * The value of the email input.
     */
    _this.email = void 0;
    /**
     * The value of the password input.
     */
    _this.password = void 0;
    return _this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(SignUpModal, _FormModal);
  var _proto = SignUpModal.prototype;
  _proto.oninit = function oninit(vnode) {
    _FormModal.prototype.oninit.call(this, vnode);
    this.username = (0,_common_utils_Stream__WEBPACK_IMPORTED_MODULE_8__["default"])(this.attrs.username || '');
    this.email = (0,_common_utils_Stream__WEBPACK_IMPORTED_MODULE_8__["default"])(this.attrs.email || '');
    this.password = (0,_common_utils_Stream__WEBPACK_IMPORTED_MODULE_8__["default"])(this.attrs.password || '');
  };
  _proto.className = function className() {
    return 'Modal--small SignUpModal';
  };
  _proto.title = function title() {
    return _forum_app__WEBPACK_IMPORTED_MODULE_2__["default"].translator.trans('core.forum.sign_up.title');
  };
  _proto.content = function content() {
    return [m("div", {
      className: "Modal-body"
    }, this.body()), m("div", {
      className: "Modal-footer"
    }, this.footer())];
  };
  _proto.isProvided = function isProvided(field) {
    var _this$attrs$provided$, _this$attrs$provided;
    return (_this$attrs$provided$ = (_this$attrs$provided = this.attrs.provided) == null ? void 0 : _this$attrs$provided.includes(field)) != null ? _this$attrs$provided$ : false;
  };
  _proto.body = function body() {
    return [!this.attrs.token && m(_LogInButtons__WEBPACK_IMPORTED_MODULE_5__["default"], null), m("div", {
      className: "Form Form--centered"
    }, this.fields().toArray())];
  };
  _proto.fields = function fields() {
    var items = new _common_utils_ItemList__WEBPACK_IMPORTED_MODULE_7__["default"]();
    var usernameLabel = (0,_common_utils_extractText__WEBPACK_IMPORTED_MODULE_6__["default"])(_forum_app__WEBPACK_IMPORTED_MODULE_2__["default"].translator.trans('core.forum.sign_up.username_placeholder'));
    var emailLabel = (0,_common_utils_extractText__WEBPACK_IMPORTED_MODULE_6__["default"])(_forum_app__WEBPACK_IMPORTED_MODULE_2__["default"].translator.trans('core.forum.sign_up.email_placeholder'));
    var passwordLabel = (0,_common_utils_extractText__WEBPACK_IMPORTED_MODULE_6__["default"])(_forum_app__WEBPACK_IMPORTED_MODULE_2__["default"].translator.trans('core.forum.sign_up.password_placeholder'));
    items.add('username', m("div", {
      className: "Form-group"
    }, m("input", {
      className: "FormControl",
      name: "username",
      type: "text",
      placeholder: usernameLabel,
      "aria-label": usernameLabel,
      bidi: this.username,
      disabled: this.loading || this.isProvided('username')
    })), 30);
    items.add('email', m("div", {
      className: "Form-group"
    }, m("input", {
      className: "FormControl",
      name: "email",
      type: "email",
      placeholder: emailLabel,
      "aria-label": emailLabel,
      bidi: this.email,
      disabled: this.loading || this.isProvided('email')
    })), 20);
    if (!this.attrs.token) {
      items.add('password', m("div", {
        className: "Form-group"
      }, m("input", {
        className: "FormControl",
        name: "password",
        type: "password",
        autocomplete: "new-password",
        placeholder: passwordLabel,
        "aria-label": passwordLabel,
        bidi: this.password,
        disabled: this.loading
      })), 10);
    }
    items.add('submit', m("div", {
      className: "Form-group"
    }, m(_common_components_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: "Button Button--primary Button--block",
      type: "submit",
      loading: this.loading
    }, _forum_app__WEBPACK_IMPORTED_MODULE_2__["default"].translator.trans('core.forum.sign_up.submit_button'))), -10);
    return items;
  };
  _proto.footer = function footer() {
    return [m("p", {
      className: "SignUpModal-logIn"
    }, _forum_app__WEBPACK_IMPORTED_MODULE_2__["default"].translator.trans('core.forum.sign_up.log_in_text', {
      a: m(_common_components_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
        className: "Button Button--text Button--link",
        onclick: this.logIn.bind(this)
      })
    }))];
  }

  /**
   * Open the log in modal, prefilling it with an email/username/password if
   * the user has entered one.
   */;
  _proto.logIn = function logIn() {
    var attrs = {
      identification: this.email() || this.username()
    };
    _forum_app__WEBPACK_IMPORTED_MODULE_2__["default"].modal.show(function () {
      return __webpack_require__.e(/*! import() */ "src_core_forum_components_LogInModal_tsx-_cb9c1").then(__webpack_require__.bind(__webpack_require__, /*! ./LogInModal */ "./src/core/forum/components/LogInModal.tsx"));
    }, attrs);
  };
  _proto.onready = function onready() {
    if (this.attrs.username && !this.attrs.email) {
      this.$('[name=email]').select();
    } else {
      this.$('[name=username]').select();
    }
  };
  _proto.onsubmit = function onsubmit(e) {
    e.preventDefault();
    this.loading = true;
    var body = this.submitData();
    _forum_app__WEBPACK_IMPORTED_MODULE_2__["default"].request({
      url: _forum_app__WEBPACK_IMPORTED_MODULE_2__["default"].forum.attribute('baseUrl') + '/register',
      method: 'POST',
      body: body,
      errorHandler: this.onerror.bind(this)
    }).then(function () {
      return window.location.reload();
    }, this.loaded.bind(this));
  }

  /**
   * Get the data that should be submitted in the sign-up request.
   */;
  _proto.submitData = function submitData() {
    var authData = this.attrs.token ? {
      token: this.attrs.token
    } : {
      password: this.password()
    };
    var data = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      username: this.username(),
      email: this.email()
    }, authData);
    return data;
  };
  return SignUpModal;
}(_common_components_FormModal__WEBPACK_IMPORTED_MODULE_3__["default"]);


/***/ })

}]);
//# sourceMappingURL=src_core_forum_components_SignUpModal_tsx-_c6e70.js.map