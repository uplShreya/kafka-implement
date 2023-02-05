const express = require("express"); //Import the express dependency
const { kafkaplug } = require("./kafka");
const app = express(); //Instantiate an express app, the main work horse of this server
const port = 5000; //Save the port number where your server will be listening

kafkaplug();
app.listen(port, () => {
  console.log(`
      ################################################
      🛡️  kafka server listening on port: http://localhost:${port} 🛡️
      ################################################
    `);
});
