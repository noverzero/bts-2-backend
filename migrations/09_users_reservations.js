exports.up = (knex, Promise) => {
  return knex.schema.createTable("users_reservations",(table)=>{
    table.increments('id')
    table.integer('userId')
    table.foreign('userId').references('users.id')
    table.integer('reservationId')
    table.foreign('reservationId').references('reservations.id')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable("users_reservations")
}
