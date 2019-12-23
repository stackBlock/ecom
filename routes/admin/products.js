const express = require("express");
const productsRepo = require("../../repositories/products.js");
const productsNewTemplate = require("../../views/admin/products/new.js");
const log = console.log;

const router = express.Router();

router.get("/admin/products", (req, res) => {});

router.post("/admin/products", (req, res) => {});

router.get("/admin/products/new", (req, res) => {
  res.send(productsNewTemplate({}));
});

router.post("/admin/products/new", (req, res) => {});

module.exports = router;
