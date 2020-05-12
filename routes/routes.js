let mongoose = require("mongoose");
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

let personSchema = mongoose.Schema({
  username: String,
  password: String,
  email: String,
  age: String,
  firstQuestion: String,
  secondQuestion: String,
  thirdQuestion: String,
});

let Person = mongoose.model("User_Information", personSchema);

exports.index = (req, res) => {
  Person.find((err, person) => {
    if (err) return console.error(err);
    res.render("index", {
      title: "Index page",
      people: person,
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

exports.loggedIn = (req, res) => {
  res.render("loggedIn", {
    title: "Logged In",
  });
};

exports.signupComplete = (req, res) => {
  res.render("signupComplete", {
    title: "Sign Up Complete",
  });
};

//might be the same as above?
exports.createPerson = (req, res) => {
  let person = new Person({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    age: req.body.age,
  });
  person.save((err, person) => {
    if (err) return console.error(err);
    console.log(req.body.name + " added");
  });
  res.redirect("/");
};

////////
