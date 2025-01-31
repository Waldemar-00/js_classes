'use strict'

//! OPEN_CLOSED Principle

class Treasure
{
    value = 0
}

class Coin extends Treasure
{
    value = 10
}

class Cristal extends Treasure
{
    value = 20
}

class Brilliant extends Treasure
{
    value = 50
}

class Inventory
{
    #score = 0
    riches ( treasure )
    {
       this.#score += treasure
    }
}