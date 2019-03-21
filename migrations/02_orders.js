
exports.up = function(knex, Promise) {
  return knex.schema.createTable('orders', (table) => {
    table.increments('id')
    table.string('orderedByFirstName', '40').notNullable()
    table.string('orderedByLastName', '40').notNullable()
    table.string('orderedByEmail', '100').notNullable()
    table.integer('userId').notNullable().defaultTo(1)
    table.foreign('userId').references('users.id').onDelete('CASCADE')
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("orders")
};
