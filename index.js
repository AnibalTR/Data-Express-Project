//require section
const bcrypt = require("bcrypt-nodejs"),
  express = require("express"),
  expressSession = require("express-session"),
  path = require("path"),
  routes = require("./routes/routes.js"),
  bodyParser = require("body-parser"),
  cookieParser = require("cookie-parser"),
  app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");

app.use(express.static(path.join(__dirname + "/public")));

let urlencodedParser = bodyParser.urlencoded({
  extended: false,
});

// synchronous hashing and salting
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
//authorization - unfinished

//cookies - unfinished
app.use(cookieParser("This is my cookie passphrase"));

//
app.get("/", routes.index);
app.get("/", routes.createLogin);
app.get("/", routes.login);
//~~~~~~app.get('/', routes.loggedIn)

app.listen(3000);
