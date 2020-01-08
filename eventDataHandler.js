var axios = require('axios')
const knex = require('./knex.js')
// const lastFmApiKey = process.env.LASTFM_KEY
const lastFmApiKey = 'bb5f39887cc93aa41c362ba1b8bbaccd'
// const songKickApiKey = process.env.SONGKICK_KEY
const songKickApiKey = '8ViJ6NJZPEwjp3Cp'
// make the api call to last.fm


// make the api call to songkick
const getApiData = async () => {
  try {
    const responseSongKick = await axios.get(`https://api.songkick.com/api/3.0/venues/4184264/calendar.json?per_page=100&apikey=${songKickApiKey}`)
    const showsFromSongkick = responseSongKick.data.resultsPage.results.event // grab just the events objects
    const artistsObj = showsFromSongkick.map(show => { // filter out most punctuation that breaks urls
      show = show.performance[0].displayName
      show = show.replace(/[&]/g, 'and')
      .replace(/[\/\\#,+()$~%.":*?<>{}]/g, '')
      .replace(/' /g, ' ')
      return show.split(' ').join('+')
    })

    lastFmObj = await pingLastFm(artistsObj).then(data => data)

    showsObj = showsFromSongkick.map( (show) =>{
      let headlinerName = show.performance[0].displayName
      let support1 = ''
      let support2 = ''
      let support3 = ''
      let time = show.start.time
      let date = show.start.date.split('-').splice(1, 3).concat(show.start.date.split(`-`)[0]).join('/')
      if (show.performance[1]) {
        support1 = show.performance[1].displayName
      }
      if (show.performance[2]) {
        support1 = show.performance[2].displayName
      }
      if (show.performance[3]) {
        support1 = show.performance[3].displayName
      }
      if (show.start.time === null) {
        time = '00:00:00'
      }
      return {
        id: show.id,
        date: date,
        startTime: time,
        venue: show.venue.displayName.split(' Ampitheatre')[0],
        headliner: headlinerName,
        support1: support1,
        support2: support2,
        support3: support3,
        headlinerImgLink: 'headlinerImg',
        headlinerBio: ''
      }
    })
  } catch (err) {
    console.error(err)
  }
  const finalShowsObj = combineObjects(lastFmObj, showsObj)
  //console.log('finalShowsObj', finalShowsObj)
  return finalShowsObj
}

const pingLastFm = (artistsObj) => {
    const headlinerInfo = artistsObj.map((artist) => {
    const lastFmApi = encodeURI(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artist}&autocorrect=1&api_key=${lastFmApiKey}&format=json`)
    //encodeURI allows for UTF-8 conversion of special letters in band name

    return axios.get(lastFmApi)
    .then(data=>{
      return data.data
    })
    .catch(err=>{
      console.log('error!', err)
    })
  })
  // map over array of band names, assign a promise to each one
  return Promise.all(headlinerInfo).then((headlinerObj)=>{
    const headlinerInfoObj1 = headlinerObj.map(data=>{
      if(data.error){
        return new Error("artist does not exist in Last.fm")
      }
      const headlinerName = data.artist.name
      const headlinerImg = data.artist.image[2]['#text']
      const headlinerBio = data.artist.bio.content

      return { headlinerName, headlinerImg, headlinerBio  }
    })
    // after promise fulfilled, populate an object with the fields above and return it to the previous function
    return headlinerInfoObj1
  })
  .catch(err=>{
    console.log(err)
  })
}

const combineObjects = async (lastFmObj, showsObj) => {
  // combine data from the two objects
  const data = showsObj.map((show, i) => {
    return {
      ...show,
      headlinerImgLink: lastFmObj[i].headlinerImg,
      headlinerBio: lastFmObj[i].headlinerBio
    }
  })
  return data
}

const insertEventData = (allShowsObj) => {
// pull event id's from the table, compare all current id's to all id's in allShowsObj, filter out objects where the id already exists in db
  knex('events')
    .select('id')
    .returning('id')
    .then(result=>{
      result = result.map(elem => elem.id)
      let newShowsArr = allShowsObj.filter(show=>{
        if (!result.includes(show.id)) {
          return show
        }
      })
      let newShowsIdAndStartTime = newShowsArr.map(show=>{
        return {
          'id': show.id,
          'startTime': convertTimeToMinutes(show.startTime)
        }})

      knex('events')
      .insert(newShowsArr)
      .returning('*').then(result=>{
        addPickupParties(newShowsIdAndStartTime)
      })

    })
}
// math from "hh:mm:ss" to minutes as a number
const convertTimeToMinutes = (time = 0) => {
  let newTime = time.split(':')
  newTime = parseInt(newTime[0])*60+parseInt(newTime[1])
  return newTime
}

// calculate last bus departure time in minutes then format back to "hh:mm"
const calcDepartTime = (time = 0, diff = 0) => {
  let result = ""
  if (time === 0) {
    result = `00:00`
  }
  else {
    let newTime = Number(time) - Number(diff)
    let hours = parseInt(newTime / 60)
    let minutes = (newTime % 60).toString().padStart(2,"0")
    result = `${hours}:${minutes}`
  }
  return result
}

// format each pickup location with its unique last bus departure times and aggregate into an array of objects
const addPickupParties = (newShowsIdAndStartTime) => {
  let newPickupParties = []

  newShowsIdAndStartTime.forEach(show=>{
    return newPickupParties.push({ pickupLocationId:1,
        eventId: show.id,
        lastBusDepartureTime: calcDepartTime(show.startTime, 00) },
      // { pickupLocationId:2,
      //   eventId: show.id,
      //   lastBusDepartureTime: calcDepartTime(show.startTime, 120) },
      // { pickupLocationId:3,
      //   eventId: show.id,
      //   lastBusDepartureTime: calcDepartTime(show.startTime, 90) },
      // { pickupLocationId:4,
      //   eventId: show.id,
      //   lastBusDepartureTime: calcDepartTime(show.startTime, 90) },
      // { pickupLocationId:5,
      //   eventId: show.id,
      //   lastBusDepartureTime: calcDepartTime(show.startTime, 75) },
      // { pickupLocationId:6,
      //   eventId: show.id,
      //   lastBusDepartureTime: calcDepartTime(show.startTime, 90) },
      // { pickupLocationId:7,
      //   eventId: show.id,
      //   lastBusDepartureTime: calcDepartTime(show.startTime, 210) }
    )
    })

  knex('pickup_parties')
  .insert(newPickupParties)
  .returning('*').then(result=>console.log('pickup parties updated', typeof result, result.length))
}

module.exports = {getApiData, insertEventData}
