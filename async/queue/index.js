//! Mikrotask Queue

console.log( 'START' )

setTimeout( () => console.log( 'TIMEOUT' ), 0 ) //! MacroTask

fetch( `https://dummyjson.com/products/categories` ) //! MacroTask
    .then( response => response.json() )
    .then( categories => console.log( categories[ 0 ].slug ) )
//! Events in DOM are the MacroTasks

Promise.resolve( "PROMISE" ).then( mess =>
{
    for ( let i = 0; i < 1000_000_000;  i++){}
    console.log( mess )
} ) //! MicroTask
//! MutationObserver is also Microtask

console.log( 'END' )
