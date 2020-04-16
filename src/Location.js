module.exports = class Location {
  constructor (name, description) {
    this.name = name
    this.description = description
    this.n_to = null
    this.s_to = null
    this.w_to = null
    this.e_to = null
    this.items = []
  }

  /* ---------------------------------- ITEMS --------------------------------- */

  printItems = () => {
    console.log(`Items:
    ${this.items.length > 0 ? this.items.map(item => `${item}`) : 'No Items'}
    `)
  }

  addItem = item => {
    this.items.push(item)
  }

  removeItem = name => {
    this.items = this.items.filter(i => {
      i !== name
    })
  }
}
