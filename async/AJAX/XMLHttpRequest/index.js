'use strict'
function require (id)
{
    const request = new XMLHttpRequest()
    request.open( 'GET', `https://dummyjson.com/products/${ id ? id: '' }`, {
        "content-type": "application/json"
    } )
    request.send()

    request.addEventListener( 'load', function ()
    {
        let acc = 0
        const data = JSON.parse( this.responseText )
        if ( Array.isArray( data?.products ) )
        {
            data.products.forEach( prod =>
                {
                    acc += prod.price
                } )
            console.log( `Total price: ${ acc }` )
        } else
        {
            console.log( data.price )
        }

    } )
}

require( '' )
require( 1 )
require( 3 )
require()
