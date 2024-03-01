import PropTypes from 'prop-types';
import React from 'react';

class Content extends React.Component {
    render() {
        return (
            <div>
                {this.props.posts.map((post, index) => (
                    <div key={index}>
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                        <p>Likes: {post.likes}</p>
                        <button onClick={() => this.props.onLike(index)}>Like</button>
                        {post.comments.map((comment, commentIndex) => (
                            <p key={commentIndex}>{comment}</p>
                        ))}
                        <button onClick={() => this.props.onComment(index)}>Comment</button>
                    </div>
                ))}
            </div>
        );
    }
}

Content.propTypes = {
    posts: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
            likes: PropTypes.number.isRequired,
            comments: PropTypes.arrayOf(PropTypes.string).isRequired,
        })
    ).isRequired,
    onLike: PropTypes.func.isRequired,
    onComment: PropTypes.func.isRequired
};

export default Content;