const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB);
    console.log("DB Connected");
  } catch (error) {
    console.error("The error is: ", error);
  }
};

module.exports = dbConnect;
