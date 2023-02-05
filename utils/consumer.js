const { Kafka } = require("kafkajs");

// const consumer = consumer({ groupId: "test-group" });

// const consume = async () => {
//   // first, we wait for the client to connect and subscribe to the given topic
//   await consumer.connect();
//   await consumer.subscribe({ topic: "test-topic", fromBeginning: true });
//   await consumer.run({
//     // this function is called every time the consumer gets a new message
//     eachMessage: ({ message }) => {
//       // here, we just log the message to the standard output
//       console.log(`received message: ${message.value}`);
//     },
//   });
// };

// module.exports = consume;

const consumer = kafka.consumer({ groupId: "test-group" });

const consume = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: "test-topic", fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        value: message.value.toString(),
      });
    },
  });
};
module.exports = consume;
