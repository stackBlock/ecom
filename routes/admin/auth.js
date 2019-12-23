const express = require("express");
const { check, validationResult } = require("express-validator");
const usersRepo = require("../../repositories/users.js");
const signupTemplate = require("../../views/admin/auth/signup.js");
const signinTemplate = require("../../views/admin/auth/signin.js");
const {
  requireEmail,
  requirePassword,
  requirePasswordConfirmation,
  requireValidEmail,
  requireValidPassword
} = require("./validators.js");
const log = console.log;

const router = express.Router();

// SignUp **********************************

router.get("/signup", (req, res) => {
  res.send(signupTemplate({ req: req }));
});

router.post(
  "/signup",
  [requireEmail, requirePassword, requirePasswordConfirmation],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.send(signupTemplate({ req, errors }));
    }

    const { email, password } = req.body;
    const user = await usersRepo.create({ email: email, password: password });

    req.session.userId = user.id;

    res.send("Account Created!!");
  }
);

// SignOut ***********************************

router.get("/signout", (req, res) => {
  req.session = null;
  res.send("You are logged out!");
});

// SignIn *************************************

router.get("/signin", [requireEmail, requirePassword], (req, res) => {
  res.send(signinTemplate({}));
});

router.post(
  "/signin",
  [requireValidEmail, requireValidPassword],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.send(signinTemplate({ errors }));
    }

    const { email } = req.body;
    const user = await usersRepo.getOneBy({
      email: email
    });

    req.session.userId = user.id;

    res.send("You are signed in");
  }
);

module.exports = router;
