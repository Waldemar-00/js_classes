'use strict'

//!______________Promise

fetch(`https://dummyjson.com/products`)
    .then( ( response ) => response.json() )
    .finally( () => console.log( 'Fetch has started!' ) )
    .then( products =>
    {
        console.log( products )
        return fetch( `https://dummyjson.com/products/${ products.products[0].id }` )
    } ).then( response => response.json() ).then( product => console.log( product ) )
    .catch( error =>
        {
            console.log( error )
        } )
    .finally(() => console.log('Finally - in any case!'))


// ! TASK__________________TASK

let categoriesOfproducts
fetch( `https://dummyjson.com/products/categories` )
    .then( response => response.json() )
    .finally( () => console.log( 'START FETCH' ) )
    .then( categories => categoriesOfproducts = categories )
    .finally( () => console.log( 'END of FETCH' ) )

console.log( categoriesOfproducts )

async function categoriesRequest ()
{
    const response = await fetch( `https://dummyjson.com/products/categories` )
    const categories = await response.json()
    categories.forEach( category => console.log( category.slug ) )
    const select = document.querySelector( '#categories' )

    categories.forEach( ( category, index, array ) =>
    {
        console.log( array.length )
        const option = document.createElement( 'option' )
        option.textContent = `${ index + 1 }. ${ category.slug[0].toUpperCase() + category.slug.slice( 1 )}`
        select.append( option )
    } )

}
categoriesRequest()

//! VARIANT 2

fetch( `https://dummyjson.com/products/categories` )
    .finally(() => console.log('2 VARIANT HAS STARTED'))
    .then( response => response.json() )
    .then( categories =>
    {
       const select = document.querySelector( '#categories2' )

        categories.forEach( ( category, index, array ) =>
            {
                console.log( array.length )
                const option = document.createElement( 'option' )
                option.textContent = `${ index + 1 }. ${ category.slug[0].toUpperCase() + category.slug.slice( 1 )}`
                select.append( option )
            } )
    } )
    .catch( error => console.log( error ) )
    .finally(() => console.log('2 VARIANT HAS ENDED'))


//! VARIANT 3

function createCategory (data)
{
    const divForSelect = document.querySelector( '.categories' )
    divForSelect.innerHTML =
         `<select>
            ${
                data.map( ( { slug }, index ) =>
                `<option value=${ slug }>${ index + 1 }. ${ slug[ 0 ].toUpperCase() + slug.slice( 1 ) }</option>` )
            }
        </select>`
}
function handleError ( response )
{
   if ( !response.ok ) throw new Error( `Request path has an error, which is ${ response.status }` )
}
fetch( `https://dummyjson.com/products/categoriess` )
    .finally(() => console.log('3 SPINNER'))
    .then( response =>
    {
        handleError( response )
        return response.json()
    } )
    .then( categories => createCategory( categories ))
    .catch( error => document.querySelector( '.categories' ).innerText = error.message )
    .finally(() => console.log('3 MESSAGE FOR USER'))