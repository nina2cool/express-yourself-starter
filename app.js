// dependencies from npm (package.json)
const express = require('express');
const path = require('path');
const ejs = require('ejs');

// Initialize our app
const app = express();

app.use(express.static('assets'));

app.set('views', path.join(__dirname, 'files'));

app.set('view engine', 'ejs');

// Add a route to our app that renders our index view
app.get('/', function(req, res, next) {
    res.render('index.ejs', {
        page_title: "Christina's Bio",
        greeting: 'Christina McMillan',
        heading_one: 'My children',
        children: ['Jillian', 'Emma', 'Cadence', 'Haley'],
        brief_bio: "Life-long Texan here. Born and raised in Dallas, I moved in 1999 to attend UT Austin. Though I graduated in 2003 with a degree in architectural engineering, I followed the entrepreneurial route, doing finance, admin, and bookkeeping in addition to programming work for my co-owned businesses. My attention to detail and desire to genuinely help people, along with my love of numbers, led me to be more on the admin side of the businesses - finances, bookkeeping, including updating websites and programming CRMs. In 2016, I shifted my focus to full-time web development and started my own web dev business.",
        image_name: 'Christina.jpg',
        labels: ['A many-faceted person', 'Mother', 'Stepmother', 'Wife', 'Web Developer', 'Girl Scout Leader', 'Friend', 'Daughter', 'Sister', 'Avid Reader', 'Netflix Binge Watcher', 'Cook']

    });
});

// Set up our server
const port = 3000;
app.listen(port, () => console.log(`Server listening on: ${port}`));
