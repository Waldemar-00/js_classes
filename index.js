'use strict'

//! Interface Segregation Principle


class Weapon
{
    cost
    //! hit () {}
    //! shoot(){}
    //! ONLY common methods or properties___________________!!!
    damage() {}
}

class Sword extends Weapon
{
    hit() { this.damage() }
}

class Rifle extends Weapon
{
    shoot(){ this.damage() }
}