const mongoose = require("mongoose");

const courseProgress = new mongoose.Schema({
  courseID: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Course",
  },
  completedVideos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SubSection",
    },
  ],
});

module.exports = mongoose.model("ourseProgress", courseProgress);