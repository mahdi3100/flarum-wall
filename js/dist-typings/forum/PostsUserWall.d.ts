import PostStreamState from 'flarum/forum/states/PostStreamState';
import Discussion from 'flarum/common/models/Discussion';
import DiscussionPage from 'flarum/forum/components/DiscussionPage';
/**
 * The extending DiscussionPage is for its method "positionChanged"
 * Not yet tested !
 */
export default class PostsUserWall extends DiscussionPage {
    selectedDiscussion: Discussion;
    stream: PostStreamState;
    constructor(selectedDiscussion: Discussion, stream: PostStreamState);
    view(): any;
}
