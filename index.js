// import express from 'express';
// import bodyParser from 'body-parser';

// const app = express();
// const port = 3000;
// app.use(express.static('public'));
// app.use(bodyParser.urlencoded({ extended: true }));




// let blogPosts = [];

// // HTTP GETs
// app.get('/', (req, res) => {
//     res.render('index.ejs', { blogPosts: blogPosts }); 
// });

// // HTTP Posts
// app.post('/submit', (req, res) => {
//     let blogHeading = req.body["fHeading"];
//     let blogPost = req.body["writeBlog"];
//     let blogData = {
//         blogHeading: blogHeading,
//         blogPost: blogPost
//     };
    
//     blogPosts.push(blogData); 

//     res.render('index.ejs', { blogPosts: blogPosts }); 
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
app.use(bodyParser.json()); // To handle JSON body in requests

let blogPosts = [];

// HTTP GETs
app.get('/', (req, res) => {
    res.render('index.ejs', { blogPosts: blogPosts });
});

// HTTP POSTs
app.post('/submit', (req, res) => {
    let blogHeading = req.body["fHeading"];
    let blogPost = req.body["writeBlog"];
    let blogData = {
        id: blogPosts.length + 1, 
        blogHeading: blogHeading,
        blogPost: blogPost,
        postDate: new Date()
    };
    blogPosts.push(blogData);
    res.render('index.ejs', { blogPosts: blogPosts });
});

// HTTP PUT for editing a post
app.put('/edit', (req, res) => {
    const { id, updatedContent } = req.body;
    const postIndex = blogPosts.findIndex(post => post.id === parseInt(id));
    
    if (postIndex !== -1) {
        blogPosts[postIndex].blogPost = updatedContent;
        res.json({ success: true });
    } else {
        res.status(404).json({ success: false });
    }
});

// HTTP DELETE for deleting a post
app.delete('/delete', (req, res) => {
    const { id } = req.body;
    const postIndex = blogPosts.findIndex(post => post.id === parseInt(id));

    if (postIndex !== -1) {
        blogPosts.splice(postIndex, 1);
        res.json({ success: true });
    } else {
        res.status(404).json({ success: false });
    }
});

// Listening Server Here
app.listen(port, () => {
    console.log(`Server is successfully running on ${port}`);
});
