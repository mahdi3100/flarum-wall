import app from 'flarum/forum/app';
import DiscussionListItem from 'flarum/forum/components/DiscussionListItem';
import LoadingIndicator from 'flarum/common/components/LoadingIndicator';
import PostStream from 'flarum/forum/components/PostStream';
import Post from 'flarum/common/models/Post';
import PostStreamState from 'flarum/forum/states/PostStreamState';
export default class PostsUserWall {
  oninit(vnode) {
    this.discussions = [];
    this.loading = true;
    this.selectedDiscussion = null; // To track the selected discussion
    this.stream = null; // PostStream data
   
  }
  constructor(){
    // super()
     this.discussions = [];
     this.loadDiscussion();
 
   }
   requestParams(): Record<string, unknown> {
    return {
      bySlug: true,
     // page: { near: 1 },
    };
  }
  loadDiscussion() {
    let includedPosts: Post[] = [];
    this.loading = true;
    const params = this.requestParams();
    app.store.find('discussions', //"2" , params
   { filter: { "discussions_wall": m.route.get("username") }},
    ).then(discussions => {
      this.loading = false;
      console.log(discussions)
      if(!discussions[0]){ m.redraw();return}
      
      let discussion = discussions[0];
      this.discussions = discussion;
      if (discussion.payload && discussion.payload.included) {
        const discussionId =  discussion.id();
  
        includedPosts = discussion.payload.included
          .filter(
            (record) =>
              record.type === 'posts' &&
              record.relationships &&
              record.relationships.discussion &&
              !Array.isArray(record.relationships.discussion.data)
               &&    record.relationships.discussion.data.id === discussionId
          )
          // We can make this assertion because posts should be in the store,
          // since they were in the discussion's payload.
          .map((record) => app.store.getById<Post>('posts', record.id) as Post)
          .sort((a: Post, b: Post) => a.number() - b.number())
          .slice(0, 20);
      }
      
      this.selectedDiscussion = discussion;
      this.stream = new PostStreamState(discussion, includedPosts);//null //discussions.postStream();
    
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
      this.discussions && this.discussions.length != 0 
        ? [
        
            this.selectedDiscussion && this.stream 
              ? m('div', { className: 'DiscussionPage-stream' }, 
                  m(PostStream, {
                    discussion: this.selectedDiscussion,
                    stream: this.stream,
                    onPositionChange: this.positionChanged.bind(this) // Position handler
                  })
                )
              : null
          ]
        : m('div', 'No discussions found')
    );
  }

  positionChanged() {
    // Handle position change in the PostStream, e.g., infinite scrolling
    console.log('Post stream position changed');
  }
}
