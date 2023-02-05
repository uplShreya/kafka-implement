const express = require("express"); //Import the express dependency
// const { kafkaplug } = require("./kafka");
const app = express(); //Instantiate an express app, the main work horse of this server
const port = 5000; //Save the port number where your server will be listening

// kafkaplug();
const produce = require("./utils/producer");
const consume = require("./utils/consumer");

// call the `produce` function and log an error if it occurs
produce().catch((err) => {
  console.error("error in producer: ", err);
});

// start the consumer, and log any errors
consume().catch((err) => {
  console.error("error in consumer: ", err);
});
app.listen(port, () => {
  console.log(`
      ################################################
      🛡️  kafka server listening on port: http://localhost:${port} 🛡️
      ################################################
    `);
});
