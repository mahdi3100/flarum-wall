import app from 'flarum/admin/app';

import { extend } from 'flarum/common/extend';

import HeaderPrimary from 'flarum/forum/components/HeaderPrimary';
import AdminPage from 'flarum/admin/components/AdminPage';



app.initializers.add('leo/profile-users-comments', () => {
  console.log('[leo/profile-users-comments] Hello, admin!');


// Extend the AdminPage and add your custom box component
extend(AdminPage.prototype, 'content', function (items: any) {
  console.log('Adding custom box to admin panel');
  //items.add('custom-box', <Box />, 10); // Using your Box component
  // Or using a simple paragraph for testing
   items.add('custom-box', <p>This is a simple paragraph in the admin panel.</p>, 10);
});

});

const callContent = () => {
  console.log('callContent is being executed'); // Debugging
  extend(HeaderPrimary.prototype, 'items', function(items) {
    items.add('google', <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">Google</a>);
  });
};