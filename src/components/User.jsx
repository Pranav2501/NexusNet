// User.jsx
import React from 'react';
import PropTypes from 'prop-types';

class User extends React.Component {
    render() {
        return (
            <div>
                <h2>{this.props.name}</h2>
                <img src={this.props.profilePic} alt={this.props.name} style={{width: '100px', height: '100px'}} />
                <p>{this.props.bio}</p>
            </div>
        );
    }
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    profilePic: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired
};

export default User;