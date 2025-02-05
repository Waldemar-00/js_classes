'use strict'
//! Parallel Requests

async function getAllProducts ( url )
{
    const response = await fetch( url )
    const { products } = await response.json()
    return products
}

async function getById ( url, id )
{
    const response = await fetch( `${ url }/${ id }` )
    const productById = await response.json()
    return productById
}

async function getEveryProduct ( url )
{
    const products = await getAllProducts( url )
    //! Sequential queries
    //* for( let product of products )
    //* {
    //*     const productById = await getById ( url, product.id )
    //*     console.log( productById )
    //* }
    //! Parallel - all or no one
    //* const allProducts = await Promise.all( products.map( product =>
    //* {
    //*     return getById( url, product.id )
    //* } ) )
    //* console.log( allProducts )
    //! Parallel - all even if some of them return error
    // //! Every product will contains status -'fulfilled' and value or status 'rejected' and 'reason'
    //* const allProducts = await Promise.allSettled( products.map( product =>
    //* {
    //*     return getById( url, product.id )
    //* } ) )
    //* console.log( allProducts )
    //! Promise.race
    //! Only one promise, which will be resolved the first
    const allProducts = await Promise.race( products.map( product =>
    {
        return getById( url, product.id )
    } ) )
    console.log( allProducts )

}

getEveryProduct( `https://dummyjson.com/products` )