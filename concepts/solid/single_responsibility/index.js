'use strict'

//! Single Responsibility Principle

class Character
{
    #health = 100
    #inventories = []
    addInventory (item)
    {
        this.#inventories.push(item)
    }
    damage (damage)
    {
        this.#health -= damage
    }
}


class DB
{
    saveLocal ( charecter )
    {
        localStorage.setItem('charecter', charecter)
    }

    saveOnServer ( charecter )
    {
        //*...
    }
}