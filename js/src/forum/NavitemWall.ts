
import app from 'flarum/forum/app';
import UserPage from 'flarum/forum/components/UserPage';
import { extend } from 'flarum/common/extend';



import UserWall from './UserWall';

export function initializeItemWall() {
  console.log('[leo/flarum-wall] Initializing extension...');

  //Register the frontend route without creating a new instance of Routes
  app.routes.userWall = {
    path: '/u/:username/wall',
    component: UserWall,
  };

  // Extend UserPage to add the new "Wall" navigation item
  extend(UserPage.prototype, 'navItems', function (items) {

    items.add('wall',
      m('a', {
        class: 'UserPage-navItem',
        active: "true",


        onclick: () => {

          m.route.set(`/u/${m.route.param('username')}/wall`);

        }
      },
        m('i', { class: 'icon Wall-icon fas fa-user  Button-icon' })
        , m('span', { class: 'Button-label' }, "Wall")
      ),
      110
    );

    //Inject Css class for Active Link Item
    const username = m.route.param('username');
    const currenturl = `/u/${username}/wall`;
    if (m.route.get().toString().trim() == currenturl.trim()) {
      document.querySelector(".item-wall")?.classList.add("active")
    } else
      document.querySelector(".item-wall")?.classList.remove("active");

  });

}
