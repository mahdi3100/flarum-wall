import app from 'flarum/forum/app';
import UserPage from 'flarum/forum/components/UserPage';
import { extend } from 'flarum/common/extend';
import Page from 'flarum/common/components/Page';
import HeaderPrimary from 'flarum/forum/components/HeaderPrimary';
import Wall from './Wall'; // Adjust the path if necessary
import Extend from 'flarum/common/extenders';
import { initializeItemWall } from './NavitemWall';
//export { default as extend } from './exstend';
import MyFormComponent from './MyFormComponent';
import MyDecomposerButton from './MyDecomposerButton';
//import DiscussionComposer from 'flarum/forum/components/DiscussionComposer';



app.initializers.add('leo/profile-users-comments', () => {
  console.log('[leo/profile-users-comments] Hello, forum!');
// src/forum/index.tsx


initializeItemWall(); // Call the function to register the routes and extend the UserPage



   extend(UserPage.prototype, 'oncreate', function(_,vnode) {
    console.log('UserPage oncreate called');
    // Search the DOM for the UserPage content element
    const contentElement = vnode.dom.querySelector('.UserPage-content');
    if (contentElement) {
      const wrapper = document.createElement('div'); // Create a wrapper div
      contentElement.prepend(wrapper); // Prepend the wrapper to the content element
    
      const myFormInstance = MyFormComponent();
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
