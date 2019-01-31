// table.increments('id')
// table.integer('pickupLocationId').notNullable()
//   table.foreign('pickupLocationId').references('pickup_locations.id')
// table.integer('eventId').notNullable()
//   table.foreign('eventId').references('events.id')
// table.integer('reservationId').notNullable()
//   table.string('reservationWillCallName').notNullable()
// table.integer('discountCodeId')
//   table.foreign('discountCodeId').references('discount_codes.id')
// table.string('status').notNullable().defaultTo('1')
// table.timestamps(true, true)


const { util, seed } = require('data-seed')
const fullNameSeed = () => { return `${seed.name.en.firstName()} ${seed.name.en.lastName()}` }
const firstNameSeed = () => { return seed.name.en.firstName() }
const lastNameSeed = () => { return seed.name.en.lastName() }
const seedEmail = () => { return seed.email() }
const randomFromArraySeed = (arr) => { return arr[Math.floor(Math.random() * arr.length)] }
const random10digits = () => { return util.random.int(1, 10) }

const generateOrdersSeeds = (num) => {
  let orders = []
  for (let i = 0; i < num; i++) {
    orders.push(
      {
        pickupLocationId: randomFromArraySeed([1, 1, 1, 2, 3, 3, 3, 3, 4, 4, 5, 5, 6]),
        eventId: randomFromArraySeed([1, 2, 3, 4, 5, 6, 7, 7, 7, 7, 7, 8, 8]),
        reservationId: random10digits(),
        reservationWillCallName: fullNameSeed(),
      }
    )
  }
  return orders
}

exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('orders').del()
    .then(() => {
      // Inserts seed entries
      return knex('orders').insert(generateOrdersSeeds(500))
    })
    .then(() => {
      return knex.raw("SELECT setval('orders_id_seq', (SELECT MAX(id) FROM orders))")
    })
}
