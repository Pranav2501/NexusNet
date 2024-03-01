// Search.jsx
import React from 'react';
import { db } from '../firebase';
import { collection, query, where, getDocs } from "firebase/firestore";
import Navbar from '../templates/Navbar';
import Footer from '../templates/Footer';
import '../styles/Search.css';


class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            searchName: ''
        };
        this.handleSearchNameChange = this.handleSearchNameChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearchNameChange(e) {
        this.setState({ searchName: e.target.value });
    }

    handleSearch() {
        const usersRef = collection(db, 'users');
        const q = query(usersRef, where("name", "==", this.state.searchName));
        getDocs(q).then((querySnapshot) => {
            const users = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            this.setState({ users });
        });
    }

    render() {
        return (
            <div>
            <Navbar />

            <div className="search-container">
                <h1>Search for Users</h1>
                <div className="search-form">
                    <input type="text" value={this.state.searchName} onChange={this.handleSearchNameChange} placeholder="Search by name" />
                    <button onClick={this.handleSearch}>Search</button>
                </div>
                {this.state.users.map((user, index) => (
                    <div key={index} className="search-result">
                        <h2>{user.name}</h2>
                        <p>Email: {user.emailAddress}</p>
                        <img src={user.profilePic || 'https://via.placeholder.com/150'} alt={user.name} />
                        <p>Bio: {user.bio}</p>
                    </div>
                ))}
                <Footer />
            </div>
            </div>
        );
    } 
}

export default Search;