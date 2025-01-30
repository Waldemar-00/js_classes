'use strict'
//! __BUILDER

class Wallet  //! __Chaining
{
    balance = 0

    add ( sum )
    {
        this.balance += sum
        return this
    }
    remove ( sum )
    {
        this.balance -= sum
        return this
    }
}

const wallet = new Wallet()

wallet.add( 1200 ).add( 900 ).add( 400 ).remove( 350 )
console.log( wallet.balance )

class Builder
{
    house = {}
    addRoof ()
    {
        this.house.roof = 'ROOF'
        return this
    }
    addDoor ()
    {
        this.house.door = 'DOOR'
        return this
    }
    addWalls ()
    {
        this.house.walls = 'WALLS'
        return this
    }
    //...ect
    execute(){ return this.house }
}

console.log( new Builder().addWalls().addRoof().addDoor().execute() )
