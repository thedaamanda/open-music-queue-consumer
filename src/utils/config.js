const config = {
  mq: {
    server: process.env.RABBITMQ_SERVER,
  },
  smtp: {
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    user: process.env.SMTP_USER,
    password: process.env.SMTP_PASSWORD,
  },
  queue: {
    exportPlaylist: process.env.PLAYLIST_CHANNEL,
  },
};

module.exports = config;
