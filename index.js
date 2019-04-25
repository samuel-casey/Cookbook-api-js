const express = require('express')
// 1. Require body-parser and savie it to the variable parser.

const app = express()

const cookbookController = require('./controllers/cookbooks')
const authorController = require('./controllers/authors')

// 2. Add the coded needed to make body-parser work within your app.

app.use('/api/cookbooks/', cookbookController)
app.use('/api/authors/', authorController)

app.listen(4000, () => console.log('Server running on port 4000!'))
