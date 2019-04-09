const mooonse = require("mongoose");

const Box = new mooonse.Schema(
  {
    title: {
      type: String,
      required: true
    },
    files: [{ type: mooonse.Schema.Types.ObjectId, ref: "File" }]
  },
  {
    timestamps: true
  }
);

module.exports = mooonse.model("Box", Box);
