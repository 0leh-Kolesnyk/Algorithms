const fs = require("fs");
fs.unlink("./repeat.js", (error) => {
  console.log(error || "file delete");
});
