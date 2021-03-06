import mongoose from "mongoose";

const Schema = mongoose.Schema;

const test = new Schema(
    {
      name: {
        type: String,
        required: true,
      },
      school: {
        type: String,
        required: true,
      },
      grade: {
        type: Number,
        required: true,
      },
    },
    { versionKey: false }
  );
  
  export default mongoose.model(`test`, test, `test`);