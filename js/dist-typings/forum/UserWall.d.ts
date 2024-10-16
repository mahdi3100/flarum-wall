import UserPage, { IUserPageAttrs } from 'flarum/forum/components/UserPage';
import MyDecomposerButton from './MyDecomposerButton';
import DiscussionListState from 'flarum/forum/states/DiscussionListState';
import User from 'flarum/common/models/User';
import PostsUserWall from "./PostsUserWall";
import PostStreamState from 'flarum/forum/states/PostStreamState';
import Discussion from 'flarum/common/models/Discussion';
export default class WallUserPage extends UserPage<IUserPageAttrs, DiscussionListState> {
    composeButton: MyDecomposerButton | undefined;
    postsUserWall: PostsUserWall | undefined;
    loading: boolean;
    selectedDiscussion: Discussion | undefined;
    stream: PostStreamState | undefined;
    constructor();
    oninit(vnode: any): void;
    requestParams(): Record<string, unknown>;
    getIdThread(): void;
    loadDiscussion(discussions_wall: string): void;
    show(user: User): void;
    content(): any;
}
