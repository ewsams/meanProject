const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers',
        'Origin,X-Requested-With,Content-Type,Accept');
    res.setHeader('Access-Control-Allow-Methods',
        'GET,POST,PATCH,PUT,DELETE,OPTIONS');
    next();
});

app.get('/api/posts', (req, res, next) => {
    const posts = [{
        id: 1,
        title: 'post1',
        content: 'This is post number 1'
    },
    {
        id: 2,
        title: 'post2',
        content: 'This is post number 2'
    },
    {
        id: 3,
        title: 'post3',
        content: 'This is post number 3'
    },
    {
        id: 4,
        title: 'post4',
        content: 'This is post number 4'
    }
    ]
    return res.status(200).json({
        message: 'Post retrieved',
        posts: posts
    })
});

app.post('/api/posts', (req, res, next) => {
    const post = req.body;
    console.log(post);
    req.status(201).json({
        message: 'Post added'
    });
});

module.exports = app;