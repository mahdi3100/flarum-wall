import app from 'flarum/common/app';

app.initializers.add('leo/flarum-wall', () => {
  console.log('[leo/flarum-wall] Hello, forum and admin!');
});
