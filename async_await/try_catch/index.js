'use strict'

//! ASYNC and SYC code


async function getCategories ()
{
    try {
        const response = await fetch( `https://dummyjson.com/products/categories` )
        if(!response.ok) throw new Error()
        return await response.json()
    } catch (error) {
        console.error( error )
        throw error //! If you need to get up the Error
    }
}

( async () =>
{
    console.log('Start')
    console.log( await getCategories() )
    console.log('End')
})()