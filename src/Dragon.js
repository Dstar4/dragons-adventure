const Ability = require('./Ability')
module.exports = class Dragon {
  constructor () {
    this.abilities = {
      claw: new Ability(
        'Claw',
        'A fierce claw attack.',
        'Physical',
        'active',
        1,
        5
      )
    }
  }
}
