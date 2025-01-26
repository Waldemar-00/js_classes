//! classes don't UP
//! always 'use strict'

class Book
{
    isRead = false
    constructor ( title, author )
    {
        this.titile = title
        this.author = author
    }
    readed ()
    {
        this.isRead = true
    }
}

const favourite = new Book( 'Time', 'ULADZIMIR' )
console.log( favourite )
console.log( Book.prototype )
console.log( favourite.__proto__ )
console.log( Book.prototype === favourite.__proto__ )