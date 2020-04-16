const Dragon = require('./Dragon')
const Ability = require('./Ability')
module.exports = class RainWing extends Dragon {
  constructor () {
    super()
    this.name = 'RainWing'
    this.abilities = {
      venom: new Ability(
        'Venom', // Name
        'A gooey black venomous substance that shoots out of fangs.', // Description
        'poison', // Type
        'active', // Active
        1, // Level Unlocked
        10,
        10
      )
    }
    this.queen = 'Queen Glory'
  }
}
