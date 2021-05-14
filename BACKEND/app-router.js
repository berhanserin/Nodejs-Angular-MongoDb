let router = require("express").Router();
let categoryController = require("./controllers/categoryController");
let bookController = require("./controllers/bookController");

//! http://localhost/api /category
//* bu url de get isteği çalışırsa
router
  .route("/category")
  .get(categoryController.list)
  .post(categoryController.create);

//! PUT http://localhost/api/category/232516551
router
  .route("/category/:category_id")
  .get(categoryController.getById)
  .put(categoryController.update)
  .delete(categoryController.delete);

//! Get http://localhost/api/book
router.route("/book").get(bookController.list).post(bookController.created);
router.route("/books/:categoryId").get(bookController.listByCategoryId);
router
  .route("/book/:book_id")
  .get(bookController.getById)
  .put(bookController.update)
  .delete(bookController.delete);

module.exports = router;
