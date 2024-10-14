"use strict";
(self["webpackChunkmodule_exports"] = self["webpackChunkmodule_exports"] || []).push([["src_core_forum_components_UserSecurityPage_tsx"],{

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

/***/ "./src/core/common/components/LabelValue.tsx":
/*!***************************************************!*\
  !*** ./src/core/common/components/LabelValue.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LabelValue)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Component */ "./src/core/common/Component.ts");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app */ "./src/core/common/app.ts");



/**
 * A generic component for displaying a label and value inline.
 * Created to avoid reinventing the wheel.
 *
 * `label: value`
 */
var LabelValue = /*#__PURE__*/function (_Component) {
  function LabelValue() {
    return _Component.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(LabelValue, _Component);
  var _proto = LabelValue.prototype;
  _proto.view = function view(vnode) {
    return m("div", {
      className: "LabelValue"
    }, m("div", {
      className: "LabelValue-label"
    }, _app__WEBPACK_IMPORTED_MODULE_2__["default"].translator.trans('core.lib.data_segment.label', {
      label: this.attrs.label
    })), m("div", {
      className: "LabelValue-value"
    }, this.attrs.value));
  };
  return LabelValue;
}(_Component__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./src/core/forum/components/AccessTokensList.tsx":
/*!********************************************************!*\
  !*** ./src/core/forum/components/AccessTokensList.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AccessTokensList)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app */ "./src/core/forum/app.ts");
/* harmony import */ var _common_Component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/Component */ "./src/core/common/Component.ts");
/* harmony import */ var _common_components_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/components/Button */ "./src/core/common/components/Button.tsx");
/* harmony import */ var _common_helpers_humanTime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/helpers/humanTime */ "./src/core/common/helpers/humanTime.tsx");
/* harmony import */ var _common_utils_ItemList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/utils/ItemList */ "./src/core/common/utils/ItemList.ts");
/* harmony import */ var _common_components_LabelValue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/components/LabelValue */ "./src/core/common/components/LabelValue.tsx");
/* harmony import */ var _common_utils_extractText__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/utils/extractText */ "./src/core/common/utils/extractText.ts");
/* harmony import */ var _common_utils_classList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/utils/classList */ "./src/core/common/utils/classList.ts");
/* harmony import */ var _common_components_Tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/components/Tooltip */ "./src/core/common/components/Tooltip.tsx");
/* harmony import */ var _common_components_Icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/components/Icon */ "./src/core/common/components/Icon.tsx");













