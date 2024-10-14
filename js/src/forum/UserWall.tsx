import app from 'flarum/forum/app';
import UserPage, { IUserPageAttrs } from 'flarum/forum/components/UserPage';

import MyDecomposerButton from './MyDecomposerButton';

import DiscussionListState from 'flarum/forum/states/DiscussionListState';
import Mithril from 'mithril';
import User from 'flarum/common/models/User';
import PostsUserWall from "./PostsUserWall"

import LoadingIndicator from 'flarum/common/components/LoadingIndicator';

import Post from 'flarum/common/models/Post';
import PostStreamState from 'flarum/forum/states/PostStreamState';
import Discussion from 'flarum/common/models/Discussion';


import { ApiResponseSingle } from 'flarum/common/Store';
import Model from 'flarum/common/Model';
export default class WallUserPage extends UserPage<IUserPageAttrs, DiscussionListState> {
  composeButton: MyDecomposerButton | undefined;
  postsUserWall: PostsUserWall | undefined;

  loading: boolean = false;
  selectedDiscussion: Discussion | undefined;
  stream: PostStreamState | undefined;


  constructor() {
    super();


    this.getIdThread();

  }
  oninit(vnode: Mithril.Vnode<IUserPageAttrs, this>) {
    super.oninit(vnode);


    this.loadUser(m.route.param('username'));

    // Create an instance of CustomDiscussionButton
    this.composeButton = new MyDecomposerButton();

    //For redrawing this component when new discussion is being submitted. fired by CustomDiscussionComposer
    app.redrawHandler = (newIdDiscission) => {
      this.loadDiscussion(newIdDiscission)
    };

    this.loading = true;

  }
  requestParams(): Record<string, unknown> {
    return {
      bySlug: true,
      //page: { near: 3 },
    };
  }

  //Retrieve the ID Thread conversation !  
  getIdThread() {
    const getUsername = m.route.param("username");
    this.loading = true;

    app.request({

      method: 'GET',
      //url:"http://localhost:8888/api/wall-discussion-id"
      url: app.forum.attribute('apiUrl') + '/wall-discussion-id?username=' + getUsername
    })
      .then(response => {
        console.log('Discussions: ID', response);
        this.loading = false;

        if (!response?.data?.id) {m.redraw(); return; } //dsiplay this.composeButton.component()


        this.loadDiscussion(response.data.id);


      })
      .catch(error => {

        console.error('Error fetching discussions:', error);
        this.loading = false;
      });
  }

  //Retreive Discussion with app.store.find("discussion",ID)
  loadDiscussion(discussions_wall: string) {

    let includedPosts: Post[] = [];
    this.loading = true;
    const params = this.requestParams();
    ///const getUsername =  m.route.param("username") ;

    app.store.find('discussions', discussions_wall, params

      //{ filter: { "discussions_wall":getUsername },}
      //cause me headache on retrieving discussions  as Array or model Api therefore i used getIdThread() first
    ).then((discussion: ApiResponseSingle<Model>) => {

      this.loading = false;

      if (discussion.payload && discussion.payload.included) {

        const discussionId = discussion.id();

        //retrieving Posts of this sepecific Discussion
        includedPosts = discussion.payload.included
          .filter(
            (record) =>
              record.type === 'posts' &&
              record.relationships &&
              record.relationships.discussion &&
              !Array.isArray(record.relationships.discussion.data)
              && record.relationships.discussion.data.id === discussionId
          )
          .map((record) => app.store.getById<Post>('posts', record.id) as Post)
          .sort((a: Post, b: Post) => a.number() - b.number())
          .slice(0, 20);
      }

      this.selectedDiscussion = discussion as Discussion;
      this.stream = new PostStreamState(discussion, includedPosts);//null //discussions.postStream();


      this.postsUserWall = new PostsUserWall(this.selectedDiscussion, this.stream);

      m.redraw();
    }).catch(error => {
      console.error('Error loading discussions:', error);
      this.loading = false;
      m.redraw();
    });
  }


  show(user: User): void {
    super.show(user);

    /*
    this.state = new DiscussionListState({
      filter: { author: user.username() },
      sort: 'newest',
    });

    this.state.refresh();
    */
  }

  content() {
    if (this.loading) {
      return m(LoadingIndicator);
    } else {
      return m('div', { className: 'WallUserPage-container' },

        m('div', { className: 'DiscussionList-container' },
          (this.selectedDiscussion
            &&
            this.stream)
            ? this.postsUserWall && this.postsUserWall.view()

            : this.composeButton && this.composeButton.component()

        )
      );
    }
  }


}
