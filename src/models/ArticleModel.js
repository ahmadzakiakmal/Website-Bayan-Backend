const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema(
  {
    // judul: {
    //   type: String,
    //   required: true
    // },
    // deskripsi: {
    //   type: String,
    //   required: true
    // }
    title: {
      type: String,
      required: true,
    },
    paragraphs: {
      type: [String],
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    writer: {
      type: String,
      required: true,
    },
    links: {
      type: [String],
      required: false,
    },
    desa: {
      type: [String],
      required: true,
    }
  },
  {
    timestamps: true
  }
);

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;