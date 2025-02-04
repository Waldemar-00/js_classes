'use strict'
//! ASYNC __ AWAIT

function getCategories ( URL )
{
    fetch( URL ).then( response => response.json() ).then( result => console.log( result, 'FETCH' ) )
}

getCategories( `https://dummyjson.com/products/categories` )


async function getCategory ( URL )
{
    try {
        const response = await fetch( URL )
        if( !response.ok ) throw new Error( response.status )
        const result = await response.json()
        console.log( result[ 0 ].slug, 'ASYNC_AWAIT' )
        return result
    } catch (error) {
        console.log( error )
    }

}
const result = await getCategory( `https://dummyjson.com/products/categories` )

console.log( result, 'OUT of Function and Request' )

//! TASK
console.log('TASK ______________ TASK');


function getCoordinates ()
{
    return new Promise( ( resolve, reject ) =>
    {
        navigator.geolocation.getCurrentPosition(
        position =>
        {
            const { latitude, longitude } = position.coords
            resolve( { latitude, longitude } )
        },
        error =>
        {
            reject( error )
        },
        {
            enableHighAccuracy: true,
            timeout: 30_000,
            maximumAge: 0
        }
    )
    })
}
async function getGeolocation ()
{

    try
    {
        const { latitude, longitude } = await getCoordinates()
        console.log( latitude, longitude )

        const response = await fetch( `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${ latitude }&longitude=${ longitude }` )
        if ( !response.ok ) throw new Error( response.status )
        const result = await response.json()
        console.log( result )
        console.log( result.city )
    } catch (error) {
        console.log( error )
    }

}
getGeolocation()
