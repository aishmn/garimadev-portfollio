const mongoose = require("mongoose");
const slugify = require("slugify");

const BlogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  body: { type: String },
  coverImage: String,
  author: { type: mongoose.Schema.ObjectId, ref: "User" },
  created: { type: Date, default: Date.now },
  updated: { type: Date },
  slug: String,
  category: { type: mongoose.Schema.ObjectId, ref: "Category" },
});

BlogSchema.index({ slug: 1 });

BlogSchema.pre("save", function (next) {
  this.slug = slugify(this.title, { lower: true });
  next();
});

BlogSchema.pre(/^find/, function (next) {
  // this points to the current query
  this.populate({ path: "author", select: "_id name" }).populate({
    path: "category",
    select: "_id title",
  });
  next();
});

module.exports = mongoose.model("Blog", BlogSchema);
