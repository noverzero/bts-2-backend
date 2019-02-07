exports.up = (knex) => {
  return knex.schema.createTable('users', (table) => {
    table.increments('id')
    table.string('firstName').notNullable()
    table.string('lastName').notNullable()
    table.string('email').notNullable()
    table.boolean('isWaiverSigned').notNullable().defaultTo('false')
    table.string('userType').notNullable().defaultTo('standard')
    table.string('preferredLocation').defaultTo("")
    table.timestamps(true, true)
  })
}
//user types = {standard, staff, driver, admin, deactivated}

exports.down = (knex) => {
  return knex.schema.dropTable("users")
}
