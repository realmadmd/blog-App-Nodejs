// import express from 'express';
// import bodyParser from 'body-parser';

// const app = express();
// const port = 3000;
// app.use(express.static('public'));
// app.use(bodyParser.urlencoded({ extended: true }));




// let taskPosts = [];

// // HTTP GETs
// app.get('/', (req, res) => {
//     res.render('index.ejs', { taskPosts: taskPosts }); 
// });

// // HTTP Posts
// app.post('/submit', (req, res) => {
//     let taskHeading = req.body["fHeading"];
//     let taskPost = req.body["writetask"];
//     let taskData = {
//         taskHeading: taskHeading,
//         taskPost: taskPost
//     };
    
//     taskPosts.push(taskData); 

//     res.render('index.ejs', { taskPosts: taskPosts }); 
// });

// // HTTP Puts
// app.put('/', (req, res) => {
//     // Implement PUT logic here
// });

// // HTTP Patches
// app.patch('/', (req, res) => {
//     // Implement PATCH logic here
// });

// // Listening Server Here
// app.listen(port, () => {
//     console.log(`Server is successfully running on ${port}`);
// });



import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let taskPosts = [];

// HTTP GET
app.get('/', (req, res) => {
    res.render('index.ejs', { taskPosts: taskPosts });
});

// HTTP POST to create a new post
app.post('/submit', (req, res) => {
    const taskHeading = req.body.fHeading;
    const taskPost = req.body.writetask;
    const taskData = {
        id: taskPosts.length,
        taskHeading: taskHeading,
        taskPost: taskPost,
        postDate: new Date()
    };
    taskPosts.push(taskData);
    
    res.redirect('/');
});

// HTTP PUT to edit a post
app.put('/edit/:postid', (req, res) => {
    const postId = parseInt(req.params.postid, 10);
    console.log(parseInt(req.params.postid))
    const updatedHeading = req.body.newHeading;
    const updatedPostContent = req.body.newPostContent;

    if (postId >= 0 && postId < taskPosts.length) {
        taskPosts[postId].taskHeading = updatedHeading;
        taskPosts[postId].taskPost = updatedPostContent;
        res.json({ message: 'Post updated successfully', updatedPost: taskPosts[postId] });
    } else {
        res.status(404).json({ message: 'Post not found' });
    }
});

// HTTP DELETE to delete a post
app.delete('/delete/:postid', (req, res) => {
    const postId = parseInt(req.params.postid, 10);

    if (postId >= 0 && postId < taskPosts.length) {
        taskPosts.splice(postId, 1);
        res.json({ message: 'Post deleted successfully' });
    } else {
        res.status(404).json({ message: 'Post not found' });
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server is successfully running on port ${port}`);
});
