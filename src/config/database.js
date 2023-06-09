require('dotenv').config()
const mongoose = require('mongoose')

const dbUrl = process.env.DB_URL

const connectDB = async () => {
  try {
    await mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log('Database connected')
  } catch (error) {
    console.log(error.message)
    process.exit(1)
    
  }
}

module.exports = connectDB()
