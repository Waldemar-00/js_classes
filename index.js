class Car
{
    static #password = "password"
    static #vin = 'MC179733'
    name = 'Reno'
    speed = 320
    static #changeVin ( vin ) { return Car.#vin = vin }
    static validate ( vin, password )
    {
        if ( Car.#password === password )
        {
            Car.#changeVin( vin )
            console.log('Success, vin has changed!')
        }
    }
}

const renoCar = new Car()
renoCar.name
renoCar.speed
//! renoCar.vin  NO vin
// Car.validate( 'NK998822', "password" )

//! Task

class User
{
    static #login
    static #password
    static #initPromise = null

    static {
        User.#init()
    }
    static async #init ()
    {
        if ( User.#initPromise ) return User.#initPromise
        User.#initPromise = ( async () =>
        {
            console.log( 'INIT - only one time due to checking above in code' ) //! One Time
            const loggin = await fetch( 'https://jsonplaceholder.typicode.com/posts/2' ).then( response => response.json() ).then( result => result.title )
            User.#login = [ ...loggin ].join( '' ).replace( /\s+/g, '' ).trim().normalize( 'NFC' )

            const pass = await fetch( 'https://jsonplaceholder.typicode.com/posts/1' ).then( response => response.json() ).then( result =>
                result.title )
            User.#password = [ ...pass ].reverse().join( '' ).replace( /\s+/g, '' ).trim().normalize( 'NFC' )
        } )()
       return User.#initPromise
    }
    static async isPassword ( pass )
    {
        await User.#init()
        pass = [...pass].reverse().join( '' ).replace( /\s+/g, '' ).trim().normalize( 'NFC' )
        return User.#password === pass
    }

    static async changePassword ( oldPass, newPass )
    {
        await User.#init()
        oldPass = [...oldPass].reverse().join( '' ).replace( /\s+/g, '' ).trim().normalize( 'NFC' )
        newPass = [...newPass].reverse().join( '' ).replace( /\s+/g, '' ).trim().normalize( 'NFC' )
        if ( User.#password === oldPass )
        {
            User.#password = newPass
        }
    }
}
const user = new User()

User.isPassword( 'suntautfacererepellatprovidentoccaecatiexcepturioptioreprehenderit' ).then( result => console.log( result ) )
User.changePassword( 'suntautfacererepellatprovidentoccaecatiexcepturioptioreprehenderit', '12345678911' )
User.isPassword( '12345678911' ).then( result => console.log( result ) )