exports.up = (knex, Promise) => {
  return knex.schema.createTable("users_reservations",(table)=>{
    table.increments('id')
    table.integer('userId')
    table.foreign('eventsId').references('users.id')
    table.integer('reservationId')
    table.foreign('discountCodeId').references('reservations.id')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable("users_reservations")
}
