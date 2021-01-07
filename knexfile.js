// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/cardata.sql'
    },

    useNullAsDefault: true

  },

  migrations: {

    directory: './migrations'
  },

  seeds: {

    directory: './seeds'
  },

  pool: (conn, done) => {

    conn.run('PRAGMA foreign_keys = ON', done);
  }

};
