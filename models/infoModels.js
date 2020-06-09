const mongoose = require("mongoose");

const InfoSchema = new mongoose.Schema({
  facebook: { type: String, default: "facebook.com" },
  twitter: { type: String, default: "twitter.com" },
  linkedin: { type: String, default: "linkedin.com" },
  instagram: { type: String, default: "instagram.com" },
});

const Info = mongoose.model("Info", InfoSchema);

module.exports = Info;
