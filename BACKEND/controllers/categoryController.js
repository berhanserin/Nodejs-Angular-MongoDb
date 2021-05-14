const response = require("../response");

Category = require("../models/category.model");

//! GET http:localhost/api/category
exports.list = (req, res) => {
  Category.find({}, (err, categories) => {
    if (err) {
      return new response(null, err).error500(res);
    } else {
      return new response(categories, null).success(res);
    }
  });
};

//! Get http://localhost/api/category/84023804923
exports.getById = (req, res) => {
  Category.findById(req.params.category_id, (err, categories) => {
    if (err) {
      return new response(null, err).error500(res);
    }
    if (categories) {
      return new response(categories, null).success(res);
    } else {
      return new response().notFount(res);
    }
  });
};

//! Post http://localhost/api/category
exports.create = (req, res) => {
  var category = new Category();

  category.name = req.body.name;

  category.save((err) => {
    if (err) return new response(null, err).error500(res);

    return new response(category, null).created(res);
  });
};

//! Put http://localhost/api/category/84023804923
exports.update = (req, res) => {
  Category.findById(req.params.category_id, (err, category) => {
    if (err) {
      return new response(null, err).error500(res);
    }
    if (!category) {
      return new response().notFount(res);
    }
    category.name = req.body.name;
    category.save((err) => {
      if (err) {
        return new response(null, err).error500(res);
      }
      return new response(category, null).success(res);
    });
  });
};

//! Delete http://localhost/api/category/84023804923
exports.delete = (err, res) => {
  Category.findOneAndDelete(
    { _id: err.params.category_id },
    (err, category) => {
      if (err) {
        return new response(null, err).error500(res);
      }
      if (!category) {
        return new response().notFount(res);
      }
      return new response(category, null).success(res);
    }
  );
};
