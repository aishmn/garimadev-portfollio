const express = require("express");
const portfollioController = require("../controllers/portfollioController");
const authController = require("../controllers/authController");

const router = express.Router();

router
  .route("/blog")
  .get(portfollioController.getAllBlog)
  .post(
    portfollioController.uploadBlogCoverImage,
    portfollioController.resizeBlogCoverImage,
    portfollioController.createBlog
  );

router
  .route("/blog/:id")
  .get(portfollioController.getBlogIdBySlug, portfollioController.getOneBlog)
  .patch(portfollioController.updateBlog)
  .delete(portfollioController.deleteBlog);

router
  .route("/category")
  .get(portfollioController.getAllCategory)
  .post(portfollioController.createCategory);

router
  .route("/category/:id")
  .get(portfollioController.getOneCategory)
  .patch(portfollioController.updateCategory)
  .delete(portfollioController.deleteCategory);

router
  .route("/contact")
  .get(portfollioController.getAllContact)
  .post(portfollioController.createContact);

router
  .route("/contact/:id")
  .get(portfollioController.getOneContact)
  .patch(portfollioController.updateContact)
  .delete(portfollioController.deleteContact);

router
  .route("/resume")
  .get(portfollioController.getAllResume)
  .post(portfollioController.createResume);

router
  .route("/resume/:id")
  .get(portfollioController.getOneResume)
  .patch(portfollioController.updateResume)
  .delete(portfollioController.deleteResume);

router
  .route("/info")
  .get(portfollioController.getInfo)
  .post(portfollioController.createInfo);

router.route("/info/:id").patch(portfollioController.updateInfo);

module.exports = router;
