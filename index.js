const express = require("express");
const log = console.log;

const app = express();

app.get("/", (req, res) => {
  res.send(`
  <div>
    <form method="POST">
      <input name="email" placeholder="email" />
      <input name="password" placeholder="password" />
      <input name="passwordConfirmation" placeholder="password confirmation" />
      <button>Sign Up</button>
    </form>
  </div>
  `);
});

app.post("/", (req, res) => {
  req.on("data", data => {
    const parsed = data.toString("utf8").split("&");
    const formData = {};
    for (let pair of parsed) {
      const [key, value] = pair.split("=");
      formData[key] = value;
    }
    log(formData);
  });
});

app.listen(3001, () => {
  console.log("listening");
});
