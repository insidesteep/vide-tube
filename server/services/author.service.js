const Author = require("../models/author.model");

class AuthorService {
  async add(firstname, lastname, patronymic, login = "", password = "") {
    return await Author.create({
      firstname,
      lastname,
      patronymic,
      login,
      password,
    });
  }

  async get(data) {
    return await Author.findOne(data);
  }

  async list(search, skip) {
    const regex = search
      ? {
          $expr: {
            $regexMatch: {
              input: { $concat: ["$firstname", "$lastname", "$patronymic"] },
              regex: search, //Your text search here
              options: "i",
            },
          },
        }
      : {};

    return await Author.find(regex).limit(10).skip(skip);
  }

  async getTotal() {
    return await Author.countDocuments({});
  }

  async getById(_id) {
    return await Author.findById(_id);
  }

  async find(term, filter = {}) {
    return await User.find({
      name: { $regex: term, $options: "i" },
      ...filter,
    });
  }

  async update(_id, newData) {
    return await Author.findOneAndUpdate({ _id }, newData, { new: true });
  }

  async getAuthorData(_id) {
    return await Author.findOne({ _id });
  }
}

module.exports = new AuthorService();
