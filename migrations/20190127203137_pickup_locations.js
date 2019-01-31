
exports.up = (knex, Promise) => {
  return knex.schema.createTable("pickup_locations", (table) => {
    table.increments('id')
    table.text("streetAddress").notNullable()
    table.text("city").notNullable()
    table.text("locationName").notNullable()
    table.float("latitude").defaultTo()
    table.float("longitude").defaultTo()
    table.float("basePrice").defaultTo(25.00)
    table.string("type").defaultTo("standard")
    table.timestamps(true, true)
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable("pickup_locations")
}