var AccessTokensList = /*#__PURE__*/function (_Component) {
  function AccessTokensList() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.loading = {};
    _this.showingTokens = {};
    return _this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(AccessTokensList, _Component);
  var _proto = AccessTokensList.prototype;
  _proto.view = function view(vnode) {
    return m("div", {
      className: "AccessTokensList"
    }, this.attrs.tokens.length ? this.attrs.tokens.map(this.tokenView.bind(this)) : m("div", {
      className: "AccessTokensList--empty"
    }, _app__WEBPACK_IMPORTED_MODULE_3__["default"].translator.trans('core.forum.security.empty_text')));
  };
  _proto.tokenView = function tokenView(token) {
    return m("div", {
      className: (0,_common_utils_classList__WEBPACK_IMPORTED_MODULE_10__["default"])('AccessTokensList-item', {
        'AccessTokensList-item--active': token.isCurrent()
      }),
      key: token.id()
    }, this.tokenViewItems(token).toArray());
  };
  _proto.tokenViewItems = function tokenViewItems(token) {
    var items = new _common_utils_ItemList__WEBPACK_IMPORTED_MODULE_7__["default"]();
    items.add('icon', m("div", {
      className: "AccessTokensList-item-icon"
    }, m(_common_components_Icon__WEBPACK_IMPORTED_MODULE_12__["default"], {
      name: this.attrs.icon || 'fas fa-key'
    })), 50);
    items.add('info', m("div", {
      className: "AccessTokensList-item-info"
    }, this.tokenInfoItems(token).toArray()), 40);
    items.add('actions', m("div", {
      className: "AccessTokensList-item-actions"
    }, this.tokenActionItems(token).toArray()), 30);
    return items;
  };
  _proto.tokenInfoItems = function tokenInfoItems(token) {
    var items = new _common_utils_ItemList__WEBPACK_IMPORTED_MODULE_7__["default"]();
    if (this.attrs.type === 'session') {
      items.add('title', m("div", {
        className: "AccessTokensList-item-title"
      }, m("span", {
        className: "AccessTokensList-item-title-main"
      }, token.device()), token.isCurrent() && [' — ', m("span", {
        className: "AccessTokensList-item-title-sub"
      }, _app__WEBPACK_IMPORTED_MODULE_3__["default"].translator.trans('core.forum.security.current_active_session'))]));
    } else {
      items.add('title', m("div", {
        className: "AccessTokensList-item-title"
      }, m("span", {
        className: "AccessTokensList-item-title-main"
      }, this.generateTokenTitle(token))));
    }
    items.add('createdAt', m("div", {
      className: "AccessTokensList-item-createdAt"
    }, m(_common_components_LabelValue__WEBPACK_IMPORTED_MODULE_8__["default"], {
      label: _app__WEBPACK_IMPORTED_MODULE_3__["default"].translator.trans('core.forum.security.created'),
      value: (0,_common_helpers_humanTime__WEBPACK_IMPORTED_MODULE_6__["default"])(token.createdAt())
    })));
    items.add('lastActivityAt', m("div", {
      className: "AccessTokensList-item-lastActivityAt"
    }, m(_common_components_LabelValue__WEBPACK_IMPORTED_MODULE_8__["default"], {
      label: _app__WEBPACK_IMPORTED_MODULE_3__["default"].translator.trans('core.forum.security.last_activity'),
      value: token.lastActivityAt() ? m('[', null, (0,_common_helpers_humanTime__WEBPACK_IMPORTED_MODULE_6__["default"])(token.lastActivityAt()), token.lastIpAddress() && " \u2014 " + token.lastIpAddress(), this.attrs.type === 'developer_token' && token.device() && m('[', null, ' ', "\u2014 ", m("span", {
        className: "AccessTokensList-item-title-sub"
      }, token.device()))) : _app__WEBPACK_IMPORTED_MODULE_3__["default"].translator.trans('core.forum.security.never')
    })));
    return items;
  };
  _proto.tokenActionItems = function tokenActionItems(token) {
    var _this2 = this;
    var items = new _common_utils_ItemList__WEBPACK_IMPORTED_MODULE_7__["default"]();
    var deleteKey = {
      session: 'terminate_session',
      developer_token: 'revoke_access_token'
    }[this.attrs.type];
    if (this.attrs.type === 'developer_token') {
      var isHidden = !this.showingTokens[token.id()];
      var displayKey = isHidden ? 'show_access_token' : 'hide_access_token';
      items.add('toggleDisplay', m(_common_components_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: "Button Button--inverted",
        icon: isHidden ? 'fas fa-eye' : 'fas fa-eye-slash',
        onclick: function onclick() {
          _this2.showingTokens[token.id()] = isHidden;
          m.redraw();
        }
      }, _app__WEBPACK_IMPORTED_MODULE_3__["default"].translator.trans("core.forum.security." + displayKey)));
    }
    var revokeButton = m(_common_components_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: "Button Button--danger",
      disabled: token.isCurrent(),
      loading: !!this.loading[token.id()],
      onclick: function onclick() {
        return _this2.revoke(token);
      }
    }, _app__WEBPACK_IMPORTED_MODULE_3__["default"].translator.trans("core.forum.security." + deleteKey));
    if (token.isCurrent()) {
      revokeButton = m(_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_11__["default"], {
        text: _app__WEBPACK_IMPORTED_MODULE_3__["default"].translator.trans('core.forum.security.cannot_terminate_current_session')
      }, m("div", {
        tabindex: "0"
      }, revokeButton));
    }
    items.add('revoke', revokeButton);
    return items;
  };
  _proto.revoke = /*#__PURE__*/function () {
    var _revoke = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(token) {
      var _this$attrs$ondelete, _this$attrs;
      var key;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (confirm((0,_common_utils_extractText__WEBPACK_IMPORTED_MODULE_9__["default"])(_app__WEBPACK_IMPORTED_MODULE_3__["default"].translator.trans('core.forum.security.revoke_access_token_confirmation')))) {
              _context.next = 2;
              break;
            }
            return _context.abrupt("return");
          case 2:
            this.loading[token.id()] = true;
            _context.next = 5;
            return token["delete"]();
          case 5:
            this.loading[token.id()] = false;
            (_this$attrs$ondelete = (_this$attrs = this.attrs).ondelete) == null || _this$attrs$ondelete.call(_this$attrs, token);
            key = this.attrs.type === 'session' ? 'session_terminated' : 'token_revoked';
            _app__WEBPACK_IMPORTED_MODULE_3__["default"].alerts.show({
              type: 'success'
            }, _app__WEBPACK_IMPORTED_MODULE_3__["default"].translator.trans("core.forum.security." + key, {
              count: 1
            }));
            m.redraw();
          case 10:
          case "end":
            return _context.stop();
        }
      }, _callee, this);
    }));
    function revoke(_x) {
      return _revoke.apply(this, arguments);
    }
    return revoke;
  }();
  _proto.generateTokenTitle = function generateTokenTitle(token) {
    var name = token.title() || _app__WEBPACK_IMPORTED_MODULE_3__["default"].translator.trans('core.forum.security.token_title_placeholder');
    var value = this.tokenValueDisplay(token);
    return _app__WEBPACK_IMPORTED_MODULE_3__["default"].translator.trans('core.forum.security.token_item_title', {
      title: name,
      token: value
    });
  };
  _proto.tokenValueDisplay = function tokenValueDisplay(token) {
    var obfuscatedName = Array(12).fill('*').join('');
    var value = this.showingTokens[token.id()] ? token.token() : obfuscatedName;
    return m("code", {
      className: "AccessTokensList-item-token"
    }, value);
  };
  return AccessTokensList;
}(_common_Component__WEBPACK_IMPORTED_MODULE_4__["default"]);


