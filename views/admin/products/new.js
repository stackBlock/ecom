const layout = require("../layout.js");
const { getError } = require("../../helpers.js");
const log = console.log;

module.exports = ({ errors }) => {
  return layout({
    content: `
        <form method="POST">
            <input placeholder="Title" name="title" />
            <input placeholder="Price" name="price" />
            <input type="file" name="image" />
            <button>Submit</button>
        </form>
      `
  });
};
