/******/ (() => { // webpackBootstrap
/******/ 	// runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 	var __webpack_modules__ = ({

/***/ "./src/common/index.ts":
/*!*****************************!*\
  !*** ./src/common/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/app */ "flarum/common/app");
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_app__WEBPACK_IMPORTED_MODULE_0__);

flarum_common_app__WEBPACK_IMPORTED_MODULE_0___default().initializers.add('leo/profile-users-comments', function () {
  console.log('[leo/profile-users-comments] Hello, forum and admin!');
});

/***/ }),

/***/ "./src/forum/CustomDiscussionComposer.js":
/*!***********************************************!*\
  !*** ./src/forum/CustomDiscussionComposer.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CustomDiscussionComposer)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/components/DiscussionComposer */ "flarum/forum/components/DiscussionComposer");
/* harmony import */ var flarum_forum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/utils/Stream */ "flarum/common/utils/Stream");
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3__);




//import Component from 'flarum/Component';
var CustomDiscussionComposer = /*#__PURE__*/function (_DiscussionComposer) {
  function CustomDiscussionComposer() {
    return _DiscussionComposer.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(CustomDiscussionComposer, _DiscussionComposer);
  CustomDiscussionComposer.initAttrs = function initAttrs(attrs) {
    _DiscussionComposer.initAttrs.call(this, attrs);
    attrs.titlePlaceholder = "Create a thread ! ";
    attrs.submitLabel = "Create a thread  ! ";
  };
  var _proto = CustomDiscussionComposer.prototype;
  _proto.oninit = function oninit(vnode) {
    _DiscussionComposer.prototype.oninit.call(this, vnode);

    // Initialize streams for title and content
    this.fields = {
      title: flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3___default()(''),
      content: flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3___default()(''),
      tags: flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3___default()([]),
      discussions_wall: flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3___default()(1)
    };
  };
  _proto.data = function data() {
    var data = _DiscussionComposer.prototype.data.call(this);
    data.discussions_wall = this.fields.discussions_wall();
    return data;
  };
  _proto.onsubmit = function onsubmit() {
    this.loading = true;
    var title = this.composer.fields.title();
    var content = this.composer.fields.content();

    // Basic validation (you can expand this)
    if (!title || !content) {
      alert('Please fill in both the title and content.');
      return;
    }
    var data = this.data();
    console.log("here is data");
    console.log(data);
    // Create and save the discussion
    flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().store.createRecord('discussions').save(data).then(function (discussion) {
      // After success, redirect to the new discussion
      //m.route.set(app.route.discussion(discussion));
      // m.route.set(app.route.userWall());
      // m.route.set(`/u/${m.route.param('username')}/wall`,null); 

      if ((flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().redrawHandler)) {
        flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().redrawHandler(discussion.id()); // Trigger redraw via the global handler
      }
      // Hide the composer
      flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().composer.hide();
      console.log('Discussion created successfully:', discussion);
    })["catch"](function (error) {
      flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().composer.hide();
      console.error('Error creating discussion:', error);
      alert('There was an error creating the discussion.');
    });
  };
  return CustomDiscussionComposer;
}((flarum_forum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_2___default()));


/***/ }),

/***/ "./src/forum/MyDecomposerButton.ts":
/*!*****************************************!*\
  !*** ./src/forum/MyDecomposerButton.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CustomDiscussionButton)
/* harmony export */ });
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CustomDiscussionComposer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CustomDiscussionComposer */ "./src/forum/CustomDiscussionComposer.js");