/***/ }),

/***/ "./src/core/forum/components/NewAccessTokenModal.tsx":
/*!***********************************************************!*\
  !*** ./src/core/forum/components/NewAccessTokenModal.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NewAccessTokenModal)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app */ "./src/core/forum/app.ts");
/* harmony import */ var _common_components_FormModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/components/FormModal */ "./src/core/common/components/FormModal.tsx");
/* harmony import */ var _common_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/components/Button */ "./src/core/common/components/Button.tsx");
/* harmony import */ var _common_utils_Stream__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/utils/Stream */ "./src/core/common/utils/Stream.ts");
/* harmony import */ var _common_components_Form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/components/Form */ "./src/core/common/components/Form.tsx");






var NewAccessTokenModal = /*#__PURE__*/function (_FormModal) {
  function NewAccessTokenModal() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _FormModal.call.apply(_FormModal, [this].concat(args)) || this;
    _this.titleInput = (0,_common_utils_Stream__WEBPACK_IMPORTED_MODULE_4__["default"])('');
    return _this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(NewAccessTokenModal, _FormModal);
  var _proto = NewAccessTokenModal.prototype;
  _proto.className = function className() {
    return 'Modal--small NewAccessTokenModal';
  };
  _proto.title = function title() {
    return _app__WEBPACK_IMPORTED_MODULE_1__["default"].translator.trans('core.forum.security.new_access_token_modal.title');
  };
  _proto.content = function content() {
    var titleLabel = _app__WEBPACK_IMPORTED_MODULE_1__["default"].translator.trans('core.forum.security.new_access_token_modal.title_placeholder');
    return m("div", {
      className: "Modal-body"
    }, m(_common_components_Form__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: "Form--centered"
    }, m("div", {
      className: "Form-group"
    }, m("input", {
      type: "text",
      className: "FormControl",
      bidi: this.titleInput,
      placeholder: titleLabel,
      "aria-label": titleLabel
    })), m("div", {
      className: "Form-group Form-controls"
    }, m(_common_components_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: "Button Button--primary Button--block",
      type: "submit",
      loading: this.loading
    }, _app__WEBPACK_IMPORTED_MODULE_1__["default"].translator.trans('core.forum.security.new_access_token_modal.submit_button')))));
  };
  _proto.submitData = function submitData() {
    return {
      title: this.titleInput()
    };
  };
  _proto.onsubmit = function onsubmit(e) {
    var _this2 = this;
    _FormModal.prototype.onsubmit.call(this, e);
    e.preventDefault();
    this.loading = true;
    _app__WEBPACK_IMPORTED_MODULE_1__["default"].store.createRecord('access-tokens').save(this.submitData()).then(function (token) {
      _this2.attrs.onsuccess(token);
      _app__WEBPACK_IMPORTED_MODULE_1__["default"].modal.close();
    })["finally"](this.loaded.bind(this));
  };
  return NewAccessTokenModal;
}(_common_components_FormModal__WEBPACK_IMPORTED_MODULE_2__["default"]);


