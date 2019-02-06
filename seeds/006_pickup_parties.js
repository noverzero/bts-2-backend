// // table.increments('id')
// // table.integer('eventId').notNullable()
// // table.foreign('eventId').references('events.id')
// // table.integer('orderId').notNullable()
// // table.foreign('orderId').references('orders.id')
// // table.integer('pickupLocationId').notNullable()
// // table.foreign('pickupLocationId').references('pickup_locations.id')
// // table.integer('sold').notNullable().defaultTo(0)
// // table.integer('capacity').notNullable().defaultTo(44)
// // table.timestamps(true, true)
//
// const {util, seed} = require('data-seed')
// const fullNameSeed = () => { return `${seed.name.en.firstName()} ${seed.name.en.lastName()}` }
// const randomFromArraySeed = (arr) => arr[Math.floor(Math.random() * arr.length)]
// const random10digits = () => { return util.random.int(1,10)}
// const generatePartiesSeeds = (num) => {
//   let parties = []
//   for (let i = 0; i < num; i++) {
//       parties.push(
//         {
//           eventId: randomFromArraySeed([1, 2, 3, 4, 5, 6, 7, 8, 8, 8, 8, 8, 8, 9]),
//           // orderId: random10digits(),
//           pickupLocationId: randomFromArraySeed([1,2,3,4,5,6,7])
//         }
//       )
//   }
//   return parties
// }

exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('pickup_parties').del()
    .then(() => {
      // Inserts seed entries
      return knex('pickup_parties').insert(
        // [
        // {
        //   id:1,
        //   eventId:2,
        //   pickupLocationId:1,
        //   lastBusDepartureTime: '17:30:00',
        //   inCart:4,
        //   capacity:30,
        // },
        // {
        //   id:2,
        //   eventId:3,
        //   pickupLocationId:2,
        //   lastBusDepartureTime: '18:00:00',
        //   inCart:5,
        //   capacity:35,
        // },
        // {
        //   id:3,
        //   eventId:4,
        //   pickupLocationId:3,
        //   lastBusDepartureTime: '17:00:00',
        //   inCart:6,
        //   capacity:40,
        // },
        // {
        //   id:4,
        //   eventId:2,
        //   pickupLocationId:2,
        //   inCart:4,
        //   capacity:30,
        // }

        // ]
        )
    })
    .then(() => {
      return knex.raw("SELECT setval('pickup_parties_id_seq', (SELECT MAX(id) FROM pickup_parties))")
    })
}
