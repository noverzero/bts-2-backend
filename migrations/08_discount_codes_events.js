exports.up = (knex, Promise) => {
  return knex.schema.createTable("discount_codes_events",(table)=>{
    table.increments('id')
    table.integer('eventsId')
    table.foreign('eventsId').references('events.id')
    table.integer('discountCodeId')
    table.foreign('discountCodeId').references('discount_codes.id')
    table.integer('usesPerEvent')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable("discount_codes_events")
}