/***/ }),

/***/ "./src/core/forum/components/UserSecurityPage.tsx":
/*!********************************************************!*\
  !*** ./src/core/forum/components/UserSecurityPage.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserSecurityPage)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../forum/app */ "./src/core/forum/app.ts");
/* harmony import */ var _UserPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserPage */ "./src/core/forum/components/UserPage.tsx");
/* harmony import */ var _common_utils_ItemList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/utils/ItemList */ "./src/core/common/utils/ItemList.ts");
/* harmony import */ var _common_components_FieldSet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/components/FieldSet */ "./src/core/common/components/FieldSet.tsx");
/* harmony import */ var _common_helpers_listItems__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/helpers/listItems */ "./src/core/common/helpers/listItems.tsx");
/* harmony import */ var _common_utils_extractText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/utils/extractText */ "./src/core/common/utils/extractText.ts");
/* harmony import */ var _AccessTokensList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AccessTokensList */ "./src/core/forum/components/AccessTokensList.tsx");
/* harmony import */ var _common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/components/LoadingIndicator */ "./src/core/common/components/LoadingIndicator.tsx");
/* harmony import */ var _common_components_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/components/Button */ "./src/core/common/components/Button.tsx");
/* harmony import */ var _NewAccessTokenModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./NewAccessTokenModal */ "./src/core/forum/components/NewAccessTokenModal.tsx");
/* harmony import */ var _common_components_Tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/components/Tooltip */ "./src/core/common/components/Tooltip.tsx");
/* harmony import */ var _states_UserSecurityPageState__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../states/UserSecurityPageState */ "./src/core/forum/states/UserSecurityPageState.ts");














/**
 * The `UserSecurityPage` component displays the user's security control panel, in
 * the context of their user profile.
 */
