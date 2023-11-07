import mongoose, { Schema } from "mongoose";

const topicSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required."],
    },
    topic: {
      type: String,
      required: [true, "Topic name is required."],
    },
    description: {
      type: String,
      required: [true, "Description do not empty."],
    },
  },
  { timestamps: true }
);

const Topic = mongoose.models.Topic || mongoose.model("Topic", topicSchema);
export default Topic;
