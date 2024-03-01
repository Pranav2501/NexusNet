// Profile.jsx
import React from 'react';
import { db } from '../firebase';
import { collection, onSnapshot, doc, updateDoc, orderBy, limit, query } from "firebase/firestore";
import { Link } from 'react-router-dom';
import Header from '../templates/Header';
import Footer from '../templates/Footer';
import  Navbar from '../templates/Navbar';
import '../styles/Profile.css';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            tempBio: {},
            tempProfilePic: {}
        };
        this.handleProfilePicChange = this.handleProfilePicChange.bind(this);
        this.handleBioChange = this.handleBioChange.bind(this);
        this.handleSaveChanges = this.handleSaveChanges.bind(this);
    }

    componentDidMount() {
        const usersRef = collection(db, 'users');
        const q = query(usersRef, orderBy("createdAt", "desc"), limit(1));
        onSnapshot(q, (snapshot) => {
            const users = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            this.setState({ users });
        });
    }

    handleProfilePicChange(index, e) {
        const newProfilePic = URL.createObjectURL(e.target.files[0]);
        this.setState(prevState => ({
            tempProfilePic: {
                ...prevState.tempProfilePic,
                [index]: newProfilePic
            }
        }));
    }

    handleBioChange(index, e) {
        const newBio = e.target.value;
        this.setState(prevState => ({
            tempBio: {
                ...prevState.tempBio,
                [index]: newBio
            }
        }));
    }

    handleSaveChanges(index) {
        const userRef = doc(db, 'users', this.state.users[index].id);
        updateDoc(userRef, {
            profilePic: this.state.tempProfilePic[index],
            bio: this.state.tempBio[index]
        }).then(() => {
            window.location.reload();
        }).catch((error) => {
            console.error("Error updating document: ", error);
        });
    }

    render() {
        return (
            <div> 
            <Navbar />
            <div className="profile-container">
                <h1>Your Profile</h1>
                {this.state.users.map((user, index) => (
                    <div key={index} className="profile-card">
                        <h2>{user.name}</h2>
                        <p>Email: {user.emailAddress}</p>
                        <img src={user.profilePic || 'https://via.placeholder.com/150'} alt={user.name} />
                        <label>
                            Profile Pic:
                            <input type="file" onChange={(e) => this.handleProfilePicChange(index, e)} />
                        </label>
                        <p>Bio:</p>
                        <label>
            
                            <textarea value={this.state.tempBio[index] || user.bio || ''} onChange={(e) => this.handleBioChange(index, e)} />
                        </label>
                        <button onClick={() => this.handleSaveChanges(index)}>Save Changes</button>
                    </div>
                ))}
                <Footer />
            </div>
            </div>
        );
    }
}

export default Profile;