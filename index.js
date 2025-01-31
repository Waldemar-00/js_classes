'use strict'

//! Dependency Inversion Principle

class DB
{
    save ( items )
    {
        console.log( `Saved: ${ items }` )
    }
}

class MongoDB extends DB
{
    save ( items )
    {
        console.log( `Saved to MongoDB: ${ items }` )
    }
}
class TodoList
{
    items = [ 1, 2, 3 ]
    //! db = new DB() we have to rewrite each time when we want to change a DB
    constructor ( db )
    {
        this.db = db
    }
    saveToDB () { this.db.save( this.items ) }
}

new TodoList( new DB ).saveToDB()
new TodoList( new MongoDB ).saveToDB()