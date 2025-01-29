'use strict'


const User = {
    init (name, email)
    {
        this.name = name
        this.email = email
    },
    log ()
    {
        console.log('Hi, User')
    }
}

const user_1 = Object.create( User )

console.log( user_1 )
console.log( user_1.__proto__ === User )
user_1.init( 'Anton', 'user@gmail.com' )
console.log( user_1 )

const user_2 = Object.create( User )
console.log( user_2, 'user_2' )
const user_test = Object.create( user_1 )
console.log( user_test, 'user_test' )