const mongoose = require("mongoose");

const dbConnection = () => {
  // بعمل ربط للداتا بيز
  mongoose.connect(process.env.DB_URI).then((conn) => {
    console.log(`DataBase Connected`);
  });
};

module.exports = dbConnection;
