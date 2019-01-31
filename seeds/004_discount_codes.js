// table.increments('id')
// table.text("discountCode").notNullable()
// table.integer("percentage").notNullable()
// table.date("exipresOn").notNullable()
// table.date("issuedOn").notNullable()
// table.text("issuedTo")
// table.text("issuedBy")
// table.text("issuedBecause")
// table.integer('eventId').notNullable()
//   table.foreign('eventId').references('events.id')
// table.text("appliesTo")
// table.integer("timesUsed")
// table.string("type").defaultTo("standard")
// table.timestamps(true,true)

const { util, seed } = require('data-seed')
const discountCodeSeed = (length) => {
  let chars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890"
  let pass = ""
  for (var x = 0; x < length; x++) {
    var i = Math.floor(Math.random() * chars.length)
    pass += chars.charAt(i)
  }
  return pass
}

const fullNameSeed = () => { return `${seed.name.en.firstName()} ${seed.name.en.lastName()}` }
const seedEmail = () => { return seed.email() }
const randomFromArraySeed = (arr) => { return arr[Math.floor(Math.random() * arr.length)] }

const generateDiscount_CodeSeeds = (num) => {
  let discountCodes = []
  for (let i = 0; i < num; i++) {
    discountCodes.push(
      {
        issuedTo: seedEmail(),
        discountCode: discountCodeSeed(10),
        percentage: randomFromArraySeed([100, 50, 20, 20, 20, 20, 20, 20, 10, 10, 10, 10]),
        eventId: randomFromArraySeed([1, 2, 3, 4, 5, 6, 7, 8, 8, 8, 8, 8, 8, 9])
      })
  }
  return discountCodes
}

exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('discount_codes').del()
    .then(() => {
      // Inserts seed entries
      return knex('discount_codes').insert(generateDiscount_CodeSeeds(1000))
    })
    .then(() => {
      return knex.raw("SELECT setval('discount_codes_id_seq', (SELECT MAX(id) FROM discount_codes))")
    })
}
