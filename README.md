# NexusNet
Welcome to NexusNet, a social media platform designed for your preferences. This application allows users to create an account, post content & interact with other users through comments and likes. The project is built using the React-Vite Framework and JS Classes, no hooks are implemented in this code. Firebase was used to serve as the backend and provide functionalities for hosting the server.

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
### LICENSE

The project is licensed user MIT and is publicly available to all for use.
### Functionalities Implemented
- Create Users
- Update User Profile
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
![Example Image](./src/assets/images/snapshot1.png)


