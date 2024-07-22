// copy from https://github.com/djblanc360/basic-jwt-auth/blob/main/server.js
// attempt to run react native app and node server with concurrently did not work
// must run separately
const dotenv = require('dotenv')
dotenv.config()

const express = require('express')

// secure passing info for auth
const jwt = require('jsonwebtoken') // to create and verify tokens
const bcrypt = require('bcryptjs') // hash password

const app = express()
app.use(express.json()) // parse incoming requests with JSON payloads
const router = express.Router()

// handling auth token
const SECRET_KEY = process.env.SECRET_KEY

// handles incoming requests, checks if token is valid
// authentication: verifies incoming request contains valid jwt
// authorization: attaches user info to request object for subsequent routes
const authToken = (req, res, next) => {
    const header = req.headers['authorization'] // retrieve authorization header
    const token = header && header.split(' ')[1] // retrieve token from header
    if (token == null) return res.sendStatus(401) // if token is missing, return 401

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) return res.sendStatus(403) // error callback if token is invalid or expired
        req.user = user // decoded user from token is stored in req.user
                        // allows subsequent routes to access protected user info
        next() // pass control to next function or router
    })
}

// hashing password before storage ensures passwords are not exposed
// even if db is compromised
// hashing is one-way function, cannot be reversed
const hashPassword = (password) => {
    // bcrypt.hashSync is synchronous & returns hashed password, no callback
    return bcrypt.hashSync(password, 10)
}

// dummy data for user
const users = [
    {
        username: 'admin',
        email: 'test@example.com',
        password: hashPassword('password')
    },
    {
        username: 'user',
        email: 'user@test.com',
        password: hashPassword('password')
    }
]

// endpoints
router.post('/login', (req, res) => {
    const { email, password } = req.body
    const user = users.find(u => u.email === email)

    if (!user || !bcrypt.compareSync(password, user.password)) {
        return res.status(401).json({ message: 'Invalid email or password' })
    }

    const token = jwt.sign({ email: user.email }, SECRET_KEY, { expiresIn: '1h' })
    res.json({ token })
})

router.post('/register', (req, res) => {
    const { username, email, password } = req.body
    if (!username || !email || !password) {
        return res.status(400).json({ message: 'Missing required fields' })
    }
    const user = users.find(u => u.email === email)

    if (user) {
        return res.status(400).json({ message: 'User already exists' })
    }

    users.push({ username, email, password: hashPassword(password) })
    res.json({ message: 'User created' })
})

app.use('/auth', router)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
