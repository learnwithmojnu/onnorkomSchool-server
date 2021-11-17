const express = require('express');
const ObjectId = require('mongodb').ObjectID;
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
//app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
require('dotenv').config();
const port = 5000;


const MongoClient = require('mongodb').MongoClient;
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.jvd1e.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const questionsCollection = client.db("onnoRokom").collection("questions");
  const scoreCollection = client.db("onnoRokom").collection("scores");
  app.get('/questions', (req, res) => {
    questionsCollection.find({}).filter({"category": "BCS"})
      .toArray((err, documents) => {
        res.send(documents);
      })
  })
  app.post("/AddQuestion", (req, res) => {
    const questions = req.body;
    console.log(questions)
    questionsCollection.insertOne(questions)
      .then(result => {
        res.redirect('https://onnorokom-school.web.app/AddQuestion');
      })
  })
  app.post('/score', (req, res) => {
    const newScore = req.body;
    scoreCollection.insertOne(newScore)
      .then(result => {
        res.send(result.insertedCount > 0);
      })
  })
  app.get('/scores', (req, res) => {
    //console.log(req.query.email)
      scoreCollection.find({}).sort({score: -1})
      .toArray((err, documents) => {
        res.send(documents);
      })
  })
  app.get('/PBGS9', (req, res) => {
      questionsCollection.find({}).filter({"category": "PBGS9"})
      .toArray((err, documents) => {
        res.send(documents);
      })
  })
  app.delete('/delete/:id', (req, res) => {
    questionsCollection.deleteOne({ _id: ObjectId(req.params.id) })
      .then(result => {
        res.send(result.deletedCount > 0);
      })
  })
});

app.get('/', (req, res) => {
  res.send("I am working, continue your work")
})
app.listen(process.env.PORT || port)