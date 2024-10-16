import app from 'flarum/forum/app';
import DiscussionComposer from 'flarum/forum/components/DiscussionComposer';
import Stream from 'flarum/common/utils/Stream';

export default class CustomDiscussionComposer extends DiscussionComposer {
  static initAttrs(attrs) {
    super.initAttrs(attrs);

    attrs.titlePlaceholder = 'Create a thread ! ';
    attrs.submitLabel = 'Create a thread  ! ';
  }

  oninit(vnode) {
    super.oninit(vnode);

    // Initialize streams for title and content
    this.fields = {
      title: Stream(''),
      content: Stream(''),
      tags: Stream([]),
      discussions_wall: Stream(1),
    };
  }
  data() {
    let data = super.data();

    //inject discussions_wall in discussions Obj
    data.discussions_wall = this.fields.discussions_wall();
    return data;
  }

  onsubmit() {
    this.loading = true;

    const title = this.composer.fields.title();
    const content = this.composer.fields.content();

    // Basic validation (you can expand this)
    if (!title || !content) {
      alert('Please fill in both the title and content.');
      return;
    }

    const data = this.data();

    console.log(data);
    // Create and save the discussion
    app.store
      .createRecord('discussions')
      .save(data)
      .then((discussion) => {
        // After success, redirect to the new discussion
        //this is the daufalt m.route.set(app.route.discussion(discussion));
        //I i tried this but it did not work m.route.set(app.route.userWall());
        //I tried this but it did not re-render m.route.set(`/u/${m.route.param('username')}/wall`,null);
        //So i used EventEmitter :
        if (app.redrawHandler) {
          app.redrawHandler(discussion.id()); // Trigger redraw via the global handler
        }

        // Hide the composer
        app.composer.hide();

        console.log('Discussion created successfully:', discussion);
      })
      .catch((error) => {
        app.composer.hide();
        console.error('Error creating discussion:', error);
        alert('There was an error creating the discussion.');
      });
  }
}
