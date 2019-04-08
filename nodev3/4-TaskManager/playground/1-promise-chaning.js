require('../src/db/mongoose')
const User = require('../src/models/users')

// 5c9903b878beb235d1b79e3e

// User.findByIdAndUpdate('5c9912aa0a9bc9524127ab69', { age: 30}).then((user) => {
//     console.log(user)

//     return User.countDocuments({age: 30})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('5c9903b878beb235d1b79e3e', 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})