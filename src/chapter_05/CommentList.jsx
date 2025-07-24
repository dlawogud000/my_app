import React from 'react';
import Comment from './Comment';

const comments = [
    {
        name: "User1",
        comment: "This is the first comment.",
    },
    {
        name: "User2",
        comment: "This is the second comment.",
    },
    {
        name: "User3",
        comment: "This is the third comment.",
    },
];

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;