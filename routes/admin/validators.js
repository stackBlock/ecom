const { check } = require("express-validator");
const usersRepo = require("../../repositories/users.js");
const log = console.log;

module.exports = {
  requireEmail: check("email")
    .trim()
    .normalizeEmail()
    .isEmail()
    .withMessage("Must provide a valid email.")
    .custom(async email => {
      const existingUser = await usersRepo.getOneBy({ email: email });
      if (existingUser) {
        throw new Error("Email in use");
      }
    }),
  requirePassword: check("password")
    .trim()
    .isLength({ min: 4, max: 20 })
    .withMessage("Must be between 4 and 20 characters"),
  requirePasswordConfirmation: check("passwordConfirmation")
    .trim()
    .isLength({ min: 4, max: 20 })
    .withMessage("Must be between 4 and 20 characters")
    .custom((passwordConfirmation, { req }) => {
      log(req.body.password);
      log(passwordConfirmation);
      if (req.body.password !== passwordConfirmation) {
        throw new Error("Passwords much match!");
      } else {
        return true;
      }
    }),
  requireValidEmail: check("email")
    .trim()
    .normalizeEmail()
    .isEmail()
    .withMessage("Must provide a valid email.")
    .custom(async email => {
      const user = await usersRepo.getOneBy({
        email: email
      });
      if (!user) {
        throw new Error("Email not found");
      }
    }),
  requireValidPassword: check("password")
    .trim()
    .custom(async (password, { req }) => {
      const user = await usersRepo.getOneBy({
        email: req.body.email
      });
      if (!user) {
        throw new Error("Invalid Password");
      }
      const validPassword = await usersRepo.comparePasswords(
        user.password,
        password
      );

      if (!validPassword) {
        throw new Error("Invalid password");
      }
    })
};
