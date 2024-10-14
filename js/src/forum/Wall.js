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
export default class WallUserPage extends UserPage<IUserPageAttrs, DiscussionListState> {
  composeButton: MyDecomposerButton | undefined;
  postsUserWall: PostsUserWall | undefined;
  
  
  oninit(vnode: Mithril.Vnode<IUserPageAttrs, this>) {
    super.oninit(vnode);
    this.postsUserWall = new PostsUserWall();
    this.loadUser(m.route.param('username'));
    this.composeButton = new MyDecomposerButton(); // Create an instance of CustomDiscussionButton
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
   
    return (
      <div className="WallUserPage">
       
       
       <div style="text-align:center;margin:10px 0"> {this.composeButton &&  this.composeButton.component()} </div>
       
       {this.postsUserWall && this.postsUserWall.view()}
     
      
      </div>
    );
  }
}
