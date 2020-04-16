const Dragon = require('./Dragon')
const Ability = require('./Ability')

module.exports = class NightWing extends Dragon {
  constructor () {
    super()
    this.name = 'NightWing'
    this.abilities = {
      hiddenClaw: new Ability(
        'Hidden Claw', // Name
        'An unseen attack that catches your enemy off guard', // Description
        'physical', // Type
        'active', // Active
        1 // Level Unlocked
      ),
      stealth: new Ability(
        'Stealth', // Name
        'Move unseen through the shadows and blend into the night', // Description
        'stealth', // Type
        'active', // Active
        3 // Level Unlocked
      )
    }
    this.queen = 'Queen Battlewinner'
  }
}

/*
NightWings are described to look like "the night sky coming down on you" when attacking. They move unseen through the shadows and blend into the night, which gives them a fearful reputation and makes them more deadly and excellent assassins.


In scrolls, NightWings are said to possess legendary abilities. They are claimed to have the ability of mind reading, as well as being able to tell prophecies by foreseeing the future; this was proven false by Stonemover, who said that no NightWing had either of these abilities in the last few centuries, which, unknown to the NightWings, was because the NightWing eggs had stopped being exposed to moonlight. However, a young dragon named Moonwatcher obtained the power to read minds and see the future because she hatched in the rainforest, proving these powers do still exist. Later in Moon Rising, Moon says that other NightWings are having eggs in the rainforest, therefore under the moonlight, proving that these powers will come to thrive in the NightWing tribe and make the NightWings "all-powerful" again. Also, these dragons can breathe fire at any time, like SkyWings and SandWings. NightWings also appear to have a slight resistance to fire, as shown with Vengeance and Starflight.
NightWings are more active at night, with Deathbringer and Fatespeaker as examples. They seem to have a very strong sense of smell.
Darkstalker told Moonwatcher in Moon Rising that a NightWing hatched under one full moon can either read minds or see the future, while a NightWing that hatched under two full moons has both. He also said that if an egg hatches under three full moons the dragonet still has both powers but strengthened. He did not know if there would be any stronger ones, though there have been some arguments that there might be.
NightWings were shown to be very good at making up prophecies, and they attended special classes to learn how to make them sound real. They were also skilled at making it seem like they could read minds, due to the classes they took about lying and making fake prophecies mentioned in The Dark Secret.  A NightWing crossed with a BeetleWing created the HiveWing and SilkWing tribes.
Looks
NightWings have forked, black tongues and have very dark scales, which are usually black, dark blue or purplish-black, and they have silver or dark red, purple or blue underbellies. However, some NightWings may have dark green underbellies, such as Foeslayer, as stated in Darkstalker. (Mind readers have silver teardrop scales by the corners of their eyes like Moonwatcher and Darkstalker). In The Dragonet Prophecy, when Morrowseer dropped off Starflight, it said that the sun picked up glints of purple and deep blue on his body. They have been described with black, dark blue, dark brown, purple, or dark green eyes. The undersides of their wings are always black and speckled with silver scales that give them the appearance of a night sky filled with twinkling stars, allowing them to fly at night without detection. NightWings were once most active at night and tended to sleep during the day, but their nocturnal sleep schedule had been changed due to two thousand years of living on the volcano, so they now sleep at night, like the other dragon tribes.Starflight's father, Mastermind, has done studies about genetic wing patterns. Both Starflight and Mastermind have similar patterns (scattered outwards like a spray of stardust), whereas Morrowseer 's were different, curled in like a snail shell. Mastermind 's theory appeared to be that the star spiral patterns are genetic.  NightWings are also known to be able to hang "from crags, rocks, and ceilings like bats," as described by Starflight in The Dark Secret.
*/
