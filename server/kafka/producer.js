const Kafka = require("node-rdkafka");
const Joi = require('@hapi/joi');
require('dotenv').config();

const kafkaConf = {
  "group.id": "cloudkarafka-example",
  "metadata.broker.list": process.env.CLOUDKARAFKA_BROKERS.split(','),
  "socket.keepalive.enable": true,
  "security.protocol": "SASL_SSL",
  "sasl.mechanisms": "SCRAM-SHA-256",
  "sasl.username": process.env.CLOUDKARAFKA_USERNAME,
  "sasl.password": process.env.CLOUDKARAFKA_PASSWORD,
  'dr_cb': true,
  "debug": "generic,broker,security"
};

const prefix = process.env.CLOUDKARAFKA_TOPIC_PREFIX;
const topic = `${prefix}order`;

const sendMessage = () => {

  const status = "123";
  const id = "id";
  // console.log(id, status)
  const producer = new Kafka.Producer(kafkaConf);

  producer.connect();

  producer.on("ready", function (arg) {
    try {
      // console.log(topic)
      console.log(`producer ${arg.name} ready.`);
      const bien = new Buffer.from(JSON.stringify({
        _id: id,
        status: status
      })
      )

      producer.produce(topic, -1, bien, 2);
      console.log(bien)
      // console.log(producer.produce(topic, -1, bien, 2))

      setTimeout( () => producer.disconnect(), 0)

    } catch (err) {
      console.error(err);

    }

  });

  producer.on('error', function (err) {
    console.error(err);
    process.exit(1);
  });

  producer.on('event.error', function (event) {
    console.error(event);
    process.exit(1);
  });

  producer.on('event.stats', function (envent) {
    console.error(envent);
    process.exit(1);
  });

  producer.on('event.log', function (log) {
    // console.log(log);    
  });

 

  producer.on("disconnected", function (arg) {
    // process.exit();
  });

  return "Message sent successfully!"
}

module.exports = {
  sendMessage,

}

