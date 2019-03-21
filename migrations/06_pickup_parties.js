
exports.up = function(knex, Promise) {
  return knex.schema.createTable('pickup_parties', (table) => {
    table.increments('id')
    table.integer('eventId').notNullable()
    table.foreign('eventId').references('events.id').onDelete('CASCADE')
    table.integer('pickupLocationId').notNullable()
    table.foreign('pickupLocationId').references('pickup_locations.id').onDelete('CASCADE')
    table.string('lastBusDepartureTime')
    table.string('firstBusLoadTime')
    table.float("partyPrice").defaultTo(25.00)
    table.integer('inCart').notNullable().defaultTo(0)
    table.integer('capacity').notNullable().defaultTo(44)
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("pickup_parties")
};
