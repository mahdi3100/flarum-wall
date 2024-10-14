import ErrorText from 'flarum/common/components/ErrorText';
import app from 'flarum/forum/app';


import CommentPost from 'flarum/forum/components/CommentPost';



export default function MyFormComponent() {
  let errorMessage = '';
  let commentText = '';



  function onsubmit(event) {


    event.preventDefault();

    if (!commentText || commentText.length === 0) {
      errorMessage = 'Comment can not be empty!';
      m.redraw(); // Refresh the view to display the error
      return;
    }

    fetch(app.forum.attribute('apiUrl') + '/profile-users-comments-models', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': app.session.csrfToken, // Uncomment if needed

      },
      body: JSON.stringify({ data: { post_text: commentText, user_profile_id: m.route.param('username') } }),
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
          handleAjaxResponse(wrapper, data)
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
      })
      .catch(error => {

        errorMessage = 'Error submitting comment: ' + error.message;
        alert(errorMessage)
        m.redraw(); // Refresh the view to display error
      });
  }

  return {
    view: function () {
      return m('form', {
        onsubmit: onsubmit, style: {
          marginBottom: '10px',
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '5px',
          backgroundColor: '#f9f9f9',
          textAlign: "center"
        }
      }, [
        m('textarea.FormControl', {
          placeholder: 'Leave a comment...',
          required: true,
          value: commentText,
          oninput: (e) => { commentText = e.target.value; }
        }),
        m('button.Button.Button--primary', {
          type: 'submit',
          style: {
            margin: '20px 0'
          },
        }, 'Submit'
        ),
        errorMessage ? m(ErrorText, { message: errorMessage }) : null
      ]);
    }
  };



  // Assuming you have an AJAX response that contains post data.
  function handleAjaxResponse(wrapper, response) {
    const postData = response.data//post; // Extract post data from your AJAX response
    const userData = response.data.user_profile_id; // Extract user data, if necessary
    console.log(postData)
    // Create a new Post model instance
    /*const post = new Post({
      postData.post_id,
     
      createdAt: new Date(postData.created_at),
     // user: app.store.createRecord('users', app.us), // Attach user to the post
    });*/

    // Simulate a valid discussion object
    const discussion = app.store.createRecord('discussions', {
      id: 1,
      title: 'Example Discussion',
      canReply: () => true, // Ensure this method exists
    });
    // Create a new Post model instance
    const newPost = {
      id: postData.post_id,
      content: postData.post_text,
      discussion,
      createdAt: new Date(postData.created_at),
      user: app.session.user  // Associate the post with a user
    };

    // Render the post using the CommentPost component
    const postComponent = m(CommentPost, { newPost });

    // Append the post component to the DOM
    m.render(wrapper, postComponent);
  }


}
