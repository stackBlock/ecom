const layout = require("../layout.js");
const { getErrors } = require("../../helpers.js");
const log = console.log;

module.exports = ({ errors }) => {
  return layout({
    content: `
      <div>
          <form method="POST">
              <input name="email" placeholder="email" />
              ${getErrors(errors, "email")}
              <input name="password" placeholder="password" />
              ${getErrors(errors, "password")}
              <button>Sign In</button>
          </form>
      </div>
    `
  });
};
