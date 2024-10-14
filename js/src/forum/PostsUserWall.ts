import app from 'flarum/forum/app';
import DiscussionListItem from 'flarum/forum/components/DiscussionListItem';
import PostStream from 'flarum/forum/components/PostStream';
import Post from 'flarum/common/models/Post';
import PostStreamState from 'flarum/forum/states/PostStreamState';
export default class PostsUserWall {

  constructor(selectedDiscussion, stream) {
  
    this.selectedDiscussion = selectedDiscussion;  // Assigning the 'name' attribute to the class
    this.stream = stream;    // Assigning the 'age' attribute to the class
    console.log(this.selectedDiscussion)
    console.log(this.selectedDiscussion)
  }

  oninit(vnode) {

    this.selectedDiscussion = selectedDiscussion;  // Assigning the 'name' attribute to the class
    this.stream = stream;    // Assigning the 'age' attribute to the class

  }
 
  


 
  view() {
   
    if(this.selectedDiscussion && this.stream){
    return m('div', { className: 'DiscussionPage-stream' }, 
                  m(PostStream, {
                    discussion: this.selectedDiscussion,
                    stream: this.stream,
                    onPositionChange: this.positionChanged.bind(this) // Position handler
                  })
                
    );
                }
  }

  positionChanged() {
    // Handle position change in the PostStream, e.g., infinite scrolling
    console.log('Post stream position changed');
  }
}
