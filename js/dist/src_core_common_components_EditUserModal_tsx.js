"use strict";
(self["webpackChunkmodule_exports"] = self["webpackChunkmodule_exports"] || []).push([["src_core_common_components_EditUserModal_tsx"],{

/***/ "./src/core/common/components/EditUserModal.tsx":
/*!******************************************************!*\
  !*** ./src/core/common/components/EditUserModal.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EditUserModal)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/readOnlyError */ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _common_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/app */ "./src/core/common/app.ts");
/* harmony import */ var _common_components_FormModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/components/FormModal */ "./src/core/common/components/FormModal.tsx");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Button */ "./src/core/common/components/Button.tsx");
/* harmony import */ var _GroupBadge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./GroupBadge */ "./src/core/common/components/GroupBadge.tsx");
/* harmony import */ var _models_Group__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/Group */ "./src/core/common/models/Group.ts");
/* harmony import */ var _utils_extractText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/extractText */ "./src/core/common/utils/extractText.ts");
/* harmony import */ var _utils_ItemList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/ItemList */ "./src/core/common/utils/ItemList.ts");
/* harmony import */ var _utils_Stream__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/Stream */ "./src/core/common/utils/Stream.ts");
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Form */ "./src/core/common/components/Form.tsx");











var EditUserModal = /*#__PURE__*/function (_FormModal) {
  function EditUserModal() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _FormModal.call.apply(_FormModal, [this].concat(args)) || this;
    _this.username = void 0;
    _this.email = void 0;
    _this.isEmailConfirmed = void 0;
    _this.setPassword = void 0;
    _this.password = void 0;
    _this.groups = {};
    return _this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(EditUserModal, _FormModal);
  var _proto = EditUserModal.prototype;
  _proto.oninit = function oninit(vnode) {
    var _this2 = this;
    _FormModal.prototype.oninit.call(this, vnode);
    var user = this.attrs.user;
    this.username = (0,_utils_Stream__WEBPACK_IMPORTED_MODULE_9__["default"])(user.username() || '');
    this.email = (0,_utils_Stream__WEBPACK_IMPORTED_MODULE_9__["default"])(user.email() || '');
    this.isEmailConfirmed = (0,_utils_Stream__WEBPACK_IMPORTED_MODULE_9__["default"])(user.isEmailConfirmed() || false);
    this.setPassword = (0,_utils_Stream__WEBPACK_IMPORTED_MODULE_9__["default"])(false);
    this.password = (0,_utils_Stream__WEBPACK_IMPORTED_MODULE_9__["default"])(user.password() || '');
    var userGroups = user.groups() || [];
    _common_app__WEBPACK_IMPORTED_MODULE_2__["default"].store.all('groups').filter(function (group) {
      return ![_models_Group__WEBPACK_IMPORTED_MODULE_6__["default"].GUEST_ID, _models_Group__WEBPACK_IMPORTED_MODULE_6__["default"].MEMBER_ID].includes(group.id());
    }).forEach(function (group) {
      return _this2.groups[group.id()] = (0,_utils_Stream__WEBPACK_IMPORTED_MODULE_9__["default"])(userGroups.includes(group));
    });
  };
  _proto.className = function className() {
    return 'EditUserModal Modal--small';
  };
  _proto.title = function title() {
    return _common_app__WEBPACK_IMPORTED_MODULE_2__["default"].translator.trans('core.lib.edit_user.title');
  };
  _proto.content = function content() {
    var fields = this.fields().toArray();
    return m("div", {
      className: "Modal-body"
    }, fields.length > 1 ? m(_Form__WEBPACK_IMPORTED_MODULE_10__["default"], null, this.fields().toArray()) : _common_app__WEBPACK_IMPORTED_MODULE_2__["default"].translator.trans('core.lib.edit_user.nothing_available'));
  };
  _proto.fields = function fields() {
    var _this3 = this;
    var items = new _utils_ItemList__WEBPACK_IMPORTED_MODULE_8__["default"]();
    if (this.attrs.user.canEditCredentials()) {
      items.add('username', m("div", {
        className: "Form-group"
      }, m("label", null, _common_app__WEBPACK_IMPORTED_MODULE_2__["default"].translator.trans('core.lib.edit_user.username_heading')), m("input", {
        className: "FormControl",
        placeholder: (0,_utils_extractText__WEBPACK_IMPORTED_MODULE_7__["default"])(_common_app__WEBPACK_IMPORTED_MODULE_2__["default"].translator.trans('core.lib.edit_user.username_label')),
        bidi: this.username,
        disabled: this.nonAdminEditingAdmin()
      })), 40);
      if (_common_app__WEBPACK_IMPORTED_MODULE_2__["default"].session.user !== this.attrs.user) {
        items.add('email', m("div", {
          className: "Form-group"
        }, m("label", null, _common_app__WEBPACK_IMPORTED_MODULE_2__["default"].translator.trans('core.lib.edit_user.email_heading')), m("input", {
          className: "FormControl",
          placeholder: (0,_utils_extractText__WEBPACK_IMPORTED_MODULE_7__["default"])(_common_app__WEBPACK_IMPORTED_MODULE_2__["default"].translator.trans('core.lib.edit_user.email_label')),
          bidi: this.email,
          disabled: this.nonAdminEditingAdmin()
        }), !this.isEmailConfirmed() && this.userIsAdmin(_common_app__WEBPACK_IMPORTED_MODULE_2__["default"].session.user) && m(_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
          className: "Button Button--block",
          loading: this.loading,
          onclick: this.activate.bind(this)
        }, _common_app__WEBPACK_IMPORTED_MODULE_2__["default"].translator.trans('core.lib.edit_user.activate_button'))), 30);
        items.add('password', m("div", {
          className: "Form-group"
        }, m("label", null, _common_app__WEBPACK_IMPORTED_MODULE_2__["default"].translator.trans('core.lib.edit_user.password_heading')), m("div", null, m("label", {
          className: "checkbox"
        }, m("input", {
          type: "checkbox",
          onchange: function onchange(e) {
            var target = e.target;
            _this3.setPassword(target.checked);
            m.redraw.sync();
            if (target.checked) _this3.$('[name=password]').select();
            e.redraw = false;
          },
          disabled: this.nonAdminEditingAdmin()
        }), _common_app__WEBPACK_IMPORTED_MODULE_2__["default"].translator.trans('core.lib.edit_user.set_password_label'))), this.setPassword() && m("input", {
          className: "FormControl",
          type: "password",
          name: "password",
          placeholder: (0,_utils_extractText__WEBPACK_IMPORTED_MODULE_7__["default"])(_common_app__WEBPACK_IMPORTED_MODULE_2__["default"].translator.trans('core.lib.edit_user.password_label')),
          bidi: this.password,
          disabled: this.nonAdminEditingAdmin()
        })), 20);
      }
    }
    if (this.attrs.user.canEditGroups()) {
      items.add('groups', m("div", {
        className: "Form-group EditUserModal-groups"
      }, m("label", null, _common_app__WEBPACK_IMPORTED_MODULE_2__["default"].translator.trans('core.lib.edit_user.groups_heading')), m("div", null, Object.keys(this.groups).map(function (id) {
        return _common_app__WEBPACK_IMPORTED_MODULE_2__["default"].store.getById('groups', id);
      }).filter(Boolean).map(function (group) {
        return (
          // Necessary because filter(Boolean) doesn't narrow out falsy values.
          group && m("label", {
            className: "checkbox"
          }, m("input", {
            type: "checkbox",
            bidi: _this3.groups[group.id()],
            disabled: group.id() === _models_Group__WEBPACK_IMPORTED_MODULE_6__["default"].ADMINISTRATOR_ID && (_this3.attrs.user === _common_app__WEBPACK_IMPORTED_MODULE_2__["default"].session.user || !_this3.userIsAdmin(_common_app__WEBPACK_IMPORTED_MODULE_2__["default"].session.user))
          }), m(_GroupBadge__WEBPACK_IMPORTED_MODULE_5__["default"], {
            group: group,
            label: null
          }), " ", group.nameSingular())
        );
      }))), 10);
    }
    items.add('submit', m("div", {
      className: "Form-group Form-controls"
    }, m(_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: "Button Button--primary",
      type: "submit",
      loading: this.loading
    }, _common_app__WEBPACK_IMPORTED_MODULE_2__["default"].translator.trans('core.lib.edit_user.submit_button'))), -10);
    return items;
  };
  _proto.activate = function activate() {
    var _this4 = this;
    this.loading = true;
    var data = {
      username: this.username(),
      isEmailConfirmed: true
    };
    this.attrs.user.save(data, {
      errorHandler: this.onerror.bind(this)
    }).then(function () {
      _this4.isEmailConfirmed(true);
      _this4.loading = false;
      m.redraw();
    })["catch"](function () {
      _this4.loading = false;
      m.redraw();
    });
  };
  _proto.data = function data() {
    var _this5 = this;
    var data = {};
    var relationships = {};
    if (this.attrs.user.canEditCredentials() && !this.nonAdminEditingAdmin()) {
      data.username = this.username();
      if (_common_app__WEBPACK_IMPORTED_MODULE_2__["default"].session.user !== this.attrs.user) {
        data.email = this.email();
      }
      if (this.setPassword()) {
        data.password = this.password();
      }
    }
    if (this.attrs.user.canEditGroups()) {
      relationships.groups = Object.keys(this.groups).filter(function (id) {
        return _this5.groups[id]();
      }).map(function (id) {
        return _common_app__WEBPACK_IMPORTED_MODULE_2__["default"].store.getById('groups', id);
      }).filter(function (g) {
        return g instanceof _models_Group__WEBPACK_IMPORTED_MODULE_6__["default"];
      });
    }
    data.relationships = relationships;
    return data;
  };
  _proto.onsubmit = function onsubmit(e) {
    var _this6 = this;
    e.preventDefault();
    this.loading = true;
    this.attrs.user.save(this.data(), {
      errorHandler: this.onerror.bind(this)
    }).then(this.hide.bind(this))["catch"](function () {
      _this6.loading = false;
      m.redraw();
    });
  };
  _proto.nonAdminEditingAdmin = function nonAdminEditingAdmin() {
    return this.userIsAdmin(this.attrs.user) && !this.userIsAdmin(_common_app__WEBPACK_IMPORTED_MODULE_2__["default"].session.user);
  }

  /**
   * @internal
   */;
  _proto.userIsAdmin = function userIsAdmin(user) {
    return !!((user == null ? void 0 : user.groups()) || []).some(function (g) {
      return (g == null ? void 0 : g.id()) === _models_Group__WEBPACK_IMPORTED_MODULE_6__["default"].ADMINISTRATOR_ID;
    });
  };
  return EditUserModal;
}(_common_components_FormModal__WEBPACK_IMPORTED_MODULE_3__["default"]);


/***/ })

}]);
//# sourceMappingURL=src_core_common_components_EditUserModal_tsx.js.map