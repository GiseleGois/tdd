
exports.up = (knex) => {
  return knex.schema.createTable('users', (t) => {
    t.increments('id').primary();
    t.string('name').notNull();
    t.string('mail').notNull();
    t.string('passwd').notNull().unique();
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('users');
};
