// // table.increments('id')
// // table.integer('eventId').notNullable()
// // table.foreign('eventId').references('events.id').onDelete('CASCADE')
// // table.string("discountCode").notNullable()
// // table.integer("percentage").notNullable().defaultTo('0')
// // table.date("exipresOn").notNullable().defaultTo('2019-01-01')
// // table.date("issuedOn")
// // table.string("issuedTo")
// // table.string("issuedBy")
// // table.string("issuedBecause")
// // table.specificType("appliesTo", "text ARRAY")
// // table.integer("timesUsed").notNullable().defaultTo('0')
// // table.integer("type").notNullable().defaultTo("1")
// // table.integer("remainingUses").notNullable().defaultTo('0')
// // table.integer("usesPerEvent").notNullable().defaultTo('0')
// // table.timestamps(true,true)
//
// const {util, seed} = require('data-seed')
// const discountCodeSeed = (length) => {
//     let chars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890"
//     let pass = ""
//     for (var x = 0; x < length; x++) {
//         var i = Math.floor(Math.random() * chars.length)
//         pass += chars.charAt(i)
//     }
//     return pass
// }
//
// const fullNameSeed = () => { return `${seed.name.en.firstName()} ${seed.name.en.lastName()}` }
// const seedEmail = () => { return seed.email() }
// const randomFromArraySeed = (arr) => { return  arr[Math.floor(Math.random() * arr.length)] }
//
// const generateDiscount_CodeSeeds = (num) => {
//   let discountCodes = []
//   for (let i = 0; i < num; i++) {
//       discountCodes.push(
//         {
//           issuedTo: seedEmail(),
//           discountCode: discountCodeSeed(10),
//           percentage: randomFromArraySeed([100, 50, 20, 20, 20, 20, 20, 20, 10, 10, 10, 10])
//         })
//   }
//   return discountCodes
// }

exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('discount_codes').del()
    .then(() => {
      // Inserts seed entries
      return knex('discount_codes').insert(
      // [
      //   {
      //     id: 1,
      //     discountCode:"MetallicaConcert",
      //     percentage: 40,
      //     expiresOn: 20190606,
      //     issuedOn:20190101,
      //     issuedTo:"MichaelJordan",
      //     issuedBy:"DustinHuth",
      //     issuedBecause:"Christmas",
      //     timesUsed:3,
      //     type:1,
      //     remainingUses:2,
      //     usesPerEvent:3
      //   },
      //   {
      //     id: 2,
      //     discountCode:"SnoopDoggWizKhalifa",
      //     percentage: 30,
      //     expiresOn: 20190420,
      //     issuedOn:20190101,
      //     issuedTo:"LadyGaga",
      //     issuedBy:"DustinHuth",
      //     issuedBecause:"ValentinesDay",
      //     timesUsed:2,
      //     type:1,
      //     remainingUses:2,
      //     usesPerEvent:3
      //   },
      //   {
      //     id: 3,
      //     discountCode:"MichaelJacksonTribute",
      //     percentage: 20,
      //     expiresOn: 20191231,
      //     issuedOn:20190101,
      //     issuedTo:"BlakeBollman",
      //     issuedBy:"DustinHuth",
      //     issuedBecause:"FourthOfJuly",
      //     timesUsed:3,
      //     type:1,
      //     remainingUses:2,
      //     usesPerEvent:3
      //   }
      // ]
      )
    })
    .then(() => {
      return knex.raw("SELECT setval('discount_codes_id_seq', (SELECT MAX(id) FROM discount_codes))")
    })
}
