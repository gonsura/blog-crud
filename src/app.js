const express = require('express')
const blogRoutes = require('./routes/blogRoutes')
const { error404, errorHandler } = require('./middleware/errorMiddleware')

require('dotenv').config()
const app = express()
const PORT = process.env.PORT || 3001
require('./config/database')

require('./middleware/globalMidleware')(app, express)


app.get('/', (req, res) => res.redirect('/blogs'))
app.use('/about', (req, res) => res.render('about', { title: 'about' }))
app.use('/blogs', blogRoutes)

app.use(error404)
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})