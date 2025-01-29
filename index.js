class Book
{
    constructor ( title, author )
    {
        this.title = title
        this.author = author
    }
    buy () { console.log( 'BUY' ) }
    info() { console.log(`${this.title} - ${this.author}` ) }
}
const book = new Book( 'Lord of the Rings', 'Tolkien' )
book.info()

class AudioBook extends Book
{
    constructor ( title, author, timeLength )
    {
        super( title, author )
        this.timeLength = timeLength
    }
    log ()
    {
        console.log( `${ this.title }: ${ this.timeLength }` )
    }
}

const audiobook = new AudioBook( 'Lord of the Rings', 'Tolkien', 21 * 60 )

// audiobook.log()
// audiobook.buy()
// console.log( audiobook )

class Ebook extends Book
{
    constructor ( title, author, size )
    {
        super( title, author )
        this.size = size
    }
    info ()
    {
        console.log( `${ this.title }: ${ this.author }. It size is: ${this.size}mb` ) //! OVERRIDE
    }
}
const ebook = new Ebook( 'Lord of the Rings', 'Tolkien', 1020 )
ebook.info()