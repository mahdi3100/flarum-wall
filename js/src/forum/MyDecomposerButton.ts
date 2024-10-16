import app from 'flarum/forum/app';
import Button from 'flarum/common/components/Button';

import CustomDiscussionComposer from './CustomDiscussionComposer';

/**
 * Button Component that shown in Wall Content => to invoke CustomDiscussionComposer
 */
export default class CustomDiscussionButton {
  /*view() {
    return (
      m('button.Post.ReplyPlaceholder', { onclick: this.action.bind(this) }, [
      m('div.Post-container', [
          /*m('div.Post-side', [
              m(Avatar, { user: app.session.user, className: 'Post-avatar' })
          ]),*/ /*
  m('div.Post-main', [
    m('span.Post-header', "Create a thread ! ")
])
])
]))
}*/

  component() {
    return Button.component(
      {
        icon: 'fas fa-pen',
        className: 'Button Button--primary IndexPage-newDiscussion',
        onclick: this.action.bind(this),
        //disabled: !this.canStartDiscussion,
      },
      'Create a thread !'
    );
  }
  action(e: any) {
    e.preventDefault();

    return new Promise((resolve, reject) => {
      if (app.session.user) {
        app.composer.load(CustomDiscussionComposer, {
          user: app.session.user,
          titlePlaceholder: app.translator.trans('core.forum.composer_discussion.title_placeholder'),
          submitLabel: app.translator.trans('core.forum.composer_discussion.submit_button'),
        });

        app.composer.show();

        return resolve(e);
      } else {
        //To add later=> app.modal.show(LogInModal);

        return reject();
      }
    });
  }
}
