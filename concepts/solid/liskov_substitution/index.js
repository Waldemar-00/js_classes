'use strict'

//! Liskov Substitution Principle

class User
{
    #role = 'user'
    getRole() { return this.#role }
}
class Admin extends User
{
    #role = [ 'user', 'admin' ]
    getRole ()
    {
        return this.#role.join(', ')
    }
}
function logRole (role)
{
    console.log( 'Role: ' + role.toUpperCase() + '!')
}

logRole( new User().getRole() )
logRole( new Admin().getRole() )