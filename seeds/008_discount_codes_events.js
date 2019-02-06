// const {util, seed} = require('data-seed')
// const fullNameSeed = () => { return `${seed.name.en.firstName()} ${seed.name.en.lastName()}` }
// const firstNameSeed = () => { return seed.name.en.firstName() }
// const lastNameSeed = () => { return seed.name.en.lastName() }
// const seedEmail = () => { return seed.email() }
// const randomFromArraySeed = (arr) => { return  arr[Math.floor(Math.random() * arr.length)] }
// const random10digits = () => { return util.random.int(1,10)}
// const generateOrderId= (num) => Math.floor(num*Math.random())
//
// const generateDiscountCodesEventSeeds = (num) => {
//   let discount_codes_events = []
//   for (let i = 0; i < num; i++) {
//       discount_codes_events.push(
//         {
//           eventsId: generateOrderId(9),
//           discountCodeId: generateOrderId(900)
//         }
//       )
//   }
//   return discount_codes_events
// }

exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('discount_codes_events').del()
    .then(() => {
      // Inserts seed entries
      return knex('discount_codes_events').insert(
        // [
        //   {
        //     id:1,
        //     eventsId:2,
        //     discountCodeId:1
        //   },
        //   {
        //     id:2,
        //     eventsId:3,
        //     discountCodeId:2
        //   },
        //   {
        //     id:3,
        //     eventsId:4,
        //     discountCodeId:3
        //   }
        // ]
      )
    })
    .then(() => {
      return knex.raw("SELECT setval('discount_codes_events_id_seq', (SELECT MAX(id) FROM discount_codes_events))")
    })
}
