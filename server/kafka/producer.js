// const Kafka = require("node-rdkafka");
// require('dotenv').config();

// // console.log("abc", process.env.CLOUDKARAFKA_BROKERS.split(","))

// const kafkaConf = {
//   "group.id": "cloudkarafka-example",
//   "metadata.broker.list": process.env.CLOUDKARAFKA_BROKERS.split(","),
//     // "metadata.broker.list": ["velomobile-01.srvs.cloudkafka.com:9094"],
//   "socket.keepalive.enable": true,
//   // "security.protocol": "SASL_SSL",
//   "security.protocol": "sasl_plaintext",
//   "sasl.mechanisms": "SCRAM-SHA-256",
//   "sasl.username": process.env.CLOUDKARAFKA_USERNAME,
//   "sasl.password": process.env.CLOUDKARAFKA_PASSWORD,
//   "debug": "generic,broker,security"
// };

// const prefix = process.env.CLOUDKARAFKA_TOPIC_PREFIX;
// const topic = `${prefix}order`;
// const producer = new Kafka.Producer(kafkaConf);
// const maxMessages = 20;
// const id ="121212";
// const status = "1212121";
// const send = (message) =>{
//     producer.connect();
//     producer.on("ready", function(arg) {
//         console.log(`producer ${arg.name} ready.`);
//         producer.produce(topic, -1, new Buffer.from(JSON.stringify({
//           _id: id,
//           status: status
//         })
//         ), 2);
//       });
// }

// const genMessage = i => new Buffer(`Kafka example, message number ${i}`);

// // producer.on("ready", function(arg) {
// //   console.log(`producer ${arg.name} ready.`);
// //   for (var i = 0; i < maxMessages; i++) {
// //     producer.produce(topic, -1, genMessage(i), i);
// //   }
// //   setTimeout(() => producer.disconnect(), 0);
// // });

// producer.on("disconnected", function(arg) {
//   process.exit();
// });

// producer.on('event.error', function(err) {
//   console.error(err);
//   process.exit(1);
// });
// producer.on('event.log', function(log) {
//   // console.log(log);
// });
// producer.connect();

// module.exports = {
//     send
// }