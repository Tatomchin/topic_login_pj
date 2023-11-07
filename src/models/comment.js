import mongoose, { Schema } from "mongoose";

const commentSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "email is required."],
    },
    description: {
      type: String,
      required: [true, "Description do not empty."],
    },
    topic_id: {
      type: String,
      required: [true, "topic_id is required."],
    }
  },
  { timestamps: true }
);

const Comment =
  mongoose.models.Comment || mongoose.model("Comment", commentSchema);
export default Comment;
