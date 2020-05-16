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
      title: "Home page",
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
  Person.findById(req.params.id, (err, person) => {
    if (err) return console.error(err);
    person.username = req.body.username;
    person.password = req.body.password;
    person.age = req.body.age;
    person.email = req.body.email;
    person.firstQuestion = req.body.firstQuestion;
    person.secondQuestion = req.body.secondQuestion;
    person.thirdQuestion = req.body.thirdQuestion;
    person.save((err, person) => {
      if (err) return console.error(err);
      console.log(req.body.name + " updated");
    });
  });
  res.redirect("/");
};

exports.createPerson = (req, res) => {
  let person = new Person({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    age: req.body.age,
    firstQuestion: req.body.firstQuestion,
    secondQuestion: req.body.secondQuestion,
    thirdQuestion: req.body.thirdQuestion,
  });
  person.save((err, person) => {
    if (err) return console.error(err);
    console.log(req.body.name + " added");
  });
  res.redirect("/signupComplete");
};

//new input below - needs to compare to object id? Not sure how to do that..
exports.checkAuthorization = (req, res) => {
  if (req.body.username.id == Person.findById()) {
    req.session.id = {
      isAuthenticated: true,
      username: req.body.username,
    };
    res.redirect("/loggedIn");
  } else {
    res.redirect("/");
  }
};
//
exports.hashingAndSalting = (req, res) => {
  try {
    let userPassword;
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(userPassword, salt);

    console.log(salt);
    console.log(hash);

    console.log(bcrypt.compareSync(userPassword, hash));
    console.log(bcrypt.compareSync("paSsW0rd", hash));
  } catch (err) {
    console.log("There is an error");
  }
};
