const response = require("../response");

Book = require("../models/book.model");

exports.list = (req, res) => {
  Book.find({})
    .sort({ created: -1 })
    .populate("categoryBy")
    .exec((err, books) => {
      if (err) {
        return new response(null, err).error500(res);
      }

      return new response(books, null).success(res);
    });
  //* -1 son eklenenden ilk eklenen 1 ilk ->son
};

//! get http://localhost/api/book/2356466565
exports.getById = (req, res) => {
  Book.findById(req.params.book_id)
    .populate("categoryBy")
    .exec((err, book) => {
      if (err) {
        return new response(null, err).error500(res);
      }
      if (book) {
        return new response(book, null).success(res);
      }
      return new response().notFount(res);
    });
};

exports.listByCategoryId = (req, res) => {
  let _id = req.params.categoryId;

  Book.find({ categoryBy: _id })
    .populate("CategoryBy")
    .exec((err, books) => {
      if (err) {
        return new response(null, err).error500(res);
      }

      return new response(books, null).success(res);
    });
};

exports.created = (req, res) => {
  const { title, author, price, stock, picture, categoryBy } = req.body;

  let book = new Book();
  book.title = title;
  book.author = author;
  book.price = price;
  book.stock = stock;
  book.picture = picture;
  book.categoryBy = categoryBy._id;

  book.save((err) => {
    if (err) return new response(null, err).error500(res);

    return new response(book, null).created(res);
  });
};

// put http:localhost/api/book/23131651312
exports.update = (req, res) => {
  Book.findById(req.params.book_id, (err, book) => {
    if (err) {
      return new response(null, err).error500(res);
    }
    if (!book) {
      return new response().notFount(res);
    }

    const { title, author, price, stock, picture, categoryBy } = req.body;

    book.title = title;
    book.author = author;
    book.price = price;
    book.stock = stock;
    book.picture = picture;
    book.categoryBy = categoryBy._id;

    book.save((err) => {
      if (err) {
        return new response(null, err).error500(res);
      }
      return new response(book, null).success(res);
    });
  });
};

exports.delete = (req, res) => {
  let _id = req.params.book_id;
  Book.findOneAndDelete({ _id: _id }, (err, book) => {
    if (err) {
      return new response(null, err).error500(res);
    }
    if (!book) {
      return new response().notFount(res);
    }
    return new response(book, null).success(res);
  });
};
