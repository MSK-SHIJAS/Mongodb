import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import User from './User.js'

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/book')
  .then(() => console.log('Connected!'))
  .catch(err => console.error('Connection error:', err));

const db = mongoose.connection;

// let middle = (req, res, next) => {
//   let x = 2;
//   if (x === 2) {
//     console.log('middleware');
//     next();
//   } else {
//     res.json('invalid');
//   }
// };

const middle = (req, res, next) => {
  console.log('This is a middleware function');
  next(); // Move to the next middleware or route handler
};

app.use(middle);
app.use(cors());
app.use(express.json());

app.get('/login', (req, res) => {
  res.json('login page');
});

app.post('/register', async (req, res) => {
  console.log(req.body);
  let newdata = new User(req.body);
  console.log(newdata, 'filtered data');
  let response = await newdata.save();
  res.json(response);
});

app.get('/view', async (req, res) => {
  let users = await User.find();
  console.log(users);
  res.json(users);
});

app.delete('/deleteData/:id', async (req, res) => {
  let id = req.params.id;
  console.log(id);
  let response = await User.findByIdAndDelete(id);
  res.json(response);
});

app.get('/findOne/:id', async (req, res) => {
  let id = req.params.id;
  console.log(id);
  let response = await User.findById(id);
  console.log(response);
  res.json(response);
});

app.put('/updateOne/:id', async (req, res) => {
  let id = req.params.id;
  let response = await User.findByIdAndUpdate(id, req.body);
  res.json(response);
});

app.post('/login', async (req, res) => {
  console.log(req.body);
  const { username, password } = req.body;
  let response = await User.findOne({ username: username, password: password });
  console.log(response);
  if (response) {
    res.json(response);
  } else {
    res.status(401).json("invalid credentials");
  }
});

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});
