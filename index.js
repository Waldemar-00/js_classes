'use strict'
//! Abstraction and encapsulation, inheritance ES5
//! Abstraction and encapsulation
class Film
{
    #name
    #author
    #lenght
    rating
    constructor ( name, author, lenght )
    {
        this.#name = name
        this.#author = author
        this.#lenght = lenght
    }
    get name () { return this.#name }
    get author () { return this.#author }
    get length () { return this.#lenght }
}

//!  Inheritance ES5

const Book = function ( title, author )
{
    this.title = title
    this.author = author
}
Book.prototype.buy = function ()
{
    console.log('BUY')
}

const AudioBook = function ( title, author, timeLenght )
{
    Book.call( this, title, author )
    this.timeLenght = timeLenght
}

//!__________________________________________________

AudioBook.prototype = Object.create( Book.prototype )
AudioBook.prototype.constructor = AudioBook

//!__________________________________________________

AudioBook.prototype.log = function ()
{
    console.log( `${ this.title }: ${ this.timeLenght }` )
}

const audiobook = new AudioBook( 'Lord of the Rings', 'Tolkien', 21 * 60 )

audiobook.log()
console.log( audiobook )
audiobook.buy()

console.log( audiobook instanceof AudioBook ) //! TRUE
console.log( audiobook instanceof Book ) //! TRUE
