const express = require('express')
const app = express()
const mysql = require('mysql2')


//middleware
app.use(express.json())

// Redirect
app.use('/posts', require('./routes/postRoutes'))

//global error handler
app.use((err, req, res, next) => {
  console.log(err.stack);
  console.log(err.name);
  console.log(err.code);

  res.status(500).json({
    message: "you done did it this time"
  })
})

const PORT = 3000

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
})

