import 'flarum/forum/app';

declare module 'flarum/forum/app' {
  interface ForumRoutes {
    userWall: string; // Define the userWall route
  }
  interface ForumApplication {
    userWall: string; // Define the userWall route
  }
}
