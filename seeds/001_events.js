

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('events').del()
    .then(function () {
      // Inserts seed entries
      return knex('events').insert([
        { id: 1,
          date: '08/08/2019',
          startTime: '19:00',
          venue: 'Red Rocks',
          headliner: 'My Morning Jacket',
          support1: 'Band of Horses',
          support2: '',
          support3: '',
          headlinerBio: `My Morning Jacket is a rock band which formed in 1998 in Louisville, Kentucky, United States. The band consists of Jim James (vocals, guitar), Carl Broemel (guitar), \"Two Tone\" Tommy Blankenship (bass), Bo Koster (keyboards) and Patrick Hallahan (drums). The band is best known for their reverb-soaked sound and their enthusiastic live shows. My Morning Jacket is signed with ATO Records. The band's style is a blend of alternative, alt country, folk rock and psychedelic rock.\n\nThe band's moniker comes from a discarded coat James saw while walking through the remains of his favorite bar the morning after it burned down. The coat had the letters \"MMJ\" embroided on it. The band has released seven albums so far:  \"The Tennessee Fire\" (1999), \"At Dawn\" (2001), \"It Still Moves\" (2003), \"Z\" (2005), \"Evil Urges\" (2008), \"Circuital\" (2011) & \"The Waterfall\" (2015). The band's breakthrough came when their 2003 single \"One Big Holiday\" became one of the most played songs on college radio that year.  2008's \"I'm Amazed\" was also a sizable hit, peaking at #6 on Billboard's Triple A (adult album alternative) Singles chart. \n\nThe Circuital songfacts reports that \"Circuital\" was recorded inside a church’s converted gymnasium in the band's hometown of Louisville, Kentucky. Said frontman Jim James: “I hate the phrase ‘going back to our roots’, but for this record we came home and made it in Kentucky. And it just felt a lot like it did when we were first starting out.” \nJames co-produced the record with Tucker Martine. The pair first worked together when James appeared on Laura Veirs ' album \"July Flame\" in 2010, which Martine, Veirs’ husband, also produced. \n\nMy Morning Jacket guest stared in the American Dad Episode \"My Morning Straitjacket\" where Stan Smith becomes obsessed with them and decides to become a groupie.  The edisode was first aired November 22 2009. <a href=\"https://www.last.fm/music/My+Morning+Jacket\">Read more on Last.fm</a>. User-contributed text is available under the Creative Commons By-SA License; additional terms may apply.`,
          headlinerImgLink: `https://lastfm-img2.akamaized.net/i/u/174s/95396616b2fb4ee1ceaeca694eb84f1d.png`,
          meetsCriteria: true,
          isDenied: false,
          created_at: '2016-06-26T14:26:16.000Z',
          updated_at: '2016-06-26T14:26:16.000Z',
        },
        { id: 2,
          date: '08/09/2019',
          startTime: '19:00',
          venue: 'Red Rocks',
          headliner: 'Dr. Dog',
          support1: 'Brett Banfe',
          support2: '',
          support3: '',
          headlinerBio: `Dr. Dog is a indie rock group from Philadelphia, Pennsylvania which formed in 1999. The current lineup consists of Scott \"Taxi\" McMicken (vocals, guitar), Toby \"Tables\" Leaman (vocals, bass),  Zach \"Text\" Miller (keyboards, guitar), Frank \"Thanks\" McElroy (guitar) and Eric \"Teach\" Slick (drums).\n\n\"There's a little folk, blues, indie rock, soul, bluegrass--and a whole lot of down-home harmonizing. It conjures images of old friends sitting on a porch swapping instruments and just letting the tape recorder run.\" - Doug Wallen\n\nDr. Dog has been creating music in various incarnations for four years now. Beginning with The Psychedelic Swamp, a concept album realized in the damp ruin of a flooded basement with waterlogged guitars and a digital delay pedal, the band has simmered on the back burner of our musical lives for most of its existence but we've recently renewed our resolve to forge ahead and give Dr. Dog the attention we think it deserves.\n\nAlthough Dr. Dog has as many as 20 honorary \"members\" who have assisted in various (mostly spiritual) capacities through the years, the core of the band consists of five musicians. Our standard instrumentation includes two guitars, bass, drums, keyboard and three part harmonies. The Beach Boys, The Beatles, Tom Waits, David Bowie and Neil Young are influences, but we would be remiss in not acknowledging our debt to Pavement,  Palace Brothers, R. Stevie Moore or Roy Wood.\n\nCurrently, the lineup is as such: Toby Leaman on bass and singing, Scott McMicken on woof+mud distortion solo guitar and voice, Frank McElroy on lean clean occasionally tremolo'd guitar, Zach Miller on keyboard(s) and Eric Slick on drums. \n\nWe've all done our share of playing. Toby and Scott have played together in a myriad of bands including Raccoon, Unleash the Bastards, and Beard; Andrew played bass in Raccoon and managed the phenomenal The Teeth; Zach has played with Bradford Trojan and Traffic Jam and studied jazz guitar.\n\nAside from the aforementioned Swamp album - a self-produced, self-recorded low-fi four track recording - we have two other recordings. Toothbrush is a compilation of fourth generation eight-track recordings culled from the past few years. Easy Beat was the first proper record, followed by the 2006 EP Takers and Leavers and two full-length albums, 2006's We All Belong and 2008's Fate.  The latest release is called Shame, Shame, and was released April 6th, 2010. <a href=\"https://www.last.fm/music/Dr.+Dog\">Read more on Last.fm</a>. User-contributed text is available under the Creative Commons By-SA License; additional terms may apply`,
          headlinerImgLink: 'https://lastfm-img2.akamaized.net/i/u/174s/79dd6376e7944ea7b4067381ceba114e.png',
          meetsCriteria: true,
          isDenied: false,
          created_at: '2016-06-26T14:26:16.000Z',
          updated_at: '2016-06-26T14:26:16.000Z',
        },
        { id: 3,
          date: '08/10/2019',
          startTime: '19:00',
          venue: 'Red Rocks',
          headliner: 'Iron & Wine',
          support1: 'Fleet Foxes',
          support2: 'Devotchka',
          support3: 'Paul DeHaven',
          headlinerBio: `ron And Wine is the stage and recording name of folk rock singer-songwriter, Samuel Beam. He has released three studio albums, several EPs and singles, as well as a few download-only releases, which include a live album (a recording of his 2005 Bonnaroo performance). Beam was raised in South Carolina before moving to Florida to attend school, but now resides outside of Austin, Texas. The name Iron And Wine is taken from a dietary supplement named \"Beef Iron & Wine\" that he found in a general store while shooting a film.[1]\n\nEarly life\n\nBeam was born July 26, 1974. He was raised outside Columbia, South Carolina, where his father worked in land management and his mother was a schoolteacher. When he was a child, his family took regular trips to the country where his grandfather ran a farm. He attended Seven Oaks Elementary, Irmo Middle School, and Chapin High School. While home from college, Beam was a waiter at California Dreaming restaurant in Columbia.\n\nBeam graduated from the Florida State University Film School with an MFA degree. Until the first Iron And Wine album, Beam's main source of income was as a professor of film and cinematography at the University of Miami and Miami International University of Art & Design.[2] He had been writing songs for over seven years before a friend lent him a four-track recorder. His friends handed out copies of demos that he had made, and the owner of Sub Pop Records personally contacted Beam and proposed a deal.[3]\n\nMusical career\n\nBeam released his first Iron And Wine album, The Creek Drank the Cradle, on the Sub Pop label in 2002. Beam wrote, performed, recorded and produced the album in his home studio. Featuring acoustic guitars, banjo, and slide guitar, the album's music has been compared to that of Nick Drake,[4] Simon and Garfunkel,[5] Elliott Smith, and John Fahey. The debut album was followed in 2003 by The Sea & The Rhythm, an EP containing other home-recorded tracks with a similar style to the songs on the debut.\n\nBeam's second album, Our Endless Numbered Days (2004), was recorded in a professional studio with a significant increase in fidelity. Produced in Chicago by Brian Deck, the focus was still on acoustic material, but the inclusion of other band members gave rise to a slightly different sound. That same year, Beam recorded the song \"The Trapeze Swinger\" for the film In Good Company.\n \nSarah Beam at the Beachland Ballroom in Cleveland\n\nIn February 2005, Beam released an EP titled Woman King, which expanded on the sounds of his previous LP and added electric guitars. Each track featured a spiritual female figure and had subtle Biblical undertones.\n\nThe EP In the Reins, a collaboration with the Arizona-based rock band Calexico, was released in September 2005. Beam wrote all of the EP's songs years earlier, but Calexico added their trademark fusion of dusty southwestern rock, traditional Mexican music and jazz to the songs' arrangements. Several tracks feature brass instruments, a first for Beam's music.\n\nThe third full-length Iron And Wine album, titled The Shepherd's Dog, was released September 25, 2007. This album was voted one of the ten best of 2007 by Paste magazine.[6] Contributors included Joey Burns and Paul Niehaus of Calexico, as well as jazz musicians Matt Lux and Rob Burger.[7] When asked to describe the album to The Independent, Beam remarked that \"it's not a political propaganda record, but it's definitely inspired by political confusion, because I was really taken aback when Bush got reelected.\"[8]\n\nIn 2002, Beam recorded a cover of The Postal Service's then-unreleased song \"Such Great Heights\". Rather than being included on an Iron And Wine release, the track was initially only included as a b-side of the original version by The Postal Service. In 2004, Beam's version was featured in an advertisement for M&M's and in the film Garden State and its popular soundtrack. This version was later used in a 2006 Ask.com advertisement. A single of the Iron And Wine version of \"Such Great Heights\" was released in 2006, backed with recordings of \"The Trapeze Swinger\" and \"Naked as We Came\" made for Radio Vienna.\n\nBeam has released all of his music on iTunes, including several exclusive EPs. The Iron And Wine iTunes Exclusive EP features unreleased studio recordings, including a Stereolab cover and two tracks which had previously only appeared on vinyl. The Live Session (iTunes Exclusive) EP features Beam and his sister, Sarah Beam, performing a number of tracks from his albums, as well as a cover of New Order's \"Love Vigilantes\". Sarah Beam has contributed backing vocals on many of Beam's studio recordings.\n\nBeam's music has appeared in a few TV show soundtracks, including Grey's Anatomy and The L Word. Notably, 2008 saw the use of \"Passing Afternoon\" in the emotional finale of the fourth season of the show House, M.D.. Later in 2008, \"Flightless Bird, American Mouth\" was used in the film Twilight. The song was specifically chosen for the film's prom scene by Kristen Stewart, the female lead, and appears on the film's soundtrack. <a href=\"https://www.last.fm/music/+noredirect/Iron+And+Wine\">Read more on Last.fm</a>. User-contributed text is available under the Creative Commons By-SA License; additional terms may apply.`,
          headlinerImgLink: 'https://lastfm-img2.akamaized.net/i/u/174s/92f01b09b6874fa0be68cfa67e4b82fe.png',
          meetsCriteria: true,
          isDenied: false,
          created_at: '2016-06-26T14:26:16.000Z',
          updated_at: '2016-06-26T14:26:16.000Z',
        },
        { id: 4,
          date: '08/11/2019',
          startTime: '19:00',
          venue: 'Red Rocks',
          headliner: 'Phosphorescent',
          support1: 'Y La Bamba',
          support2: 'Tori Amos',
          support3: 'Tori Spelling',
          headlinerBio: `Phosphorescent is the solo project of American musician and songwriter Matthew Houck (born 1980 in Alabama). Houck began recording and performing under this nom de plume in 2001 in Athens, Georgia, USA. He is currently based in Brooklyn, New York.\n\nBefore recording under the name Phosphorescent, Houck traveled the world playing under the moniker Fillup Shack and, in 2000, self-released a limited pressing of the album \"Hipolit\". In 2001 Houck changed his recording name to Phosphorescent, and, in 2003, released the full-length album \"A Hundred Times or More\". Interestingly, in the liner notes of the album, Fillup Shack is credited with the drum recordings. The following year, he released the EP \"The Weight of Flight\". \n\nPhosphorescent rose to wider critical acclaim after releasing \"Aw Come Aw Wry\" in August 2005 and \"Pride\" in October 2007. The latter was named the 12th best album of 2007 by Stylus Magazine and received a 8.0 rating from indie website Pitchfork Media. In 2009, inspired by Willie Nelson's tribute album to Lefty Frizzell entitled \"To Lefty From Willie\", Houck crafted a tribute album to Nelson himself entitled \"To Willie\" which was released through Dead Oceans. Phosphorescent released \"Here's to Taking It Easy\" in 2010 and \"Muchacho\" in 2013.\n\nOfficial site <a href=\"https://www.last.fm/music/Phosphorescent\">Read more on Last.fm</a>. User-contributed text is available under the Creative Commons By-SA License; additional terms may apply.`,
          headlinerImgLink: `https://lastfm-img2.akamaized.net/i/u/174s/0f50c1382e8d4de5cd4a734eb0616e12.png`,
          meetsCriteria: true,
          isDenied: false,
          created_at: '2016-06-26T14:26:16.000Z',
          updated_at: '2016-06-26T14:26:16.000Z',
        },
        { id: 5,
          date: '08/12/2019',
          startTime: '19:00',
          venue: 'Red Rocks',
          headliner: 'An Evening with Zach Del Rocha',
          support1: 'Sublime',
          support2: 'Damian Marley',
          support3: '',
          headlinerBio: '',
          headlinerImgLink: '',
          meetsCriteria: true,
          isDenied: false,
          created_at: '2016-06-26T14:26:16.000Z',
          updated_at: '2016-06-26T14:26:16.000Z',
        },
        { id: 6,
          date: '08/13/2019',
          startTime: '19:00',
          venue: 'Red Rocks',
          headliner: 'Wet',
          support1: 'Haerts',
          support2: '',
          support3: '',
          headlinerBio: `There are at least five artists with the name Wet.\n\n1) Wet is an American indie pop group from Brooklyn, New York. The band's first two albums—the 2013 self-titled EP and 2016 Don't You—are credited to Kelly Zutrau, Joe Valle, and Marty Sulkow. In March 2018, Wet released a single, \"There's a Reason\", as a duo of Zutrau and Valle.\n\nBandcamp: http://allwet.bandcamp.com\n\n2) Experimental group from Louisville, Kentucky, consisting of Hank Paradis, Evan Booker, and Jeff Bryant. Currently, their only album is a self-titled release from 2011. Their second album is now in production and they are also working on a project with Louisville electronic band, Vegasus. They are currently unsigned. \n\n3) Rock group that released the album Shelter in 1997 and featured Gioia Bruno of Exposé on lead vocals.\n\n4) Italo disco duo from Belgium released three 12\" on S.T.D. records in the early/mid '80's.\n \n5) Hardcore punk band from Olympia, USA. <a href=\"https://www.last.fm/music/Wet\">Read more on Last.fm</a>. User-contributed text is available under the Creative Commons By-SA License; additional terms may apply.`,
          headlinerImgLink: 'https://lastfm-img2.akamaized.net/i/u/174s/394c1ef95d4eb8d66b78bb649f71c839.png',
          meetsCriteria: true,
          isDenied: false,
          created_at: '2016-06-26T14:26:16.000Z',
          updated_at: '2016-06-26T14:26:16.000Z',
        },
        { id: 7,
          date: '08/14/2019',
          startTime: '19:00',
          venue: 'Red Rocks',
          headliner: 'Ween',
          support1: 'The Flaming Lips',
          support2: 'Nosaj Thing',
          support3: '',
          headlinerBio: `Ween is an American alternative rock band that formed in 1984 in New Hope, Pennsylvania when Aaron Freeman (aka Gene Ween) and Mickey Melchiondo (aka Dean Ween) met in an eighth grade typing class. After a 28-year run, Freeman quit the band in 2012, citing the need to focus on his alcohol and drug addiction issues. Nonetheless, Ween reformed in late 2015 and is currently touring with no stated plans to release new recorded material.\n\nAaron Freeman and Mickey Melchiondo met in a junior high school typing class in 1984. Freeman recalled, “We didn't like each other. He was a jock, and I was more of a trench-coat guy. But we sat next to each other in typing class and both realized we were into music.” The name Ween was a word made up by the duo, a combination of the words wuss and penis. Their earliest home recordings were drug-fueled and free-spirited; Melchiondo would later say about this era, “the music was designed to be obnoxious”. Ween then collected a large underground fanbase despite being generally unknown in mainstream music circles aside from their 1992 fluke hit “Push th' Little Daisies”. \n\nFrom 1984 until 1994, Ween's live lineup consisted of Freeman on lead vocals and occasional rhythm guitar, Melchiondo on lead guitar and backing vocals, and a Digital Audio Tape (DAT) machine providing the pre-recorded backing tracks. They self-released six cassettes in the late eighties: Mrs. Slack (1985), The Crucial Squeegie Lip (Bird o' Prey; 1986), Axis: Bold as Boognish (Bird o' Prey; 1987), Erica Peterson's Flaming Crib Death (1987), The Live Brain Wedgie/WAD (1988), and Prime 5 (1989). In 1987, Freeman also released his own tape, Synthetic Socks, which featured Melchiondo on a few tracks. Ween's public debut was at the New Hope-Solebury High School talent show in 1986, where they performed a cover of Jimi Hendrix's \"Purple Haze\" with Chris Williams (a.k.a. Mean Ween) on bass and Karl Weimer on drums. Although this era was mostly just Freeman, Melchiondo and the DAT machine, they did play a few shows in the '80s as \"The Ween\" backed by the Rollins Band rhythm section, Andrew Weiss and Sim Cain.[11]\n\nThe band's style is eclectic, and while they could generally be referred to as rock, one of their defining tendencies has been experimentation with various styles incorporating a strong element of humor and absurdity. Both Gene and Dean are skilled multi-instrumentalists who overdubbed various instruments on their recordings, though they also record with the regular touring band.\n\nTheir earliest home recordings were anarchic and free-spirited, drawing on influences as far-reaching as Beatles, Queen, Prince, Butthole Surfers, The Residents and the lo-fi punk movement. Ween was often compared in their early years to other offbeat artists such as Frank Zappa and would always eschew such comparisons.\n\nWeen was signed to Twin/Tone Records in 1989 and released their first album GodWeenSatan: The Oneness in the following year, a 26-track smorgasbord of wild eclecticism. 1991's The Pod became a fast fan favorite, as the duo's use of drum machines, pitch-tweaked guitars & vocals and drug-laced humor became a trademark part of their sound. The Pod, according to Ween-lore, was written under the influence of Scotchgard, but this was later refuted by Gene and Dean themselves as being \"the most slime-bag thing we could think of.\" The contraption on the album cover is not a Scotchgard inhalation device, but a bong-like device used to send marijuana directly to the brain by use of nitrous oxide, which was said to leave the user intoxicated for days, but nauseated. The cover of The Pod used the cover of the 1975 Leonard Cohen album, The Best of Leonard Cohen, but with the head of Mean Ween (aka Chris \"Cribber\" Williams, a friend of the band) wearing the mask, pasted onto that of Cohen.\n\nPure Guava, the first of a series of releases on the Elektra label, featured their highest charting single, \"Push Th' Little Daisies\" (1992) which gained them media & MTV attention, as the video was a highlighted target on MTV's Beavis & Butt-head. Chocolate and Cheese followed in 1994, heralding 70s pop/rock & soul sendups such as \"Freedom of '76\" and \"Voodoo Lady\". The \"Freedom of '76\" music video was directed by Spike Jonze. At this time, Ween began to expand their live and studio line-up, providing both a crisper production sound in the studio and an easier live setup (up until this time, Ween had been using DAT tapes to provide backings for their songs).\n\nWeen turned to Nashville studio musicians for the recording of the authentically-spirited 12 Golden Country Greats (1996) which only contained ten tracks. There are two theories regarding the title of the album. The first is that it refers to the dozen veteran Nashville studio musicians who played on the album. The second is that the band did indeed record twelve songs during the demo sessions for the album, but upon the removal of the tracks \"I Got No Darkside\" and \"So Long, Jerry\" (the latter of which was a B-side on the \"Piss Up A Rope\" single) they decided not to rename it.\n\nThe nautically-themed The Mollusk followed in 1997, demonstrating Ween's satirization, deconstruction, and appreciative mastery of genres including 1960's Brit-pop, sea shanties, Broadway show tunes, and especially progressive rock. Their desire to pursue alternate forms of media led to the MP3-only release Craters of the Sac (1999), presented by Dean for online download and free trade. Elektra Records released a live compilation entitled Paintin' The Town Brown: Ween Live 1990-1998 in 1999, followed by White Pepper (2000), their pop-themed album and final studio set for Elektra. The track \"Even If You Don't\" was made into a music video directed by the creators of South Park, Trey Parker and Matt Stone. Shortly after White Pepper Ween started the internet radiostation WeenRadio, which was awarded 3rd best internet music site by Rolling Stone.[1]\n\nWeen also formed their own label at this time, Chocodog Records, which oversaw the release of several self-produced live sets. The aforementioned Paintin' the Town Brown, which was compiled and mastered by the band, was meant to be the first Chocodog release. According to Dean Ween, once the album was completed, Elektra realized the sales potential of the CD and denied Ween the right to release it through Chocodog. Later, Ween released the first official Chocodog album, Live in Toronto (a live recording from the 1996 tour, in which Ween performed with Bobby Ogdin & The Shit Creek Boys). The limited-pressing CD, available exclusively through the band website, became an instant collector's item. Subsequent Chocodog releases (Live at Stubb's and All Request Live) were produced in higher volumes to meet demand. In 2005, the label released the first instalment of a rarity compilation series entitled Shinola, and announced plans to re-release the 1987 cassette tape by Gene, Synthetic Socks.\n\nThe two signed to Sanctuary Records in 2003 and released Quebec, their first studio set in 3 years. In 2004, they released Live in Chicago, a DVD and CD set that compiled tracks from three energetic live performances.\n\nIn February of 2006, they rented an old farmhouse and converted it into a working studio. After writing over 50 songs and recording rough versions through 2006, they picked through them, and, with Andrew Weiss as producer, re-recorded album versions. As of March 2007, they are recording final versions of what they have said to be about 20 songs. On May 22, 2007 they announced they will be releasing an EP entitled \"The Friends EP\" on June 8th. Dean Ween said the EP will be \"The ultimate party record, filled with good beats and good times. Perfect for your barbecue or doing bong hits or whatever it is that you guys do.\" And also they announced the new album--entitled \"La Cucaracha\"-- was released October 23, 2007 on Rounder Records, placing them on the same label as fellow Alternative Rock duo They Might Be Giants.\n\nWeen came to an end in May of 2012 when Freeman announced the band had split to Rolling Stone Magazine.\n\nIn 2015 the band announced a series of reunion shows, starting with a three night stand in Colorado. In keeping with the prophecy, Boognish rose again. <a href=\"https://www.last.fm/music/Ween\">Read more on Last.fm</a>. User-contributed text is available under the Creative Commons By-SA License; additional terms may apply.`,
          headlinerImgLink: 'https://lastfm-img2.akamaized.net/i/u/174s/fb2064f57ef94a8980a2bd840393deb2.png',
          meetsCriteria: true,
          isDenied: false,
          created_at: '2016-06-26T14:26:16.000Z',
          updated_at: '2016-06-26T14:26:16.000Z',
        },
        { id: 8,
          date: '08/15/2019',
          startTime: '19:00',
          venue: 'Red Rocks',
          headliner: 'Sam Widges',
          support1: 'Ben Kronberg',
          support2: 'Lil Dickey',
          support3: 'Flight of the Conchords',
          headlinerBio: '',
          headlinerImgLink: '',
          meetsCriteria: true,
          isDenied: false,
          created_at: '2016-06-26T14:26:16.000Z',
          updated_at: '2016-06-26T14:26:16.000Z',
        },
        { id: 9,
          date: '08/16/2019',
          startTime: '19:00',
          venue: 'Red Rocks',
          headliner: 'Seth Brown and the Brown Notes',
          support1: 'The National',
          support2: 'The guy from The Black Keys (Solo Acoustic)',
          support3: '',
          headlinerBio: '',
          headlinerImgLink: '',
          meetsCriteria: true,
          isDenied: false,
          created_at: '2016-06-26T14:26:16.000Z',
          updated_at: '2016-06-26T14:26:16.000Z',
        }
      ])
      .then(() => {
        return knex.raw("SELECT setval('events_id_seq', (SELECT MAX(id) FROM events))")
      })
    })
}
