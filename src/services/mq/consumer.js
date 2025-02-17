const amqplib = require('amqplib');
const config = require('../../utils/config');

const run = async (listener) => {
  const connection = await amqplib.connect(config.mq.server);
  const channel = await connection.createChannel();

  await channel.assertQueue(config.queue.exportPlaylist, {
    durable: true,
  });

  channel.consume(config.queue.exportPlaylist, (message) => listener.listen(message), {
    noAck: true,
  });
};

module.exports = run;
