
exports.up = (knex, Promise) => {
  return knex.schema.createTable("pickup_locations",(table)=>{
    table.increments('id')
    table.string("streetAddress").notNullable()
    table.string("city").notNullable()
    table.string("locationName").notNullable()
    table.float("latitude").defaultTo()
    table.float("longitude").defaultTo()
    table.string("type").defaultTo("standard")
    table.float("basePrice").defaultTo(25.00)
    table.timestamps(true,true)
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable("pickup_locations")
}
