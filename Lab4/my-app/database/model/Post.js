// database/Post.js
import { Model } from '@nozbe/watermelondb'
import {children, field, immutableRelation, relation, text} from "@nozbe/watermelondb/decorators";

export class Post extends Model {
    static table = 'posts'
    static associations = {
        comments: { type: 'has_many', foreignKey: 'post_id' },
    }

    @text('title') title
    @text('body') body
    @field('is_pinned') isPinned

    @children('comments') comments
}

export class Comment extends Model {
    static table = 'comments'
    static associations = {
        posts: { type: 'belongs_to', key: 'post_id' },
    }

    @relation('posts', 'post_id') post
    @immutableRelation('users', 'author_id') author
}