// Home.jsx
import React from 'react';
import Post from './Post';
import { Link } from 'react-router-dom';
import { app, db } from '../firebase';
import { collection, addDoc, onSnapshot, doc, updateDoc } from "firebase/firestore";
import Navbar from '../templates/Navbar';
import Footer from '../templates/Footer';
import '../styles/Home.css';
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            newPostTitle: '',
            newPostContent: '',
            newPostFile: null
        };
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleContentChange = this.handleContentChange.bind(this);
        this.handleFileChange = this.handleFileChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleLike = this.handleLike.bind(this);
        this.handleComment = this.handleComment.bind(this);
    }

    componentDidMount() {
        const postsRef = collection(db, 'newposts');
        onSnapshot(postsRef, (snapshot) => {
            const posts = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            this.setState({ posts });
        });
    }

    handleTitleChange(e) {
        this.setState({newPostTitle: e.target.value});
    }

    handleContentChange(e) {
        this.setState({newPostContent: e.target.value});
    }

    handleFileChange(e) {
        this.setState({newPostFile: URL.createObjectURL(e.target.files[0])});
    }

    async handleSubmit(e) {
        e.preventDefault();
        const newPost = {
            title: this.state.newPostTitle, 
            content: this.state.newPostContent, 
            file: this.state.newPostFile,
            likes: 0,
            comments: [],
            timestamp: new Date()
        };
        await addDoc(collection(db, 'newposts'), newPost);
        this.setState({
            newPostTitle: '',
            newPostContent: '',
            newPostFile: null
        });
    }

    async handleLike(index) {
        const postRef = doc(db, 'newposts', this.state.posts[index].id);
        await updateDoc(postRef, {
            likes: this.state.posts[index].likes + 1
        });
    }

    async handleComment(index, comment) {
        const postRef = doc(db, 'newposts', this.state.posts[index].id);
        await updateDoc(postRef, {
            comments: [...this.state.posts[index].comments, comment]
        });
    }

    render() {
        return (
            <div className="home-container">
                <Navbar />
                <h1>HomePage</h1>
                <form onSubmit={this.handleSubmit} className="home-form">
                    <label>
                        Title:
                        <input type="text" value={this.state.newPostTitle} onChange={this.handleTitleChange} />
                    </label>
                    <label>
                        Content:
                        <textarea value={this.state.newPostContent} onChange={this.handleContentChange} />
                    </label>
                    <label>
                        File:
                        <input type="file" onChange={this.handleFileChange} />
                    </label>
                    <input type="submit" className="submit-button" value="Submit" />
                </form>
                <div className="post-container">

                {this.state.posts.map((post, index) => (

                    <Post 
                        key={index} 
                        title={post.title} 
                        content={post.content} 
                        file={post.file} 
                        likes={post.likes} 
                        comments={post.comments} 
                        onLike={() => this.handleLike(index)}
                        onComment={(comment) => this.handleComment(index, comment)}
                    />
                ))}
                </div>
                <Footer />
            </div>
        );
    }
}

export default Home;