var UserSecurityPage = /*#__PURE__*/function (_UserPage) {
  function UserSecurityPage() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _UserPage.call.apply(_UserPage, [this].concat(args)) || this;
    _this.state = new _states_UserSecurityPageState__WEBPACK_IMPORTED_MODULE_12__["default"]();
    return _this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(UserSecurityPage, _UserPage);
  var _proto = UserSecurityPage.prototype;
  _proto.oninit = function oninit(vnode) {
    var _app$session$user;
    _UserPage.prototype.oninit.call(this, vnode);
    var routeUsername = m.route.param('username');
    if (routeUsername !== ((_app$session$user = _forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].session.user) == null ? void 0 : _app$session$user.slug()) && !_forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].forum.attribute('canModerateAccessTokens')) {
      m.route.set('/');
    }
    this.loadUser(routeUsername);
    _forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].setTitle((0,_common_utils_extractText__WEBPACK_IMPORTED_MODULE_6__["default"])(_forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].translator.trans('core.forum.security.title')));
    this.loadTokens();
  };
  _proto.content = function content() {
    return m("div", {
      className: "UserSecurityPage"
    }, m("ul", null, (0,_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_5__["default"])(this.settingsItems().toArray())));
  }

  /**
   * Build an item list for the user's settings controls.
   */;
  _proto.settingsItems = function settingsItems() {
    var _this$state$getDevelo;
    var items = new _common_utils_ItemList__WEBPACK_IMPORTED_MODULE_3__["default"]();
    if (_forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].forum.attribute('canCreateAccessToken') || _forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].forum.attribute('canModerateAccessTokens') || this.state.hasLoadedTokens() && (_this$state$getDevelo = this.state.getDeveloperTokens()) != null && _this$state$getDevelo.length) {
      items.add('developerTokens', m(_common_components_FieldSet__WEBPACK_IMPORTED_MODULE_4__["default"], {
        className: "UserSecurityPage-developerTokens",
        label: _forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].translator.trans("core.forum.security.developer_tokens_heading")
      }, this.developerTokensItems().toArray()));
    } else if (!this.state.hasLoadedTokens()) {
      items.add('developerTokens', m(_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_8__["default"], null));
    }
    items.add('sessions', m(_common_components_FieldSet__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: "UserSecurityPage-sessions",
      label: _forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].translator.trans("core.forum.security.sessions_heading")
    }, this.sessionsItems().toArray()));
    if (this.user.id() === _forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].session.user.id()) {
      items.add('globalLogout', m(_common_components_FieldSet__WEBPACK_IMPORTED_MODULE_4__["default"], {
        className: "FieldSet--col UserSecurityPage-globalLogout",
        label: _forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].translator.trans('core.forum.security.global_logout.heading'),
        description: _forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].translator.trans('core.forum.security.global_logout.help_text')
      }, m(_common_components_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
        className: "Button",
        icon: "fas fa-sign-out-alt",
        onclick: this.globalLogout.bind(this),
        loading: this.state.loadingGlobalLogout,
        disabled: this.state.loadingTerminateSessions
      }, _forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].translator.trans('core.forum.security.global_logout.log_out_button'))));
    }
    return items;
  }

  /**
   * Build an item list for the user's access accessToken settings.
   */;
  _proto.developerTokensItems = function developerTokensItems() {
    var _this2 = this;
    var items = new _common_utils_ItemList__WEBPACK_IMPORTED_MODULE_3__["default"]();
    items.add('accessTokenList', !this.state.hasLoadedTokens() ? m(_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_8__["default"], null) : m(_AccessTokensList__WEBPACK_IMPORTED_MODULE_7__["default"], {
      type: "developer_token",
      ondelete: function ondelete(token) {
        _this2.state.removeToken(token);
        m.redraw();
      },
      tokens: this.state.getDeveloperTokens(),
      icon: "fas fa-key",
      hideTokens: false
    }));
    if (this.user.id() === _forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].session.user.id()) {
      items.add('newAccessToken', m("div", {
        className: "UserSecurityPage-controls"
      }, m(_common_components_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
        className: "Button",
        disabled: !_forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].forum.attribute('canCreateAccessToken'),
        onclick: function onclick() {
          return _forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].modal.show(_NewAccessTokenModal__WEBPACK_IMPORTED_MODULE_10__["default"], {
            onsuccess: function onsuccess(token) {
              _this2.state.pushToken(token);
              m.redraw();
            }
          });
        }
      }, _forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].translator.trans('core.forum.security.new_access_token_button'))));
    }
    return items;
  }

  /**
   * Build an item list for the user's access accessToken settings.
   */;
  _proto.sessionsItems = function sessionsItems() {
    var _this3 = this;
    var items = new _common_utils_ItemList__WEBPACK_IMPORTED_MODULE_3__["default"]();
    items.add('sessionsList', !this.state.hasLoadedTokens() ? m(_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_8__["default"], null) : m(_AccessTokensList__WEBPACK_IMPORTED_MODULE_7__["default"], {
      type: "session",
      ondelete: function ondelete(token) {
        _this3.state.removeToken(token);
        m.redraw();
      },
      tokens: this.state.getSessionTokens(),
      icon: "fas fa-laptop",
      hideTokens: true
    }));
    if (this.user.id() === _forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].session.user.id()) {
      var isDisabled = !this.state.hasOtherActiveSessions();
      var terminateAllOthersButton = m(_common_components_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
        className: "Button",
        onclick: this.terminateAllOtherSessions.bind(this),
        loading: this.state.loadingTerminateSessions,
        disabled: this.state.loadingGlobalLogout || isDisabled
      }, _forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].translator.trans('core.forum.security.terminate_all_other_sessions'));
      if (isDisabled) {
        terminateAllOthersButton = m(_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_11__["default"], {
          text: _forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].translator.trans('core.forum.security.cannot_terminate_current_session')
        }, m("span", {
          tabindex: "0"
        }, terminateAllOthersButton));
      }
      items.add('terminateAllOtherSessions', m("div", {
        className: "UserSecurityPage-controls"
      }, terminateAllOthersButton));
    }
    return items;
  };
  _proto.loadTokens = function loadTokens() {
    var _this4 = this;
    return _forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].store.find('access-tokens', {
      filter: {
        user: this.user.id()
      }
    }).then(function (tokens) {
      _this4.state.setTokens(tokens);
      m.redraw();
    });
  };
  _proto.terminateAllOtherSessions = function terminateAllOtherSessions() {
    var _this5 = this;
    if (!confirm((0,_common_utils_extractText__WEBPACK_IMPORTED_MODULE_6__["default"])(_forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].translator.trans('core.forum.security.terminate_all_other_sessions_confirmation')))) return;
    this.state.loadingTerminateSessions = true;
    return _forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].request({
      method: 'DELETE',
      url: _forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].forum.attribute('apiUrl') + '/sessions'
    }).then(function () {
      // Count terminated sessions first.
      var count = _this5.state.getOtherSessionTokens().length;
      _this5.state.removeOtherSessionTokens();
      _forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].alerts.show({
        type: 'success'
      }, _forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].translator.trans('core.forum.security.session_terminated', {
        count: count
      }));
    })["catch"](function () {
      _forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].alerts.show({
        type: 'error'
      }, _forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].translator.trans('core.forum.security.session_termination_failed'));
    })["finally"](function () {
      _this5.state.loadingTerminateSessions = false;
      m.redraw();
    });
  };
  _proto.globalLogout = function globalLogout() {
    var _this6 = this;
    this.state.loadingGlobalLogout = true;
    return _forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].request({
      method: 'POST',
      url: _forum_app__WEBPACK_IMPORTED_MODULE_1__["default"].forum.attribute('baseUrl') + '/global-logout'
    }).then(function () {
      return window.location.reload();
    })["finally"](function () {
      _this6.state.loadingGlobalLogout = false;
      m.redraw();
    });
  };
  return UserSecurityPage;
}(_UserPage__WEBPACK_IMPORTED_MODULE_2__["default"]);


