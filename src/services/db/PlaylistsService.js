const { Pool } = require('pg');

class PlaylistsService {
  constructor() {
    this._pool = new Pool();
  }

  async getPlaylistById(id) {
    const query = {
      text: `
        SELECT id, name FROM playlists WHERE id = $1
      `,
      values: [id],
    };

    const result = await this._pool.query(query);

    if (!result.rows.length) {
      throw new Error('Playlist Not Found');
    }

    return result.rows[0];
  }
}

module.exports = PlaylistsService;
