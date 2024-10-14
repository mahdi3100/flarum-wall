import app from 'flarum/forum/app';
import { initializeItemWall } from './NavitemWall';


app.initializers.add('leo/profile-users-comments', () => {
  console.log('[leo/profile-users-comments] Hello, forum!');


// Call the function to register the routes and extend the UserPage
initializeItemWall(); 


 
});
