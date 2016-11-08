class CrewMember {
  constructor(args) {
    this.id = args.id
    this.position = args.position
    this.ship_id
    this.currentShip = 'Looking for a Rig'

    Store.data.crewMembers.push(this)
  }

  assignShip(spaceship) {
    this.ship_id = spaceship.id
    this.currentShip = spaceship
    spaceship.docked = false
  }

  engageWarpDrive() {
    if (this.position === 'Pilot' && this.ship_id) {
      this.currentShip.warpDrive = 'engaged!'
    } else {
      return 'had no effect'
    }
  }

  setsInvisibility() {
    if (this.position === 'Defender' && this.ship_id) {
      this.currentShip.cloaked = true
    } else {
      return 'had no effect'
    }
  }

  chargePhasers() {
    if (this.position === 'Gunner' && this.ship_id) {
      this.currentShip.phasersCharge = 'charged!'
    } else {
      return 'had no effect'
    }
  }
}