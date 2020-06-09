const multer = require("multer");
const sharp = require("sharp");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const Blog = require("./../models/blogModels");
const Category = require("../models/categoryModels");
const Resume = require("../models/resumeModels");
const Contact = require("../models/contactModels");
const Info = require("../models/infoModels");
const factory = require("../controllers/handlerFactory");

const multerStorage = multer.memoryStorage();
const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new AppError("Not an image! Please upload only images.", 400), false);
  }
};
const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

exports.uploadBlogCoverImage = upload.single("coverImage");

exports.resizeBlogCoverImage = catchAsync(async (req, res, next) => {
  if (!req.file) return next();

  req.file.filename = `${req.body.title
    .trim()
    .slice(0)
    .replace(/ /g, "-")}-${Date.now()}.jpeg`;

  await sharp(req.file.buffer)
    .resize(750, 300)
    .toFormat("jpeg")
    .jpeg({ quality: 95 })
    .toFile(`public/images/post-images/${req.file.filename}`);

  req.body.coverImage = req.file.filename;
  next();
});

exports.getBlogIdBySlug = catchAsync(async (req, res, next) => {
  const blog = await Blog.findOne({ slug: req.params.id });
  req.params.id = blog._id;
  next();
});

exports.getAllBlog = factory.getAll(Blog);
exports.getOneBlog = factory.getOne(Blog);
exports.createBlog = factory.createOne(Blog);
exports.updateBlog = factory.updateOne(Blog);
exports.deleteBlog = factory.deleteOne(Blog);

exports.getAllCategory = factory.getAll(Category);
exports.getOneCategory = factory.getOne(Category);
exports.createCategory = factory.createOne(Category);
exports.updateCategory = factory.updateOne(Category);
exports.deleteCategory = factory.deleteOne(Category);

exports.getAllResume = factory.getAll(Resume);
exports.getOneResume = factory.getOne(Resume);
exports.createResume = factory.createOne(Resume);
exports.updateResume = factory.updateOne(Resume);
exports.deleteResume = factory.deleteOne(Resume);

exports.getAllContact = factory.getAll(Contact);
exports.getOneContact = factory.getOne(Contact);
exports.createContact = factory.createOne(Contact);
exports.updateContact = factory.updateOne(Contact);
exports.deleteContact = factory.deleteOne(Contact);

exports.getInfo = factory.getAll(Info);
exports.createInfo = factory.createOne(Info);
exports.updateInfo = factory.updateOne(Info);
