const express = require('express')
const cors = require('cors') //for cross origin requests

const authRoutes = require('./routes/auth.js')

const app = express();
const PORT = process.env.PORT || 5000;

require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioClienr = t = require('twilio')(accountSid, authToken);

app.use(cors());
app.use(express.json()); //allow us to pass json pyload from client
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send("hello world");
})

app.use('/auth', authRoutes)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
