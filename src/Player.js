const chalk = require('chalk')
module.exports = class Player {
  constructor (name, gender, type, description) {
    this.name = name
    this.gender = gender
    this.description = description
    this.type = type
    this.level = 1
    this.location = null
    this.items = []
    this.hp = 100
    this.mp = 100
  }

  /* -------------------------------- LOCATIONS ------------------------------- */

  printLocation = () => {
    console.log(`

|-----------------------  ${this.location.name}  -----------------------|


  ${this.location.description}

    `)
  }

  setLocation = location => {
    this.location = location
  }

  travel = direction => {
    switch (direction) {
      case 'n':
        if (this.location.n_to) {
          return (this.location = this.location.n_to)
        }
        return console.log(chalk.red('\n\t\tInvalid Movement Direction.\n'))

      case 's':
        if (this.location.s_to) {
          return (this.location = this.location.s_to)
        }
        return console.log(chalk.red('\n\t\tInvalid Movement Direction.\n'))

      case 'w':
        if (this.location.w_to) {
          return (this.location = this.location.w_to)
        }
        return console.log(chalk.red('\n\t\tInvalid Movement Direction.\n'))

      case 'e':
        if (this.location.e_to) {
          return (this.location = this.location.e_to)
        }
        return console.log(chalk.red('\n\t\tInvalid Movement Direction.\n'))

      default:
        return console.log(chalk.red('\t\tInvalid Movement Direction.\n'))
    }
  }

  /* ---------------------------------- STATS --------------------------------- */

  printStats = () => {
    let abilityArr = []
    Object.values(this.type.abilities).forEach(item => {
      abilityArr.push(item.name)
    })
    console.log('\n----- PLAYER STATS -----')

    console.log(
      chalk.green(`
    Name: ${this.name},
    Gender: ${this.gender},
    Type: ${this.type.name},
    Abilities: ${abilityArr}
    Level: ${this.level},
    Location: ${this.location.name}
    Description:${this.description}
    Items: ${this.items.length > 0 ? this.items : 'No Items'}
    HP: ${this.hp}
    MP: ${this.mp}
    `)
    )
  }

  printAbilities = () => {
    console.log('\n----- PLAYER ABILITIES -----')
    Object.values(this.type.abilities).forEach(ability => {
      console.log(
        chalk.blue(`
    Name: ${ability.name}
    Description: ${ability.description}
    Type: ${ability.type}
    Active: ${ability.active}
    Level Unlocked: ${ability.levelUnlocked}
    Current Level: ${ability.currentLevel}
    Experience: ${ability.experience}
    Damage: ${ability.damage}
    Cost: ${ability.cost}
    `)
      )
    })
  }

  /* ---------------------------------- ITEMS --------------------------------- */

  addItem = item => {
    this.items.push(item)
    console.log(`Added ${item} to ${this.name}'s inventory.`)
  }

  removeItem = item => {
    this.items = this.items.filter(i => {
      i !== item.name
    })
    console.log(`Removed ${item.name} from ${this.name}'s inventory.`)
  }

  printItems = () => {
    console.log('Current Items: ' + this.items)
  }

  /* --------------------------------- COMBAT --------------------------------- */

  // CONVERT ABILITY
  convertAbility = ability => {
    let command
    switch (ability) {
      case 'Frost Breath':
        command = this.type.abilities.frostBreath
        break
      case 'Venom':
        command = this.type.abilities.venom
        break

      default:
        break
    }

    return command
  }

  // ATTACK
  attack = (ability, target) => {
    let command = this.convertAbility(ability)
    target.takeDamage(command.damage)
  }

  // TAKE DAMAGE
  takeDamage = amount => {
    this.hp = this.hp - amount
  }
}
