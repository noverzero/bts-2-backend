exports.up = (knex, Promise) => {
  return knex.schema.createTable("reservations",(table)=>{
    table.increments('id')
    table.integer('orderId')
    table.foreign('orderId').references('orders.id')
    table.integer('pickupPartiesId')
    table.foreign('pickupPartiesId').references('pickup_parties.id')
    table.string('willCallFirstName').notNullable()
    table.string('willCallLastName').notNullable()
    table.integer('status').notNullable().defaultTo(1)
    table.integer('discountCodeId')
    table.foreign('discountCodeId').references('discount_codes.id')

  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable("reservations")
}
