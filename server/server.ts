const express = require('express');
const session = require('express-session');
const routes = require('./routes');
const sequelizeRename = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
// link to other file / dotenv

const PORT = process.env.PORT || 3001
const app = express();

const sess = {
    secret: process.env.SECRET,
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelizeRename,
    }),
  };

app.use(session(sess));

app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

sequelizeRename.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}!`)
    })
  });