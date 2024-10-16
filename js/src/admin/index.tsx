import app from 'flarum/admin/app';

import { extend } from 'flarum/common/extend';

import AdminPage from 'flarum/admin/components/AdminPage';

app.initializers.add('leomahdi/flarum-wall', () => {
  console.log('[leomahdi/flarum-wall] Hello, admin!');

  // Extend the AdminPage and add your custom box component
  extend(AdminPage.prototype, 'content', function (items: any) {
    console.log('Adding custom box to admin panel');
  });
});
