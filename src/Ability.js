module.exports = class Ability {
  constructor (name, description, type, active, levelUnlocked, damage, cost) {
    this.name = name
    this.description = description
    this.type = type
    this.active = active
    this.levelUnlocked = levelUnlocked
    this.currentLevel = 1
    this.experience = 0
    this.damage = damage
    this.cost = cost
  }
}
