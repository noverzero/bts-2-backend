const {util, seed} = require('data-seed')
const fullNameSeed = () => { return `${seed.name.en.firstName()} ${seed.name.en.lastName()}` }
const firstNameSeed = () => { return seed.name.en.firstName() }
const lastNameSeed = () => { return seed.name.en.lastName() }
const seedEmail = () => { return seed.email() }
const randomFromArraySeed = (arr) => { return  arr[Math.floor(Math.random() * arr.length)] }
const random10digits = () => { return util.random.int(1,10)}
const generateOrderId= (num) => Math.floor(num*Math.random())
const generateReservationSeeds = (num) => {
  let reservations = []
  for (let i = 0; i < num; i++) {
      reservations.push(
        {
          orderId: generateOrderId(400)+1,
          pickupPartiesId: generateOrderId(400),
          discountCodeId: randomFromArraySeed([1,2,3,4,5,6,7]),
          willCallFirstName: firstNameSeed(),
          willCallLastName: lastNameSeed()
        }
      )
  }
  return reservations
}

exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('reservations').del()
    .then(() => {
      // Inserts seed entries
      return knex('reservations').insert(
        // [
        //   {
        //     id:1,
        //     orderId:1,
        //     pickupPartiesId:1,
        //     willCallFirstName:"James",
        //     willCallLastName:"Hetfield",
        //     status:1,
        //     discountCodeId:1
        //   },
        //   {
        //     id:2,
        //     orderId:2,
        //     pickupPartiesId:2,
        //     willCallFirstName:"Kobe",
        //     willCallLastName:"Bryant",
        //     status:1,
        //     discountCodeId:2
        //   },
        //   {
        //     id:3,
        //     orderId:3,
        //     pickupPartiesId:3,
        //     willCallFirstName:"Barack",
        //     willCallLastName:"Obama",
        //     status:1,
        //     discountCodeId:3
        //   }
        // ]
      )
    })
    .then(() => {
      return knex.raw("SELECT setval('reservations_id_seq', (SELECT MAX(id) FROM reservations))")
    })
}
