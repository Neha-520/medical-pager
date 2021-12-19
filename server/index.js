const express = require('express')
const cors = require('cors') //for cross origin requests

const authRoutes = require('./routes/auth.js')

const app = express();
const PORT = process.env.PORT || 5000;

require('dotenv').config();

app.use(cors());
app.use(express.json()); //allow us to pass json pyload from client
app.use(express.urlencoded())

app.get('/', (req, res) => {
    res.send("hello world");
})

app.use('/auth', authRoutes)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
