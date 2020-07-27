const functions = require("firebase-functions");
const express = require("express");
const app = express();
const productsRouter = require("./api/controllers/product_controller");

app.use(express.json());
app.use("/products", productsRouter);

exports.api = functions.https.onRequest(app);

// To handle "Function Timeout" exception
exports.functionsTimeOut = functions.runWith({
  timeoutSeconds: 300,
});

exports.setupdb = functions.https.onRequest(require('./setup_database'))
