// You can use the word else, to run another code block when the if statment is not valid
// You can use the 'else if' statment when there are more than 2 possibilities
let isAccountLocked = false

if(isAccountLocked){
    console.log('Account is locked')
}else{
    console.log('Welcome!')
}

// else if
// The 'if' and 'else if' can be used without an 'else' statment 
let userRole = 'admin'

if (isAccountLocked) {
    console.log('Account is locked')
} else if(userRole === 'admin') {
    console.log('Welcome admin!')
} else {
    console.log('Welcome')
}

// Challenge area

let temp = 45

// Its freezing outside - 31
// Its hot outside -110
// Go for it, it is pretty nice - 45

if(temp <= 32){
    console.log("It's freezing outside")
}else if(temp >= 110){
    console.log("It's too hot outside")
} else {
    console.log('Go for it. It is pretty nice')
}
