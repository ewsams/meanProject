const express = require('express');

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers',
     'Origin,X-Requested-With,Content-Type,Accept');
     res.setHeader('Access-Control-Allow-Methods',
     'GET,POST,PATCH,PUT,DELETE,OPTIONS');
    next();
});

app.use('/api/posts', (req, res, next) => {
    const posts = [{
        id: 1,
        title: 'post1',
        content: 'post number 1'
    },
    {
        id: 2,
        title: 'post2',
        content: 'post number 2'
    },
    {
        id: 3,
        title: 'post3',
        content: 'post number 3'
    },
    {
        id: 4,
        title: 'post4',
        content: 'post number 4'
    }
    ]
    return res.status(200).json({
        message: 'post retrieved',
        posts: posts
    })
});

module.exports = app;