const mongoose = require('mongoose')

const
userName = 'chana',
password = 'chanaam12',
connectionString = `mongodb+srv://${userName}:${password}@mongo.r1kkb.mongodb.net/mongo?retryWrites=true&w=majority`


console.log('connecting ..')
mongoose.connect(connectionString)
    .then(() => {
        console.log('Mongo connected!')
    })
