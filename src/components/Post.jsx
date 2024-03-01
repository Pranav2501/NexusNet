// Post.jsx
import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Post.css';

class Post extends React.Component {
    handleComment = () => {
        const comment = prompt('Enter your comment:');
        this.props.onComment(comment);
    }

    render() {
        return (
            <div className="post-card">
                <div className="post-header">
                    <h3>Title :{this.props.title}</h3>
                    <p>Description:{this.props.content}</p>
                </div>
                {this.props.file && 
                    <div className="post-image">
                        <img src={this.props.file} alt={this.props.title} />
                    </div>
                }
                <div className="post-footer">
                    <p>Likes: {this.props.likes}</p>
                    <button onClick={this.props.onLike} className="like-button">Like</button>
                    <button onClick={this.handleComment} className="comment-button">Comment</button>
                </div>
                <p>Comments:</p>
                <div className="post-comments">
                    {this.props.comments.map((comment, index) => (
                        <p key={index}>{comment}</p>
                    ))}
                </div>
            </div>
        );
    }
}

Post.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    file: PropTypes.string,
    likes: PropTypes.number.isRequired,
    comments: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLike: PropTypes.func.isRequired,
    onComment: PropTypes.func.isRequired
};

export default Post;