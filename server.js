require('dotenv').config();
const express = require('express');
const layouts = require('express-ejs-layouts');
const session = require('express-session');
const passport = require('./config/ppConfig'); //
const flash = require('connect-flash');

const db = require('./models');

const app = express();
app.set('view engine', 'ejs');

// Session 
const SECRET_SESSION = process.env.SECRET_SESSION;
const isLoggedIn = require('./middleware/isLoggedIn');

// MIDDLEWARE
app.use(require('morgan')('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
app.use(layouts);

// Session Middleware

// secret: What we actually will be giving the user on our site as a session cookie
// resave: Save the session even if it's modified, make this false
// saveUninitialized: If we have a new session, we save it, therefore making that true

const sessionObject = {
  secret: SECRET_SESSION,
  resave: false,
  saveUninitialized: true
}
app.use(session(sessionObject));
// Passport
app.use(passport.initialize()); // Initialize passport
app.use(passport.session()); // Add a session
// Flash 
app.use(flash());
app.use((req, res, next) => {
  console.log(res.locals);
  res.locals.alerts = req.flash();
  res.locals.currentUser = req.user;
  next();
});

// Controllers
app.use('/auth', require('./controllers/auth'));

app.use('/signedin', require('./controllers/signedin'));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/profile', isLoggedIn, async(req, res) => {
  try {
    const { name, id } = req.user.get();
    console.log("*************************************************")
    console.log(req)
    console.log("*************************************************")
    // const { isdeleted } = req.textpost.get();
    let textposts = await db.textpost.findAll({
      where: {
        userId: id
        
      }
    })
    console.log(textposts + "**************************************")
    res.render('profile', { name, textposts });

  } catch(e) {
    console.log(e)
  }
});


app.post('/profile', (req, res) => {
  console.log(req.body);
  db.textpost.create(req.body)
  .then((createdPost)=> {
    console.log('Created Post = ', createdPost);
    res.redirect('/profile');
  });
})

app.post('/profile/delete', async(req, res) => {
  console.log("*******************************TEST**************************")
  console.log(db.textpost.isdeleted)
  try {
    let textposts = await db.textpost.update({ isdeleted: true }, {
      where: {
        isdeleted: "false"
      }
    })
    res.redirect('/profile')
  } catch(e) {
    console.log(e + "******************************")
  }
  
})

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`🎧 You're listening to the smooth sounds of port ${PORT} 🎧`);
});

module.exports = server;



// espn.com

// basketball/college
// basketball/nba
// basketball/gleague
// basketball/europe

// football
// baseball
// ...


