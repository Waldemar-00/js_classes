class Book
{
    constructor ( title, author )
    {
        this.title = title
        this.author = author
    }
    buy() { console.log('BUY') }
}

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

audiobook.log()
audiobook.buy()
console.log( audiobook )
