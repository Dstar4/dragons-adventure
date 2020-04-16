const chalk = require('chalk')
const rl = require('readline-sync')
const location = require('./data/locationData')
const Player = require('./Player')
const Location = require('./Location')
const Item = require('./Item')
const RainWing = require('./Rainwing')
const IceWing = require('./Icewing')
const MudWing = require('./Mudwing')
const NightWing = require('./Nightwing')
const beep = require('beepbeep')

const chapter1 = () => {
  console.log(
    chalk.greenBright(`
|-----------------------------------------------------------------------|
|                        CHAPTER 1: THE DRAGONETS LAIR                  |
|-----------------------------------------------------------------------|
`)
  )
}
const key = () => {
  console.log(
    chalk.blue(`
───────────────────────▄██▄▄██▄
──────────────────────██████████
──────────────────────▀████████▀
────────────────────────▀████▀
─────────────────────────████
─────────────────────────████
─────────────────────────████
─────────────────────────████
─────────────────────────████
─────────────────────────████
─────────────────────────████
─────────────────────────████
──────────────────────▄▄▄████
──────────────────────▀▀▀████
──────────────────────▀▀▀████
──────────────────────▀▀▀████
──────────────────────▄█████▀
`)
  )
}
const dragonAskii = () => {
  console.log(
    chalk.red(
      `
111111111111111111111111111111111111111111111111111111111
111111111111111111111111111111111¶¶¶111111111111111111111
111111111111111111111111111111¶¶¶¶11111111111111111111111
1111111111111111111111111111¶¶¶¶1111111111111111111111111
11111111111111111111111111¶¶¶¶¶¶1111111111111111111111111
111111111111111111111111¶¶¶¶¶¶1111¶¶¶11¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶111
111111111111111¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶111111111
11111111111111111¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶111111111111
11111111111111111111¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶1111
1111111111111111¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶1111111111
111111111111111¶¶¶111¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶1111111
111111111111¶¶¶¶¶11¶¶¶¶¶¶¶¶¶¶¶11¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶111111
11111111111¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶1¶¶1111¶¶¶¶¶¶¶¶¶¶¶¶¶11¶¶¶¶¶1111
1111111¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶111¶11111¶¶¶¶¶¶¶¶¶¶¶¶¶111¶¶¶¶111
11111¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶111111111¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶1111¶¶¶11
1111¶¶¶¶¶¶¶¶111111111111111111111¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶11111¶¶1
11111¶¶¶¶¶111111111111111111111¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶11111111
1111111¶1111111111111111111¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶1111111
1111111111111¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶1111111
111111111111111¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶11¶¶¶¶¶1111111
11111111111¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶1111¶¶¶¶¶1111111
11111111¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶111111¶¶¶¶1111111
111111¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶111111111¶¶¶¶1111111
1111¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶11111111111¶¶¶¶1111111
111¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶111¶¶¶¶¶¶111111111111111¶¶¶11111111
11¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶1111111111111111111111111111¶¶111111111
1¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶11111111111111111¶¶1111111111111111111111
¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶111111111111111111111¶¶¶¶11111111111111111
¶¶¶¶¶¶¶¶¶¶1¶¶¶111111111111111111111111¶¶¶¶¶11111111111111
¶¶¶¶¶¶¶¶¶¶11¶¶11111111111111111111111111¶¶¶¶¶¶¶1111111111
¶¶¶¶¶¶¶¶¶¶¶111¶111111111111¶¶¶11111¶¶¶¶111¶¶¶¶¶¶¶11111111
¶¶¶¶¶¶¶¶¶¶¶¶11111111111111111¶¶¶11111¶¶¶¶¶¶¶¶¶¶¶¶¶¶111111
¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶11111111111111¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶1111
¶1¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶111111111¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶11
¶¶11¶¶¶¶¶¶¶¶¶¶¶¶111111111¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶111¶¶¶¶¶¶¶¶¶¶¶¶1
1¶11¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶11111111111¶¶¶¶¶¶¶¶
1111¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶11111111111111¶¶¶¶¶¶
1111¶¶¶¶¶1¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶11¶¶¶¶¶¶¶¶11111111111111¶¶¶¶¶
11111¶¶¶11111¶¶¶¶¶¶¶¶¶¶¶¶¶11111¶¶¶¶¶¶¶¶¶¶11111111111111¶¶
1111¶¶¶11111111¶¶¶1¶¶¶¶¶¶¶¶¶11111¶¶¶¶¶11111111111111111¶¶
1111¶¶¶111111111111111¶¶¶¶¶¶¶1111111¶¶¶¶¶¶¶¶111111111111¶
11111¶¶1111111111111111111¶¶¶¶¶1111111111111111111111111¶
111111¶11111111111111111111¶¶¶¶11111111111111111111111111
1111111111111111111111111111¶¶¶11111111111111111111111111
11111111111111111111111111111¶¶11111111111111111111111111
111111111111111111111111111111111111111111111111111111111
111111111111111111111111111111111111111111111111111111111
                WINGS OF FIRE
    `
    )
  )
}

