// CreateUser.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import Footer from '../templates/Footer';
import Header from '../templates/Header';
import '../styles/CreateUser.css';

class CreateUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            emailAddress: '',
            success: false
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(e) {
        this.setState({name: e.target.value});
    }

    handleEmailChange(e) {
        this.setState({emailAddress: e.target.value});
    }

    async handleSubmit(e) {
        e.preventDefault();
        // Save the user's information to the state
        this.setState({success: true});
        // Save the user's information to a database
        const newUser = {
            name: this.state.name,
            emailAddress: this.state.emailAddress,
            createdAt: serverTimestamp()
        };
        await addDoc(collection(db, 'users'), newUser);
    }

    render() {
        if (this.state.success) {
            return (
                <div>
                    <p>User successfully created!</p>
                    <Link to="/home">Go to homepage</Link>
                </div>
            );
        }

        return (
            <div>                
            <Header />
            <div className="create-user-container">
                <form onSubmit={this.handleSubmit} className="create-user-form">
                    <label>
                        Name:
                        <input type="text" value={this.state.name} onChange={this.handleNameChange} />
                    </label>
                    <label>
                        Email address:
                        <input type="email" value={this.state.emailAddress} onChange={this.handleEmailChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <Footer />
            </div>
            </div>
        );
    }

   
}

export default CreateUser;