const express = require('express');
const redis = require('redis');

const app = express();
const redisClient = redis.createClient({host : 'redis', port : 6379});

app.get('/', (req, res) => {
    redisClient.get('visits', (err, visits) => {
        currVisits = parseInt(visits ?? 0)
        res.send('Number of visits is ' + currVisits);    
        redisClient.set('visits', currVisits + 1);
    });
    
});

app.listen(8081, () => {
    console.log("Listening on port 8081")
});
