import app from 'flarum/forum/app';
import { initializeItemWall } from './NavitemWall';


app.initializers.add('leo/flarum-wall', () => {
  console.log('[leo/flarum-wall] Hello, forum!');


// Call the function to register the routes and extend the UserPage
initializeItemWall(); 


 
});
