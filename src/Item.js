module.exports = class Item {
  constructor (name, type) {
    this.name = name
    this.type = type
  }

  printStats = () => {
    console.log(`
    Name: ${this.name},
    Type: ${this.type},
    `)
  }
}
