/*
const express = require('express');
 
// Express app
const app = express();

// Listen for requests
app.listen(3000);

app.get('/', (req, res) => {
    //res.send('<p>Home page</p>');
    res.sendFile('./views/index.html', {root: __dirname});
});

app.get('/about', (req, res) => {
    //res.send('<p>Home page</p>');
    res.sendFile('./views/about.html', {root: __dirname});
});

// for re-direct
app.get('/about-us', (req, res) => {
    res.redirect('/about');
});

// for 404-error page
app.use((req, res) => {
    res.sendFile('./views/404.html', {root: __dirname});
});
*/


/* 
This app.use() func must be written at last only bcz if we use this code at the top or any other place, 
then it will read that app.use func and then executes for any requests we make on the server, 
therefore its needed to be written at the end
*/



/*
// Mongoose and mongo sandbox routes
app.get('/add-blog', (req, res) => {
    const blog = new Blog({
        title: 'new blog',
        snippet: 'about my new blog',
        body: 'more about my new blog'
    });

    blog.save()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
});

app.get('/all-blogs', (req, res) => {
    Blog.find()
    .then((result) => {
        res.send(result);
    })
    .catch((err) => {
        console.log(err);
    });
})

app.get('/single-blog', (req, res) => {
    Blog.findById('64e73cc798b6faccb3f03c99')
    .then((result) => {
        res.send(result);
    })
    .catch((err) => {
        console.log(err);
    });
})
*/

// routes

/*
app.get('/', (req, res) => {
    const blogs = [
        { title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur' },
        { title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur' },
        { title: 'How to defeat browser', snippet: 'Lorem ipsum dolor sit amet consectetur' },
    ];

    res.render('index', { title: 'Home', blogs });
});
*/



/*
const express = require('express');
const morgan = require('morgan');  // morgan is a 3rd party middleware
const mongoose = require('mongoose');
const Blog = require('./models/blog'); 

// Express app
const app = express();

// Connect to mongo db
const dbURI = 'mongodb+srv://iamlakshmanbs:lakshman@cluster0.yslbxzt.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => console.log("Connected to db"))  //call back function
    .catch((err) => console.log(err));

// Register ejs view engine
app.set('view engine', 'ejs');

app.listen(3000, () => {
    console.log("Port 3000 is running");
});

// middleware and static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));   // middle ware
app.use(morgan('dev'));

// routes
app.get('/', (req, res) => {
    res.redirect("/blogs");
})

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});


// blog routes
app.get('/blogs', (req, res) => {
    Blog.find().sort({createdAt: -1 }) //descending order w.r.t timestamps
    .then((result) => {
        res.render('index', {title: 'All Blogs', blogs: result })
    })
    .catch((err) => {
        console.log(err);
    });
});


app.post('/blogs', (req, res) => {
    //console.log(req.body)
    const blog = new Blog(req.body)

    blog.save()
        .then((result) => {
            res.redirect('/blogs')
        })
        .catch((err) => {
            console.log(err)
        });
});


app.get('/blogs/:id', (req, res) => {
    const id = req.params.id
    //console.log(id)
    Blog.findById(id)
        .then(result => {
            res.render('details', {blog: result, title: 'Blog Details'})
        })
        .catch(err => {
            console.log(err)
        });
});


//Delete
app.delete('/blogs/:id', (req, res) => {
    const id = req.params.id;

    Blog.findByIdAndDelete(id)
        .then(result => {
            res.json({ redirect: '/blogs' });
        })
        .catch(err => {
            console.log(err)
            //res.status(500).send("Internal Server Error!")
        })
})


app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a new Blog' });
});

// 404 Page
app.use((req, res) => {
    res.status(404).render('404', { title: '404-Error' });
});
*/

/*
GET requests to get a resource
POST requests to create new data (ex. a new blog)
DELETE requests to delete data (ex. delete a blog)
PUT requests to update data (ex. update a blog)
*/
