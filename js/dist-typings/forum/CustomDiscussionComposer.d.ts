export default class CustomDiscussionComposer extends DiscussionComposer {
    static initAttrs(attrs: any): void;
    oninit(vnode: any): void;
    fields: {
        title: any;
        content: any;
        tags: any;
        discussions_wall: any;
    };
}
import DiscussionComposer from 'flarum/forum/components/DiscussionComposer';
