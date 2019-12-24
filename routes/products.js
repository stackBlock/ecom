const express = require("express");
const productsRepo = require("../repositories/products.js");
const productsIndexTemplate = require("../views/products/index.js");
const log = console.log;

const router = express.Router();

router.get("/", async (req, res) => {
  const products = await productsRepo.getAll();
  res.send(productsIndexTemplate({ products }));
});

module.exports = router;
