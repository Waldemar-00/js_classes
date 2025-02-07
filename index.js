'use strict'
async function getFunny ( url )
{
    const response = await fetch( url )
    const funnies = await response.json()
    return funnies
}

async function getAllFunnies ( url, amount )
{
    const amountOfFunnies = []
    for ( let i = 0; i < amount; i++ )
    {
        amountOfFunnies.push( getFunny( url ) )
    }
    const funnies = await Promise.all( amountOfFunnies )
    return funnies
}

async function funniesToPage ( url, amount )
{
    const funnies = await getAllFunnies( url, amount)
    const section = document.querySelector( '.funnyCards' )

    if ( funnies && section )
    {
        funnies.forEach( f  =>
        {
            if( document.querySelectorAll('.card').length === 3 ) document.querySelector('.card').remove()
            const div = document.createElement( 'div' )
            div.classList.add( 'card' )

            const h2 = document.createElement( 'h2' )
            const p = document.createElement( 'p' )
            const p2 = document.createElement('p')
            h2.innerText = f.type
            p.innerText = f.setup
            p2.innerText = f.punchline
            div.append( h2 )
            div.append( p )
            div.append( p2 )
            section.append( div )
        })
    }
}

funniesToPage( 'https://official-joke-api.appspot.com/random_joke', 3 )
const btn = document.querySelector( '.btn_jokes' )
btn.addEventListener( 'click', () =>
{
    funniesToPage( 'https://official-joke-api.appspot.com/random_joke', 3 )
} )