// src/forum/extend.ts or src/forum/extend.js
import app from 'flarum/forum/app';
import UserPage from 'flarum/forum/components/UserPage';
import { extend } from 'flarum/common/extend';
import DiscussionComposer from 'flarum/forum/components/DiscussionComposer';
import CustomDiscussionComposer from './CustomDiscussionComposer';
import icon from 'flarum/common/helpers/icon';
//import Wall from './Wall'; // Import your Wall component
//import Extend from 'flarum/common/extenders';
import UserWall from './UserWall'

export function initializeItemWall() {
  console.log('[leo/profile-users-comments] Initializing extension...');

  
  app.routes.userWall = {
    path: '/u/:username/wall',
    component: UserWall,
  };
  // Register the frontend route without creating a new instance of Routes
 /* new Extend.Routes()
    .add('leo.profile-users-comments.wall', '/u/:username/wall', Wall);
*/
  // Extend UserPage to add the new "Wall" navigation item
  extend(UserPage.prototype, 'navItems', function (items) {
    
    items.add('wall', 
      m('a', {
        class: 'UserPage-navItem',
        active:"true",
      
        //onclick: () => {m.route.set('/u/:username/wall',{username:m.route.param('username')})}
        onclick: () => { 
          
          m.route.set(`/u/${m.route.param('username')}/wall`);  
         
        }},
        m('i', { class: 'icon Wall-icon fas fa-user  Button-icon' }) 
      , m('span', { class: 'Button-label' },"Wall") 
      ),
      999
    );
   
    let username = m.route.param('username');
let currenturl = `/u/${username}/wall`;
    if(m.route.get().toString().trim() == currenturl.trim() ){
    document.querySelector(".item-wall")?.classList.add("active")
    }else
    document.querySelector(".item-wall")?.classList.remove("active");
  
  });

}
