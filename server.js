const express = require('express')

const app = express()

const cookbookRouter = require('./controllers/cookbookRoutes')
const authorRouter = require('./controllers/authorRoutes')

// Add the middleware code needed to accept incoming data and add it to req.body

app.use('/api/cookbooks/', cookbookRouter)
app.use('/api/authors/', authorRouter)

app.listen(4000, () => console.log('Server running on port 4000!'))
