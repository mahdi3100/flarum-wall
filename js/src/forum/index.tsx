import app from 'flarum/forum/app';
import { initializeItemWall } from './NavitemWall';

app.initializers.add('leomahdi/flarum-wall', () => {
  console.log('[leomahdi/flarum-wall] Hello, forum!');

  // Call the function to register the routes and extend the UserPage
  initializeItemWall();
});
