let square = (x) => x * x

console.log(square(9))

let user = {
    name: 'Arthur',
    sayHi: () => {
        console.log(`Hi.`)
    },
    sayHiAlt () {
        console.log(`Hi. I'm ${this.name}`)
    }
}

user.sayHi()
user.sayHiAlt()