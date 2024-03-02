# NexusNet
Welcome to NexusNet, a social media platform designed for your preferences. This application allows users to create an account, post content & interact with other users through comments and likes. The project is built using the React-Vite Framework and JS Classes, no hooks are implemented in this code. Firebase was used to serve as the backend and provide functionalities for hosting the server. The platform also allows users to customize their profile sections with pictures & bio, along with an option to find the details of other users by typing their name.

Framework - React-Vite
CSS - Boostrap & custom sytling
Backend - Firestore Database
Hosting - Firebase Hosting

## GitHub Repository
The current repository was reinitialized from the project folder by removing the .git directory, since the old submission had merge conflicts which could not be resolved. This new Repository has a few changes made to Firebase files which could not be merged, so the entire repo was wiped before pushing the code again. Here's the screenshot of the old repository before it was wiped.

![GitHub Repo Old](./src/images/GitHubSS.png)


## Getting Started

To get a local copy up and running, follow these simple steps.

1. Make sure you have the latest version of NodeJS installed using the command:

```bash
npm install npm@latest -g
```
2. Clone the repository using the following command:
```bash
git clone https://github.com/Pranav2501/NexusNet.git
```
3. Move to the project folder using:
```bash
cd NexusNet
```

3. To install package dependencies, use the following command:
```bash
npm install
```
4. To run the program:
```bash
npm run dev
```

5. If any errors, persist make sure you have Firebase installed:
```bash
npm install --save firebase
```
### Hosting
The project is currently hosted using Firebase, kindly use this link: https://nexusnet-63734.web.app

### Video Demo
Link - https://northeastern.zoom.us/rec/share/cOVEJPE01xjjAkOR0sBZdjtw1oqvWtQhrO3cr_VDYTmrUxDIXc4ZuTW-w5baKPyb.TkfIz3Uq19wb7b_K?startTime=1709348812000
Passcode: B!KD8bZU
### LICENSE

The project is licensed user MIT and is publicly available to all for use.
### Functionalities Implemented
- Create Users
- Update User Profile (Bio & Profile Pic)
- Search for Other Users
- Post Content with Title & Description
- View Available Posts
- Add Likes
- Add Comments
### Functionalities Missing
- ML Algorithm for custom-tailoring
- Discussion Channels
- Firebase Authentication 

### Acknowledgments 
- Sources Used (YouTube) - https://www.youtube.com/watch?v=FweHcYHkt9A&t=5573s
- GitHub Co-Pilot for fixing errors & debugging
- CS 5010 Programming Design Paradigms Course by Dr. John Alexis Guerra Gomez (Professor) & Mr. Ali Saremi (TA)

### Notes
This was a challenging project to do with just JS classes, since its a social media platform that needs to keep track of the available posts, likes, comments & users. The firestore database helped in storing information and has been implemented along with the React Classes. Modularity is ensured by having separate components for Rendering. The code submitted on GitHub had a few changes, but there were some merge-conflicts, hence the .git directory was erased and the updated version was uploaded.
### Snapshots
Create User Page
![CreateUser](./src/images/LoginPage.png)
Successful User Creation Page
![SuccessPage](./src/images/SuccessfulLogin.png)
Home Page
![Home Page](./src/images/HomePage.png)
Profile Page
![Profile Page](./src/images/ProfilePage.png)
Search User Page
![Search Page](./src/images/SearchUserPage.png)

