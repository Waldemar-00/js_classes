'use strict'

//! FETCH POST and other

async function request ( url, options )
{
    const response = await fetch( url, options )
    const result = await response.json()
    return result
}
const authForDummyJSON = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify( {
        username: "emilys",
        password: "emilyspass",
    } )
}
console.log( await request( `https://dummyjson.com/auth/login`, authForDummyJSON  ) )
