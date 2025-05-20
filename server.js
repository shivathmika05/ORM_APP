const express = require('express');

require('./db')

const app = express();
app.use(express.json());

const userRouter = require('./userroutes')
app.use('/users', userRouter)


app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
