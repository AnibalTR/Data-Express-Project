let mongoose = require("mongoose");
const bcrypt = require("bcrypt-nodejs");
mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb+srv://AnibalTR:xFeg7GR8oCkmv4dS@cluster0-gipdv.mongodb.net/test?retryWrites=true&w=majority",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  }
);

let mdb = mongoose.connection;
mdb.on("error", console.error.bind(console, "connection error:"));
mdb.once("open", (callback) => {});

var visited = 0;
var today = new Date();
var time =
  today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

let personSchema = mongoose.Schema({
  username: String,
  password: String,
  email: String,
  age: String,
  firstQuestion: String,
  secondQuestion: String,
  thirdQuestion: String,
  eyes: String,
  nose: String,
  mouth: String,
  color: String,
});

let Person = mongoose.model("User_Information", personSchema);

// api stuff
// stuff to test with the api its not actually connected to anything
const theJSON = [
  {
    name: "Bob",
    age: 21,
    species: "zombie",
  },
  {
    name: "Suzette",
    age: 34,
    species: "vampire",
  },
  {
    name: "Harry",
    age: 42,
    species: "werewolf",
  },
  {
    name: "Sally",
    age: 28,
    species: "human",
  },
];

let userAnswers = JSON.stringify(personSchema);

exports.api = (req, res) => {
  res.json(personSchema);
};

//I need to make small adjustments on timed cookie

exports.index = (req, res) => {
  visited++;
  let lastTimeVisitedMessage;
  let cookieMessage;
  //insert cookie here
  res.cookie("visited", visited, time, { maxAge: 999999999 });
  if (req.cookies.beenHereBefore == "yes") {
    cookieMessage =
      `You have been here ` + (parseInt(req.cookies.visited) + 1) + ` times.`;
  } else {
    res.cookie("beenHereBefore", "yes", { maxAge: 999999999 });
    res.cookie("visited", 0, { maxAge: 999999999 });
    cookieMessage = "This is your first time visiting";
  }
  Person.find((err, person) => {
    if (err) return console.error(err);
    res.render("index", {
      title: "Home page",
      people: person,
      cookieMessage,
    });
  });
};

exports.login = (req, res) => {
  res.render("login", {
    title: "Login Page",
  });
};

exports.createLogin = (req, res) => {
  res.render("createLogin", {
    title: "Create Username Login",
  });
};

exports.wouldYouRather = (req, res) => {
  res.render("wouldYouRather", {
    title: "Would You Rather",
  });
};

exports.signupComplete = (req, res) => {
  res.render("signupComplete", {
    title: "Sign Up Complete",
  });
};

exports.delete = (req, res) => {
  Person.findByIdAndRemove(req.params.id, (err, person) => {
    if (err) return console.error(err);
    res.redirect("/");
  });
};

exports.edit = (req, res) => {
  Person.findById(req.params.id, (err, person) => {
    if (err) return console.error(err);
    res.render("edit", {
      title: "Edit Person",
      person,
    });
  });
};

exports.editPerson = (req, res) => {
  let userPassword = req.body.password;
  let salt = bcrypt.genSaltSync(10);
  let hash = bcrypt.hashSync(userPassword, salt);
  Person.findById(req.params.id, (err, person) => {
    if (err) return console.error(err);
    person.username = req.body.username;
    person.password = hash;
    person.age = req.body.age;
    person.email = req.body.email;
    person.firstQuestion = req.body.firstQuestion;
    person.secondQuestion = req.body.secondQuestion;
    person.thirdQuestion = req.body.thirdQuestion;
    person.eyes = req.body.eyes;
    person.nose = req.body.nose;
    person.mouth = req.body.mouth;
    person.color = req.body.color;
    person.save((err, person) => {
      if (err) return console.error(err);
      console.log(req.body.name + " updated");
    });
  });
  res.redirect("/");
};

exports.createPerson = (req, res) => {
  let userPassword = req.body.password;
  let salt = bcrypt.genSaltSync(10);
  let hash = bcrypt.hashSync(userPassword, salt);

  let person = new Person({
    username: req.body.username,
    password: hash,
    email: req.body.email,
    age: req.body.age,
    firstQuestion: req.body.firstQuestion,
    secondQuestion: req.body.secondQuestion,
    thirdQuestion: req.body.thirdQuestion,
    eyes: req.body.eyes,
    nose: req.body.nose,
    mouth: req.body.mouth,
    color: req.body.color,
  });
  person.save((err, person) => {
    if (err) return console.error(err);
    console.log(req.body.name + " added");
  });
  res.redirect("/signupComplete");
};

exports.checkAuthorization = (req, res) => {
  console.log(req.body.username);
  Person.find({ username: req.body.username }, (err, person) => {
    if (
      person.length === 1 &&
      bcrypt.compareSync(req.body.password, person[0].password)
    ) {
      req.session.id = {
        isAuthenticated: true,
        username: req.body.username,
        password: person[0].password,
        eyes: person[0].eyes,
        nose: person[0].nose,
        mouth: person[0].mouth,
        color: person[0].color,
      };
      console.log(person);
      res.render("loggedIn", {
        title: "Logged In",
        item: person[0],
      });
    } else if (person.length > 1) {
      console.log("There is a duplicate.");
    } else {
      res.redirect("/login");
    }
    if (err) return console.error(err);
  });
};
