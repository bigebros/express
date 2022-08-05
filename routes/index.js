const express = require('express');
const router = express.Router();

/* GET home page. */
const messages = [{
  text: 'Hi there!',
  user: 'Amando',
  added: new Date()
},
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date()
  }];

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

router.post( '/new', ( req, res, next ) => {
  messages.push({text: messageText, user: messageUser, added: new Date()});
  res.redirect('/');
});

module.exports = router;