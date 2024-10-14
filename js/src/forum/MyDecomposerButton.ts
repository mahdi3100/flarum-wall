import app from 'flarum/forum/app';
import Button from 'flarum/common/components/Button';
import DiscussionComposer from 'flarum/forum/components/DiscussionComposer';
import Stream from 'flarum/common/utils/Stream';
import CustomDiscussionComposer from './CustomDiscussionComposer';


export default class CustomDiscussionButton {
  /*view() {
    return (
      m('button.Post.ReplyPlaceholder', { onclick: this.action.bind(this) }, [
      m('div.Post-container', [
          /*m('div.Post-side', [
              m(Avatar, { user: app.session.user, className: 'Post-avatar' })
          ]),*//*
          m('div.Post-main', [
            m('span.Post-header', "Create a thread ! ")
        ])
    ])
]))
  }*/

  component() {

    return Button.component(
      {
        icon: 'fas fa-pen',
        className: 'Button Button--primary IndexPage-newDiscussion',
        onclick: this.action.bind(this),
        //disabled: !this.canStartDiscussion,
      },
   "Create a thread !");
  }
  action(e:any) {
    e.preventDefault();

    return new Promise((resolve, reject) => {
      if (app.session.user) {

        app.composer.load(CustomDiscussionComposer, {
          user: app.session.user,
          titlePlaceholder: app.translator.trans('core.forum.composer_discussion.title_placeholder'),
      submitLabel: app.translator.trans('core.forum.composer_discussion.submit_button'),
        });

        app.composer.show();

        return resolve(e);
      } else {
       // app.modal.show(LogInModal);
 
        return reject();
      }
    });
  }


 
}
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
    }*//*
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