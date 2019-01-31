exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('pickup_locations').del()
    .then(() => {
      // Inserts seed entries
      return knex('pickup_locations').insert([{
        streetAddress: '1313 College Ave, Boulder, CO 80302',
        city: 'Boulder',
        locationName: 'UNIV. HILL CHEBA HUT',
        latitude: '40.007480',
        longitude: '-105.275870',
        type: 'standard'
      },
      {
        streetAddress: '1744 E Evans Ave, Denver, CO',
        city: 'Denver',
        locationName: 'DU ILLEGAL PETE’S',
        latitude: '39.678310',
        longitude: '-104.966740',
        type: 'standard'
      },
      {
        streetAddress: '638 East Colfax Avenue, Denver, CO 80203',
        city: 'Denver',
        locationName: 'COLFAX CAP HILL CHEBA HUT',
        latitude: '39.739770',
        longitude: '-104.979000',
        type: 'standard'
      },
      {
        streetAddress: '1531 Champa St, Denver, CO 80202',
        city: 'Denver',
        locationName: 'CHAMPA DOWNTOWN CHEBA HUT',
        latitude: '39.746120',
        longitude: '-104.994770',
        type: 'standard'
      },
      {
        streetAddress: '3001 Walnut St, Denver, CO 80205',
        city: 'Denver',
        locationName: 'RiNo EPIC BREWING',
        latitude: '39.763340',
        longitude: '-104.981410',
        type: 'standard'
      },
      {
        streetAddress: '635 Main St., Longmont, CO 80501, CO 80202',
        city: 'Longmont',
        locationName: 'MAIN ST. CHEBA HUT',
        latitude: '40.170320',
        longitude: '-105.102900',
        type: 'standard'
      },
      {
        streetAddress: '320 Walnut, Fort Collins, CO',
        city: 'Fort Collins',
        locationName: 'OLD TOWN ILLEGAL PETE’S',
        latitude: '40.588001',
        longitude: '-105.074547',
        type: 'standard'
      },
      ])
    })
    .then(() => {
      return knex.raw("SELECT setval('pickup_locations_id_seq', (SELECT MAX(id) FROM pickup_locations))")
    })
}
