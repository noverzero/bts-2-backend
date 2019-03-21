
//user types = {standard, staff, driver, admin, deactivated}
exports.up = (knex) => {
  return knex.schema.createTable('users', (table) => {
    table.increments('id')
    table.string('firstName').notNullable()
    table.string('lastName').notNullable()
    table.string('email').notNullable()
    table.boolean('isWaiverSigned').notNullable().defaultTo('false')
    table.boolean('isStaff').notNullable().defaultTo('false')
    table.boolean('isDriver').notNullable().defaultTo('false')
    table.boolean('isAdmin').notNullable().defaultTo('false')
    table.boolean('isDeactivated').notNullable().defaultTo('false')
    table.specificType('hshPwd', 'CHAR(60)')
    table.string('preferredLocation').defaultTo("")
    table.timestamps(true, true)
  })
}
exports.down = (knex) => {
  return knex.schema.dropTable("users")
}