const validDirections = ['n', 's', 'e', 'w']
const validCommands = () => {
  console.log(
    chalk.yellow(`
Commands:

Movement: n , s , w, e
Inventory: i,
Abilities: a,
Stats: s,
Examine: examine,
Take Item: t,
Show Commands: c,

`)
  )
}
const yel = word => {
  return `${chalk.yellow(word)}`
}
function main () {
  /* ------------------------------- GAME LOGIC ------------------------------- */
  processResponse = response => {
    // TRAVEL
    if (validDirections.includes(response)) {
      console.clear()
      return player1.travel(response.toLowerCase())
    }
    switch (response) {
      // TAKE ITEM
      case 't':
        player1.location.printItems()
        let itemName = rl.question('What item would you like to take?\n')
        if (player1.location.items.includes(itemName)) {
          console.clear()
          player1.addItem(itemName)
          player1.location.removeItem(itemName)
          break
        } else {
          return console.clear()
        }

      // INVENTORY
      case 'i':
        console.clear()
        return player1.printItems()
      // STATS
      case 'stats':
        console.clear()
        return player1.printStats()
      // ABILITIES
      case 'a':
        console.clear()
        return player1.printAbilities()
      // COMMANDS
      case 'c':
        console.clear()
        return validCommands()
      // EXAMINE
      case 'examine':
        player1.location.printItems()

        break
      // EXIT
      case 'exit':
        console.clear()
        return process.exit()

      default:
        break
    }
  }

  /* ------------------------------- BUILD LOCATION MAP --------------------------- */

  location.yourRoom.w_to = location.dragonetteHallway
  location.dragonetteHallway.e_to = location.yourRoom

  location.dragonetteHallway.w_to = location.historyRoom
  location.historyRoom.e_to = location.dragonetteHallway

  location.historyRoom.n_to = location.mentorsRoom
  location.mentorsRoom.s_to = location.historyRoom

  /* ------------------------------- BUILD ITEMS ------------------------------ */

  let items = {
    mentorsStone: new Item('Mentors Stone', 'Quest')
  }

  location.mentorsRoom.addItem(items.mentorsStone.name)

  /* -------------------------- CONSTRUCT NEW PLAYER -------------------------- */
  // let player1 = new Player(
  //   'Daniel', // Name
  //   'Male', // Gender
  //   buildDragonType('IceWing'), // Type
  //   'I am awesome'
  // )

  let player1 = createNewPlayer()

  player1.location = location.yourRoom

  const kestral = new Player(
    'Kestral', // Name
    'Male', // Gender
    buildDragonType('RainWing'), // Type
    'I am Kestral'
  )

  console.clear()

  let playing = false
  let play = rl.question('\nAre you ready to play? [y,n] \n')

  if (play == 'y') {
    playing = true
    console.clear()
  } else {
    console.log('Come back when you are braver.')
    process.exit()
  }

  dragonAskii()

  setTimeout(() => {
    console.clear()

    player1.printStats()
    player1.printAbilities()

    setTimeout(() => {
      console.clear()

      while (playing) {
        chapter1()
        player1.printLocation()

        let response = rl.question(
          chalk.yellowBright(
            `
            \nWhich direction would you like to travel? (N , S , E , W)\n\n
                                            N
                                            |
                                        W ----- E
                                            |
                                            S

  `
          )
        )
        processResponse(response)
      }
    }, 7000)
  }, 5000)
}

main()

function buildDragonType (type) {
  switch (type.toLowerCase()) {
    case 'rainwing':
      return new RainWing()
    case 'mudwing':
      return new MudWing()
    case 'icewing':
      return new IceWing()
    case 'nightwing':
      return new NightWing()
    default:
      console.log(chalk.red('INVALID DRAGON TYPE'))
      break
  }
}

// COMBAT EXAMPLE
// player1.attack('Frost Breath', kestral)
// kestral.attack('Venom', player1)
// console.log('KESTRAL HP', kestral.hp)
// console.log('PLAYER 1 HP', player1.hp)

// CREATE NEW PLAYER FUNCTION
function createNewPlayer () {
  let newPlayer = {
    name: null,
    type: null,
    gender: null,
    description: null
  }
  newPlayer.name = rl.question(`\n
What is your character's name?\n\n`)

  newPlayer.type = rl.question(
    `\nWhat type of Dragon are you?\nOptions: RainWing, IceWing, MudWing, NightWing\n\n`
  )
  while (!buildDragonType(newPlayer.type)) {
    newPlayer.type = rl.question(
      `\nPlease choose a valid dragon type.\nOptions: RainWing, IceWing, MudWing, NightWing\n\n`
    )
  }
  newPlayer.gender = rl.question(`\nWhat is your character's gender?\n\n`)
  newPlayer.description = rl.question(`\nDescribe your character.\n\n`)

  return new Player(
    newPlayer.name, // Name
    newPlayer.gender, // Gender
    buildDragonType(newPlayer.type), // Type
    newPlayer.description // Description
  )
}
