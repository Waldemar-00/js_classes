console.log( Number.MAX_SAFE_INTEGER )
console.log( new Number() ) //* 0

class Test
{
    static variable = 'STATIC VARIABLE'
    static hello () { console.log( "Hello" ) }
    greeting () { console.log( "Hello" ) }

    static {
        const b = 17
        this.variable = b
        console.log( 'Static block scope has changed static variable' )
        //! That scope works without any calls
    }
}

Test.hello()
// new Test().greeting()
console.log( Test )
console.log( Test.variable )

const TestFn = function () { }
TestFn.hello = function () { console.log( "Hello" ) }
console.log( TestFn )
TestFn.hello()