var CustomDiscussionButton = /*#__PURE__*/function () {
  function CustomDiscussionButton() {}
  var _proto = CustomDiscussionButton.prototype;
  /*view() {
    return (
      m('button.Post.ReplyPlaceholder', { onclick: this.action.bind(this) }, [
      m('div.Post-container', [
          /*m('div.Post-side', [
              m(Avatar, { user: app.session.user, className: 'Post-avatar' })
          ]),*/
  /*
  m('div.Post-main', [
  m('span.Post-header', "Create a thread ! ")
  ])
  ])
  ]))
  }*/
  _proto.component = function component() {
    return flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_1___default().component({
      icon: 'fas fa-pen',
      className: 'Button Button--primary IndexPage-newDiscussion',
      onclick: this.action.bind(this)
      //disabled: !this.canStartDiscussion,
    }, "Create a thread !");
  };
  _proto.action = function action(e) {
    e.preventDefault();
    return new Promise(function (resolve, reject) {
      if ((flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().session).user) {
        flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().composer.load(_CustomDiscussionComposer__WEBPACK_IMPORTED_MODULE_2__["default"], {
          user: (flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().session).user,
          titlePlaceholder: flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('core.forum.composer_discussion.title_placeholder'),
          submitLabel: flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('core.forum.composer_discussion.submit_button')
        });
        flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().composer.show();
        return resolve(e);
      } else {
        // app.modal.show(LogInModal);

        return reject();
      }
    });
  };
  return CustomDiscussionButton;
}();
/** ajax(){
  fetch(app.forum.attribute('apiUrl') + '/profile-users-comments-models', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRF-Token': app.session.csrfToken, // Uncomment if needed
     
    },
    body: JSON.stringify({ data: { discussion: discussion , user_profile_id:m.route.param('username') } }),
  })
  .then(response => {
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {

    const contentElement = document.querySelector('.UserPage-content');
    if (contentElement) {
      const wrapper = document.createElement('div'); // Create a wrapper div
      handleAjaxResponse(wrapper,data)
    /*contentElement.prepend(wrapper);
      const newComment = m(CustomComment, {
        username: data.data.username, // Adjust this according to your API response structure
        commentText: commentText,
        userPhoto: data.data.userPhoto // Adjust this according to your API response structure
      });
      
      // Append the new comment to the UserPage-content
      m.render(wrapper, newComment);
    }*/
/*
}
errorMessage = 'Comment submitted successfully!';
commentText = ''; // Clear the textarea
m.redraw(); // Refresh the view to display success message
})
.catch(error => {
errorMessage = 'Error submitting comment: ' + error.message;
alert(errorMessage)
m.redraw(); // Refresh the view to display error
}).finally(()=>{
alert("rrr")
app.composer.hide();
});} */


/***/ }),

/***/ "./src/forum/MyFormComponent.js":
/*!**************************************!*\
  !*** ./src/forum/MyFormComponent.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MyFormComponent)
/* harmony export */ });
/* harmony import */ var flarum_common_components_ErrorText__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/components/ErrorText */ "flarum/common/components/ErrorText");
/* harmony import */ var flarum_common_components_ErrorText__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_ErrorText__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_components_CommentPost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/components/CommentPost */ "flarum/forum/components/CommentPost");
/* harmony import */ var flarum_forum_components_CommentPost__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_CommentPost__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_models_Post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/models/Post */ "flarum/common/models/Post");
/* harmony import */ var flarum_common_models_Post__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_models_Post__WEBPACK_IMPORTED_MODULE_3__);




//import User from 'flarum/common/models/User';

