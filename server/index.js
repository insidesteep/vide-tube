require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const CacheControl = require("express-cache-controller")


const dev = process.env.NODE_ENV !== "production";
const next = require("next");
const nextApp = next({ dev });

const nextHandler = nextApp.getRequestHandler();

const { serverPort, appUrl, mongoURI } = require("../config/config");

// const connectDB = require("./server/utils/dbConnect");
const mongoose = require("mongoose");

mongoose.set("strictQuery", true);

nextApp
  .prepare()
  .then(async () => {
    const server = express();

    server.use(CacheControl({noCache: true}));
    server.use(cookieParser());
    server.use(bodyParser.json());
    server.use(
      session({
        secret: "super-secret-key",
        resave: false,
        saveUninitialized: false,
        cookie: { maxAge: 60000 },
      })
    );

    server.use("/api/videos", require("./routes/video.route"));
    server.use("/api/authors", require("./routes/author.route"));
    server.use("/api/auth", require("./routes/auth.route"));


    server.get("*", (req, res) => {
      return nextHandler(req, res);
    });

    mongoose.connect(mongoURI, { useNewUrlParser: true }).then(() => {
      console.log("> CONNECTION DB OK")
      server.listen(serverPort, (err) => {
        if (err) throw err;
        console.log(`> Ready on ${appUrl}:${serverPort}`);
      });
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
