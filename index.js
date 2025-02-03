"use strict"

function myFetch ( method, url, boolean )
{
    return new Promise( function ( resolve, reject )
    {
        const request = new XMLHttpRequest()
        request.open( method, url, boolean )
        request.send()
        request.addEventListener( 'load', function ()
        {
            resolve( JSON.parse( request.responseText ) ) //! THIS or request
        } )
        request.addEventListener( 'error', function ()
        {
            reject( new Error( this.status ) )
        } )
        request.addEventListener( 'timeout', function ()
        {
            reject( new Error( 'Timeout' ) )
        })
    })
}

myFetch('GET', `https://dummyjson.com/products/categories`, true)
    .then( res => console.log( res[ 0 ].slug ) )
    .catch( error => console.log( error ) )
