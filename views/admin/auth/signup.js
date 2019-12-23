const layout = require("../layout.js");
const { getErrors } = require("../../helpers.js");
const log = console.log;

module.exports = ({ req, errors }) => {
  return layout({
    content: `
        <div>
            Your id is: ${req.session.userId}
            <form method="POST">
                <input name="email" placeholder="email" />
                ${getErrors(errors, "email")}
                <input name="password" placeholder="password" />
                ${getErrors(errors, "password")}
                <input name="passwordConfirmation" placeholder="password confirmation" />
                ${getErrors(errors, "passwordConfirmation")}
                <button>Sign Up</button>
            </form>
        </div>
  `
  });
};