function MyFormComponent() {
  var errorMessage = '';
  var commentText = '';
  function onsubmit(event) {
    event.preventDefault();
    if (!commentText || commentText.length === 0) {
      errorMessage = 'Comment cannot be empty!';
      m.redraw(); // Refresh the view to display the error
      return;
    }
    fetch(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('apiUrl') + '/profile-users-comments-models', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().session).csrfToken // Uncomment if needed
      },
      body: JSON.stringify({
        data: {
          post_text: commentText,
          user_profile_id: m.route.param('username')
        }
      })
    }).then(function (response) {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    }).then(function (data) {
      var contentElement = document.querySelector('.UserPage-content');
      if (contentElement) {
        var wrapper = document.createElement('div'); // Create a wrapper div
        handleAjaxResponse(wrapper, data);
        /*contentElement.prepend(wrapper);
          const newComment = m(CustomComment, {
            username: data.data.username, // Adjust this according to your API response structure
            commentText: commentText,
            userPhoto: data.data.userPhoto // Adjust this according to your API response structure
          });
          
          // Append the new comment to the UserPage-content
          m.render(wrapper, newComment);
        }*/
      }
      errorMessage = 'Comment submitted successfully!';
      commentText = ''; // Clear the textarea
      m.redraw(); // Refresh the view to display success message
    })["catch"](function (error) {
      errorMessage = 'Error submitting comment: ' + error.message;
      alert(errorMessage);
      m.redraw(); // Refresh the view to display error
    });
  }
  return {
    view: function view() {
      return m('form', {
        onsubmit: onsubmit,
        style: {
          marginBottom: '10px',
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '5px',
          backgroundColor: '#f9f9f9',
          textAlign: "center"
        }
      }, [m('textarea.FormControl', {
        placeholder: 'Leave a comment...',
        required: true,
        value: commentText,
        oninput: function oninput(e) {
          commentText = e.target.value;
        }
      }), m('button.Button.Button--primary', {
        type: 'submit',
        style: {
          margin: '20px 0'
        }
      }, 'Submit'), errorMessage ? m((flarum_common_components_ErrorText__WEBPACK_IMPORTED_MODULE_0___default()), {
        message: errorMessage
      }) : null]);
    }
  };

  // Assuming you have an AJAX response that contains post data.
  function handleAjaxResponse(wrapper, response) {
    var postData = response.data; //post; // Extract post data from your AJAX response
    var userData = response.data.user_profile_id; // Extract user data, if necessary
    console.log(postData);
    // Create a new Post model instance
    /*const post = new Post({
      postData.post_id,
     
      createdAt: new Date(postData.created_at),
     // user: app.store.createRecord('users', app.us), // Attach user to the post
    });*/

    // Simulate a valid discussion object
    var discussion = flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().store.createRecord('discussions', {
      id: 1,
      title: 'Example Discussion',
      canReply: function canReply() {
        return true;
      } // Ensure this method exists
    });
    // Create a new Post model instance
    var newPost = {
      id: postData.post_id,
      content: postData.post_text,
      discussion: discussion,
      createdAt: new Date(postData.created_at),
      user: (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().session).user // Associate the post with a user
    };

    // Render the post using the CommentPost component
    var postComponent = m((flarum_forum_components_CommentPost__WEBPACK_IMPORTED_MODULE_2___default()), {
      newPost: newPost
    });

    // Append the post component to the DOM
    m.render(wrapper, postComponent);
  }
}

/***/ }),

/***/ "./src/forum/NavitemWall.ts":
/*!**********************************!*\
  !*** ./src/forum/NavitemWall.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initializeItemWall: () => (/* binding */ initializeItemWall)
/* harmony export */ });
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_forum_components_UserPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/components/UserPage */ "flarum/forum/components/UserPage");
/* harmony import */ var flarum_forum_components_UserPage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_UserPage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _UserWall__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UserWall */ "./src/forum/UserWall.tsx");
// src/forum/extend.ts or src/forum/extend.js



//import Wall from './Wall'; // Import your Wall component
//import Extend from 'flarum/common/extenders';

function initializeItemWall() {
  console.log('[leo/profile-users-comments] Initializing extension...');
  (flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().routes).userWall = {
    path: '/u/:username/wall',
    component: _UserWall__WEBPACK_IMPORTED_MODULE_3__["default"]
  };
  // Register the frontend route without creating a new instance of Routes
  /* new Extend.Routes()
     .add('leo.profile-users-comments.wall', '/u/:username/wall', Wall);
  */
  // Extend UserPage to add the new "Wall" navigation item
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__.extend)((flarum_forum_components_UserPage__WEBPACK_IMPORTED_MODULE_1___default().prototype), 'navItems', function (items) {
    var _document$querySelect2;
    items.add('wall', m('a', {
      "class": 'UserPage-navItem',
      active: "true",
      //onclick: () => {m.route.set('/u/:username/wall',{username:m.route.param('username')})}
      onclick: function onclick() {
        m.route.set("/u/" + m.route.param('username') + "/wall");
      }
    }, m('i', {
      "class": 'icon Wall-icon fas fa-user  Button-icon'
    }), m('span', {
      "class": 'Button-label'
    }, "Wall")), 999);
    var username = m.route.param('username');
    var currenturl = "/u/" + username + "/wall";
    if (m.route.get().toString().trim() == currenturl.trim()) {
      var _document$querySelect;
      (_document$querySelect = document.querySelector(".item-wall")) == null || _document$querySelect.classList.add("active");
    } else (_document$querySelect2 = document.querySelector(".item-wall")) == null || _document$querySelect2.classList.remove("active");
  });
}

/***/ }),

