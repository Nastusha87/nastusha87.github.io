var express = require("express");
var app = express();

const PORT = process.env.PORT || 80

app.listen(PORT, () => {
  console.log("Server has been started...");
});

app.get("/", function(request, response)  {
    response.sendFile(__dirname + "/index.html");
});
