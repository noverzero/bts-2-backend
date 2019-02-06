// // table.increments('id')
// // table.integer('reservationId').notNullable()
// // table.string('orderedByFirstName').notNullable()
// // table.string('orderedByLastName').notNullable()
// // table.string('orderedByEmail').notNullable()
// // table.string('reservationWillCallName').notNullable()
// // table.integer('eventId').notNullable()
// // table.foreign('eventId').references('events.id').onDelete('CASCADE')
// // table.integer('pickupLocationId').notNullable()
// // table.foreign('pickupLocationId').onDelete('CASCADE').references('pickup_locations.id')
// // table.integer('discountCodeId')
// // table.foreign('discountCodeId').references('discount_codes.id')
// // table.string('status').notNullable().defaultTo('1')
// // table.timestamps(true, true)
//
//
// const {util, seed} = require('data-seed')
// const fullNameSeed = () => { return `${seed.name.en.firstName()} ${seed.name.en.lastName()}` }
// const firstNameSeed = () => { return seed.name.en.firstName() }
// const lastNameSeed = () => { return seed.name.en.lastName() }
// const seedEmail = () => { return seed.email() }
// const randomFromArraySeed = (arr) => { return  arr[Math.floor(Math.random() * arr.length)] }
// const random10digits = () => { return util.random.int(1,10)}
//
// const generateOrdersSeeds = (num) => {
//   let orders = []
//   for (let i = 0; i < num; i++) {
//       orders.push(
//         {
//           orderedByFirstName: firstNameSeed(),
//           orderedByLastName: lastNameSeed(),
//           orderedByEmail: seedEmail(),
//         }
//       )
//   }
//   return orders
// }

exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('orders').del()
    .then(() => {
      // Inserts seed entries
      return knex('orders').insert(
      //   [
      //     {
      //     id:1,
      //     orderedByFirstName:"Phillip",
      //     orderedByLastName:"Borgenicht",
      //     orderedByEmail:"pborgenicht@gmail.com",
      //   },
      //   {
      //   id:2,
      //   orderedByFirstName:"Dustin",
      //   orderedByLastName:"Huth",
      //   orderedByEmail:"dhuth@gmail.com",
      //   },
      //   {
      //   id:3,
      //   orderedByFirstName:"Seth",
      //   orderedByLastName:"Brown",
      //   orderedByEmail:"sbrown@gmail.com",
      //   },
      //   {
      //   id:4,
      //   orderedByFirstName:"Kevin",
      //   orderedByLastName:"Ziechmann",
      //   orderedByEmail:"kziechmann@gmail.com",
      // },
      // {
      // id:5,
      // orderedByFirstName:"Jake",
      // orderedByLastName:"Mosher",
      // orderedByEmail:"jmosher@gmail.com",
      // }

      //   ]
      )
    })
    .then(() => {
      return knex.raw("SELECT setval('orders_id_seq', (SELECT MAX(id) FROM orders))")
    })
}