/***/ "./src/forum/PostsUserWall.ts":
/*!************************************!*\
  !*** ./src/forum/PostsUserWall.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PostsUserWall)
/* harmony export */ });
/* harmony import */ var flarum_forum_components_PostStream__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/components/PostStream */ "flarum/forum/components/PostStream");
/* harmony import */ var flarum_forum_components_PostStream__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_PostStream__WEBPACK_IMPORTED_MODULE_0__);

var PostsUserWall = /*#__PURE__*/function () {
  function PostsUserWall(selectedDiscussion, stream) {
    this.selectedDiscussion = selectedDiscussion; // Assigning the 'name' attribute to the class
    this.stream = stream; // Assigning the 'age' attribute to the class
    console.log(this.selectedDiscussion);
    console.log(this.selectedDiscussion);
  }
  var _proto = PostsUserWall.prototype;
  _proto.oninit = function oninit(vnode) {
    this.selectedDiscussion = selectedDiscussion; // Assigning the 'name' attribute to the class
    this.stream = stream; // Assigning the 'age' attribute to the class
  };
  _proto.view = function view() {
    if (this.selectedDiscussion && this.stream) {
      return m('div', {
        className: 'DiscussionPage-stream'
      }, m((flarum_forum_components_PostStream__WEBPACK_IMPORTED_MODULE_0___default()), {
        discussion: this.selectedDiscussion,
        stream: this.stream,
        onPositionChange: this.positionChanged.bind(this) // Position handler
      }));
    }
  };
  _proto.positionChanged = function positionChanged() {
    // Handle position change in the PostStream, e.g., infinite scrolling
    console.log('Post stream position changed');
  };
  return PostsUserWall;
}();


/***/ }),

/***/ "./src/forum/UserWall.tsx":
/*!********************************!*\
  !*** ./src/forum/UserWall.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WallUserPage)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_components_UserPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/components/UserPage */ "flarum/forum/components/UserPage");
/* harmony import */ var flarum_forum_components_UserPage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_UserPage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _MyDecomposerButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MyDecomposerButton */ "./src/forum/MyDecomposerButton.ts");
/* harmony import */ var flarum_forum_states_DiscussionListState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/forum/states/DiscussionListState */ "flarum/forum/states/DiscussionListState");
/* harmony import */ var flarum_forum_states_DiscussionListState__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_states_DiscussionListState__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _PostsUserWall__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PostsUserWall */ "./src/forum/PostsUserWall.ts");
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/components/LoadingIndicator */ "flarum/common/components/LoadingIndicator");
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_forum_states_PostStreamState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/forum/states/PostStreamState */ "flarum/forum/states/PostStreamState");
/* harmony import */ var flarum_forum_states_PostStreamState__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_states_PostStreamState__WEBPACK_IMPORTED_MODULE_7__);

// src/forum/extend.js



// Your modified Wall component





