const database = require('../database');

class ProductModel {
    constructor() {
      if (this.instance) return this.instance;
      ProductModel.instance = this;
    }
  
    get() {
      return database.getList("products");
    }
  
    getById(id) {
      return database.get("products", id);
    }
  
    create(product) {
      return database.create("products", product);
    }
  
    delete(id) {
      return database.delete("products", id);
    }
  
    update(id, product) {
      return database.set("products", id, product);
    }
  }
  
  module.exports = new ProductModel();