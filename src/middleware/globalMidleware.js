const morgan = require('morgan')

module.exports = (app, express) => {
  app.set('views', 'src/views')
  app.set('view engine', 'ejs')
  app.use(express.static('src/public'))
  app.use(express.urlencoded({ extended: true }))
  app.use(morgan('dev'))
}
