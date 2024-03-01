// App.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import CreateUser from './components/CreateUser';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            emailAddress: '',
            userCreated: false
        };
        this.handleCreateUser = this.handleCreateUser.bind(this);
    }

    handleCreateUser(username, emailAddress) {
        this.setState({
            username,
            emailAddress,
            userCreated: true
        });
    }

    render() {
        return (
            <div>
                <CreateUser onCreateUser={this.handleCreateUser} />
                {this.state.userCreated && <Link to="/profile">Go to Profile</Link>}
            </div>
        );
    }
}

export default App;