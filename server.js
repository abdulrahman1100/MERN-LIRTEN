const express = require('./node_modules/express');
const mongoose = require('mongoose')
const cors = require('./node_modules/cors/lib')
const passport = require('./node_modules/passport/lib')
require('./node_modules/dotenv/lib/main').config()
const createError = require('./node_modules/http-errors');
const cookieParser = require('./node_modules/cookie-parser');
const logger = require('./node_modules/morgan');
const bodyParser = require('./node_modules/body-parser');
const path = require('path');

// DB Config
const db = require('./config/keys').mongoURI
const multer=require('./node_modules/multer');
const ejs = require('./node_modules/ejs/lib/ejs');
const exphbs = require('express-handlebars');
// Connect to mongo
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err))

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(cors())
app.use(passport.initialize())
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// app.engine('handlebars', exphbs());
// app.set('view engine', 'handlebars');
// Static folder
// app.use(express.static(path.join(__dirname, 'client/build')));
// EJS
// app.set('view engine', 'ejs');
// // Public Folder
// // app.use(express.static('./public'));
// // app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');
// // Passport configuration
require('./config/passport')(passport)


const tasks = require('./routers/api/tasks.js'); 
const coworkingSpaces =require('./routers/api/coworkingSpaces');
const consultancyAgencies =require('./routers/api/consultancyAgencies');
const educationalOrganizations =require('./routers/api/educationalOrganizations');
const courses = require('./routers/api/courses.js');
const masterClasses = require('./routers/api/masterClasses.js');
const courseRequests = require('./routers/api/courserequests.js');
 const posts = require('./routers/api/posts.js');
const notifications = require('./routers/api/notifications.js');
const members =require('./routers/api/members');
const partners =require('./routers/api/partners');
const users =require('./routers/api/users');
const admins= require('./routers/api/admins');
const rooms= require('./routers/api/rooms');
const projects=require('./routers/api/projects');
const certificates=require('./routers/api/certificates');
const chatBots=require('./routers/api/chatBots');
const skills=require('./routers/api/skills');
const trainingPrograms=require('./routers/api/trainingPrograms');

app.use(express.static(path.join(__dirname, 'client/build')));
// EJS
app.set('view engine', 'ejs');
  


app.use('/api/notifications', notifications);
app.use('/api/courses', courses);
app.use('/api/courseRequests', courseRequests);
app.use('/api/tasks',tasks);
app.use('/api/coworkingSpaces', coworkingSpaces);
app.use('/api/educationalOrganizations',educationalOrganizations);
app.use('/api/members',members);
app.use('/api/users',users);
app.use('/api/masterClasses',masterClasses);
app.use('/api/partners',partners);
app.use('/api/consultancyAgencies',consultancyAgencies);
app.use('/api/admins',admins);
app.use('/api/rooms',rooms);
app.use('/api/projects',projects)
app.use('/api/certificates',certificates)
app.use('/api/chatBots',chatBots)
app.use('/api/trainingPrograms',trainingPrograms)
app.use('/api/skills',skills)
app.use('/api/posts',posts)
app.use((req,res)=> res.sendFile(path.resolve(__dirname,'client/build','index.html')));
app.use((req,res) => res.status(404).send(`<h1>Can not find what you're looking for</h1>`))

const port = process.env.PORT || 3333

app.listen(port, () => console.log(`Server on ${port}`))
