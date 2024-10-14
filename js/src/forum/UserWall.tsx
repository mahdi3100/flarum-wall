// src/forum/extend.js
import app from 'flarum/forum/app';
import UserPage, { IUserPageAttrs } from 'flarum/forum/components/UserPage';
import { extend } from 'flarum/common/extend';
import MyDecomposerButton from './MyDecomposerButton';
import Wall from './Wall'; // Your modified Wall component
import Component from 'flarum/common/Component';
import DiscussionListState from 'flarum/forum/states/DiscussionListState';
import Mithril from 'mithril';
import User from 'flarum/common/models/User';
import PostsUserWall from "./PostsUserWall"

import LoadingIndicator from 'flarum/common/components/LoadingIndicator';

import Post from 'flarum/common/models/Post';
import PostStreamState from 'flarum/forum/states/PostStreamState';

export default class WallUserPage extends UserPage<IUserPageAttrs, DiscussionListState> {
  composeButton: MyDecomposerButton | undefined;
  postsUserWall: PostsUserWall | undefined;
  
  constructor(){
    super();
    // super()
     this.discussion = null;
     this.getIdThread();
  
   }
  oninit(vnode: Mithril.Vnode<IUserPageAttrs, this>) {
    super.oninit(vnode);
    //this.postsUserWall = new PostsUserWall();
    this.loadUser(m.route.param('username'));
    this.composeButton = new MyDecomposerButton(); // Create an instance of CustomDiscussionButton
   

    app.redrawHandler = (newIdDiscission) => {

       this.loadDiscussion(newIdDiscission)
    };
  
    this.loading = true;
    this.selectedDiscussion = null; // To track the selected discussion
    this.stream = null; // PostStream data
  }
  requestParams(): Record<string, unknown> {
    return {
      bySlug: true,
      //page: { near: 3 },
    };
  }

  getIdThread(){
    const getUsername =  m.route.param("username") ;
    this.loading = true;

    app.request({
      
      method: 'GET',
      //url:"http://localhost:8888/api/wall-discussion-id"
      url: app.forum.attribute('apiUrl') + '/wall-discussion-id?username='+getUsername
  })
  .then(response => {
      console.log('Discussions: ID', response);
      this.loading = false;
    
      if(!response?.data?.id){return;} //dsiplay there is nothing to show
      this.loadDiscussion(response["data"]["id"]);
     
      
  })
  .catch(error => {
  
      console.error('Error fetching discussions:', error);
      this.loading = false;
  });
  }
  
  loadDiscussion(discussions_wall) {
    
    let includedPosts: Post[] = [];
    this.loading = true;
    const params = this.requestParams();
    ///const getUsername =  m.route.param("username") ;
  
  
   
    app.store.find('discussions', discussions_wall , params
   //{ filter: { "discussions_wall":getUsername },}//,=> cause headache on rertieving discussions  as Array or model Api 
    ).then(discussionsssssss => {
      this.loading = false;
     
      //if(!discussions[0]){ m.redraw();return}
   

     
      const discussion = discussionsssssss;
      console.log("discussion payload")
      console.log(discussionsssssss.payload.included)
      // Assign the discussion to the class property
   
      this.discussion = discussion;
      if (discussion.payload && discussion.payload.included[0]) {

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
      console.log("posts")
      
      console.log(includedPosts)
      this.selectedDiscussion = discussion;
      this.stream = new PostStreamState(discussion, includedPosts);//null //discussions.postStream();
      
      
      this.postsUserWall = new PostsUserWall(this.selectedDiscussion,this.stream);
    
      m.redraw();
    }).catch(error => {
      console.error('Error loading discussions:', error);
      this.loading = false;
      m.redraw();
    });
  }
  show(user: User): void {
    super.show(user);

    this.state = new DiscussionListState({
      filter: { author: user.username() },
      sort: 'newest',
    });

    this.state.refresh();
  }

  content() {
    if (this.loading) {
      return m(LoadingIndicator); // Show a loading indicator while discussions load
    }else{
    return  m('div',{ className: 'WallUserPage-container' },
    
    m('div', { className: 'DiscussionList-container' },
    (this.discussion 
    && 
    this.stream) 
      ? 
      
      
             this.postsUserWall && this.postsUserWall.view()
         
        
      : this.composeButton &&  this.composeButton.component()

    )
  );}
  }


}
