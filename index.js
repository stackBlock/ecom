const express = require("express");
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");
const authRouter = require("./routes/admin/auth.js");
const log = console.log;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cookieSession({
    keys: ["assdfSDFfjeGnvsdLLHSDdf9"]
  })
);
app.use(authRouter);

app.listen(3001, () => {
  console.log("listening");
});

// const bodyParser = (req, res, next) => {
//   if (req.method === "POST") {
//     req.on("data", data => {
//       const parsed = data.toString("utf8").split("&");
//       const formData = {};
//       for (let pair of parsed) {
//         const [key, value] = pair.split("=");
//         formData[key] = value;
//       }
//       req.body = formData;
//       next();
//     });
//   } else {
//     next();
//   }
// };
