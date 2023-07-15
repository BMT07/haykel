const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const commentSchema = new mongoose.Schema({

  content: { type: String, required: [true, "comment should not be empty"]},
  createdDate: { type: Date, default: Date.now() },
  user: {
    type: ObjectId,
    ref: "user",
  },
});



module.exports = comment = mongoose.model("comment", commentSchema);
