'use strict'

//! Promise
Promise.resolve( 'Static method' ).then( res => console.log( res ) )

const promise = new Promise( ( resolve, reject ) =>
{
    console.log( 'Sync Constructor' )

    if ( new Date() < new Date( '01-01-2027' ) )
    {
        reject( new Error( 'Your data will be in the future!;)' ) )
    }
    resolve('Success')
} )

promise
    .then( res => console.log( res ) )
        .catch( res => console.log( res ) )


function timeout ( seconds )
{

    return new Promise( ( resolve, reject ) =>
    {
        if ( !seconds ) reject( new Error( 'Enter a term in seconds' ) )
        setTimeout( () => resolve( `Resolve later ${ seconds }` ), seconds * 1000 )
    })
}

timeout( 1 )
    .then( res =>
    {
        console.log( res )
        return timeout( 2 )
    } )
    .then( res =>
    {
        console.log( res )
        return timeout()
    } )
    .then( res => console.log( res ) )
    .catch( res => console.log( res ) )