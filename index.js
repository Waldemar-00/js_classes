'user strict'

const User = function ( name, email )
{
    this.name = name
    this.email = email
    this.add = function (property, value)
    {
        this[property] = value
    }
}

const user = new User( 'Ivan', 'example@google.com' ) //! object instance

User.prototype.delete = function ( property )
{
    delete this[property]
}
user.add( 'age', 30 )
// console.log( user )
user.delete( 'age' )
// console.log( user )

const user_1 = new User( 'John', 'something@google.com' )
// console.log( user_1 )
// console.log( user_1.__proto__, 'PROTO')

//! TASK

const Bucket = function ( storeName )
{
    this.storeName = storeName
    this.supplies = []
}
Bucket.prototype.addSupply = function ( supplyName, amount )
    {
        if ( this.supplies.find(sp => sp.supplyName === supplyName ) )
        {
            return this.increaseSupply( supplyName, amount )
        }
        this.supplies.push(
            {
                supplyName,
                amount
            })

    }
Bucket.prototype.increaseSupply = function ( supplyName, number ) {
        this.supplies.forEach( sup =>
        {
            if (sup.supplyName === supplyName) sup.amount = sup.amount + number
        })
}
Bucket.prototype.decreaseSupply = function ( supplyName, number ) {
    this.supplies.forEach( ( sup, index ) =>
    {
        if ( sup.supplyName === supplyName ) sup.amount = sup.amount - number
        if ( sup.amount <= 0 ) this.supplies.splice( index, 1 )
    })
}
const cart = new Bucket( 'Some Store' )
cart.addSupply( 'Samsung', 2 )
cart.increaseSupply( 'Samsung', 5 )
cart.addSupply( 'Samsung', 3 )
console.log( cart )
cart.decreaseSupply( 'Samsung', 7 )
cart.addSupply( 'Samsung', 3 )
cart.decreaseSupply( 'Samsung', 6 )
console.log( cart )
console.log( cart.__proto__ === Bucket.prototype )