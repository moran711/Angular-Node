const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://user23:7rvNIzBx8nVO8oRQ@site.cqsxu.mongodb.net/site2?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
      }
    );
    console.log("🚀 MongoDB Connected...");
  } catch (err) {
    console.error(err);
  }
};

export { connectDB };
