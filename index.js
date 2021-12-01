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
  app.get('/live', (req, res) => {
    questionsCollection.find({}).filter({ "category": "live" }).limit(10)
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
    scoreCollection.find({}).sort({ score: -1 })
      .toArray((err, documents) => {
        res.send(documents);
      })
  })
  app.get('/selfScores', (req, res) => {
    console.log(req.query.email)
    scoreCollection.find({ email: req.query.email })
      .toArray((err, documents) => {
        res.send(documents);
        console.log(documents);
      })
  })
  app.get('/SC1', (req, res) => {
    questionsCollection.find({}).filter({ "category": "SC1" })
      .toArray((err, documents) => {
        res.send(documents);
      })
  })
  app.get('/SC2', (req, res) => {
    questionsCollection.find({}).filter({ "category": "SC2" })
      .toArray((err, documents) => {
        res.send(documents);
      })
  })
  app.get('/SC3', (req, res) => {
    questionsCollection.find({}).filter({ "category": "SC3" })
      .toArray((err, documents) => {
        res.send(documents);
      })
  })
  app.get('/SC4', (req, res) => {
    questionsCollection.find({}).filter({ "category": "SC4" })
      .toArray((err, documents) => {
        res.send(documents);
      })
  })
  app.get('/SC5', (req, res) => {
    questionsCollection.find({}).filter({ "category": "SC5" })
      .toArray((err, documents) => {
        res.send(documents);
      })
  })
  app.get('/SC6', (req, res) => {
    questionsCollection.find({}).filter({ "category": "SC6" })
      .toArray((err, documents) => {
        res.send(documents);
      })
  })
  app.get('/SC7', (req, res) => {
    questionsCollection.find({}).filter({ "category": "SC7" })
      .toArray((err, documents) => {
        res.send(documents);
      })
  })
  app.get('/SC8', (req, res) => {
    questionsCollection.find({}).filter({ "category": "SC8" })
      .toArray((err, documents) => {
        res.send(documents);
      })
  })
  app.get('/SC9', (req, res) => {
    questionsCollection.find({}).filter({ "category": "SC9" })
      .toArray((err, documents) => {
        res.send(documents);
      })
  })
  app.get('/SC10', (req, res) => {
    questionsCollection.find({}).filter({ "category": "SC10" })
      .toArray((err, documents) => {
        res.send(documents);
      })
  })
  app.get('/SC11', (req, res) => {
    questionsCollection.find({}).filter({ "category": "SC11" })
      .toArray((err, documents) => {
        res.send(documents);
      })
  })
  app.get('/SC12', (req, res) => {
    questionsCollection.find({}).filter({ "category": "SC12" })
      .toArray((err, documents) => {
        res.send(documents);
      })
  })
  app.get('/SP1', (req, res) => {
    questionsCollection.find({}).filter({ "category": "SP1" })
      .toArray((err, documents) => {
        res.send(documents);
      })
  })
  app.get('/SP2', (req, res) => {
    questionsCollection.find({}).filter({ "category": "SP2" })
      .toArray((err, documents) => {
        res.send(documents);
      })
  })
  app.get('/SP3', (req, res) => {
    questionsCollection.find({}).filter({ "category": "SP3" })
      .toArray((err, documents) => {
        res.send(documents);
      })
  })
  app.get('/SP4', (req, res) => {
    questionsCollection.find({}).filter({ "category": "SP4" })
      .toArray((err, documents) => {
        res.send(documents);
      })
  })
  app.get('/SP5', (req, res) => {
    questionsCollection.find({}).filter({ "category": "SP5" })
      .toArray((err, documents) => {
        res.send(documents);
      })
  })
  app.get('/SP6', (req, res) => {
    questionsCollection.find({}).filter({ "category": "SP6" })
      .toArray((err, documents) => {
        res.send(documents);
      })
  })
  app.get('/SP7', (req, res) => {
    questionsCollection.find({}).filter({ "category": "SP7" })
      .toArray((err, documents) => {
        res.send(documents);
      })
  })
  app.get('/SP8', (req, res) => {
    questionsCollection.find({}).filter({ "category": "SP8" })
      .toArray((err, documents) => {
        res.send(documents);
      })
  })
  app.get('/SP9', (req, res) => {
    questionsCollection.find({}).filter({ "category": "SP9" })
      .toArray((err, documents) => {
        res.send(documents);
      })
  })
  app.get('/SP10', (req, res) => {
    questionsCollection.find({}).filter({ "category": "SP10" })
      .toArray((err, documents) => {
        res.send(documents);
      })
  })
  app.get('/SP11', (req, res) => {
    questionsCollection.find({}).filter({ "category": "SP11" })
      .toArray((err, documents) => {
        res.send(documents);
      })
  })
  app.get('/SP12', (req, res) => {
    questionsCollection.find({}).filter({ "category": "SP12" })
      .toArray((err, documents) => {
        res.send(documents);
      })
  })
  app.get('/SP13', (req, res) => {
    questionsCollection.find({}).filter({ "category": "SP13" })
      .toArray((err, documents) => {
        res.send(documents);
      })
  })
  app.get('/SP14', (req, res) => {
    questionsCollection.find({}).filter({ "category": "SP14" })
      .toArray((err, documents) => {
        res.send(documents);
      })
  })
  app.get('/Noun', (req, res) => {
    questionsCollection.find({}).filter({ "category": "Noun" })
      .toArray((err, documents) => {
        res.send(documents);
      })
  })
  app.get('/Pronoun', (req, res) => {
    questionsCollection.find({}).filter({ "category": "Pronoun" })
      .toArray((err, documents) => {
        res.send(documents);
      })
  })
  app.get('/Adjective', (req, res) => {
    questionsCollection.find({}).filter({ "category": "Adjective" })
      .toArray((err, documents) => {
        res.send(documents);
      })
  })
  app.get('/Adverb', (req, res) => {
    questionsCollection.find({}).filter({ "category": "Adverb" })
      .toArray((err, documents) => {
        res.send(documents);
      })
  })
  app.get('/Verb', (req, res) => {
    questionsCollection.find({}).filter({ "category": "Verb" })
      .toArray((err, documents) => {
        res.send(documents);
      })
  })
  app.get('/Literature', (req, res) => {
    questionsCollection.find({}).filter({ "category": "Literature" })
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