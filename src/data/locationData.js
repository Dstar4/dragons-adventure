const Location = require('../Location')
const chalk = require('chalk')
const yel = word => {
  return `${chalk.yellow(word)}`
}

module.exports = location = {
  mentorsRoom: new Location(
    'Mentors Room',
    `This is the mentors private room, be careful.`
  ),
  historyRoom: new Location(
    'History Room',
    `You are standing at the entrance to a bright cavern with a small hole in the ceiling, just large enough to allow lots of light.
Five natural platforms form between the cavern walls and floor, making an excellent place to sit for class. Various scrolls litter the floor.`
  ),
  yourRoom: new Location(
    'Your Personal Room',
    `You are standing in a small rock cavern, this is your personal room.
There is a ${yel('scroll')} laying on a rock shelf, it looks important.
There is an ${yel('exit')} to the West.`
  ),
  dragonetteHallway: new Location(
    'Dragonettes Hallway',
    `A long dark hallway stretches to the North. Your bedroom lies to the ${yel(
      'East'
    )}.`
  )
}
