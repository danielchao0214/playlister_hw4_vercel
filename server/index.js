<<<<<<< HEAD
const app = require("./app");

const PORT = process.env.PORT || 4000;
=======
// THESE ARE NODE APIs WE WISH TO USE
const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')

// CREATE OUR SERVER
dotenv.config()
const PORT = process.env.PORT || 4000;
const app = express()

// SETUP THE MIDDLEWARE
app.use(express.urlencoded({ extended: true }))
app.use(cors({
    origin: ['https://playlister-hw4-vercel.vercel.app'],
    credentials: true
}))
app.use(express.json())
app.use(cookieParser())

// SETUP OUR OWN ROUTERS AS MIDDLEWARE
const authRouter = require('./routes/auth-router')
app.use('/auth', authRouter)
const playlistsRouter = require('./routes/playlists-router')
app.use('/api', playlistsRouter)

// INITIALIZE OUR DATABASE OBJECT
const db = require('./db')
db.on('error', console.error.bind(console, 'MongoDB connection error:'))
>>>>>>> 1b2bf013d7a1858c53c1e8637a016324ffc40312

// PUT THE SERVER IN LISTENING MODE
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))


