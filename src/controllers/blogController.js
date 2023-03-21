const Blog = require('../models/blog')

const blog_index = (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((blogs) => {
      res.render('blogs/index', { title: 'Blogs', blogs })
    })
    .catch((err) => console.log(err))
}

const blog_details = (req, res) => {
  const id = req.params.id
  Blog.findById(id)
    .then((blog) => {
      res.render('blogs/details', { blog, title: 'Blog Details' })
    })
    .catch((err) => {
      res.status(404).render('404', { title: 'Blog not found' })
    })
}

const blog_create_get = (req, res) => {
  res.render('blogs/create', { title: 'Create a new blog' })
}

const blog_create_post = (req, res) => {
  const blog = new Blog(req.body)
  blog
    .save()
    .then(() => res.redirect('/blogs'))
    .catch((err) => console.log(err))
}


const blog_update = (req, res) => {
  const id = req.params.id
  Blog.findByIdAndUpdate(id, req.body)
    .then(() => res.redirect(`/blogs/${id}`))
    .catch((err) => console.log(err))
}

const blog_delete = (req, res) => {
  const id = req.params.id
  Blog.findByIdAndDelete(id)
    .then(() => res.json({ message: '/blogs' }))
    .catch((err) => console.log(err))
}

module.exports = {
  blog_index,
  blog_details,
  blog_create_get,
  blog_create_post,
  blog_delete,
  blog_update,
}
