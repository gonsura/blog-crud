const error404 = (req, res, next) => {
  res.status(404).render('404', { title: '404' })
}

const errorHandler = (err, req, res, next) => {
  res.status(err.status || 500)
  res.render('error', { err })
}

module.exports = { error404, errorHandler }
