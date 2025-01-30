class Sword
{
    power = 10
    hit ()
    {
        return this.power
    }
}
class Enemy
{
    #health = 100
    getDamage ( power )
    {
        this.#health = this.#health - power
    }
}

class Ork extends Enemy
{
    #health = 100
    #count = 0
    getDamage ( power )
    {
        if ( this.#health <= 0 )
        {
            console.log( 'Ork is dead!' )
            this.#count = 0
            this.#health = 100
            return
        }
        if ( this.#count % 2 === 0 )
        {
            console.log('You hit the Ork!')
            this.#health = this.#health - power
            this.#count++
            console.log( `Ork health is: ${ this.#health }` )
        } else
        {
            console.log( 'You have missed!..' )
            this.#count++
        }
    }
}

const sword = new Sword()
const ork = new Ork()
console.log( ork )
ork.getDamage( sword.hit() )
ork.getDamage( sword.hit() )
ork.getDamage( sword.hit() )
ork.getDamage( sword.hit() )
ork.getDamage( sword.hit() )
ork.getDamage( sword.hit() )
ork.getDamage( sword.hit() )
ork.getDamage( sword.hit() )
ork.getDamage( sword.hit() )
ork.getDamage( sword.hit() )
ork.getDamage( sword.hit() )
ork.getDamage( sword.hit() )
