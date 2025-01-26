//! set and get in OBJECT

const store = {

    supplies: [],
    addSupplies (item)
    {
        this.supplies.push( item )
    },
    get accessSupplies ()
    {
        return this.supplies
    },
    set accessSupplies ( sup )
    {
        this.supplies.push( sup )
    }
}


console.log( store.accessSupplies )
store.accessSupplies = 'Banana'
console.log( store.accessSupplies )
store.addSupplies( 'Apple' )
console.log( store.accessSupplies )

console.log('CLASS _____________________ ')

class Store
{
    #supplies = []
    addSupplies (item)
    {
        this.#supplies.push( item )
    }
    get accessSupplies ()
    {
        return this.#supplies
    }
    set accessSupplies ( sup )
    {
        if ( Array.isArray( sup ) )
        {
            this.#supplies.push( ...sup )
        } else if ( typeof sup === 'string' )
        {
            this.#supplies.push( sup )
        } else {
            console.log('Supplies can be string or array, please enter correct')
        }

    }
}

const classStore = new Store()
console.log( classStore.accessSupplies )
classStore.accessSupplies = 'Banana'
console.log( classStore.accessSupplies )
classStore.addSupplies( 'Apple' )
classStore.accessSupplies =['Eggs', 'Bread']
console.log( classStore.accessSupplies )
classStore.accessSupplies = { kiwi: 12 }