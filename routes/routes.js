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

// exports.index
