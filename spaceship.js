class Spaceship {
  constructor(args) {
    this.id = args.id
    this.name = args.name
    this.phasers = args.phasers
    this.shields = args.shields

    this.docked = true
    this.cloaked = false
    this.warpDrive = 'disengaged'
    this.phasersCharge = 'uncharged'

    Store.data.spaceships.push(this)
  }
}