var WallUserPage = /*#__PURE__*/function (_UserPage) {
  function WallUserPage() {
    var _this;
    _this = _UserPage.call(this) || this;
    // super()
    _this.composeButton = void 0;
    _this.postsUserWall = void 0;
    _this.discussion = null;
    _this.getIdThread();
    return _this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(WallUserPage, _UserPage);
  var _proto = WallUserPage.prototype;
  _proto.oninit = function oninit(vnode) {
    var _this2 = this;
    _UserPage.prototype.oninit.call(this, vnode);
    //this.postsUserWall = new PostsUserWall();
    this.loadUser(m.route.param('username'));
    this.composeButton = new _MyDecomposerButton__WEBPACK_IMPORTED_MODULE_3__["default"](); // Create an instance of CustomDiscussionButton

    (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().redrawHandler) = function (newIdDiscission) {
      _this2.loadDiscussion(newIdDiscission);
    };
    this.loading = true;
    this.selectedDiscussion = null; // To track the selected discussion
    this.stream = null; // PostStream data
  };
  _proto.requestParams = function requestParams() {
    return {
      bySlug: true
      //page: { near: 3 },
    };
  };
  _proto.getIdThread = function getIdThread() {
    var _this3 = this;
    var getUsername = m.route.param("username");
    this.loading = true;
    flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().request({
      method: 'GET',
      //url:"http://localhost:8888/api/wall-discussion-id"
      url: flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('apiUrl') + '/wall-discussion-id?username=' + getUsername
    }).then(function (response) {
      var _response$data;
      console.log('Discussions: ID', response);
      _this3.loading = false;
      if (!(response != null && (_response$data = response.data) != null && _response$data.id)) {
        return;
      } //dsiplay there is nothing to show
      _this3.loadDiscussion(response["data"]["id"]);
    })["catch"](function (error) {
      console.error('Error fetching discussions:', error);
      _this3.loading = false;
    });
  };
  _proto.loadDiscussion = function loadDiscussion(discussions_wall) {
    var _this4 = this;
    var includedPosts = [];
    this.loading = true;
    var params = this.requestParams();
    ///const getUsername =  m.route.param("username") ;

    flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().store.find('discussions', discussions_wall, params
    //{ filter: { "discussions_wall":getUsername },}//,=> cause headache on rertieving discussions  as Array or model Api 
    ).then(function (discussionsssssss) {
      _this4.loading = false;

      //if(!discussions[0]){ m.redraw();return}

      var discussion = discussionsssssss;
      console.log("discussion payload");
      console.log(discussionsssssss.payload.included);
      // Assign the discussion to the class property

      _this4.discussion = discussion;
      if (discussion.payload && discussion.payload.included[0]) {
        var discussionId = discussion.id();
        includedPosts = discussion.payload.included.filter(function (record) {
          return record.type === 'posts' && record.relationships && record.relationships.discussion && !Array.isArray(record.relationships.discussion.data) && record.relationships.discussion.data.id === discussionId;
        })
        // We can make this assertion because posts should be in the store,
        // since they were in the discussion's payload.
        .map(function (record) {
          return flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().store.getById('posts', record.id);
        }).sort(function (a, b) {
          return a.number() - b.number();
        }).slice(0, 20);
      }
      console.log("posts");
      console.log(includedPosts);
      _this4.selectedDiscussion = discussion;
      _this4.stream = new (flarum_forum_states_PostStreamState__WEBPACK_IMPORTED_MODULE_7___default())(discussion, includedPosts); //null //discussions.postStream();

      _this4.postsUserWall = new _PostsUserWall__WEBPACK_IMPORTED_MODULE_5__["default"](_this4.selectedDiscussion, _this4.stream);
      m.redraw();
    })["catch"](function (error) {
      console.error('Error loading discussions:', error);
      _this4.loading = false;
      m.redraw();
    });
  };
  _proto.show = function show(user) {
    _UserPage.prototype.show.call(this, user);
    this.state = new (flarum_forum_states_DiscussionListState__WEBPACK_IMPORTED_MODULE_4___default())({
      filter: {
        author: user.username()
      },
      sort: 'newest'
    });
    this.state.refresh();
  };
  _proto.content = function content() {
    if (this.loading) {
      return m((flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_6___default())); // Show a loading indicator while discussions load
    } else {
      return m('div', {
        className: 'WallUserPage-container'
      }, m('div', {
        className: 'DiscussionList-container'
      }, this.discussion && this.stream ? this.postsUserWall && this.postsUserWall.view() : this.composeButton && this.composeButton.component()));
    }
  };
  return WallUserPage;
}((flarum_forum_components_UserPage__WEBPACK_IMPORTED_MODULE_2___default()));


/***/ }),

/***/ "./src/forum/index.tsx":
/*!*****************************!*\
  !*** ./src/forum/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_forum_components_UserPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/components/UserPage */ "flarum/forum/components/UserPage");
/* harmony import */ var flarum_forum_components_UserPage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_UserPage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _NavitemWall__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NavitemWall */ "./src/forum/NavitemWall.ts");
/* harmony import */ var _MyFormComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MyFormComponent */ "./src/forum/MyFormComponent.js");




// Adjust the path if necessary


//export { default as extend } from './exstend';

//import DiscussionComposer from 'flarum/forum/components/DiscussionComposer';

flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().initializers.add('leo/profile-users-comments', function () {
  console.log('[leo/profile-users-comments] Hello, forum!');
  // src/forum/index.tsx

  (0,_NavitemWall__WEBPACK_IMPORTED_MODULE_3__.initializeItemWall)(); // Call the function to register the routes and extend the UserPage

  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__.extend)((flarum_forum_components_UserPage__WEBPACK_IMPORTED_MODULE_1___default().prototype), 'oncreate', function (_, vnode) {
    console.log('UserPage oncreate called');
    // Search the DOM for the UserPage content element
    var contentElement = vnode.dom.querySelector('.UserPage-content');
    if (contentElement) {
      var wrapper = document.createElement('div'); // Create a wrapper div
      contentElement.prepend(wrapper); // Prepend the wrapper to the content element

      var myFormInstance = (0,_MyFormComponent__WEBPACK_IMPORTED_MODULE_4__["default"])();
      // Render the component using m.render
      // m.render(wrapper, myFormInstance.view()); // Bind the instance and call view

      // let compose = new MyDecomposerButton();

      //m.render(wrapper,compose.component())

      /*
      console.log('Found UserPage-content element');
      
      // Create a new textarea element
      const textarea = document.createElement('textarea');
      textarea.className = 'FormControl';  // Flarum's class for form controls
      textarea.placeholder = 'Write your comment...';  // Adding placeholder text
      
      // Create a submit button
      const button = document.createElement('button');
      button.className = 'Button Button--primary';  // Flarum's button class with primary style
      button.textContent = 'Submit';
      
      // Append the textarea and button to the content element
      contentElement.appendChild(textarea);
      contentElement.appendChild(button);
       // Optional: Add an event listener for the button click
      button.addEventListener('click', () => {
        const commentText = textarea.value;
        console.log('Comment submitted:', commentText);
        // Add your comment submission logic here
      });*/
    }
  });
});

/***/ }),

/***/ "flarum/common/app":
/*!***************************************************!*\
  !*** external "flarum.core.compat['common/app']" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/app'];

/***/ }),

/***/ "flarum/common/components/Button":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Button']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Button'];

/***/ }),

/***/ "flarum/common/components/ErrorText":
/*!********************************************************************!*\
  !*** external "flarum.core.compat['common/components/ErrorText']" ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/ErrorText'];

/***/ }),

/***/ "flarum/common/components/LoadingIndicator":
/*!***************************************************************************!*\
  !*** external "flarum.core.compat['common/components/LoadingIndicator']" ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/LoadingIndicator'];

/***/ }),

/***/ "flarum/common/extend":
/*!******************************************************!*\
  !*** external "flarum.core.compat['common/extend']" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/extend'];

/***/ }),

/***/ "flarum/common/models/Post":
/*!***********************************************************!*\
  !*** external "flarum.core.compat['common/models/Post']" ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/models/Post'];

/***/ }),

/***/ "flarum/common/utils/Stream":
/*!************************************************************!*\
  !*** external "flarum.core.compat['common/utils/Stream']" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/utils/Stream'];

/***/ }),

/***/ "flarum/forum/app":
/*!**************************************************!*\
  !*** external "flarum.core.compat['forum/app']" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/app'];

/***/ }),

/***/ "flarum/forum/components/CommentPost":
/*!*********************************************************************!*\
  !*** external "flarum.core.compat['forum/components/CommentPost']" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/CommentPost'];

/***/ }),

/***/ "flarum/forum/components/DiscussionComposer":
/*!****************************************************************************!*\
  !*** external "flarum.core.compat['forum/components/DiscussionComposer']" ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/DiscussionComposer'];

/***/ }),

/***/ "flarum/forum/components/PostStream":
/*!********************************************************************!*\
  !*** external "flarum.core.compat['forum/components/PostStream']" ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/PostStream'];

/***/ }),

/***/ "flarum/forum/components/UserPage":
/*!******************************************************************!*\
  !*** external "flarum.core.compat['forum/components/UserPage']" ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/UserPage'];

/***/ }),

/***/ "flarum/forum/states/DiscussionListState":
/*!*************************************************************************!*\
  !*** external "flarum.core.compat['forum/states/DiscussionListState']" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/states/DiscussionListState'];

/***/ }),

/***/ "flarum/forum/states/PostStreamState":
/*!*********************************************************************!*\
  !*** external "flarum.core.compat['forum/states/PostStreamState']" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/states/PostStreamState'];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inheritsLoose)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(t, o) {
  t.prototype = Object.create(o.prototype), t.prototype.constructor = t, (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t, o);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./forum.ts ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/common */ "./src/common/index.ts");
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.tsx");


})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=forum.js.map