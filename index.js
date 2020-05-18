const bcrypt = require("bcrypt-nodejs"),
  express = require("express"),
  expressSession = require("express-session"),
  path = require("path"),
  routes = require("./routes/routes.js"),
  bodyParser = require("body-parser"),
  cookieParser = require("cookie-parser"),
  app = express();

let urlencodedParser = bodyParser.urlencoded({
  extended: false,
});

//cookies - unfinished
app.use(cookieParser("This is my cookie passphrase"));
/////////

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use(express.static(path.join(__dirname + "/public")));
app.use(
  expressSession({
    secret: "yoyothisistopsecret",
    saveUninitialized: true,
    resave: true,
  })
);
app.get("/", routes.index);
app.get("/createLogin", routes.createLogin);
app.get("/login", routes.login);
app.get("/signupComplete", routes.signupComplete);
app.post("/signupCompleted", urlencodedParser, routes.createPerson);
app.get("/loggedIn", routes.loggedIn);
app.post("/loggedIn", urlencodedParser, routes.checkAuthorization);
app.get("/edit/:id", routes.edit);
app.post("/edit/:id", urlencodedParser, routes.editPerson);
app.get("/delete/:id", routes.delete);
app.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/");
    }
  });
});

app.listen(3000);
