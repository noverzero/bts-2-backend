// table.increments('id')
// table.integer('pickupLocationId').notNullable()
// table.foreign('pickupLocationId').references('pickup_locations.id')
// table.integer('eventId').notNullable()
// table.foreign('eventId').references('events.id')
// table.date('eventDate').notNullable()
// table.string('eventVenue').notNullable()
// table.time('lastBusDeparts').notNullable()
// table.integer('orderId').notNullable()
//   table.foreign('orderId').references('orders.id')
// table.integer('ordersReservationId').notNullable()
// table.string('ordersWillCallName').notNullable()
// table.integer('checkedInPasscode')
// table.integer('sold').notNullable().defaultTo(0)
// table.integer('capacity').notNullable().defaultTo(44)
// table.timestamps(true, true)

const { util, seed } = require('data-seed')
const fullNameSeed = () => { return `${seed.name.en.firstName()} ${seed.name.en.lastName()}` }
const randomFromArraySeed = (arr) => { return arr[Math.floor(Math.random() * arr.length)] }
const random10digits = () => { return util.random.int(1, 10) }
const generatePartiesSeeds = (num) => {
  let parties = []
  for (let i = 0; i < num; i++) {
    parties.push(
      {
        pickupLocationId: randomFromArraySeed([1, 1, 1, 2, 3, 3, 3, 3, 4, 4, 5, 5, 6, 7]),
        eventId: randomFromArraySeed([1, 2, 3, 4, 5, 6, 7, 8, 8, 8, 8, 8, 8, 9]),
        eventDate: '2019-04-20',
        eventVenue: 'Red Rocks',
        lastBusDeparts: 1620,
        orderId: random10digits(),
        ordersReservationId: random10digits(),
        ordersWillCallName: fullNameSeed(),
      }
    )
  }
  return parties
}

exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('pickup_parties').del()
    .then(() => {
      // Inserts seed entries
      return knex('pickup_parties').insert(generatePartiesSeeds(500))
    })
    .then(() => {
      return knex.raw("SELECT setval('pickup_parties_id_seq', (SELECT MAX(id) FROM pickup_parties))")
    })
}
