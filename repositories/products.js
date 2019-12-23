const fs = require("fs");
const crypto = require("crypto");
const util = require("util");
const Repository = require("./repository.js");
const log = console.log;

class ProductsRepository extends Repository {

    
}

module.exports = new ProductsRepository("products.json");