/***/ }),

/***/ "./src/core/forum/states/UserSecurityPageState.ts":
/*!********************************************************!*\
  !*** ./src/core/forum/states/UserSecurityPageState.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserSecurityPageState)
/* harmony export */ });
var UserSecurityPageState = /*#__PURE__*/function () {
  function UserSecurityPageState() {
    this.tokens = null;
    this.loadingTerminateSessions = false;
    this.loadingGlobalLogout = false;
  }
  var _proto = UserSecurityPageState.prototype;
  _proto.hasLoadedTokens = function hasLoadedTokens() {
    return this.tokens !== null;
  };
  _proto.getTokens = function getTokens() {
    return this.tokens;
  };
  _proto.setTokens = function setTokens(tokens) {
    this.tokens = tokens;
  };
  _proto.pushToken = function pushToken(token) {
    var _this$tokens;
    (_this$tokens = this.tokens) == null || _this$tokens.push(token);
  };
  _proto.removeToken = function removeToken(token) {
    this.tokens = this.tokens.filter(function (t) {
      return t !== token;
    });
  };
  _proto.getSessionTokens = function getSessionTokens() {
    var _this$tokens2;
    return ((_this$tokens2 = this.tokens) == null ? void 0 : _this$tokens2.filter(function (token) {
      return token.isSessionToken();
    }).sort(function (a, b) {
      return b.isCurrent() ? 1 : -1;
    })) || [];
  };
  _proto.getDeveloperTokens = function getDeveloperTokens() {
    var _this$tokens3;
    return ((_this$tokens3 = this.tokens) == null ? void 0 : _this$tokens3.filter(function (token) {
      return !token.isSessionToken();
    })) || null;
  }

  /**
   * Look up session tokens other than the current one.
   */;
  _proto.getOtherSessionTokens = function getOtherSessionTokens() {
    var _this$tokens4;
    return ((_this$tokens4 = this.tokens) == null ? void 0 : _this$tokens4.filter(function (token) {
      return token.isSessionToken() && !token.isCurrent();
    })) || [];
  };
  _proto.hasOtherActiveSessions = function hasOtherActiveSessions() {
    return (this.getOtherSessionTokens() || []).length > 0;
  };
  _proto.removeOtherSessionTokens = function removeOtherSessionTokens() {
    this.tokens = this.tokens.filter(function (token) {
      return !token.isSessionToken() || token.isCurrent();
    });
  };
  return UserSecurityPageState;
}();


/***/ })

}]);
//# sourceMappingURL=src_core_forum_components_UserSecurityPage_tsx.js.map