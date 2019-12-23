const express = require("express");
const { validationResult } = require("express-validator");
const productsRepo = require("../../repositories/products.js");
const productsNewTemplate = require("../../views/admin/products/new.js");
const { requireTitle, requirePrice } = require("./validators.js");
const log = console.log;

const router = express.Router();

router.get("/admin/products", (req, res) => {});

router.post("/admin/products", (req, res) => {});

router.get("/admin/products/new", (req, res) => {
  res.send(productsNewTemplate({}));
});

router.post("/admin/products/new", [requirePrice, requireTitle], (req, res) => {
  const errors = validationResult(req);
  log(errors);

  res.send("Submitted");
});

module.exports = router;
