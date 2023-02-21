// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development:{
    client: 'postgresql',
    connection: {
      host: 'localhost',
      port: 5432,
      user:     'postgres',
      password: '65975213',
      database: 'GitTasks'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: "src/db/migrations"
    }
  },
  production: {
    client: 'postgresql',
    connection: {
      host: 'localhost',
      port: 5432,
      user:     'postgres',
      password: '65975213',
      database: 'GitTasks'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
