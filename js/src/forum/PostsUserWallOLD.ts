import app from 'flarum/forum/app';
import DiscussionList from 'flarum/forum/components/DiscussionList';
import DiscussionListItem from 'flarum/forum/components/DiscussionListItem';
import LoadingIndicator from 'flarum/common/components/LoadingIndicator';

export default class PostsUserWall {
  oninit(vnode) {
  
    
  }
  constructor(){
   // super()
    this.discussions = [];
    this.loadDiscussion();

  }
  loadDiscussion(){
   
    this.loading = true;
    app.store.find('discussions', {
      filter: { discussions_wall: 1 }
    }).then(discussions => {
      this.discussions = discussions;
      this.loading = false;
      m.redraw();
    }).catch(error => {
      console.error('Error loading discussions:', error);
      this.loading = false;
      m.redraw();
    });
  }
  view() {
    if (this.loading) {
      return m(LoadingIndicator); // Show a loading indicator while discussions load
    }

    return m('div', { className: 'DiscussionList-container' }, 
    this.discussions && this.discussions.length > 0 
      ? this.discussions.map(discussion => 
          m(DiscussionListItem, { discussion: discussion, params: this.discussions })
        )
      : m('div', 'No discussions found')
  );
  
  }
}
