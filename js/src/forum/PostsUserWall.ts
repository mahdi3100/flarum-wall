import app from 'flarum/forum/app';
import DiscussionListItem from 'flarum/forum/components/DiscussionListItem';
import PostStream from 'flarum/forum/components/PostStream';
import Post from 'flarum/common/models/Post';
import PostStreamState from 'flarum/forum/states/PostStreamState';
import Discussion from 'flarum/common/models/Discussion';
import { ApiResponseSingle } from 'flarum/common/Store';
import Model from 'flarum/common/Model';
export default class PostsUserWall {
  selectedDiscussion: Discussion;
  stream: PostStreamState;


  constructor(selectedDiscussion: Discussion, stream: PostStreamState) {

    this.selectedDiscussion = selectedDiscussion;  // Assigning the 'name' attribute to the class
    this.stream = stream;    // Assigning the 'age' attribute to the class

  }
  /*
    oninit(vnode) {
  
      this.selectedDiscussion = selectedDiscussion;  // Assigning the 'name' attribute to the class
      this.stream = stream;    // Assigning the 'age' attribute to the class
  
    }*/





  view() {

   
      return m('div', { className: 'DiscussionPage-stream' },
        m(PostStream, {
          discussion: this.selectedDiscussion,
          stream: this.stream,
          //onPositionChange: this.positionChanged.bind(this) 
        })

      );
    
  }


}
