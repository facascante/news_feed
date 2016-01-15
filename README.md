# news_feed
## installation

Pre-requisite
    -- nodejs
    -- npm
    -- mongodb
    --supported OS
```
1. install mongodb on you local or 
    connect to existing mongodb server by modifying the mongourl in config/config.json
2. install npm dependencies
   $> npm install
3. install bower dependencies
   $> bower install
4. Run the application
   $> node bin/www
   
```
Sample Data

```
[ { publish: true,
    created: Fri Jan 15 2016 19:17:46 GMT+0800 (PHT),
    __v: 0,
    news: '2nd news feed from client 2',
    _id: 5698d55a634bf1a90c5f57ed },
  { publish: true,
    created: Fri Jan 15 2016 19:17:31 GMT+0800 (PHT),
    __v: 0,
    news: 'first news feed from client 1',
    _id: 5698d54b634bf1a90c5f57ec } ]
    
```
