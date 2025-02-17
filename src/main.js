require('dotenv').config();

const PlaylistsService = require('./services/db/PlaylistsService');
const PlaylistSongsService = require('./services/db/PlaylistSongsService');
const MailSender = require('./services/mail/MailSender');
const Listener = require('./services/mq/Listener');
const run = require('./services/mq/consumer');

const init = async () => {
  const playlistsService = new PlaylistsService();
  const playlistSongsService = new PlaylistSongsService();
  const mailSender = new MailSender();
  const listener = new Listener(playlistsService, playlistSongsService, mailSender);

  await run(listener);
};

init();
