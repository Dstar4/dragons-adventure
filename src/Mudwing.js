const Dragon = require('./Dragon')
const Ability = require('./Ability')
module.exports = class MudWing extends Dragon {
  constructor () {
    super()
    this.name = 'MudWing'
    this.abilities = {
      fire: new Ability(
        'Fire', // Name
        'A cone of flame the emanates from the MudWings mouth scorching all in its path.', // Description
        'fire', // Type
        'active', // Active
        1 // Level Unlocked
      ),
      armoredScaled: new Ability(
        'Armored Scales',
        'MudWings have thick, brown, armor-like scales on their underscales, which are usually most noticeable in bright sunlight.',
        'defensive',
        'passive',
        3
      )
    }
    this.queen = 'Queen Moorhen'
  }
}

/*

If they are warm enough, MudWings can breathe fire, though not quite as powerful as SandWings, NightWings and especially SkyWings. Thanks to their muscular bodies, MudWings are quite strong. Due to this they very well could be the largest tribe in Pyrrhia, but this is not confirmed. They are most comfortable in muddy or swampy areas and can blend into marshy areas quite well. It is also common for MudWings to be resting submerged in mud. Mud is often used to treat and ease the pain of wounds and heal this type of dragon to an extent. In addition to these, they can hold their breath for up to an hour.

MudWings that hatch from blood-red eggs, laid every few years or so, are described to be resistant to heat and fire. Their fireproof scales are only activated once they come in contact with mud. However, if a MudWing that hatches from a blood-red egg does not come in contact with mud, it will still heal faster than most other dragons and are mostly impervious to fire, as seen with Clay. It is currently unknown if there are causes for eggs to be blood-red, or if it's just random chance, although it is said that NightWings may have learned the patterns and statistics for when blood-eggs occur. Though fire will still hurt them, any injuries caused by fire will instantly heal over. In The Dragonet Prophecy, Clay demonstrates this when he fights Peril, a SkyWing with firescales, who can turn a dragon to ash just by touching them, without dying.
This fire immunity works faster once the MudWing has been exposed to mud, as dragons draw strength from their natural habitats.
Looks

MudWings have thick, brown, armor-like scales on their underscales, which are usually most noticeable in bright sunlight. They are usually depicted as dark green (similar to the marsh), a brownish-red color, and even an orange color, as seen in the first book's graphic novel interpretation. However, this has yet to be shown as canon in any other media. Their nostrils are located on the top of the snout, on a large, flat head so that they can lay submerged in mud for long periods. They have thick, curved horns. Their eyes have been described as brown, gold, amber, or brown with yellow rings around the pupils, similar to central heterochromia. Their bodies are muscular and robust, closely resembling alligators, crocodiles, and other prehistoric reptiles.

This fire immunity works faster once the MudWing has been exposed to mud, as dragons draw strength from their natural habitats.

*/
