const Dragon = require('./Dragon')
const Ability = require('./Ability')
module.exports = class IceWing extends Dragon {
  constructor () {
    super()
    this.name = 'IceWing'
    this.abilities = {
      frostBreath: new Ability(
        'Frost Breath', // Name
        'A cone of frost the emanates from the MudWings mouth scorching all in its path.', // Description
        'ice', // Type
        'active', // Active
        1, // Level Unlocked
        10,
        10
      ),
      resistElements: new Ability(
        'Resist Elements',
        'IceWings can withstand subzero temperatures and very bright light.',
        'defensive',
        'passive',
        3
      )
    }
    this.queen = 'Queen Glacier'
  }
}

/*
IceWings can withstand subzero temperatures and very bright light.
Instead of breathing fire, IceWings exhale a deadly freezing weapon called frostbreath, sometimes known by other dragons as "freezing death breath."
This vapor can quickly induce terrible frostbite, and if the frost breath enters through another dragon's throat, it can kill them by fusing their internal organs. However, this can be countered by lava (and potentially other heat sources), as discussed below.
In the first book, it was shown that the frostbreath can cause limbs to fall clean off, as noticed by Clay as he flew over a battlefield. Clay described it as a cloud of glittering smoke when he battled against Fjord in the SkyWing arena. Fjord shot his frostbreath at Clay's wing and damaged it, though his wing was repaired with mud provided by Peril later. When Clay shot fire into Fjord's mouth, the chill of his scales swallowed the flame. This caused the IceWing to have a bad coughing fit. Frostbreath can also be used to extinguish fires, demonstrated when Winter extinguished the flames in the history cave by exhaling frostbreath. If it comes in contact with the soil, ice crystals will grow. An IceWing can be stopped from using this power for a short amount of time by hot metal, fire, or other warm and hot materials
Their serrated claws are incredibly good at gripping ice and can be used to tear into their enemies' flesh quite easily, and being clawed by an IceWing has been said to be similar to getting clawed four times. According to The Dragonet Prophecy and Moon Rising, IceWing scales radiate a chill, similar to SandWing scales, which radiate heat.
*/
